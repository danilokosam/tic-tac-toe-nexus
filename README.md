# Tic-Tac-Toe Nexus

This project is a modern, real-time, multiplayer Tic-Tac-Toe game built with React, TypeScript, and a Node.js backend using WebSockets. It provides a seamless and interactive gaming experience where players can create or join game rooms to play against each other.

## Features

- **Real-time Multiplayer:** Play Tic-Tac-Toe with friends or other players in real-time.
- **Game Rooms:** Create private game rooms and share the room code with your opponent to join.
- **In-Game Chat:** Communicate with your opponent using the built-in chat feature.
- **Player Status:** See who is in the room and whose turn it is.
- **Game Status Banner:** Get real-time updates on the game's progress, such as waiting for players, current turn, and game results (win, draw).
- **Responsive Design:** Play on any device, thanks to a responsive layout built with Tailwind CSS.

## Technologies Used

- **Frontend:**
  - [React](https://react.dev/)
  - [TypeScript](https://www.typescriptlang.org/)
  - [Vite](https://vitejs.dev/)
  - [Tailwind CSS](https://tailwindcss.com/)
  - [Socket.IO Client](https://socket.io/docs/v4/client-api/)

- **Backend:**
  - [Node.js](https://nodejs.org/)
  - [Express](https://expressjs.com/)
  - [Socket.IO](https://socket.io/)
  - [TypeScript](https://www.typescriptlang.org/)
  - [tsx](https://github.com/esbuild-kit/tsx) for running TypeScript on Node.js

## Project Structure

The project is organized into a `src` directory for the frontend code and a `server` directory (inferred) for the backend.

```
tic-tac-toe-nexus/
├── public/               # Static assets
├── src/                  # Frontend source code
│   ├── assets/           # Images and other assets
│   ├── components/       # React components
│   │   ├── Chat/         # Chat related components
│   │   ├── GameBoard.tsx # The Tic-Tac-Toe board
│   │   ├── GameHeader/   # Header for the game room
│   │   ├── GameJoinForm/ # Form to create or join a room
│   │   ├── HomePage/     # The main landing page
│   │   └── ...
│   ├── hooks/            # Custom React hooks
│   │   ├── useChat.ts    # Logic for chat
│   │   └── useSocket.ts  # WebSocket connection management
│   ├── types/            # TypeScript type definitions
│   ├── App.tsx           # Main application component
│   ├── main.tsx          # Entry point of the React application
│   └── index.css         # Global styles
├── server/               # Backend source code (inferred)
│   └── index.ts          # Main server file
├── .gitignore
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

- Node.js (v18 or higher)
- npm

### Installation

1.  Clone the repo
    ```sh
    git clone https://your-repository-url.com
    ```
2.  Install NPM packages
    ```sh
    npm install
    ```

### Running the Application

The application runs with a concurrent client and server.

- To run both the client and server in development mode with hot-reloading:
  ```sh
  npm run dev
  ```

- To run only the client:
  ```sh
  npm run client
  ```

- To run only the server:
  ```sh
  npm run server
  ```

### Building for Production

To build the application for production:

```sh
npm run build
```

This will create a `dist` folder with the optimized frontend assets and the compiled backend code.

To run the production build:

```sh
npm start
```