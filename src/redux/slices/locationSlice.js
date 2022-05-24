import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {
    LOCATION_BY_IP_BASE_URL,
    LOCATION_KEY,
} from '../../utils/api';

export const fetchCurrentLocation = createAsyncThunk(
    'location/fetchLocation',
    async function (_, { rejectWithValue }) {
        try {
            const response = await fetch(
                LOCATION_BY_IP_BASE_URL + LOCATION_KEY
            );

            if (!response.ok) {
                throw new Error('Server Error!');
            }
            const data = await response.json();
            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

const locataionSlice = createSlice({
    name: 'location',
    initialState: {
        value: 'Tel Aviv',
        coords: {
            lat: '32.045',
            lng: '34.77',
        },
        status: null,
        error: null,
    },
    reducers: {
        setLocation: (state, action) => {
            state.value = action.payload;
        },
        setCoords: (state, action) => {
            state.coords = action.payload;
        },
    },
    extraReducers: {
        [fetchCurrentLocation.pending]: (state) => {
            state.status = 'loading';
            state.error = null;
        },
        [fetchCurrentLocation.fulfilled]: (state, action) => {
            state.status = 'resolved';
            state.coords.lat = action.payload.latitude;
            state.coords.lng = action.payload.longitude;
        },
        [fetchCurrentLocation.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload;
        },
    },
});

export const { setLocation, setCoords } = locataionSlice.actions;

export default locataionSlice.reducer;
