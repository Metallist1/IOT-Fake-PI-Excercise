/*import { Controller } from '@nestjs/common';

@Controller('weatherdata')
export class WeatherdataController {}*/

import {WebSocketGateway, WebSocketServer} from "@nestjs/websockets";
import {Server, Socket} from "socket.io";
import {WeatherdataService} from "./weatherdata.service";

const options = {
    cors: {
        origin: 'http://localhost:4200',
        credentials: true
    }
}
@WebSocketGateway(options)
export class WeatherGateway {
    @WebSocketServer()
    server: Server;

    constructor(private readonly weatherService: WeatherdataService) {
    }

    handleDisconnect(client: Socket) {
        console.log(`Client disconnected: ${client.id}`);
    }

    async handleConnection(client: Socket, ...args: any[]) {
        console.log(`Client connected: ${client.id}`);
        this.server.emit('get_all_temperature', await this.weatherService.getTemperature());
        this.server.emit('get_all_humidity', await this.weatherService.getHumidity());
        this.server.emit('new_settings', await this.weatherService.getSettings('1'));
    }
}
