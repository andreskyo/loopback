import {Getter, inject} from '@loopback/core';
import {DefaultCrudRepository, Filter, HasManyRepositoryFactory, repository} from '@loopback/repository';
import {EcommmerceDataSource} from '../datasources';
import {Marca, MarcaRelations, Productos} from '../models';
import {ProductosRepository} from './productos.repository';

export class MarcaRepository extends DefaultCrudRepository<
  Marca,
  typeof Marca.prototype.id,
  MarcaRelations
> {

  public readonly productos: HasManyRepositoryFactory<Productos, typeof Marca.prototype.id>;

  constructor(
    @inject('datasources.ecommmerce') dataSource: EcommmerceDataSource, @repository.getter('ProductosRepository') protected productosRepositoryGetter: Getter<ProductosRepository>,
  ) {
    super(Marca, dataSource);
    this.productos = this.createHasManyRepositoryFactoryFor('productos', productosRepositoryGetter,);
    this.registerInclusionResolver('productos', this.productos.inclusionResolver);
  }
  createRelationFilter(): Filter<Marca> {
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
