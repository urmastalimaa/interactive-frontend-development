import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import reducer from '../async_process_basics/reducers';
import App from './containers/App';
import commentServerMiddleware from './middlewares/CommentServerMiddleware';
import loggingMiddleware from './middlewares/LoggingMiddleware';

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

  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  );
};
