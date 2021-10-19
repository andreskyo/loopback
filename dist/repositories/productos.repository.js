"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductosRepository = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const datasources_1 = require("../datasources");
const models_1 = require("../models");
let ProductosRepository = class ProductosRepository extends repository_1.DefaultCrudRepository {
    constructor(dataSource, imagenesRepositoryGetter, marcaRepositoryGetter, categoriaRepositoryGetter, productosFacturaRepositoryGetter) {
        super(models_1.Productos, dataSource);
        this.imagenesRepositoryGetter = imagenesRepositoryGetter;
        this.marcaRepositoryGetter = marcaRepositoryGetter;
        this.categoriaRepositoryGetter = categoriaRepositoryGetter;
        this.productosFacturaRepositoryGetter = productosFacturaRepositoryGetter;
        this.productosFactura = this.createBelongsToAccessorFor('productosFactura', productosFacturaRepositoryGetter);
        this.registerInclusionResolver('productosFactura', this.productosFactura.inclusionResolver);
        this.categoria = this.createBelongsToAccessorFor('categoria', categoriaRepositoryGetter);
        this.registerInclusionResolver('categoria', this.categoria.inclusionResolver);
        this.marca = this.createBelongsToAccessorFor('marca', marcaRepositoryGetter);
        this.registerInclusionResolver('marca', this.marca.inclusionResolver);
        this.imagenes = this.createHasManyRepositoryFactoryFor('imagenes', imagenesRepositoryGetter);
        this.registerInclusionResolver('imagenes', this.imagenes.inclusionResolver);
    }
    createRelationFilter() {
        return {
            include: [
                {
                    relation: 'imagenes',
                    scope: {
                        fields: {
                            id: true,
                            nombre: true,
                            idProductos: true
                        },
                    },
                },
                {
                    relation: 'marca',
                    scope: {
                        fields: {
                            id: true,
                            nombre: true,
                            idMarca: true
                        },
                    },
                },
                {
                    relation: 'categoria',
                    scope: {
                        fields: {
                            id: true,
                            nombre: true,
                            idCategoria: true
                        },
                    },
                },
                {
                    relation: 'productosFactura',
                    scope: {
                        fields: {
                            id: true,
                            cantidad: true,
                            precioUnitario: true,
                            idProductoFactura: true
                        },
                    },
                },
            ],
        };
    }
};
ProductosRepository = tslib_1.__decorate([
    tslib_1.__param(0, core_1.inject('datasources.ecommmerce')),
    tslib_1.__param(1, repository_1.repository.getter('ImagenesRepository')),
    tslib_1.__param(2, repository_1.repository.getter('MarcaRepository')),
    tslib_1.__param(3, repository_1.repository.getter('CategoriaRepository')),
    tslib_1.__param(4, repository_1.repository.getter('ProductosFacturaRepository')),
    tslib_1.__metadata("design:paramtypes", [datasources_1.EcommmerceDataSource, Function, Function, Function, Function])
], ProductosRepository);
exports.ProductosRepository = ProductosRepository;
//# sourceMappingURL=productos.repository.js.map