import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { UsuarioCliente } from '../models';
import { UsuarioClienteRepository } from '../repositories';
export declare class UsuarioClienteController {
    usuarioClienteRepository: UsuarioClienteRepository;
    constructor(usuarioClienteRepository: UsuarioClienteRepository);
    create(usuarioCliente: Omit<UsuarioCliente, 'id'>): Promise<UsuarioCliente>;
    count(where?: Where<UsuarioCliente>): Promise<Count>;
    find(filter?: Filter<UsuarioCliente>): Promise<UsuarioCliente[]>;
    findById(id: number, filter?: FilterExcludingWhere<UsuarioCliente>): Promise<UsuarioCliente>;
    replaceById(id: number, usuarioCliente: UsuarioCliente): Promise<void>;
    deleteById(id: number): Promise<void>;
}
