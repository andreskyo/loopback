"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoriaRepository = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const datasources_1 = require("../datasources");
const models_1 = require("../models");
let CategoriaRepository = class CategoriaRepository extends repository_1.DefaultCrudRepository {
    constructor(dataSource, productosRepositoryGetter) {
        super(models_1.Categoria, dataSource);
        this.productosRepositoryGetter = productosRepositoryGetter;
        this.productos = this.createHasManyRepositoryFactoryFor('productos', productosRepositoryGetter);
        this.registerInclusionResolver('productos', this.productos.inclusionResolver);
    }
    createRelationFilter() {
        return {
            include: [
                {
                    relation: 'productos',
                    scope: {
                        fields: {
                            id: true,
                            nombre: true,
                            precio: true,
                            existencia: true,
                            calificacion: true,
                            descuento: true,
                            idProductos: true
                        },
                    },
                },
            ],
        };
    }
};
CategoriaRepository = tslib_1.__decorate([
    tslib_1.__param(0, core_1.inject('datasources.ecommmerce')),
    tslib_1.__param(1, repository_1.repository.getter('ProductosRepository')),
    tslib_1.__metadata("design:paramtypes", [datasources_1.EcommmerceDataSource, Function])
], CategoriaRepository);
exports.CategoriaRepository = CategoriaRepository;
//# sourceMappingURL=categoria.repository.js.map