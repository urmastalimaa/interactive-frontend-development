/*
 * Actions
 */

export const filterSet = (filterText) => ({
  type: "filterSet",
  payload: filterText,
});

/*
 * Reducer
 */

export const filterInitializer = () => "";

export const filterReducer = (state, action) => {
  switch (action.type) {
    case "filterSet":
      return action.payload;
    default:
      return state;
  }
};

/*
 * Selector functions
 */

export const filterText = (state) => state;
