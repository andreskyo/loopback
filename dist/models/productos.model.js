"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Productos = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const categoria_model_1 = require("./categoria.model");
const imagenes_model_1 = require("./imagenes.model");
const marca_model_1 = require("./marca.model");
const productos_factura_model_1 = require("./productos-factura.model");
let Productos = class Productos extends repository_1.Entity {
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
], Productos.prototype, "id", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Productos.prototype, "nombre", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'number',
        required: true,
    }),
    tslib_1.__metadata("design:type", Number)
], Productos.prototype, "precio", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'boolean',
        required: true,
    }),
    tslib_1.__metadata("design:type", Boolean)
], Productos.prototype, "existencia", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'number',
        default: 0,
    }),
    tslib_1.__metadata("design:type", Number)
], Productos.prototype, "calificacion", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'number',
        default: 0,
    }),
    tslib_1.__metadata("design:type", Number)
], Productos.prototype, "descuento", void 0);
tslib_1.__decorate([
    repository_1.hasMany(() => imagenes_model_1.Imagenes, { keyTo: 'idProductos' }),
    tslib_1.__metadata("design:type", Array)
], Productos.prototype, "imagenes", void 0);
tslib_1.__decorate([
    repository_1.belongsTo(() => marca_model_1.Marca, { name: 'marca' }),
    tslib_1.__metadata("design:type", Number)
], Productos.prototype, "idMarca", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'number',
    }),
    tslib_1.__metadata("design:type", Number)
], Productos.prototype, "idProductos", void 0);
tslib_1.__decorate([
    repository_1.belongsTo(() => categoria_model_1.Categoria, { name: 'categoria' }),
    tslib_1.__metadata("design:type", Number)
], Productos.prototype, "idCategoria", void 0);
tslib_1.__decorate([
    repository_1.belongsTo(() => productos_factura_model_1.ProductosFactura, { name: 'productosFactura' }),
    tslib_1.__metadata("design:type", Number)
], Productos.prototype, "idProductoFactura", void 0);
Productos = tslib_1.__decorate([
    repository_1.model(),
    tslib_1.__metadata("design:paramtypes", [Object])
], Productos);
exports.Productos = Productos;
//# sourceMappingURL=productos.model.js.map