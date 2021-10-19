"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductosFacturaRepository = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const datasources_1 = require("../datasources");
const models_1 = require("../models");
let ProductosFacturaRepository = class ProductosFacturaRepository extends repository_1.DefaultCrudRepository {
    constructor(dataSource, facturaRepositoryGetter) {
        super(models_1.ProductosFactura, dataSource);
        this.facturaRepositoryGetter = facturaRepositoryGetter;
        this.facturas = this.createHasManyRepositoryFactoryFor('facturas', facturaRepositoryGetter);
        this.registerInclusionResolver('facturas', this.facturas.inclusionResolver);
    }
    createRelationFilter() {
        return {
            include: [
                {
                    relation: 'facturas',
                    scope: {
                        fields: {
                            id: true,
                            consecutivo: true,
                            fecha: true,
                            hora: true,
                            idProductoFactura: true
                        },
                    },
                },
            ],
        };
    }
};
ProductosFacturaRepository = tslib_1.__decorate([
    tslib_1.__param(0, core_1.inject('datasources.ecommmerce')),
    tslib_1.__param(1, repository_1.repository.getter('FacturaRepository')),
    tslib_1.__metadata("design:paramtypes", [datasources_1.EcommmerceDataSource, Function])
], ProductosFacturaRepository);
exports.ProductosFacturaRepository = ProductosFacturaRepository;
//# sourceMappingURL=productos-factura.repository.js.map