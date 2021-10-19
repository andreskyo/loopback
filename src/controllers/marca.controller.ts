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
import {Marca} from '../models';
import {MarcaRepository} from '../repositories';

export class MarcaController {
  constructor(
    @repository(MarcaRepository)
    public marcaRepository: MarcaRepository,
  ) { }

  @post('/marcas')
  @response(200, {
    description: 'Marca model instance',
    content: {'application/json': {schema: getModelSchemaRef(Marca)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Marca, {
            title: 'NewMarca',
            exclude: ['id'],
          }),
        },
      },
    })
    marca: Omit<Marca, 'id'>,
  ): Promise<Marca> {
    return this.marcaRepository.create(marca);
  }

  @get('/marcas/count')
  @response(200, {
    description: 'Marca model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Marca) where?: Where<Marca>,
  ): Promise<Count> {
    return this.marcaRepository.count(where);
  }

  @get('/marcas')
  @response(200, {
    description: 'Array of Marca model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Marca, {includeRelations: true}),
        },
      },
    },
  })
  async find(

  ): Promise<Marca[]> {
    return this.marcaRepository.find(this.marcaRepository.createRelationFilter());
  }



  @get('/marcas/{id}')
  @response(200, {
    description: 'Marca model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Marca, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Marca, {exclude: 'where'}) filter?: FilterExcludingWhere<Marca>
  ): Promise<Marca> {
    return this.marcaRepository.findById(id, filter);
  }


  @put('/marcas/{id}')
  @response(204, {
    description: 'Marca PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() marca: Marca,
  ): Promise<void> {
    await this.marcaRepository.replaceById(id, marca);
  }

  @del('/marcas/{id}')
  @response(204, {
    description: 'Marca DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.marcaRepository.deleteById(id);
  }
}
