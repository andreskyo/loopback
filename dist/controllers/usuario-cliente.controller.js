"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioClienteController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let UsuarioClienteController = class UsuarioClienteController {
    constructor(usuarioClienteRepository) {
        this.usuarioClienteRepository = usuarioClienteRepository;
    }
    async create(usuarioCliente) {
        return this.usuarioClienteRepository.create(usuarioCliente);
    }
    async count(where) {
        return this.usuarioClienteRepository.count(where);
    }
    async find(filter) {
        return this.usuarioClienteRepository.find(filter);
    }
    async findById(id, filter) {
        return this.usuarioClienteRepository.findById(id, filter);
    }
    async replaceById(id, usuarioCliente) {
        await this.usuarioClienteRepository.replaceById(id, usuarioCliente);
    }
    async deleteById(id) {
        await this.usuarioClienteRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    rest_1.post('/usuario-cliente'),
    rest_1.response(200, {
        description: 'UsuarioCliente model instance',
        content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.UsuarioCliente) } },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.UsuarioCliente, {
                    title: 'NewUsuarioCliente',
                    exclude: ['id'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UsuarioClienteController.prototype, "create", null);
tslib_1.__decorate([
    rest_1.get('/usuario-cliente/count'),
    rest_1.response(200, {
        description: 'UsuarioCliente model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.UsuarioCliente)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UsuarioClienteController.prototype, "count", null);
tslib_1.__decorate([
    rest_1.get('/usuario-cliente'),
    rest_1.response(200, {
        description: 'Array of UsuarioCliente model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: rest_1.getModelSchemaRef(models_1.UsuarioCliente, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.UsuarioCliente)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UsuarioClienteController.prototype, "find", null);
tslib_1.__decorate([
    rest_1.get('/usuario-cliente/{id}'),
    rest_1.response(200, {
        description: 'UsuarioCliente model instance',
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.UsuarioCliente, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.UsuarioCliente, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UsuarioClienteController.prototype, "findById", null);
tslib_1.__decorate([
    rest_1.put('/usuario-cliente/{id}'),
    rest_1.response(204, {
        description: 'UsuarioCliente PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.requestBody()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.UsuarioCliente]),
    tslib_1.__metadata("design:returntype", Promise)
], UsuarioClienteController.prototype, "replaceById", null);
tslib_1.__decorate([
    rest_1.del('/usuario-cliente/{id}'),
    rest_1.response(204, {
        description: 'UsuarioCliente DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", Promise)
], UsuarioClienteController.prototype, "deleteById", null);
UsuarioClienteController = tslib_1.__decorate([
    tslib_1.__param(0, repository_1.repository(repositories_1.UsuarioClienteRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.UsuarioClienteRepository])
], UsuarioClienteController);
exports.UsuarioClienteController = UsuarioClienteController;
//# sourceMappingURL=usuario-cliente.controller.js.map