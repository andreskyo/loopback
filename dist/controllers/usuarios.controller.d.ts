import { Count, FilterExcludingWhere, Where } from '@loopback/repository';
import { Usuarios } from '../models';
import { UsuariosRepository } from '../repositories';
export declare class UsuariosController {
    usuariosRepository: UsuariosRepository;
    constructor(usuariosRepository: UsuariosRepository);
    create(usuarios: Omit<Usuarios, 'id'>): Promise<Usuarios>;
    count(where?: Where<Usuarios>): Promise<Count>;
    find(): Promise<Usuarios[]>;
    findById(id: number, filter?: FilterExcludingWhere<Usuarios>): Promise<Usuarios>;
    replaceById(id: number, usuarios: Usuarios): Promise<void>;
    deleteById(id: number): Promise<void>;
}
