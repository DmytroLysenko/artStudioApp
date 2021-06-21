const Server = require("./API/server");

const PORT = process.env.PORT || 5000;
const DATABASE_URL = process.env.DATABASE_URL;
const isDev = process.env.MODE
  ? process.env.MODE === "development"
    ? true
    : false
  : false;

const server = new Server(PORT, DATABASE_URL, isDev);

server.start();
