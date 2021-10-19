import { Entity } from '@loopback/repository';
export declare class Rol extends Entity {
    id?: number;
    nombre: string;
    idUsuarios: number;
    constructor(data?: Partial<Rol>);
}
export interface RolRelations {
}
export declare type RolWithRelations = Rol & RolRelations;
