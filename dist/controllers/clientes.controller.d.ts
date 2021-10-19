import { Count, FilterExcludingWhere, Where } from '@loopback/repository';
import { Clientes } from '../models';
import { ClientesRepository } from '../repositories';
export declare class ClientesController {
    clientesRepository: ClientesRepository;
    constructor(clientesRepository: ClientesRepository);
    create(clientes: Omit<Clientes, 'id'>): Promise<Clientes>;
    count(where?: Where<Clientes>): Promise<Count>;
    find(): Promise<Clientes[]>;
    findById(id: number, filter?: FilterExcludingWhere<Clientes>): Promise<Clientes>;
    replaceById(id: number, clientes: Clientes): Promise<void>;
    deleteById(id: number): Promise<void>;
}
