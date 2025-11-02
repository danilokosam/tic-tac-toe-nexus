import { useCallback, useEffect, useRef, useState } from 'react';
import type { ChatMessage } from '../types/game';
import type { Socket } from 'socket.io-client';

interface UseChatProps {
  socket: Socket | null;
  roomCode: string;
  currentPlayerName: string;
}

export const useChat = ({
  socket,
  roomCode,
  currentPlayerName,
}: UseChatProps) => {
  const [newMessage, setNewMessage] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [isSideBarOpen, setIsSideBarOpen] = useState(window.innerWidth > 768);
  const messagesEndRef = useRef<HTMLDivElement>(document.createElement('div'));

  const emojis = [
    '😀',
    '😂',
    '😍',
    '🤔',
    '😎',
    '🔥',
    '👍',
    '👎',
    '❤️',
    '🎉',
    '😢',
    '😡',
  ];

  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNewMessage = useCallback(
    (message: ChatMessage) => {
      setMessages((prev) => [...prev, { ...message, isRead: isSideBarOpen }]);
    },
    [isSideBarOpen],
  );

  const sendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim()) return;
    socket?.emit('send-message', {
      roomCode,
      message: newMessage,
      playerName: currentPlayerName,
    });
    setNewMessage('');
    setShowEmojiPicker(false);
  };

  const addEmoji = (emoji: string) => {
    setNewMessage((prev) => prev + emoji);
    setShowEmojiPicker(false);
  };

  const toggleSidebar = () => {
    if (!isSideBarOpen) {
      setMessages((prev) => prev.map((msg) => ({ ...msg, isRead: true })));
    }
    setIsSideBarOpen((prev) => !prev);
  };

  // Socket listeners
  useEffect(() => {
    if (!socket) return;
    socket.on('new-message', handleNewMessage);
    return () => {
      socket.off('new-message', handleNewMessage);
    };
  }, [socket, handleNewMessage]);

  // Scroll to bottom
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Handle resize
  useEffect(() => {
    const handleResize = () => setIsSideBarOpen(window.innerWidth > 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return {
    newMessage,
    setNewMessage,
    messages,
    showEmojiPicker,
    setShowEmojiPicker,
    emojis,
    messagesEndRef,
    isSideBarOpen,
    toggleSidebar,
    sendMessage,
    addEmoji,
  };
};
