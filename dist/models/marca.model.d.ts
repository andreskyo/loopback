import { Entity } from '@loopback/repository';
import { Productos } from './productos.model';
export declare class Marca extends Entity {
    id?: number;
    nombre: string;
    productos: Productos[];
    constructor(data?: Partial<Marca>);
}
export interface MarcaRelations {
}
export declare type MarcaWithRelations = Marca & MarcaRelations;
