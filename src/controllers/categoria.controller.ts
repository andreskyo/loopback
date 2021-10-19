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
import {Categoria} from '../models';
import {CategoriaRepository} from '../repositories';

export class CategoriaController {
  constructor(
    @repository(CategoriaRepository)
    public categoriaRepository: CategoriaRepository,
  ) { }

  @post('/categorias')
  @response(200, {
    description: 'Categoria model instance',
    content: {'application/json': {schema: getModelSchemaRef(Categoria)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Categoria, {
            title: 'NewCategoria',
            exclude: ['id'],
          }),
        },
      },
    })
    categoria: Omit<Categoria, 'id'>,
  ): Promise<Categoria> {
    return this.categoriaRepository.create(categoria);
  }

  @get('/categorias/count')
  @response(200, {
    description: 'Categoria model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Categoria) where?: Where<Categoria>,
  ): Promise<Count> {
    return this.categoriaRepository.count(where);
  }

  @get('/categorias')
  @response(200, {
    description: 'Array of Categoria model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Categoria, {includeRelations: true}),
        },
      },
    },
  })
  async find(

  ): Promise<Categoria[]> {
    return this.categoriaRepository.find(this.categoriaRepository.createRelationFilter());
  }



  @get('/categorias/{id}')
  @response(200, {
    description: 'Categoria model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Categoria, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Categoria, {exclude: 'where'}) filter?: FilterExcludingWhere<Categoria>
  ): Promise<Categoria> {
    return this.categoriaRepository.findById(id, filter);
  }


  @put('/categorias/{id}')
  @response(204, {
    description: 'Categoria PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() categoria: Categoria,
  ): Promise<void> {
    await this.categoriaRepository.replaceById(id, categoria);
  }

  @del('/categorias/{id}')
  @response(204, {
    description: 'Categoria DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.categoriaRepository.deleteById(id);
  }
}
