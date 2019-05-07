import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers';
import App from './containers/App';
import commentServerMiddleware from './middlewares/CommentServerMiddleware';
import loggingMiddleware from './middlewares/LoggingMiddleware';
import {createBrowserHistory} from 'history';
import {connectRouter, routerMiddleware} from 'connected-react-router';

export const start = () => {
  // `__REDUX_DEVTOOLS_EXTENSION_COMPOSE__` will make sure that redux devtools
  // store enhancher is applied last so that it will not miss any actions. See
  // https://redux.js.org/api-reference/applymiddleware#tips for more information.
  const composeStoreEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  // Create a abstraction over DOM history API which will be passed both to React
  // Router and Redux.
  const history = createBrowserHistory();

  const store = createStore(
    connectRouter(history)(reducer), // Wrap top level reducer with `connectRouter`
    composeStoreEnhancers(
      applyMiddleware(
        routerMiddleware(history), // Integrate history actions with history API
        thunk,
        commentServerMiddleware,
        loggingMiddleware
      )
    )
  );

  ReactDOM.render(
    <Provider store={store}>
      <App history={history}/>
    </Provider>,
    document.getElementById('root')
  );
};

start();
