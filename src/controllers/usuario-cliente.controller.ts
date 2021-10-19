import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where
} from '@loopback/repository';
import {
  del, get,
  getModelSchemaRef, param, post, put, requestBody,
  response
} from '@loopback/rest';
import {UsuarioCliente} from '../models';
import {UsuarioClienteRepository} from '../repositories';

export class UsuarioClienteController {
  constructor(
    @repository(UsuarioClienteRepository)
    public usuarioClienteRepository: UsuarioClienteRepository,
  ) { }

  @post('/usuario-cliente')
  @response(200, {
    description: 'UsuarioCliente model instance',
    content: {'application/json': {schema: getModelSchemaRef(UsuarioCliente)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(UsuarioCliente, {
            title: 'NewUsuarioCliente',
            exclude: ['id'],
          }),
        },
      },
    })
    usuarioCliente: Omit<UsuarioCliente, 'id'>,
  ): Promise<UsuarioCliente> {
    return this.usuarioClienteRepository.create(usuarioCliente);
  }

  @get('/usuario-cliente/count')
  @response(200, {
    description: 'UsuarioCliente model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(UsuarioCliente) where?: Where<UsuarioCliente>,
  ): Promise<Count> {
    return this.usuarioClienteRepository.count(where);
  }

  @get('/usuario-cliente')
  @response(200, {
    description: 'Array of UsuarioCliente model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(UsuarioCliente, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(UsuarioCliente) filter?: Filter<UsuarioCliente>,
  ): Promise<UsuarioCliente[]> {
    return this.usuarioClienteRepository.find(filter);
  }



  @get('/usuario-cliente/{id}')
  @response(200, {
    description: 'UsuarioCliente model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(UsuarioCliente, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(UsuarioCliente, {exclude: 'where'}) filter?: FilterExcludingWhere<UsuarioCliente>
  ): Promise<UsuarioCliente> {
    return this.usuarioClienteRepository.findById(id, filter);
  }



  @put('/usuario-cliente/{id}')
  @response(204, {
    description: 'UsuarioCliente PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() usuarioCliente: UsuarioCliente,
  ): Promise<void> {
    await this.usuarioClienteRepository.replaceById(id, usuarioCliente);
  }

  @del('/usuario-cliente/{id}')
  @response(204, {
    description: 'UsuarioCliente DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.usuarioClienteRepository.deleteById(id);
  }
}
