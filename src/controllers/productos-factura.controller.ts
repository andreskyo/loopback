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
import {ProductosFactura} from '../models';
import {ProductosFacturaRepository} from '../repositories';

export class ProductosFacturaController {
  constructor(
    @repository(ProductosFacturaRepository)
    public productosFacturaRepository: ProductosFacturaRepository,
  ) { }

  @post('/productos-facturas')
  @response(200, {
    description: 'ProductosFactura model instance',
    content: {'application/json': {schema: getModelSchemaRef(ProductosFactura)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ProductosFactura, {
            title: 'NewProductosFactura',
            exclude: ['id'],
          }),
        },
      },
    })
    productosFactura: Omit<ProductosFactura, 'id'>,
  ): Promise<ProductosFactura> {
    return this.productosFacturaRepository.create(productosFactura);
  }

  @get('/productos-facturas/count')
  @response(200, {
    description: 'ProductosFactura model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(ProductosFactura) where?: Where<ProductosFactura>,
  ): Promise<Count> {
    return this.productosFacturaRepository.count(where);
  }

  @get('/productos-facturas')
  @response(200, {
    description: 'Array of ProductosFactura model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(ProductosFactura, {includeRelations: true}),
        },
      },
    },
  })
  async find(

  ): Promise<ProductosFactura[]> {
    return this.productosFacturaRepository.find(this.productosFacturaRepository.createRelationFilter());

  }



  @get('/productos-facturas/{id}')
  @response(200, {
    description: 'ProductosFactura model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(ProductosFactura, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(ProductosFactura, {exclude: 'where'}) filter?: FilterExcludingWhere<ProductosFactura>
  ): Promise<ProductosFactura> {
    return this.productosFacturaRepository.findById(id, filter);
  }



  @put('/productos-facturas/{id}')
  @response(204, {
    description: 'ProductosFactura PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() productosFactura: ProductosFactura,
  ): Promise<void> {
    await this.productosFacturaRepository.replaceById(id, productosFactura);
  }

  @del('/productos-facturas/{id}')
  @response(204, {
    description: 'ProductosFactura DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.productosFacturaRepository.deleteById(id);
  }
}
