import { Socket } from 'socket.io';
import UserManager from '../managers/UserManager';

const socketHandler = (socket: Socket, userManager: UserManager) => {
    socket.on('play-poker', ({ fullName, email }) => {
        userManager.addUser(socket, fullName, email);
    });
};

export default socketHandler;