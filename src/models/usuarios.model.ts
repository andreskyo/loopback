import {Entity, model, property, hasMany} from '@loopback/repository';
import {Rol} from './rol.model';

@model()
export class Usuarios extends Entity {
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
    type: 'string',
    required: true,
  })
  usuario: string;

  @property({
    type: 'string',
    required: true,
  })
  clave: string;

  @property({
    type: 'boolean',
    required: true,
  })
  estado: boolean;

  @hasMany(() => Rol, {keyTo: 'idUsuarios'})
  rols: Rol[];

  constructor(data?: Partial<Usuarios>) {
    super(data);
  }
}

export interface UsuariosRelations {
  // describe navigational properties here
}

export type UsuariosWithRelations = Usuarios & UsuariosRelations;
