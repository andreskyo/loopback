"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImagenesController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let ImagenesController = class ImagenesController {
    constructor(imagenesRepository) {
        this.imagenesRepository = imagenesRepository;
    }
    async create(imagenes) {
        return this.imagenesRepository.create(imagenes);
    }
    async count(where) {
        return this.imagenesRepository.count(where);
    }
    async find(filter) {
        return this.imagenesRepository.find(filter);
    }
    async updateAll(imagenes, where) {
        return this.imagenesRepository.updateAll(imagenes, where);
    }
    async findById(id, filter) {
        return this.imagenesRepository.findById(id, filter);
    }
    async updateById(id, imagenes) {
        await this.imagenesRepository.updateById(id, imagenes);
    }
    async replaceById(id, imagenes) {
        await this.imagenesRepository.replaceById(id, imagenes);
    }
    async deleteById(id) {
        await this.imagenesRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    rest_1.post('/imagenes'),
    rest_1.response(200, {
        description: 'Imagenes model instance',
        content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.Imagenes) } },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Imagenes, {
                    title: 'NewImagenes',
                    exclude: ['id'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ImagenesController.prototype, "create", null);
tslib_1.__decorate([
    rest_1.get('/imagenes/count'),
    rest_1.response(200, {
        description: 'Imagenes model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Imagenes)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ImagenesController.prototype, "count", null);
tslib_1.__decorate([
    rest_1.get('/imagenes'),
    rest_1.response(200, {
        description: 'Array of Imagenes model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: rest_1.getModelSchemaRef(models_1.Imagenes, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Imagenes)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ImagenesController.prototype, "find", null);
tslib_1.__decorate([
    rest_1.patch('/imagenes'),
    rest_1.response(200, {
        description: 'Imagenes PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Imagenes, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.Imagenes)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Imagenes, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ImagenesController.prototype, "updateAll", null);
tslib_1.__decorate([
    rest_1.get('/imagenes/{id}'),
    rest_1.response(200, {
        description: 'Imagenes model instance',
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Imagenes, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Imagenes, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ImagenesController.prototype, "findById", null);
tslib_1.__decorate([
    rest_1.patch('/imagenes/{id}'),
    rest_1.response(204, {
        description: 'Imagenes PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Imagenes, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.Imagenes]),
    tslib_1.__metadata("design:returntype", Promise)
], ImagenesController.prototype, "updateById", null);
tslib_1.__decorate([
    rest_1.put('/imagenes/{id}'),
    rest_1.response(204, {
        description: 'Imagenes PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.requestBody()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.Imagenes]),
    tslib_1.__metadata("design:returntype", Promise)
], ImagenesController.prototype, "replaceById", null);
tslib_1.__decorate([
    rest_1.del('/imagenes/{id}'),
    rest_1.response(204, {
        description: 'Imagenes DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", Promise)
], ImagenesController.prototype, "deleteById", null);
ImagenesController = tslib_1.__decorate([
    tslib_1.__param(0, repository_1.repository(repositories_1.ImagenesRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.ImagenesRepository])
], ImagenesController);
exports.ImagenesController = ImagenesController;
//# sourceMappingURL=imagenes.controller.js.map