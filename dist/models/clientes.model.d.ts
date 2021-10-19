import { Entity } from '@loopback/repository';
export declare class Clientes extends Entity {
    id?: number;
    nombre: string;
    documento: number;
    direccion: string;
    correo: string;
    celular: number;
    estado: boolean;
    idFactura: number;
    idClientes?: number;
    idUsuarioCliente: number;
    constructor(data?: Partial<Clientes>);
}
export interface ClientesRelations {
}
export declare type ClientesWithRelations = Clientes & ClientesRelations;
