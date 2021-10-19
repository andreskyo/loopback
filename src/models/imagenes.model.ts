import {Entity, model, property} from '@loopback/repository';

@model()
export class Imagenes extends Entity {
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
  })
  idProductos?: number;

  constructor(data?: Partial<Imagenes>) {
    super(data);
  }
}

export interface ImagenesRelations {
  // describe navigational properties here
}

export type ImagenesWithRelations = Imagenes & ImagenesRelations;
