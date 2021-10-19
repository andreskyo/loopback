"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductosFacturaController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let ProductosFacturaController = class ProductosFacturaController {
    constructor(productosFacturaRepository) {
        this.productosFacturaRepository = productosFacturaRepository;
    }
    async create(productosFactura) {
        return this.productosFacturaRepository.create(productosFactura);
    }
    async count(where) {
        return this.productosFacturaRepository.count(where);
    }
    async find() {
        return this.productosFacturaRepository.find(this.productosFacturaRepository.createRelationFilter());
    }
    async findById(id, filter) {
        return this.productosFacturaRepository.findById(id, filter);
    }
    async replaceById(id, productosFactura) {
        await this.productosFacturaRepository.replaceById(id, productosFactura);
    }
    async deleteById(id) {
        await this.productosFacturaRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    rest_1.post('/productos-facturas'),
    rest_1.response(200, {
        description: 'ProductosFactura model instance',
        content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.ProductosFactura) } },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.ProductosFactura, {
                    title: 'NewProductosFactura',
                    exclude: ['id'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ProductosFacturaController.prototype, "create", null);
tslib_1.__decorate([
    rest_1.get('/productos-facturas/count'),
    rest_1.response(200, {
        description: 'ProductosFactura model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.ProductosFactura)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ProductosFacturaController.prototype, "count", null);
tslib_1.__decorate([
    rest_1.get('/productos-facturas'),
    rest_1.response(200, {
        description: 'Array of ProductosFactura model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: rest_1.getModelSchemaRef(models_1.ProductosFactura, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], ProductosFacturaController.prototype, "find", null);
tslib_1.__decorate([
    rest_1.get('/productos-facturas/{id}'),
    rest_1.response(200, {
        description: 'ProductosFactura model instance',
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.ProductosFactura, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.ProductosFactura, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ProductosFacturaController.prototype, "findById", null);
tslib_1.__decorate([
    rest_1.put('/productos-facturas/{id}'),
    rest_1.response(204, {
        description: 'ProductosFactura PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.requestBody()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.ProductosFactura]),
    tslib_1.__metadata("design:returntype", Promise)
], ProductosFacturaController.prototype, "replaceById", null);
tslib_1.__decorate([
    rest_1.del('/productos-facturas/{id}'),
    rest_1.response(204, {
        description: 'ProductosFactura DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", Promise)
], ProductosFacturaController.prototype, "deleteById", null);
ProductosFacturaController = tslib_1.__decorate([
    tslib_1.__param(0, repository_1.repository(repositories_1.ProductosFacturaRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.ProductosFacturaRepository])
], ProductosFacturaController);
exports.ProductosFacturaController = ProductosFacturaController;
//# sourceMappingURL=productos-factura.controller.js.map