/* eslint-disable */
import ConnectionOptions from '../local-connection.json';

class WebsocketConnection {
  constructor(url, heartbeatInterval) {
    this.socket = new WebSocket(url);
    this.failedConnections = 0;
    this.heartbeatInterval = heartbeatInterval;
    this.startHeartbeat();

    /** Websocket Listeners */
    this.socket.onopen = (event) => {
      console.log(`Websocket connection with ${ConnectionOptions.websocketUrl} opened.`);
      return event;
    };

    this.socket.onclose = (event) => {
      this.failedConnections += 1;
      if (this.failedConnections > 5) {
        // The token we're trying to use is probably invalid, force
        // sign in again
        window.location.reload();
      }
      this.stopHeartbeat();
      console.log(`Websocket connection with ${ConnectionOptions.websocketUrl} closed.`);
      return event;
    };``

    this.socket.onerror = (event) => {
      console.error('WebSocket error: ', event);
      return event;
    };

    this.socket.send = (message) => {
      this.socket.send.apply(this.socket, arguments);
      return message;
    };
  }

  startHeartbeat() {
    const socket = this.socket;
    const beat = function() {
      socket.send(JSON.stringify({
        '@type': 'heartbeat',
      }));
    }
    this.heartbeat = window.setInterval(beat, this.heartbeatInterval);
  }

  stopHeartbeat() {
    window.clearInterval(this.heartbeat);
    this.heartbeat = null;
  }
}

export default new WebsocketConnection(ConnectionOptions.websocketUrl, 300);