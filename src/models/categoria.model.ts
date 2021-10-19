import {Entity, model, property, hasMany} from '@loopback/repository';
import {Productos} from './productos.model';

@model()
export class Categoria extends Entity {
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

  constructor(data?: Partial<Categoria>) {
    super(data);
  }
}

export interface CategoriaRelations {
  // describe navigational properties here
}

export type CategoriaWithRelations = Categoria & CategoriaRelations;
