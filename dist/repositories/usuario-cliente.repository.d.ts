import { DefaultCrudRepository } from '@loopback/repository';
import { EcommmerceDataSource } from '../datasources';
import { UsuarioCliente, UsuarioClienteRelations } from '../models';
export declare class UsuarioClienteRepository extends DefaultCrudRepository<UsuarioCliente, typeof UsuarioCliente.prototype.id, UsuarioClienteRelations> {
    constructor(dataSource: EcommmerceDataSource);
}
