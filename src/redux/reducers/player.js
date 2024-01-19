import { ADD_TO_PLAYER } from "../actions";

const initialState = {
  addTrack: {},
};

const addToPlayerReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_PLAYER:
      return {
        ...state,
        addTrack: [...action.payload],
      };

    default:
      return state;
  }
};

export default addToPlayerReducer;
