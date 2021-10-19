"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Factura = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const productos_factura_model_1 = require("./productos-factura.model");
const clientes_model_1 = require("./clientes.model");
let Factura = class Factura extends repository_1.Entity {
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
], Factura.prototype, "id", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Factura.prototype, "consecutivo", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'date',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Factura.prototype, "fecha", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'date',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Factura.prototype, "hora", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'number',
    }),
    tslib_1.__metadata("design:type", Number)
], Factura.prototype, "idProductoFactura", void 0);
tslib_1.__decorate([
    repository_1.belongsTo(() => productos_factura_model_1.ProductosFactura, { name: 'productoFactura' }),
    tslib_1.__metadata("design:type", Number)
], Factura.prototype, "idFactura", void 0);
tslib_1.__decorate([
    repository_1.hasMany(() => clientes_model_1.Clientes, { keyTo: 'idClientes' }),
    tslib_1.__metadata("design:type", Array)
], Factura.prototype, "clientes", void 0);
Factura = tslib_1.__decorate([
    repository_1.model(),
    tslib_1.__metadata("design:paramtypes", [Object])
], Factura);
exports.Factura = Factura;
//# sourceMappingURL=factura.model.js.map