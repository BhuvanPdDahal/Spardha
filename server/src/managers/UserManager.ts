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
        const userExists = this.users.find(({ socket: userSocket }) => userSocket.id === socket.id);
        if(userExists) return;
        this.users.push({
            socket, fullName, email
        });
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
        console.log('cards: ', cards);
        user1.socket.emit('receive-cards', cards.player1Cards);
        user2.socket.emit('receive-cards', cards.player2Cards);
        this.initHandlers(user1.socket, user2.socket);
        this.initHandlers(user2.socket, user1.socket);
    }
    initHandlers(socket1: Socket, socket2: Socket) {
        socket1.on('send-card', (data) => {
            console.log('inside send-card');
            
            socket2.emit('receive-card', data);
        });
    }
    getAllUsers() {
        return this.users;
    }
}