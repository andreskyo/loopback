"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductosController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let ProductosController = class ProductosController {
    constructor(productosRepository) {
        this.productosRepository = productosRepository;
    }
    async create(productos) {
        return this.productosRepository.create(productos);
    }
    async count(where) {
        return this.productosRepository.count(where);
    }
    async find() {
        return this.productosRepository.find(this.productosRepository.createRelationFilter());
    }
    async findById(id, filter) {
        return this.productosRepository.findById(id, filter);
    }
    async replaceById(id, productos) {
        await this.productosRepository.replaceById(id, productos);
    }
    async deleteById(id) {
        await this.productosRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    rest_1.post('/productos'),
    rest_1.response(200, {
        description: 'Productos model instance',
        content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.Productos) } },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Productos, {
                    title: 'NewProductos',
                    exclude: ['id'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ProductosController.prototype, "create", null);
tslib_1.__decorate([
    rest_1.get('/productos/count'),
    rest_1.response(200, {
        description: 'Productos model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Productos)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ProductosController.prototype, "count", null);
tslib_1.__decorate([
    rest_1.get('/productos'),
    rest_1.response(200, {
        description: 'Array of Productos model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: rest_1.getModelSchemaRef(models_1.Productos, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], ProductosController.prototype, "find", null);
tslib_1.__decorate([
    rest_1.get('/productos/{id}'),
    rest_1.response(200, {
        description: 'Productos model instance',
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Productos, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Productos, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ProductosController.prototype, "findById", null);
tslib_1.__decorate([
    rest_1.put('/productos/{id}'),
    rest_1.response(204, {
        description: 'Productos PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.requestBody()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.Productos]),
    tslib_1.__metadata("design:returntype", Promise)
], ProductosController.prototype, "replaceById", null);
tslib_1.__decorate([
    rest_1.del('/productos/{id}'),
    rest_1.response(204, {
        description: 'Productos DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", Promise)
], ProductosController.prototype, "deleteById", null);
ProductosController = tslib_1.__decorate([
    tslib_1.__param(0, repository_1.repository(repositories_1.ProductosRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.ProductosRepository])
], ProductosController);
exports.ProductosController = ProductosController;
//# sourceMappingURL=productos.controller.js.map