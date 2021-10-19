import { Count, FilterExcludingWhere, Where } from '@loopback/repository';
import { Marca } from '../models';
import { MarcaRepository } from '../repositories';
export declare class MarcaController {
    marcaRepository: MarcaRepository;
    constructor(marcaRepository: MarcaRepository);
    create(marca: Omit<Marca, 'id'>): Promise<Marca>;
    count(where?: Where<Marca>): Promise<Count>;
    find(): Promise<Marca[]>;
    findById(id: number, filter?: FilterExcludingWhere<Marca>): Promise<Marca>;
    replaceById(id: number, marca: Marca): Promise<void>;
    deleteById(id: number): Promise<void>;
}
