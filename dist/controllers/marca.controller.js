"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MarcaController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let MarcaController = class MarcaController {
    constructor(marcaRepository) {
        this.marcaRepository = marcaRepository;
    }
    async create(marca) {
        return this.marcaRepository.create(marca);
    }
    async count(where) {
        return this.marcaRepository.count(where);
    }
    async find() {
        return this.marcaRepository.find(this.marcaRepository.createRelationFilter());
    }
    async findById(id, filter) {
        return this.marcaRepository.findById(id, filter);
    }
    async replaceById(id, marca) {
        await this.marcaRepository.replaceById(id, marca);
    }
    async deleteById(id) {
        await this.marcaRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    rest_1.post('/marcas'),
    rest_1.response(200, {
        description: 'Marca model instance',
        content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.Marca) } },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Marca, {
                    title: 'NewMarca',
                    exclude: ['id'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], MarcaController.prototype, "create", null);
tslib_1.__decorate([
    rest_1.get('/marcas/count'),
    rest_1.response(200, {
        description: 'Marca model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Marca)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], MarcaController.prototype, "count", null);
tslib_1.__decorate([
    rest_1.get('/marcas'),
    rest_1.response(200, {
        description: 'Array of Marca model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: rest_1.getModelSchemaRef(models_1.Marca, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], MarcaController.prototype, "find", null);
tslib_1.__decorate([
    rest_1.get('/marcas/{id}'),
    rest_1.response(200, {
        description: 'Marca model instance',
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Marca, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Marca, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], MarcaController.prototype, "findById", null);
tslib_1.__decorate([
    rest_1.put('/marcas/{id}'),
    rest_1.response(204, {
        description: 'Marca PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.requestBody()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.Marca]),
    tslib_1.__metadata("design:returntype", Promise)
], MarcaController.prototype, "replaceById", null);
tslib_1.__decorate([
    rest_1.del('/marcas/{id}'),
    rest_1.response(204, {
        description: 'Marca DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", Promise)
], MarcaController.prototype, "deleteById", null);
MarcaController = tslib_1.__decorate([
    tslib_1.__param(0, repository_1.repository(repositories_1.MarcaRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.MarcaRepository])
], MarcaController);
exports.MarcaController = MarcaController;
//# sourceMappingURL=marca.controller.js.map