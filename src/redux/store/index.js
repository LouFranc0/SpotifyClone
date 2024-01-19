import { combineReducers, configureStore } from "@reduxjs/toolkit";
import searchReducer from "../reducers/sidebar";
import albumFavoritesReducer from "../reducers/album";
import addToPlayerReducer from "../reducers/player";

const bigReducer = combineReducers({
  search: searchReducer,
  album: albumFavoritesReducer,
  playerSong: addToPlayerReducer,
});

const store = configureStore({
  reducer: bigReducer,
});

export default store;
