/* eslint-disable */
import ConnectionOptions from '../../service/local-connection.json';

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
    };

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
    function beat() {
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

const ws = new WebsocketConnection(ConnectionOptions.websocketUrl, 5000);

function createWebSocketPlugin(ws) {
  return (store) => {
    /** Listen for websocket messages and parse */
    ws.socket.onmessage = (event) => {
      let parsed;
      ws.stopHeartbeat();
      ws.startHeartbeat();
      ws.failedConnections = 0;
      try {
        parsed = JSON.parse(event.data);
      } catch (e) {
        return console.warn('Invalid WebSocket message format: ', event.data);
      }
      event.detail = parsed;
      console.log('Parsed websocket message: ', event.detail);
      /** List state mutations based on event type */
      // if (event.type === 'test') {
      //   store.commit('stateMutation', event.detail);
      // } else if (event.type === 'testTwo') {
      //   store.commit('stateMutationTwo', event.detail);
      // }
    }
    /** For WS_SEND mutations emitted, we will send the payload
     *  via websocket connection.
     */
    store.subscribe((mutation) => {
      if (mutation.type === 'WS_SEND') {
        ws.socket.send(mutation.payload);
      }
    });
  };
}

export default createWebSocketPlugin(ws);
