import {Entity, model, property, hasMany} from '@loopback/repository';
import {Productos} from './productos.model';

@model()
export class Marca extends Entity {
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

  @hasMany(() => Productos, {keyTo: 'idProductos'})
  productos: Productos[];

  constructor(data?: Partial<Marca>) {
    super(data);
  }
}

export interface MarcaRelations {
  // describe navigational properties here
}

export type MarcaWithRelations = Marca & MarcaRelations;
