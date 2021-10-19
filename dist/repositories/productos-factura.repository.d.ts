import { Getter } from '@loopback/core';
import { DefaultCrudRepository, Filter, HasManyRepositoryFactory } from '@loopback/repository';
import { EcommmerceDataSource } from '../datasources';
import { Factura, ProductosFactura, ProductosFacturaRelations } from '../models';
import { FacturaRepository } from './factura.repository';
export declare class ProductosFacturaRepository extends DefaultCrudRepository<ProductosFactura, typeof ProductosFactura.prototype.id, ProductosFacturaRelations> {
    protected facturaRepositoryGetter: Getter<FacturaRepository>;
    readonly facturas: HasManyRepositoryFactory<Factura, typeof ProductosFactura.prototype.id>;
    constructor(dataSource: EcommmerceDataSource, facturaRepositoryGetter: Getter<FacturaRepository>);
    createRelationFilter(): Filter<ProductosFactura>;
}
