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
Object.defineProperty(exports, "__esModule", { value: true });
exports.WeatherGateway = void 0;
const websockets_1 = require("@nestjs/websockets");
const socket_io_1 = require("socket.io");
const weatherdata_service_1 = require("./weatherdata.service");
const options = {
    cors: {
        origin: 'http://localhost:4200',
        credentials: true
    }
};
let WeatherGateway = class WeatherGateway {
    constructor(weatherService) {
        this.weatherService = weatherService;
    }
    handleDisconnect(client) {
        console.log(`Client disconnected: ${client.id}`);
    }
    async handleConnection(client, ...args) {
        console.log(`Client connected: ${client.id}`);
        this.server.emit('get_all_temperature', await this.weatherService.getTemperature());
        this.server.emit('get_all_humidity', await this.weatherService.getHumidity());
        this.server.emit('new_settings', await this.weatherService.getSettings('1'));
    }
};
__decorate([
    (0, websockets_1.WebSocketServer)(),
    __metadata("design:type", socket_io_1.Server)
], WeatherGateway.prototype, "server", void 0);
WeatherGateway = __decorate([
    (0, websockets_1.WebSocketGateway)(options),
    __metadata("design:paramtypes", [weatherdata_service_1.WeatherdataService])
], WeatherGateway);
exports.WeatherGateway = WeatherGateway;
//# sourceMappingURL=weatherdata.controller.js.map