"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImagenesRepository = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const datasources_1 = require("../datasources");
const models_1 = require("../models");
let ImagenesRepository = class ImagenesRepository extends repository_1.DefaultCrudRepository {
    constructor(dataSource) {
        super(models_1.Imagenes, dataSource);
    }
};
ImagenesRepository = tslib_1.__decorate([
    tslib_1.__param(0, core_1.inject('datasources.ecommmerce')),
    tslib_1.__metadata("design:paramtypes", [datasources_1.EcommmerceDataSource])
], ImagenesRepository);
exports.ImagenesRepository = ImagenesRepository;
//# sourceMappingURL=imagenes.repository.js.map