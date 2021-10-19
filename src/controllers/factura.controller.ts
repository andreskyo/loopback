import {
  Count,
  CountSchema, FilterExcludingWhere,
  repository,
  Where
} from '@loopback/repository';
import {
  del, get,
  getModelSchemaRef, param, post, put, requestBody,
  response
} from '@loopback/rest';
import {Factura} from '../models';
import {FacturaRepository} from '../repositories';

export class FacturaController {
  constructor(
    @repository(FacturaRepository)
    public facturaRepository: FacturaRepository,
  ) { }

  @post('/facturas')
  @response(200, {
    description: 'Factura model instance',
    content: {'application/json': {schema: getModelSchemaRef(Factura)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Factura, {
            title: 'NewFactura',
            exclude: ['id'],
          }),
        },
      },
    })
    factura: Omit<Factura, 'id'>,
  ): Promise<Factura> {
    return this.facturaRepository.create(factura);
  }

  @get('/facturas/count')
  @response(200, {
    description: 'Factura model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Factura) where?: Where<Factura>,
  ): Promise<Count> {
    return this.facturaRepository.count(where);
  }

  @get('/facturas')
  @response(200, {
    description: 'Array of Factura model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Factura, {includeRelations: true}),
        },
      },
    },
  })
  async find(

  ): Promise<Factura[]> {
    return this.facturaRepository.find(this.facturaRepository.createRelationFilter());

  }



  @get('/facturas/{id}')
  @response(200, {
    description: 'Factura model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Factura, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Factura, {exclude: 'where'}) filter?: FilterExcludingWhere<Factura>
  ): Promise<Factura> {
    return this.facturaRepository.findById(id, filter);
  }



  @put('/facturas/{id}')
  @response(204, {
    description: 'Factura PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() factura: Factura,
  ): Promise<void> {
    await this.facturaRepository.replaceById(id, factura);
  }

  @del('/facturas/{id}')
  @response(204, {
    description: 'Factura DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.facturaRepository.deleteById(id);
  }
}
