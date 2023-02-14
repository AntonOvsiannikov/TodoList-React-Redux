const defaultState = window.location.hash || '#/'
export const filterReducer = (state = defaultState,action) => {
  switch(action.type) {
    case"SET_FILTER":
      return action.payload;
    default:
      return state;
  }
}