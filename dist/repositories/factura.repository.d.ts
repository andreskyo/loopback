import { Getter } from '@loopback/core';
import { BelongsToAccessor, DefaultCrudRepository, Filter, HasManyRepositoryFactory } from '@loopback/repository';
import { EcommmerceDataSource } from '../datasources';
import { Clientes, Factura, FacturaRelations, ProductosFactura } from '../models';
import { ClientesRepository } from './clientes.repository';
import { ProductosFacturaRepository } from './productos-factura.repository';
export declare class FacturaRepository extends DefaultCrudRepository<Factura, typeof Factura.prototype.id, FacturaRelations> {
    protected productosFacturaRepositoryGetter: Getter<ProductosFacturaRepository>;
    protected clientesRepositoryGetter: Getter<ClientesRepository>;
    readonly productoFactura: BelongsToAccessor<ProductosFactura, typeof Factura.prototype.id>;
    readonly clientes: HasManyRepositoryFactory<Clientes, typeof Factura.prototype.id>;
    constructor(dataSource: EcommmerceDataSource, productosFacturaRepositoryGetter: Getter<ProductosFacturaRepository>, clientesRepositoryGetter: Getter<ClientesRepository>);
    createRelationFilter(): Filter<Factura>;
}
