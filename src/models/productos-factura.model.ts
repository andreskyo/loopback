import {Entity, model, property, hasMany} from '@loopback/repository';
import {Factura} from './factura.model';

@model()
export class ProductosFactura extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'number',
    default: 0,
  })
  cantidad?: number;

  @property({
    type: 'number',
    default: 0,
  })
  precioUnitario?: number;

  @hasMany(() => Factura, {keyTo: 'idProductoFactura'})
  facturas: Factura[];

  constructor(data?: Partial<ProductosFactura>) {
    super(data);
  }
}

export interface ProductosFacturaRelations {
  // describe navigational properties here
}

export type ProductosFacturaWithRelations = ProductosFactura & ProductosFacturaRelations;
