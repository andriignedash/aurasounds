import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  playlists: [],
};

const favouritesSlice = createSlice({
  name: 'favourites',
  initialState,
  reducers: {
    addToFavourites: (state, action) => {
      const exists = state.playlists.find(
        item => item.id === action.payload.id,
      );
      if (!exists) {
        state.playlists.push(action.payload);
      }
    },
    removeFromFavourites: (state, action) => {
      state.playlists = state.playlists.filter(
        item => item.id !== action.payload,
      );
    },
  },
});

export const {addToFavourites, removeFromFavourites} = favouritesSlice.actions;
export default favouritesSlice.reducer;
