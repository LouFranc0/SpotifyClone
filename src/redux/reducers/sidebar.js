import { SAVE_SEARCH } from "../actions";

const initialState = {
  songs: [],
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_SEARCH:
      return {
        ...state,
        songs: action.payload,
      };

    default:
      return state;
  }
};

export default searchReducer;
