const Reducer = (state, action) => {
  switch (action.type) {
    case "SHOW_POPUP":
      return {
        ...state,
        showPopup: action.payload,
      };
    case "SET_LIST":
      return {
        ...state,
        linkList: [...action.payload],
      };
    default:
      return state;
  }
};

export default Reducer;
