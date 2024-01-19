import { ADD_ALBUM_FAVORITE, REMOVE_ALBUM_FAVORITE } from "../actions";

const initialState = {
  albumFavorites: [],
};

const albumFavoritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ALBUM_FAVORITE:
      return {
        ...state,
        albumFavorites: [...state.albumFavorites, action.payload],
      };

    case REMOVE_ALBUM_FAVORITE:
      return {
        ...state,
        albumFavorites: state.albumFavorites.filter(
          (index) => index !== action.payload
        ),
      };

    default:
      return state;
  }
};

export default albumFavoritesReducer;
