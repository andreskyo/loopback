import { Getter } from '@loopback/core';
import { BelongsToAccessor, DefaultCrudRepository, Filter } from '@loopback/repository';
import { EcommmerceDataSource } from '../datasources';
import { Rol, RolRelations, Usuarios } from '../models';
import { UsuariosRepository } from './usuarios.repository';
export declare class RolRepository extends DefaultCrudRepository<Rol, typeof Rol.prototype.id, RolRelations> {
    protected usuariosRepositoryGetter: Getter<UsuariosRepository>;
    readonly usuario: BelongsToAccessor<Usuarios, typeof Rol.prototype.id>;
    constructor(dataSource: EcommmerceDataSource, usuariosRepositoryGetter: Getter<UsuariosRepository>);
    createRelationFilter(): Filter<Rol>;
}
