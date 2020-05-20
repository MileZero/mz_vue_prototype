/* eslint-disable */
import wsClient from '../../service/server/websocket';

function createWebSocketPlugin(websocketClient) {
  return (store) => {
    /** Listen for websocket messages and parse */
    websocketClient.socket.onmessage = (event) => {
      let parsed;
      websocketClient.stopHeartbeat();
      websocketClient.startHeartbeat();
      websocketClient.failedConnections = 0;
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
    };
    /** For WS_SEND mutations emitted, we will send the payload
     *  via websocket connection.
     */
    store.subscribe((mutation) => {
      if (mutation.type === 'WS_SEND') {
        wsClient.socket.send(mutation.payload);
      }
    });
  };
}

export default createWebSocketPlugin(wsClient);
