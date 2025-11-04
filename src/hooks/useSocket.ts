import { useEffect, useState } from 'react';
import { io, Socket } from 'socket.io-client';

const socketUrl =
  import.meta.env.VITE_APPLICATION_URL || 'http://localhost:3000';

export const useSocket = () => {
  const [socket, setSocket] = useState<Socket | null>(null);
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    const socketConnection = io(socketUrl, {
      reconnectionAttempts: 3,
    });

    setSocket(socketConnection);

    socketConnection.on('connect', () => {
      setIsConnected(true);
    });

    socketConnection.on('disconnect', () => {
      setIsConnected(false);
      console.info('Disconnected from server');
    });

    socketConnection.on('error', (error) => {
      console.error('Socket error:', error);
    });

    return () => {
      console.log('User disconnected from socket server 😿');
      socketConnection.off('connect');
      socketConnection.off('disconnect');
      socketConnection.off('error');
      socketConnection.disconnect();
    };
  }, []);

  return { socket, isConnected };
};
