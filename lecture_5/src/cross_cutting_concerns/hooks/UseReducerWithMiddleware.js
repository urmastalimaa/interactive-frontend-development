import { useMemo, useReducer, useRef } from "react";

/**
 * Same as React's useReducer, but also executes middleware functions on every
 * action dispatch.
 *
 * A middleware is a powerful and flexible function that can
 * - dispatch arbitrary actions, e.g. at an interval
 * - inspect all the dispatched actions
 * - change an action before it reaches the reducer or next middleware
 * - stop an action from propagating altogether
 *
 * The middleware interface is designed to be exactly the same as Redux's
 * middlewares - the middleware function must have the following form:
 ```js
  ({getState}) => {
    return (next) =>
      return (action) => {
        next(action);
      }
    }
  }
 ```
 * A middleware function must call `next(action)` to propagate the action to
 * the final action dispatch and reducer, otherwise the action will be ignored.
 *
 * Middlewares are executed in reverse order.
 *
 * @param {Array<Function>} middlewares Middleware functions, executed in reverse order
 * @param {Function} reducer Passed to React's useReducer
 * @param {any} initOrInitialValue Passed to React's useReducer
 * @param {any} init Passed to React's useReducer
 * @return {Array} of [state, dispatch]
 */
const useReducerWithMiddleware = (
  middlewares,
  reducer,
  initOrInitialValue,
  init
) => {
  /*
   * In order to give access to last state to middleware functions, need to
   * provide them a value which itself doesn't change to avoid constantly
   * re-defining the middlewares. `useRef` provides just the "box" which we can
   * mutate for this purpose.
   */
  const lastStateRef = useRef();

  // `useMemo` will be discussed in next lecture
  const refUpdatingReducer = useMemo(
    () => (prevState, action) => {
      const newState = reducer(prevState, action);
      lastStateRef.current = newState;
      return newState;
    },
    []
  );

  const [state, dispatch] = useReducer(
    refUpdatingReducer,
    initOrInitialValue,
    init
  );

  const dispatchWithMiddlewares = useMemo(() => {
    const middlewareInit = {
      getStateBefore: () => lastStateRef.current,
    };

    return middlewares
      .concat(dispatch)
      .reverse()
      .reduce((acc, middleware) => {
        /*
         * Initialize the middleware with means to get state and the next
         * middleware/final dispatch.
         */
        return middleware(middlewareInit)(acc, lastStateRef.current);
      });
  }, []);
  return [state, dispatchWithMiddlewares];
};

export default useReducerWithMiddleware;
