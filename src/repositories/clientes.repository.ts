import {Getter, inject} from '@loopback/core';
import {BelongsToAccessor, DefaultCrudRepository, Filter, repository} from '@loopback/repository';
import {EcommmerceDataSource} from '../datasources';
import {Clientes, ClientesRelations, Factura, UsuarioCliente} from '../models';
import {FacturaRepository} from './factura.repository';
import {UsuarioClienteRepository} from './usuario-cliente.repository';

export class ClientesRepository extends DefaultCrudRepository<
  Clientes,
  typeof Clientes.prototype.id,
  ClientesRelations
> {

  public readonly factura: BelongsToAccessor<Factura, typeof Clientes.prototype.id>;

  public readonly usuarioCliente: BelongsToAccessor<UsuarioCliente, typeof Clientes.prototype.id>;

  constructor(
    @inject('datasources.ecommmerce') dataSource: EcommmerceDataSource, @repository.getter('FacturaRepository') protected facturaRepositoryGetter: Getter<FacturaRepository>, @repository.getter('UsuarioClienteRepository') protected usuarioClienteRepositoryGetter: Getter<UsuarioClienteRepository>,
  ) {
    super(Clientes, dataSource);
    this.usuarioCliente = this.createBelongsToAccessorFor('usuarioCliente', usuarioClienteRepositoryGetter,);
    this.registerInclusionResolver('usuarioCliente', this.usuarioCliente.inclusionResolver);
    this.factura = this.createBelongsToAccessorFor('factura', facturaRepositoryGetter,);
    this.registerInclusionResolver('factura', this.factura.inclusionResolver);
  }
  createRelationFilter(): Filter<Clientes> {
    return {
      include: [
        {
          relation: 'factura',
          scope: {
            fields: {
              id: true,
              consecutivo: true,
              fecha: true,
              hora: true,
              idFactura: true
            },
          },
        },
        {
          relation: 'usuarioCliente',
          scope: {
            fields: {
              id: true,
              usuario: true,
              clave: true,
              idUsuarioCliente: true

            },
          },
        },

      ],
    };

  }
}
