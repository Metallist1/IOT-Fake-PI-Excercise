"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WeatherdataService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const temperature_entity_1 = require("./entities/temperature.entity");
const typeorm_2 = require("typeorm");
const humidity_entity_1 = require("./entities/humidity.entity");
const settings_entity_1 = require("./entities/settings.entity");
let WeatherdataService = class WeatherdataService {
    constructor(temperatureRepository, humidityRepository, settingsRepository) {
        this.temperatureRepository = temperatureRepository;
        this.humidityRepository = humidityRepository;
        this.settingsRepository = settingsRepository;
    }
    async getTemperature() {
        return await this.temperatureRepository.find();
    }
    async getHumidity() {
        return await this.humidityRepository.find();
    }
    async getSettings(id) {
        return await this.settingsRepository.findOne({
            where: [{ "sensorId": id }]
        });
    }
    async addTemperature(temperature) {
        await this.temperatureRepository.create(temperature);
        return temperature;
    }
};
WeatherdataService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(temperature_entity_1.Temperature)),
    __param(1, (0, typeorm_1.InjectRepository)(humidity_entity_1.Humidity)),
    __param(2, (0, typeorm_1.InjectRepository)(settings_entity_1.Settings)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], WeatherdataService);
exports.WeatherdataService = WeatherdataService;
//# sourceMappingURL=weatherdata.service.js.map