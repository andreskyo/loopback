import {Getter, inject} from '@loopback/core';
import {BelongsToAccessor, DefaultCrudRepository, Filter, HasManyRepositoryFactory, repository} from '@loopback/repository';
import {EcommmerceDataSource} from '../datasources';
import {Categoria, Imagenes, Marca, Productos, ProductosFactura, ProductosRelations} from '../models';
import {CategoriaRepository} from './categoria.repository';
import {ImagenesRepository} from './imagenes.repository';
import {MarcaRepository} from './marca.repository';
import {ProductosFacturaRepository} from './productos-factura.repository';

export class ProductosRepository extends DefaultCrudRepository<
  Productos,
  typeof Productos.prototype.id,
  ProductosRelations
> {

  public readonly imagenes: HasManyRepositoryFactory<Imagenes, typeof Productos.prototype.id>;

  public readonly marca: BelongsToAccessor<Marca, typeof Productos.prototype.id>;

  public readonly categoria: BelongsToAccessor<Categoria, typeof Productos.prototype.id>;

  public readonly productosFactura: BelongsToAccessor<ProductosFactura, typeof Productos.prototype.id>;

  constructor(
    @inject('datasources.ecommmerce') dataSource: EcommmerceDataSource, @repository.getter('ImagenesRepository') protected imagenesRepositoryGetter: Getter<ImagenesRepository>, @repository.getter('MarcaRepository') protected marcaRepositoryGetter: Getter<MarcaRepository>, @repository.getter('CategoriaRepository') protected categoriaRepositoryGetter: Getter<CategoriaRepository>, @repository.getter('ProductosFacturaRepository') protected productosFacturaRepositoryGetter: Getter<ProductosFacturaRepository>,
  ) {
    super(Productos, dataSource);
    this.productosFactura = this.createBelongsToAccessorFor('productosFactura', productosFacturaRepositoryGetter,);
    this.registerInclusionResolver('productosFactura', this.productosFactura.inclusionResolver);

    this.categoria = this.createBelongsToAccessorFor('categoria', categoriaRepositoryGetter,);
    this.registerInclusionResolver('categoria', this.categoria.inclusionResolver);
    this.marca = this.createBelongsToAccessorFor('marca', marcaRepositoryGetter,);
    this.registerInclusionResolver('marca', this.marca.inclusionResolver);
    this.imagenes = this.createHasManyRepositoryFactoryFor('imagenes', imagenesRepositoryGetter,);
    this.registerInclusionResolver('imagenes', this.imagenes.inclusionResolver);
  }
  createRelationFilter(): Filter<Productos> {
    return {
      include: [
        {
          relation: 'imagenes',
          scope: {
            fields: {
              id: true,
              nombre: true,
              idProductos: true
            },
          },
        },
        {
          relation: 'marca',
          scope: {
            fields: {
              id: true,
              nombre: true,
              idMarca: true
            },
          },
        },
        {
          relation: 'categoria',
          scope: {
            fields: {
              id: true,
              nombre: true,
              idCategoria: true
            },
          },
        },
        {
          relation: 'productosFactura',
          scope: {
            fields: {
              id: true,
              cantidad: true,
              precioUnitario: true,
              idProductoFactura: true
            },
          },
        },


      ],
    };

  }

}
