"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WeatherdataModule = void 0;
const common_1 = require("@nestjs/common");
const weatherdata_service_1 = require("./weatherdata.service");
const weatherdata_controller_1 = require("./weatherdata.controller");
const temperature_entity_1 = require("./entities/temperature.entity");
const humidity_entity_1 = require("./entities/humidity.entity");
const settings_entity_1 = require("./entities/settings.entity");
const typeorm_1 = require("@nestjs/typeorm");
let WeatherdataModule = class WeatherdataModule {
};
WeatherdataModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([temperature_entity_1.Temperature, humidity_entity_1.Humidity, settings_entity_1.Settings])],
        providers: [weatherdata_service_1.WeatherdataService, weatherdata_controller_1.WeatherGateway],
        controllers: []
    })
], WeatherdataModule);
exports.WeatherdataModule = WeatherdataModule;
//# sourceMappingURL=weatherdata.module.js.map