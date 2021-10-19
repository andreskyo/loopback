import {Getter, inject} from '@loopback/core';
import {DefaultCrudRepository, Filter, HasManyRepositoryFactory, repository} from '@loopback/repository';
import {EcommmerceDataSource} from '../datasources';
import {Categoria, CategoriaRelations, Productos} from '../models';
import {ProductosRepository} from './productos.repository';

export class CategoriaRepository extends DefaultCrudRepository<
  Categoria,
  typeof Categoria.prototype.id,
  CategoriaRelations
> {

  public readonly productos: HasManyRepositoryFactory<Productos, typeof Categoria.prototype.id>;

  constructor(
    @inject('datasources.ecommmerce') dataSource: EcommmerceDataSource, @repository.getter('ProductosRepository') protected productosRepositoryGetter: Getter<ProductosRepository>,
  ) {
    super(Categoria, dataSource);
    this.productos = this.createHasManyRepositoryFactoryFor('productos', productosRepositoryGetter,);
    this.registerInclusionResolver('productos', this.productos.inclusionResolver);
  }
  createRelationFilter(): Filter<Categoria> {
    return {
      include: [
        {
          relation: 'productos',
          scope: {
            fields: {
              id: true,
              nombre: true,
              precio: true,
              existencia: true,
              calificacion: true,
              descuento: true,
              idProductos: true
            },
          },
        },
      ],
    };
  }
}
