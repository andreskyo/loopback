"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FacturaRepository = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const datasources_1 = require("../datasources");
const models_1 = require("../models");
let FacturaRepository = class FacturaRepository extends repository_1.DefaultCrudRepository {
    constructor(dataSource, productosFacturaRepositoryGetter, clientesRepositoryGetter) {
        super(models_1.Factura, dataSource);
        this.productosFacturaRepositoryGetter = productosFacturaRepositoryGetter;
        this.clientesRepositoryGetter = clientesRepositoryGetter;
        this.clientes = this.createHasManyRepositoryFactoryFor('clientes', clientesRepositoryGetter);
        this.registerInclusionResolver('clientes', this.clientes.inclusionResolver);
        this.productoFactura = this.createBelongsToAccessorFor('productoFactura', productosFacturaRepositoryGetter);
        this.registerInclusionResolver('productoFactura', this.productoFactura.inclusionResolver);
    }
    createRelationFilter() {
        return {
            include: [
                {
                    relation: 'productoFactura',
                    scope: {
                        fields: {
                            id: true,
                            cantidad: true,
                            precioUnitario: true,
                            hora: true,
                            idFactura: true
                        },
                    },
                },
                {
                    relation: 'clientes',
                    scope: {
                        fields: {
                            id: true,
                            nombre: true,
                            documento: true,
                            direccion: true,
                            correo: true,
                            celular: true,
                            estado: true,
                            idClientes: true
                        },
                    },
                },
            ],
        };
    }
};
FacturaRepository = tslib_1.__decorate([
    tslib_1.__param(0, core_1.inject('datasources.ecommmerce')),
    tslib_1.__param(1, repository_1.repository.getter('ProductosFacturaRepository')),
    tslib_1.__param(2, repository_1.repository.getter('ClientesRepository')),
    tslib_1.__metadata("design:paramtypes", [datasources_1.EcommmerceDataSource, Function, Function])
], FacturaRepository);
exports.FacturaRepository = FacturaRepository;
//# sourceMappingURL=factura.repository.js.map