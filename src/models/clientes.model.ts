import {Entity, model, property, belongsTo} from '@loopback/repository';
import {Factura} from './factura.model';
import {UsuarioCliente} from './usuario-cliente.model';

@model()
export class Clientes extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  nombre: string;

  @property({
    type: 'number',
    required: true,
  })
  documento: number;

  @property({
    type: 'string',
    required: true,
  })
  direccion: string;

  @property({
    type: 'string',
    required: true,
  })
  correo: string;

  @property({
    type: 'number',
    required: true,
  })
  celular: number;

  @property({
    type: 'boolean',
    required: true,
  })
  estado: boolean;

  @belongsTo(() => Factura, {name: 'factura'})
  idFactura: number;

  @property({
    type: 'number',
  })
  idClientes?: number;

  @belongsTo(() => UsuarioCliente, {name: 'usuarioCliente'})
  idUsuarioCliente: number;

  constructor(data?: Partial<Clientes>) {
    super(data);
  }
}

export interface ClientesRelations {
  // describe navigational properties here
}

export type ClientesWithRelations = Clientes & ClientesRelations;
