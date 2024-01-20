import { Socket } from "socket.io";

export interface Card {
    value: number;
    suit: number;
}

export interface User {
    socket: Socket;
    fullName: string;
    email: string;
}

export interface Room {
    user1: User;
    user2: User;
}