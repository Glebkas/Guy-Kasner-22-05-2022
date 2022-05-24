import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {
    ACUWEATHER_KEY,
    CURRENT_LOCATION_BASE_URL,
} from '../../utils/api';

export const fetchWeather = createAsyncThunk(
    'weather/fetchWeather',
    async function ({locationKey}, { rejectWithValue }) {
        try {
            const response = await fetch(
                CURRENT_LOCATION_BASE_URL + locationKey + ACUWEATHER_KEY
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

const weatherSlice = createSlice({
    name: 'weather',
    initialState: {
        data: {},
        status: null,
        error: null,
    },
    extraReducers: {
        [fetchWeather.pending]: (state) => {
            state.status = 'loading';
            state.error = null;
        },
        [fetchWeather.fulfilled]: (state, action) => {
            state.status = 'resolved';
            state.data = action.payload[0];
        },
        [fetchWeather.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload;
        },
    },
});

export default weatherSlice.reducer;
