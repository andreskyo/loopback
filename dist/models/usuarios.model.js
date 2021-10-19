"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Usuarios = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rol_model_1 = require("./rol.model");
let Usuarios = class Usuarios extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
tslib_1.__decorate([
    repository_1.property({
        type: 'number',
        id: true,
        generated: true,
    }),
    tslib_1.__metadata("design:type", Number)
], Usuarios.prototype, "id", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Usuarios.prototype, "nombre", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Usuarios.prototype, "usuario", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Usuarios.prototype, "clave", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'boolean',
        required: true,
    }),
    tslib_1.__metadata("design:type", Boolean)
], Usuarios.prototype, "estado", void 0);
tslib_1.__decorate([
    repository_1.hasMany(() => rol_model_1.Rol, { keyTo: 'idUsuarios' }),
    tslib_1.__metadata("design:type", Array)
], Usuarios.prototype, "rols", void 0);
Usuarios = tslib_1.__decorate([
    repository_1.model(),
    tslib_1.__metadata("design:paramtypes", [Object])
], Usuarios);
exports.Usuarios = Usuarios;
//# sourceMappingURL=usuarios.model.js.map