const LoggingMiddleware = ({ getStateBefore }) => {
  return (next) => {
    return (action) => {
      const stateBefore = getStateBefore();

      // eslint-disable-next-line no-console
      console.log("Dispatching action", action, "while state is", stateBefore);

      /*
       * Delegate to the next middleware or finally - the action dispatch
       */
      next(action);

      /*
       *
       * One crucial different to Redux's middlewares is that as React can
       * delay calling the reducer for internal optimizations, calling
       * `next(action)` does not immediately call the reducer and thus there is
       * no way to get "post-action" state in the middleware function.
       */
    };
  };
};

export default LoggingMiddleware;
