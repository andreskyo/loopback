import {belongsTo, Entity, hasMany, model, property} from '@loopback/repository';
import {Categoria} from './categoria.model';
import {Imagenes} from './imagenes.model';
import {Marca} from './marca.model';
import {ProductosFactura} from './productos-factura.model';

@model()
export class Productos extends Entity {
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
  precio: number;

  @property({
    type: 'boolean',
    required: true,
  })
  existencia: boolean;

  @property({
    type: 'number',
    default: 0,
  })
  calificacion?: number;

  @property({
    type: 'number',
    default: 0,
  })
  descuento?: number;

  @hasMany(() => Imagenes, {keyTo: 'idProductos'})
  imagenes: Imagenes[];

  @belongsTo(() => Marca, {name: 'marca'})
  idMarca: number;

  @property({
    type: 'number',
  })
  idProductos?: number;

  @belongsTo(() => Categoria, {name: 'categoria'})
  idCategoria: number;

  @belongsTo(() => ProductosFactura, {name: 'productosFactura'})
  idProductoFactura: number;

  constructor(data?: Partial<Productos>) {
    super(data);
  }
}

export interface ProductosRelations {
  // describe navigational properties here
}

export type ProductosWithRelations = Productos & ProductosRelations;
