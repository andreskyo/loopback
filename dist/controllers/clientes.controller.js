"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientesController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let ClientesController = class ClientesController {
    constructor(clientesRepository) {
        this.clientesRepository = clientesRepository;
    }
    async create(clientes) {
        return this.clientesRepository.create(clientes);
    }
    async count(where) {
        return this.clientesRepository.count(where);
    }
    async find() {
        return this.clientesRepository.find(this.clientesRepository.createRelationFilter());
    }
    async findById(id, filter) {
        return this.clientesRepository.findById(id, filter);
    }
    async replaceById(id, clientes) {
        await this.clientesRepository.replaceById(id, clientes);
    }
    async deleteById(id) {
        await this.clientesRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    rest_1.post('/clientes'),
    rest_1.response(200, {
        description: 'Clientes model instance',
        content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.Clientes) } },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Clientes, {
                    title: 'NewClientes',
                    exclude: ['id'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ClientesController.prototype, "create", null);
tslib_1.__decorate([
    rest_1.get('/clientes/count'),
    rest_1.response(200, {
        description: 'Clientes model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Clientes)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ClientesController.prototype, "count", null);
tslib_1.__decorate([
    rest_1.get('/clientes'),
    rest_1.response(200, {
        description: 'Array of Clientes model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: rest_1.getModelSchemaRef(models_1.Clientes, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], ClientesController.prototype, "find", null);
tslib_1.__decorate([
    rest_1.get('/clientes/{id}'),
    rest_1.response(200, {
        description: 'Clientes model instance',
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Clientes, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Clientes, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ClientesController.prototype, "findById", null);
tslib_1.__decorate([
    rest_1.put('/clientes/{id}'),
    rest_1.response(204, {
        description: 'Clientes PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.requestBody()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.Clientes]),
    tslib_1.__metadata("design:returntype", Promise)
], ClientesController.prototype, "replaceById", null);
tslib_1.__decorate([
    rest_1.del('/clientes/{id}'),
    rest_1.response(204, {
        description: 'Clientes DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", Promise)
], ClientesController.prototype, "deleteById", null);
ClientesController = tslib_1.__decorate([
    tslib_1.__param(0, repository_1.repository(repositories_1.ClientesRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.ClientesRepository])
], ClientesController);
exports.ClientesController = ClientesController;
//# sourceMappingURL=clientes.controller.js.map