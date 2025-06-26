import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  playlists: [],
  affirmations: [],
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
    addAffirmationToFavourites: (state, action) => {
      const exists = state.affirmations.find(
        item => item.text === action.payload.text,
      );
      if (!exists) {
        state.affirmations.push(action.payload);
      }
    },
    removeAffirmationFromFavourites: (state, action) => {
      state.affirmations = state.affirmations.filter(
        item => item.text !== action.payload.text,
      );
    },
  },
});

export const {
  addToFavourites,
  removeFromFavourites,
  addAffirmationToFavourites,
  removeAffirmationFromFavourites,
} = favouritesSlice.actions;

export default favouritesSlice.reducer;
