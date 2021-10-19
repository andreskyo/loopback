import { Getter } from '@loopback/core';
import { DefaultCrudRepository, Filter, HasManyRepositoryFactory } from '@loopback/repository';
import { EcommmerceDataSource } from '../datasources';
import { Categoria, CategoriaRelations, Productos } from '../models';
import { ProductosRepository } from './productos.repository';
export declare class CategoriaRepository extends DefaultCrudRepository<Categoria, typeof Categoria.prototype.id, CategoriaRelations> {
    protected productosRepositoryGetter: Getter<ProductosRepository>;
    readonly productos: HasManyRepositoryFactory<Productos, typeof Categoria.prototype.id>;
    constructor(dataSource: EcommmerceDataSource, productosRepositoryGetter: Getter<ProductosRepository>);
    createRelationFilter(): Filter<Categoria>;
}
