import { Getter } from '@loopback/core';
import { BelongsToAccessor, DefaultCrudRepository, Filter } from '@loopback/repository';
import { EcommmerceDataSource } from '../datasources';
import { Clientes, ClientesRelations, Factura, UsuarioCliente } from '../models';
import { FacturaRepository } from './factura.repository';
import { UsuarioClienteRepository } from './usuario-cliente.repository';
export declare class ClientesRepository extends DefaultCrudRepository<Clientes, typeof Clientes.prototype.id, ClientesRelations> {
    protected facturaRepositoryGetter: Getter<FacturaRepository>;
    protected usuarioClienteRepositoryGetter: Getter<UsuarioClienteRepository>;
    readonly factura: BelongsToAccessor<Factura, typeof Clientes.prototype.id>;
    readonly usuarioCliente: BelongsToAccessor<UsuarioCliente, typeof Clientes.prototype.id>;
    constructor(dataSource: EcommmerceDataSource, facturaRepositoryGetter: Getter<FacturaRepository>, usuarioClienteRepositoryGetter: Getter<UsuarioClienteRepository>);
    createRelationFilter(): Filter<Clientes>;
}
