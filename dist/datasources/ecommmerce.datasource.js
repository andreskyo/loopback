"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EcommmerceDataSource = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const config = {
    name: 'ecommmerce',
    connector: 'mysql',
    url: '',
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '157015211',
    database: 'ecommerce'
};
// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
let EcommmerceDataSource = class EcommmerceDataSource extends repository_1.juggler.DataSource {
    constructor(dsConfig = config) {
        super(dsConfig);
    }
};
EcommmerceDataSource.dataSourceName = 'ecommmerce';
EcommmerceDataSource.defaultConfig = config;
EcommmerceDataSource = tslib_1.__decorate([
    core_1.lifeCycleObserver('datasource'),
    tslib_1.__param(0, core_1.inject('datasources.config.ecommmerce', { optional: true })),
    tslib_1.__metadata("design:paramtypes", [Object])
], EcommmerceDataSource);
exports.EcommmerceDataSource = EcommmerceDataSource;
//# sourceMappingURL=ecommmerce.datasource.js.map