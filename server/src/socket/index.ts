import { Socket } from 'socket.io';

const socketHandler = (socket: Socket) => {
    console.log('a user connected');
};

export default socketHandler;