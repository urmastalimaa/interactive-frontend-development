// Action creators can have side-effects
let nextId = 1;

// Export action type constants for reducers to use
export const COMMENT_SUBMITTED = 'COMMENT_SUBMITTED';
export const commentSubmitted = () => {
  // An action must be a plain JavaScript object (no instances of classes!)
  return {
    type: COMMENT_SUBMITTED,
    payload: {
      id: nextId++
    }
  };
};

export const AUTHOR_SET = 'AUTHOR_SET';
export const authorSet = (author) => (
  {
    type: AUTHOR_SET,
    payload: author
  }
);

// A helper function can be created to create trivial actions and avoid
// clutter.
const createPayloadForwardingAction = (type) => (payload) =>
  ({type: type, payload: payload});

export const TEXT_SET = 'TEXT_SET';
export const textSet = createPayloadForwardingAction(TEXT_SET);
