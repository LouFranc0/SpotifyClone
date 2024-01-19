export const SAVE_SEARCH = "SAVE_SEARCH";
export const ADD_ALBUM_FAVORITE = "ADD_ALBUM_FAVORITE";
export const REMOVE_ALBUM_FAVORITE = "REMOVE_ALBUM_FAVORITE";
export const ADD_TO_PLAYER = "ADD_TO_PLAYER";

export const saveSearchAction = (query) => {
  return async (dispatch) => {
    try {
      const res = await fetch(
        `https://striveschool-api.herokuapp.com/api/deezer/search?q=${query}`
      );

      if (!res.ok) throw new Error("cannot fetch data");
      const { data } = await res.json();
      // console.log("data", data);

      dispatch({
        type: SAVE_SEARCH,
        payload: data,
      });
    } catch (err) {
      console.log(err);
    }
  };
};

export const addAlbumFavoriteAction = (track_name) => {
  return {
    type: ADD_ALBUM_FAVORITE,
    payload: track_name,
  };
};

export const removeAlbumFavoriteAction = (i) => {
  return {
    type: REMOVE_ALBUM_FAVORITE,
    payload: i,
  };
};

export const addToPlayerAction = (track) => {
  return {
    type: ADD_TO_PLAYER,
    payload: track,
  };
};
