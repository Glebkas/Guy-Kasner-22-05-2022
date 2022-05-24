import { createSlice } from '@reduxjs/toolkit';

export const favoriteLocationsSlice = createSlice({
    name: 'favorites',
    initialState: {
        favorites: [],
    },
    reducers: {
        addToFavorites: (state, action) => {
            state.favorites = [...state.favorites, action.payload];
        },
        removeFromFavorites: (state, action) => {
            state.favorites = state.favorites.filter(
                (fav) => fav.id !== action.payload
            );
        },
    },
});

export const { addToFavorites, removeFromFavorites } =
    favoriteLocationsSlice.actions;

export default favoriteLocationsSlice.reducer;
