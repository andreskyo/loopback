import { Getter } from '@loopback/core';
import { BelongsToAccessor, DefaultCrudRepository, Filter, HasManyRepositoryFactory } from '@loopback/repository';
import { EcommmerceDataSource } from '../datasources';
import { Categoria, Imagenes, Marca, Productos, ProductosFactura, ProductosRelations } from '../models';
import { CategoriaRepository } from './categoria.repository';
import { ImagenesRepository } from './imagenes.repository';
import { MarcaRepository } from './marca.repository';
import { ProductosFacturaRepository } from './productos-factura.repository';
export declare class ProductosRepository extends DefaultCrudRepository<Productos, typeof Productos.prototype.id, ProductosRelations> {
    protected imagenesRepositoryGetter: Getter<ImagenesRepository>;
    protected marcaRepositoryGetter: Getter<MarcaRepository>;
    protected categoriaRepositoryGetter: Getter<CategoriaRepository>;
    protected productosFacturaRepositoryGetter: Getter<ProductosFacturaRepository>;
    readonly imagenes: HasManyRepositoryFactory<Imagenes, typeof Productos.prototype.id>;
    readonly marca: BelongsToAccessor<Marca, typeof Productos.prototype.id>;
    readonly categoria: BelongsToAccessor<Categoria, typeof Productos.prototype.id>;
    readonly productosFactura: BelongsToAccessor<ProductosFactura, typeof Productos.prototype.id>;
    constructor(dataSource: EcommmerceDataSource, imagenesRepositoryGetter: Getter<ImagenesRepository>, marcaRepositoryGetter: Getter<MarcaRepository>, categoriaRepositoryGetter: Getter<CategoriaRepository>, productosFacturaRepositoryGetter: Getter<ProductosFacturaRepository>);
    createRelationFilter(): Filter<Productos>;
}
