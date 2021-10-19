"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RolController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let RolController = class RolController {
    constructor(rolRepository) {
        this.rolRepository = rolRepository;
    }
    async create(rol) {
        return this.rolRepository.create(rol);
    }
    async count(where) {
        return this.rolRepository.count(where);
    }
    async find() {
        return this.rolRepository.find(this.rolRepository.createRelationFilter());
    }
    async findById(id, filter) {
        return this.rolRepository.findById(id, filter);
    }
    async replaceById(id, rol) {
        await this.rolRepository.replaceById(id, rol);
    }
    async deleteById(id) {
        await this.rolRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    rest_1.post('/rols'),
    rest_1.response(200, {
        description: 'Rol model instance',
        content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.Rol) } },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Rol, {
                    title: 'NewRol',
                    exclude: ['id'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], RolController.prototype, "create", null);
tslib_1.__decorate([
    rest_1.get('/rols/count'),
    rest_1.response(200, {
        description: 'Rol model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Rol)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], RolController.prototype, "count", null);
tslib_1.__decorate([
    rest_1.get('/rols'),
    rest_1.response(200, {
        description: 'Array of Rol model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: rest_1.getModelSchemaRef(models_1.Rol, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], RolController.prototype, "find", null);
tslib_1.__decorate([
    rest_1.get('/rols/{id}'),
    rest_1.response(200, {
        description: 'Rol model instance',
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Rol, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Rol, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], RolController.prototype, "findById", null);
tslib_1.__decorate([
    rest_1.put('/rols/{id}'),
    rest_1.response(204, {
        description: 'Rol PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.requestBody()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.Rol]),
    tslib_1.__metadata("design:returntype", Promise)
], RolController.prototype, "replaceById", null);
tslib_1.__decorate([
    rest_1.del('/rols/{id}'),
    rest_1.response(204, {
        description: 'Rol DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", Promise)
], RolController.prototype, "deleteById", null);
RolController = tslib_1.__decorate([
    tslib_1.__param(0, repository_1.repository(repositories_1.RolRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.RolRepository])
], RolController);
exports.RolController = RolController;
//# sourceMappingURL=rol.controller.js.map