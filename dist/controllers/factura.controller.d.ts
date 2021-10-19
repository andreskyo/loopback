import { Count, FilterExcludingWhere, Where } from '@loopback/repository';
import { Factura } from '../models';
import { FacturaRepository } from '../repositories';
export declare class FacturaController {
    facturaRepository: FacturaRepository;
    constructor(facturaRepository: FacturaRepository);
    create(factura: Omit<Factura, 'id'>): Promise<Factura>;
    count(where?: Where<Factura>): Promise<Count>;
    find(): Promise<Factura[]>;
    findById(id: number, filter?: FilterExcludingWhere<Factura>): Promise<Factura>;
    replaceById(id: number, factura: Factura): Promise<void>;
    deleteById(id: number): Promise<void>;
}
