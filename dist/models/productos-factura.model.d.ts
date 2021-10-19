import { Entity } from '@loopback/repository';
import { Factura } from './factura.model';
export declare class ProductosFactura extends Entity {
    id?: number;
    cantidad?: number;
    precioUnitario?: number;
    facturas: Factura[];
    constructor(data?: Partial<ProductosFactura>);
}
export interface ProductosFacturaRelations {
}
export declare type ProductosFacturaWithRelations = ProductosFactura & ProductosFacturaRelations;
