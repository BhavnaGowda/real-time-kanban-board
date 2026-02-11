import { io } from "socket.io-client";

const socket = io("https://real-time-kanban-board-08n3.onrender.com", {
  transports: ["websocket"],
});

export default socket;
