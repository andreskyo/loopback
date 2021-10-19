import { Entity } from '@loopback/repository';
export declare class Imagenes extends Entity {
    id?: number;
    nombre: string;
    idProductos?: number;
    constructor(data?: Partial<Imagenes>);
}
export interface ImagenesRelations {
}
export declare type ImagenesWithRelations = Imagenes & ImagenesRelations;
