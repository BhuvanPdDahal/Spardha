import { Room, User } from "../interfaces/managers";

let GLOBAL_ROOM_ID = 1;

export default class RoomManager {
    private rooms: Map<string, Room>;

    constructor() {
        this.rooms = new Map<string, Room>();
    }
    createRoom(user1: User, user2: User) {
        const roomId = this.generate().toString();
        this.rooms.set(roomId, {
            user1, user2
        });
    }
    removeRoom(roomId: string) {
        this.rooms.delete(roomId);
    }
    generate() {
        return GLOBAL_ROOM_ID++;
    }
}