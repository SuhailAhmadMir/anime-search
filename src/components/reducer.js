export const initialState = {
  anime: null,
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "SEARCH_ANIME":
      return {
        ...state,
        anime: action.anime,
      };
    default:
      return state;
  }
};

export default reducer;
