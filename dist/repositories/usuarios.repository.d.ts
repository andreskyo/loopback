import { Getter } from '@loopback/core';
import { DefaultCrudRepository, Filter, HasManyRepositoryFactory } from '@loopback/repository';
import { EcommmerceDataSource } from '../datasources';
import { Rol, Usuarios, UsuariosRelations } from '../models';
import { RolRepository } from './rol.repository';
export declare class UsuariosRepository extends DefaultCrudRepository<Usuarios, typeof Usuarios.prototype.id, UsuariosRelations> {
    protected rolRepositoryGetter: Getter<RolRepository>;
    readonly rols: HasManyRepositoryFactory<Rol, typeof Usuarios.prototype.id>;
    constructor(dataSource: EcommmerceDataSource, rolRepositoryGetter: Getter<RolRepository>);
    createRelationFilter(): Filter<Usuarios>;
}
