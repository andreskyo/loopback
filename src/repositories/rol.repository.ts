import {Getter, inject} from '@loopback/core';
import {BelongsToAccessor, DefaultCrudRepository, Filter, repository} from '@loopback/repository';
import {EcommmerceDataSource} from '../datasources';
import {Rol, RolRelations, Usuarios} from '../models';
import {UsuariosRepository} from './usuarios.repository';

export class RolRepository extends DefaultCrudRepository<
  Rol,
  typeof Rol.prototype.id,
  RolRelations
> {

  public readonly usuario: BelongsToAccessor<Usuarios, typeof Rol.prototype.id>;

  constructor(
    @inject('datasources.ecommmerce') dataSource: EcommmerceDataSource, @repository.getter('UsuariosRepository') protected usuariosRepositoryGetter: Getter<UsuariosRepository>,
  ) {
    super(Rol, dataSource);
    this.usuario = this.createBelongsToAccessorFor('usuario', usuariosRepositoryGetter,);
    this.registerInclusionResolver('usuario', this.usuario.inclusionResolver);
  }
  createRelationFilter(): Filter<Rol> {
    return {
      include: [
        {
          relation: 'usuario',
          scope: {
            fields: {
              id: true,
              nombre: true,
              usuario: true,
              clave: true,
              estado: true,
              idUsuarios: true
            },
          },
        },
      ],
    };
  }
}
