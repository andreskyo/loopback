import { Count, FilterExcludingWhere, Where } from '@loopback/repository';
import { Rol } from '../models';
import { RolRepository } from '../repositories';
export declare class RolController {
    rolRepository: RolRepository;
    constructor(rolRepository: RolRepository);
    create(rol: Omit<Rol, 'id'>): Promise<Rol>;
    count(where?: Where<Rol>): Promise<Count>;
    find(): Promise<Rol[]>;
    findById(id: number, filter?: FilterExcludingWhere<Rol>): Promise<Rol>;
    replaceById(id: number, rol: Rol): Promise<void>;
    deleteById(id: number): Promise<void>;
}
