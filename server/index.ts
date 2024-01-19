// LIBRARY IMPORTS
import cors from 'cors';
import http from 'http';
import express from 'express';
import bodyParser from 'body-parser';
import { Server } from "socket.io";

// LOCAL IMPORTS
import './src/mongodb/connection';
import socketHandler from './src/socket';
import userRouter from './src/routes/user.routes';

// VARIABLES
const app = express();
const port = process.env.PORT || 5000;
const server = http.createServer(http);

const io = new Server(server, {
    cors: {
        origin: "*"
    }
});

// MIDDLEWARES
app.use(bodyParser.json({ limit: '30mb' }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// WEBSOCKET
io.on('connection', socketHandler);

// ROUTES
app.use('/api/users', userRouter);

server.listen(port, () => {
    console.log(`Server running at port ${port}`);
});