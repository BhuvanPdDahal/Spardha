import RoomManager from "./RoomManager";
import PokerManager from "./PokerManager";
import { User } from "../interfaces/managers";
import { Socket } from "socket.io";

export default class UserManager {
    private users: User[];
    private roomManager: RoomManager;

    constructor() {
        this.users = [];
        this.roomManager = new RoomManager();
    }
    addUser(socket: Socket, fullName: string, email: string) {
        this.users.push({
            socket, fullName, email
        });
        this.initHandlers(socket);
        this.matchUsers();
    }
    matchUsers() {
        if(this.users.length < 2) return;
        const user1 = this.users.pop();
        const user2 = this.users.pop();
        if(!user1 || !user2) return;
        user1.socket.emit('play-poker');
        user2.socket.emit('play-poker');
        this.roomManager.createRoom(user1, user2);
        const pokerManager = new PokerManager();
        const cards = pokerManager.pickCardsForTwoPlayers(3);
        user1.socket.emit('receive-cards', cards.player1Cards);
        user2.socket.emit('receive-cards', cards.player2Cards);
    }
    initHandlers(socket: Socket) {
        
    }
}