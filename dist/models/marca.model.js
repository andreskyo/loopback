"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Marca = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const productos_model_1 = require("./productos.model");
let Marca = class Marca extends repository_1.Entity {
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
], Marca.prototype, "id", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Marca.prototype, "nombre", void 0);
tslib_1.__decorate([
    repository_1.hasMany(() => productos_model_1.Productos, { keyTo: 'idProductos' }),
    tslib_1.__metadata("design:type", Array)
], Marca.prototype, "productos", void 0);
Marca = tslib_1.__decorate([
    repository_1.model(),
    tslib_1.__metadata("design:paramtypes", [Object])
], Marca);
exports.Marca = Marca;
//# sourceMappingURL=marca.model.js.map