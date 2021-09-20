import { Server, Socket } from "socket.io";
import { ChatService } from "../chat/chat.service";
export declare class DataGateway {
    private readonly chatService;
    server: Server;
    constructor(chatService: ChatService);
    handleDisconnect(client: Socket): void;
    handleConnection(client: Socket, ...args: any[]): void;
}
