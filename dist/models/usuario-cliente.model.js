"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioCliente = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
let UsuarioCliente = class UsuarioCliente extends repository_1.Entity {
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
], UsuarioCliente.prototype, "id", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], UsuarioCliente.prototype, "clave", void 0);
UsuarioCliente = tslib_1.__decorate([
    repository_1.model(),
    tslib_1.__metadata("design:paramtypes", [Object])
], UsuarioCliente);
exports.UsuarioCliente = UsuarioCliente;
//# sourceMappingURL=usuario-cliente.model.js.map