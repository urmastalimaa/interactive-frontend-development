/*
 * The reducer can use local helper functions and import
 * functions from other modules.
 * As long as the resulting function is a pure function, all
 * means of composition can be used.
 */
const add = (term1, term2) => term1 + term2;
const substract = (term1, term2) => term1 - term2;

export const init = () => Math.floor(Math.random() * 10);

/*
 * The reducer is a pure function which is very easy to understand and trivial
 * to test. It has no knowledge of the user interface, it only knows what
 * "actions" progress application state and how i.e. the "business logic".
 */
export const reducer = (state, action) => {
  switch (action.type) {
    case "add":
      return state >= 10 ? state : add(state, action.payload.term);
    case "substract":
      return state === 0 ? state : substract(state, action.payload.term);
    default:
      throw new Error("Bad calculator reducer usage");
  }
};
