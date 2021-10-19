"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientesRepository = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const datasources_1 = require("../datasources");
const models_1 = require("../models");
let ClientesRepository = class ClientesRepository extends repository_1.DefaultCrudRepository {
    constructor(dataSource, facturaRepositoryGetter, usuarioClienteRepositoryGetter) {
        super(models_1.Clientes, dataSource);
        this.facturaRepositoryGetter = facturaRepositoryGetter;
        this.usuarioClienteRepositoryGetter = usuarioClienteRepositoryGetter;
        this.usuarioCliente = this.createBelongsToAccessorFor('usuarioCliente', usuarioClienteRepositoryGetter);
        this.registerInclusionResolver('usuarioCliente', this.usuarioCliente.inclusionResolver);
        this.factura = this.createBelongsToAccessorFor('factura', facturaRepositoryGetter);
        this.registerInclusionResolver('factura', this.factura.inclusionResolver);
    }
    createRelationFilter() {
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
};
ClientesRepository = tslib_1.__decorate([
    tslib_1.__param(0, core_1.inject('datasources.ecommmerce')),
    tslib_1.__param(1, repository_1.repository.getter('FacturaRepository')),
    tslib_1.__param(2, repository_1.repository.getter('UsuarioClienteRepository')),
    tslib_1.__metadata("design:paramtypes", [datasources_1.EcommmerceDataSource, Function, Function])
], ClientesRepository);
exports.ClientesRepository = ClientesRepository;
//# sourceMappingURL=clientes.repository.js.map