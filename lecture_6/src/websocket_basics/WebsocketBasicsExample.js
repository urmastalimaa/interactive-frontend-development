import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers';
import App from './containers/App';
import commentServerMiddleware from './middlewares/CommentServerMiddleware';
import loggingMiddleware from './middlewares/LoggingMiddleware';

import {connect as connectWebSocket} from './WebSocket';

export const start = () => {
  // `__REDUX_DEVTOOLS_EXTENSION_COMPOSE__` will make sure that redux devtools
  // store enhancher is applied last so that it will not miss any actions. See
  // https://redux.js.org/api-reference/applymiddleware#tips for more information.
  const composeStoreEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = createStore(
    reducer,
    composeStoreEnhancers(
      applyMiddleware(
        thunk,
        commentServerMiddleware,
        loggingMiddleware
      )
    )
  );

  const messageToAction = {
    'ping': ({pingCount}) => ({type: 'RECEIVED_PING', payload: {pingCount}})
  };

  let webSocketConnection = null;
  const initiateConnection = () => {
    // Every asynchronous process initiation is accompanied by a notification
    store.dispatch({type: 'CONNECTING'});

    webSocketConnection = connectWebSocket({
      onOpen: () =>
        store.dispatch({type: 'CONNECTED'}),
      onClose: ({reason}) =>
        store.dispatch({type: 'DISCONNECTED', payload: {reason}}),
      onMessage: ({eventName, payload}) => {
        // Simply map eventName to action creator
        store.dispatch(messageToAction[eventName](payload));

        // Reconnect after every 3 pings to illustrate disconnection and a new connection.
        if (eventName === 'ping' && payload.pingCount == 3) {
          webSocketConnection.close();
          setTimeout(() => initiateConnection(), 1000);
        }
      }
    });
  };

  // Initiate connection immediately
  initiateConnection();

  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  );
};
