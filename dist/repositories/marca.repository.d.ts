import { Getter } from '@loopback/core';
import { DefaultCrudRepository, Filter, HasManyRepositoryFactory } from '@loopback/repository';
import { EcommmerceDataSource } from '../datasources';
import { Marca, MarcaRelations, Productos } from '../models';
import { ProductosRepository } from './productos.repository';
export declare class MarcaRepository extends DefaultCrudRepository<Marca, typeof Marca.prototype.id, MarcaRelations> {
    protected productosRepositoryGetter: Getter<ProductosRepository>;
    readonly productos: HasManyRepositoryFactory<Productos, typeof Marca.prototype.id>;
    constructor(dataSource: EcommmerceDataSource, productosRepositoryGetter: Getter<ProductosRepository>);
    createRelationFilter(): Filter<Marca>;
}
