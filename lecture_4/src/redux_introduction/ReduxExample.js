import {createStore} from 'redux';

const initialState = {sum: 0, nrOfAdditions: 0};

const reducer = (previousState = initialState, action) => {
  // This function is executed for **every** action that occurs in the
  // application
  const addend = action.payload;
  switch (action.type) {
  case 'ADD': {
    return {
      sum: previousState.sum + addend,
      nrOfAdditions: previousState.nrOfAdditions + 1
    };
  }
  default:
    // If an unknown action occurred, just return previous state
    return previousState;
  }
};

export const start = () => {
  const store = createStore(reducer);

  // Simply log to console whenever anything changes in the store
  store.subscribe(() => {
    console.log('Got new state', store.getState()); // eslint-disable-line no-console
  });

  store.dispatch({type: 'ADD', payload: 5});
  store.dispatch({type: 'ADD', payload: 3});
};
