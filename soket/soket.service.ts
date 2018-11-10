import * as socketIo from "socket.io-client";

const SERVER_URL = "http://localhost:8080";
socketIo(SERVER_URL);
export class SocketService {
  connect() {
    return socketIo.on("connect", function() {});
  }

  event(data) {
    return socketIo.on("event", function(data) {});
  }

  disconnect() {
    return socketIo.on("disconnect", function() {});
  }
}
