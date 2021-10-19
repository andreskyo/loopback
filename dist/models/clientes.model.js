"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Clientes = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const factura_model_1 = require("./factura.model");
const usuario_cliente_model_1 = require("./usuario-cliente.model");
let Clientes = class Clientes extends repository_1.Entity {
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
], Clientes.prototype, "id", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Clientes.prototype, "nombre", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'number',
        required: true,
    }),
    tslib_1.__metadata("design:type", Number)
], Clientes.prototype, "documento", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Clientes.prototype, "direccion", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Clientes.prototype, "correo", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'number',
        required: true,
    }),
    tslib_1.__metadata("design:type", Number)
], Clientes.prototype, "celular", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'boolean',
        required: true,
    }),
    tslib_1.__metadata("design:type", Boolean)
], Clientes.prototype, "estado", void 0);
tslib_1.__decorate([
    repository_1.belongsTo(() => factura_model_1.Factura, { name: 'factura' }),
    tslib_1.__metadata("design:type", Number)
], Clientes.prototype, "idFactura", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'number',
    }),
    tslib_1.__metadata("design:type", Number)
], Clientes.prototype, "idClientes", void 0);
tslib_1.__decorate([
    repository_1.belongsTo(() => usuario_cliente_model_1.UsuarioCliente, { name: 'usuarioCliente' }),
    tslib_1.__metadata("design:type", Number)
], Clientes.prototype, "idUsuarioCliente", void 0);
Clientes = tslib_1.__decorate([
    repository_1.model(),
    tslib_1.__metadata("design:paramtypes", [Object])
], Clientes);
exports.Clientes = Clientes;
//# sourceMappingURL=clientes.model.js.map