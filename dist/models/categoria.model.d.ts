import { Entity } from '@loopback/repository';
import { Productos } from './productos.model';
export declare class Categoria extends Entity {
    id?: number;
    nombre: string;
    productos: Productos[];
    constructor(data?: Partial<Categoria>);
}
export interface CategoriaRelations {
}
export declare type CategoriaWithRelations = Categoria & CategoriaRelations;
