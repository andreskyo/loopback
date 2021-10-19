import { Entity } from '@loopback/repository';
import { Rol } from './rol.model';
export declare class Usuarios extends Entity {
    id?: number;
    nombre: string;
    usuario: string;
    clave: string;
    estado: boolean;
    rols: Rol[];
    constructor(data?: Partial<Usuarios>);
}
export interface UsuariosRelations {
}
export declare type UsuariosWithRelations = Usuarios & UsuariosRelations;
