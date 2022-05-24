import { configureStore } from '@reduxjs/toolkit';
import favoriteLocationsReducer from './slices/favoriteLocationsSlice';
import weatherReducer from './slices/weatherSlice';
import locationReducer from './slices/locationSlice';
import autoCompleteReducer from './slices/autocompleteLocationSlice';
import dailyForcastReducer from './slices/dailyForcastSlice';
import degreeUnitReducer from './slices/degreeUnitSlice';
import locationKeyReducer from './slices/locationKeySlice';

export const store = configureStore({
    reducer: {
        favoriteLocations: favoriteLocationsReducer,
        weather: weatherReducer,
        location: locationReducer,
        autoComplete: autoCompleteReducer,
        dailyForcast: dailyForcastReducer,
        degreeUnit: degreeUnitReducer,
        locationKey: locationKeyReducer,
    },
});
