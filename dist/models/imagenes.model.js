"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Imagenes = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
let Imagenes = class Imagenes extends repository_1.Entity {
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
], Imagenes.prototype, "id", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Imagenes.prototype, "nombre", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'number',
    }),
    tslib_1.__metadata("design:type", Number)
], Imagenes.prototype, "idProductos", void 0);
Imagenes = tslib_1.__decorate([
    repository_1.model(),
    tslib_1.__metadata("design:paramtypes", [Object])
], Imagenes);
exports.Imagenes = Imagenes;
//# sourceMappingURL=imagenes.model.js.map