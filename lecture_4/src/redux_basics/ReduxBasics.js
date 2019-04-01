import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducer from './reducers';
import App from './containers/App';


export const start = () => {
  const store = createStore(
    reducer,
    // (f) => f is identify function Otherwise
    // window.__REDUX_DEVTOOLS_EXTENSION__ is used
    // as a store-enhancer which integrates the
    // store with Redux DevTools
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
  );

  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  );
};
