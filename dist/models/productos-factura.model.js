"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductosFactura = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const factura_model_1 = require("./factura.model");
let ProductosFactura = class ProductosFactura extends repository_1.Entity {
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
], ProductosFactura.prototype, "id", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'number',
        default: 0,
    }),
    tslib_1.__metadata("design:type", Number)
], ProductosFactura.prototype, "cantidad", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'number',
        default: 0,
    }),
    tslib_1.__metadata("design:type", Number)
], ProductosFactura.prototype, "precioUnitario", void 0);
tslib_1.__decorate([
    repository_1.hasMany(() => factura_model_1.Factura, { keyTo: 'idProductoFactura' }),
    tslib_1.__metadata("design:type", Array)
], ProductosFactura.prototype, "facturas", void 0);
ProductosFactura = tslib_1.__decorate([
    repository_1.model(),
    tslib_1.__metadata("design:paramtypes", [Object])
], ProductosFactura);
exports.ProductosFactura = ProductosFactura;
//# sourceMappingURL=productos-factura.model.js.map