import {Getter, inject} from '@loopback/core';
import {BelongsToAccessor, DefaultCrudRepository, Filter, HasManyRepositoryFactory, repository} from '@loopback/repository';
import {EcommmerceDataSource} from '../datasources';
import {Clientes, Factura, FacturaRelations, ProductosFactura} from '../models';
import {ClientesRepository} from './clientes.repository';
import {ProductosFacturaRepository} from './productos-factura.repository';

export class FacturaRepository extends DefaultCrudRepository<
  Factura,
  typeof Factura.prototype.id,
  FacturaRelations
> {

  public readonly productoFactura: BelongsToAccessor<ProductosFactura, typeof Factura.prototype.id>;

  public readonly clientes: HasManyRepositoryFactory<Clientes, typeof Factura.prototype.id>;

  constructor(
    @inject('datasources.ecommmerce') dataSource: EcommmerceDataSource, @repository.getter('ProductosFacturaRepository') protected productosFacturaRepositoryGetter: Getter<ProductosFacturaRepository>, @repository.getter('ClientesRepository') protected clientesRepositoryGetter: Getter<ClientesRepository>,
  ) {
    super(Factura, dataSource);
    this.clientes = this.createHasManyRepositoryFactoryFor('clientes', clientesRepositoryGetter,);
    this.registerInclusionResolver('clientes', this.clientes.inclusionResolver);
    this.productoFactura = this.createBelongsToAccessorFor('productoFactura', productosFacturaRepositoryGetter,);
    this.registerInclusionResolver('productoFactura', this.productoFactura.inclusionResolver);
  }
  createRelationFilter(): Filter<Factura> {
    return {
      include: [
        {
          relation: 'productoFactura',
          scope: {
            fields: {
              id: true,
              cantidad: true,
              precioUnitario: true,
              hora: true,
              idFactura: true


            },
          },
        },
        {
          relation: 'clientes',
          scope: {
            fields: {
              id: true,
              nombre: true,
              documento: true,
              direccion: true,
              correo: true,
              celular: true,
              estado: true,
              idClientes: true


            },
          },
        },
      ],
    };
  }
}
