import { Entity } from '@loopback/repository';
import { Imagenes } from './imagenes.model';
export declare class Productos extends Entity {
    id?: number;
    nombre: string;
    precio: number;
    existencia: boolean;
    calificacion?: number;
    descuento?: number;
    imagenes: Imagenes[];
    idMarca: number;
    idProductos?: number;
    idCategoria: number;
    idProductoFactura: number;
    constructor(data?: Partial<Productos>);
}
export interface ProductosRelations {
}
export declare type ProductosWithRelations = Productos & ProductosRelations;
