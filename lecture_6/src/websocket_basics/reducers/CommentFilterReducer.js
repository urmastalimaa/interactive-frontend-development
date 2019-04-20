import {
  FILTER_SET
} from '../actions/index.js';

const initialState = '';

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
  case FILTER_SET: {
    return action.payload;
  }
  default:
    return state;
  }
};

export default filterReducer;
