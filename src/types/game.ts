export type PlayerSymbol = 'X' | 'O';

export interface Player {
  id: string;
  name: string;
  symbol: PlayerSymbol;
}

export interface GameState {
  board: (PlayerSymbol | null)[];
  currentPlayer: PlayerSymbol;
  winner: string | null;
  isDraw: boolean;
  gameStarted: boolean;
}

export interface Room {
  code: string;
  players: Player[];
  gameState: GameState;
}

export interface ChatMessage {
  id: number;
  playerName: string;
  message: string;
  timestamp: string;
  isRead: boolean;
}
