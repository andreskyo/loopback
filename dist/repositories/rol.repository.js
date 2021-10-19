"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RolRepository = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const datasources_1 = require("../datasources");
const models_1 = require("../models");
let RolRepository = class RolRepository extends repository_1.DefaultCrudRepository {
    constructor(dataSource, usuariosRepositoryGetter) {
        super(models_1.Rol, dataSource);
        this.usuariosRepositoryGetter = usuariosRepositoryGetter;
        this.usuario = this.createBelongsToAccessorFor('usuario', usuariosRepositoryGetter);
        this.registerInclusionResolver('usuario', this.usuario.inclusionResolver);
    }
    createRelationFilter() {
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
};
RolRepository = tslib_1.__decorate([
    tslib_1.__param(0, core_1.inject('datasources.ecommmerce')),
    tslib_1.__param(1, repository_1.repository.getter('UsuariosRepository')),
    tslib_1.__metadata("design:paramtypes", [datasources_1.EcommmerceDataSource, Function])
], RolRepository);
exports.RolRepository = RolRepository;
//# sourceMappingURL=rol.repository.js.map