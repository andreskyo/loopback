import {Entity, model, property, belongsTo, hasMany} from '@loopback/repository';
import {ProductosFactura} from './productos-factura.model';
import {Clientes} from './clientes.model';

@model()
export class Factura extends Entity {
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
  consecutivo: string;

  @property({
    type: 'date',
    required: true,
  })
  fecha: string;

  @property({
    type: 'date',
    required: true,
  })
  hora: string;

  @property({
    type: 'number',
  })
  idProductoFactura?: number;

  @belongsTo(() => ProductosFactura, {name: 'productoFactura'})
  idFactura: number;

  @hasMany(() => Clientes, {keyTo: 'idClientes'})
  clientes: Clientes[];

  constructor(data?: Partial<Factura>) {
    super(data);
  }
}

export interface FacturaRelations {
  // describe navigational properties here
}

export type FacturaWithRelations = Factura & FacturaRelations;
