import { Count, FilterExcludingWhere, Where } from '@loopback/repository';
import { ProductosFactura } from '../models';
import { ProductosFacturaRepository } from '../repositories';
export declare class ProductosFacturaController {
    productosFacturaRepository: ProductosFacturaRepository;
    constructor(productosFacturaRepository: ProductosFacturaRepository);
    create(productosFactura: Omit<ProductosFactura, 'id'>): Promise<ProductosFactura>;
    count(where?: Where<ProductosFactura>): Promise<Count>;
    find(): Promise<ProductosFactura[]>;
    findById(id: number, filter?: FilterExcludingWhere<ProductosFactura>): Promise<ProductosFactura>;
    replaceById(id: number, productosFactura: ProductosFactura): Promise<void>;
    deleteById(id: number): Promise<void>;
}
