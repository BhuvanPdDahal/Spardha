import React, { createContext, useMemo, useContext, ReactNode } from "react";
import { io, Socket } from "socket.io-client";

interface SocketProviderProps {
    children: ReactNode;
}

const SocketContext = createContext<Socket | null>(null);

export const useSocket = (): Socket | null => {
    const socket = useContext(SocketContext);
    return socket;
};

export const SocketProvider: React.FC<SocketProviderProps> = (props) => {
    const socket = useMemo(() => io('http://localhost:5000'), []);

    return (
        <SocketContext.Provider value={socket}>
            {props.children}
        </SocketContext.Provider>
    );
};