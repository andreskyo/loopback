import { Count, FilterExcludingWhere, Where } from '@loopback/repository';
import { Categoria } from '../models';
import { CategoriaRepository } from '../repositories';
export declare class CategoriaController {
    categoriaRepository: CategoriaRepository;
    constructor(categoriaRepository: CategoriaRepository);
    create(categoria: Omit<Categoria, 'id'>): Promise<Categoria>;
    count(where?: Where<Categoria>): Promise<Count>;
    find(): Promise<Categoria[]>;
    findById(id: number, filter?: FilterExcludingWhere<Categoria>): Promise<Categoria>;
    replaceById(id: number, categoria: Categoria): Promise<void>;
    deleteById(id: number): Promise<void>;
}
