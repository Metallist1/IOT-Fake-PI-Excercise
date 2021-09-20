import { Server, Socket } from "socket.io";
import { WeatherdataService } from "./weatherdata.service";
export declare class WeatherGateway {
    private readonly weatherService;
    server: Server;
    constructor(weatherService: WeatherdataService);
    handleDisconnect(client: Socket): void;
    handleConnection(client: Socket, ...args: any[]): Promise<void>;
}
