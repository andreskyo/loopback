import { Entity } from '@loopback/repository';
export declare class UsuarioCliente extends Entity {
    id?: number;
    clave: string;
    constructor(data?: Partial<UsuarioCliente>);
}
export interface UsuarioClienteRelations {
}
export declare type UsuarioClienteWithRelations = UsuarioCliente & UsuarioClienteRelations;
