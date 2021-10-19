import { Count, FilterExcludingWhere, Where } from '@loopback/repository';
import { Productos } from '../models';
import { ProductosRepository } from '../repositories';
export declare class ProductosController {
    productosRepository: ProductosRepository;
    constructor(productosRepository: ProductosRepository);
    create(productos: Omit<Productos, 'id'>): Promise<Productos>;
    count(where?: Where<Productos>): Promise<Count>;
    find(): Promise<Productos[]>;
    findById(id: number, filter?: FilterExcludingWhere<Productos>): Promise<Productos>;
    replaceById(id: number, productos: Productos): Promise<void>;
    deleteById(id: number): Promise<void>;
}
