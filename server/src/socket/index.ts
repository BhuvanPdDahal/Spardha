import { Socket } from 'socket.io';
import UserManager from '../managers/UserManager';

const socketHandler = (socket: Socket, userManager: UserManager) => {
    console.log('a user connected: ', socket.id);
    
    socket.on('play-poker', ({ fullName, email }) => {
        console.log('inside play-poker', fullName, email);
        userManager.addUser(socket, fullName, email);
        console.log('all users: ', userManager.getAllUsers());
    });
};

export default socketHandler;