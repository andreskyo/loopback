import { Entity } from '@loopback/repository';
import { Clientes } from './clientes.model';
export declare class Factura extends Entity {
    id?: number;
    consecutivo: string;
    fecha: string;
    hora: string;
    idProductoFactura?: number;
    idFactura: number;
    clientes: Clientes[];
    constructor(data?: Partial<Factura>);
}
export interface FacturaRelations {
}
export declare type FacturaWithRelations = Factura & FacturaRelations;
