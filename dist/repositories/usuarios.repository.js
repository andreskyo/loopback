"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuariosRepository = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const datasources_1 = require("../datasources");
const models_1 = require("../models");
let UsuariosRepository = class UsuariosRepository extends repository_1.DefaultCrudRepository {
    constructor(dataSource, rolRepositoryGetter) {
        super(models_1.Usuarios, dataSource);
        this.rolRepositoryGetter = rolRepositoryGetter;
        this.rols = this.createHasManyRepositoryFactoryFor('rols', rolRepositoryGetter);
        this.registerInclusionResolver('rols', this.rols.inclusionResolver);
    }
    createRelationFilter() {
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
};
UsuariosRepository = tslib_1.__decorate([
    tslib_1.__param(0, core_1.inject('datasources.ecommmerce')),
    tslib_1.__param(1, repository_1.repository.getter('RolRepository')),
    tslib_1.__metadata("design:paramtypes", [datasources_1.EcommmerceDataSource, Function])
], UsuariosRepository);
exports.UsuariosRepository = UsuariosRepository;
//# sourceMappingURL=usuarios.repository.js.map