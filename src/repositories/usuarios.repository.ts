import {Getter, inject} from '@loopback/core';
import {DefaultCrudRepository, Filter, HasManyRepositoryFactory, repository} from '@loopback/repository';
import {EcommmerceDataSource} from '../datasources';
import {Rol, Usuarios, UsuariosRelations} from '../models';
import {RolRepository} from './rol.repository';

export class UsuariosRepository extends DefaultCrudRepository<
  Usuarios,
  typeof Usuarios.prototype.id,
  UsuariosRelations
> {

  public readonly rols: HasManyRepositoryFactory<Rol, typeof Usuarios.prototype.id>;

  constructor(
    @inject('datasources.ecommmerce') dataSource: EcommmerceDataSource, @repository.getter('RolRepository') protected rolRepositoryGetter: Getter<RolRepository>,
  ) {
    super(Usuarios, dataSource);
    this.rols = this.createHasManyRepositoryFactoryFor('rols', rolRepositoryGetter,);
    this.registerInclusionResolver('rols', this.rols.inclusionResolver);
  }
  createRelationFilter(): Filter<Usuarios> {
    return {
      include: [
        {
          relation: 'rols',
          scope: {
            fields: {
              id: true,
              nombre: true,
              idUsuarios: true

            },
          },
        },
      ],
    };
  }
}

