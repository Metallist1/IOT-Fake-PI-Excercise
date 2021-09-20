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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataGateway = void 0;
const websockets_1 = require("@nestjs/websockets");
const socket_io_1 = require("socket.io");
const chat_service_1 = require("../chat/chat.service");
const options = {
    cors: {
        origin: 'http://localhost:4200',
        credentials: true
    }
};
let DataGateway = class DataGateway {
    constructor(chatService) {
        this.chatService = chatService;
    }
    handleDisconnect(client) {
        console.log(`Client disconnected: ${client.id}`);
        const users = this.chatService.getAllUsers();
        this.server.emit('get_all_users', users);
    }
    handleConnection(client, ...args) {
        console.log(`Client connected: ${client.id}`);
    }
};
__decorate([
    (0, websockets_1.WebSocketServer)(),
    __metadata("design:type", socket_io_1.Server)
], DataGateway.prototype, "server", void 0);
DataGateway = __decorate([
    (0, websockets_1.WebSocketGateway)(options),
    __metadata("design:paramtypes", [typeof (_a = typeof chat_service_1.ChatService !== "undefined" && chat_service_1.ChatService) === "function" ? _a : Object])
], DataGateway);
exports.DataGateway = DataGateway;
//# sourceMappingURL=data.gateway.js.map