import {Getter, inject} from '@loopback/core';
import {DefaultCrudRepository, Filter, HasManyRepositoryFactory, repository} from '@loopback/repository';
import {EcommmerceDataSource} from '../datasources';
import {Factura, ProductosFactura, ProductosFacturaRelations} from '../models';
import {FacturaRepository} from './factura.repository';

export class ProductosFacturaRepository extends DefaultCrudRepository<
  ProductosFactura,
  typeof ProductosFactura.prototype.id,
  ProductosFacturaRelations
> {

  public readonly facturas: HasManyRepositoryFactory<Factura, typeof ProductosFactura.prototype.id>;

  constructor(
    @inject('datasources.ecommmerce') dataSource: EcommmerceDataSource, @repository.getter('FacturaRepository') protected facturaRepositoryGetter: Getter<FacturaRepository>,
  ) {
    super(ProductosFactura, dataSource);
    this.facturas = this.createHasManyRepositoryFactoryFor('facturas', facturaRepositoryGetter,);
    this.registerInclusionResolver('facturas', this.facturas.inclusionResolver);

  }
  createRelationFilter(): Filter<ProductosFactura> {
    return {
      include: [
        {
          relation: 'facturas',
          scope: {
            fields: {
              id: true,
              consecutivo: true,
              fecha: true,
              hora: true,
              idProductoFactura: true

            },
          },
        },
      ],
    };
  }

}
