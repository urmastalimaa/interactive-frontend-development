// eslint-disable no-console
const loggingMiddleware = (store) => (next) => (action) => {
  const previousState = store.getState();
  const result = next(action);
  const newState = store.getState();
  console.log('Action', action, 'changed state from', previousState, 'to', newState); // eslint-disable-line no-console
  return result;
};

export default loggingMiddleware;
