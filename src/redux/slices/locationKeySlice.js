import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { ACUWEATHER_KEY, LOCATIONKEY_BASE_URL } from '../../utils/api';

export const fetchLocationKey = createAsyncThunk(
    'locationKey/fetchLocationKey',
    async function ({ locationLat, locationLng }, { rejectWithValue }) {
        try {
            const response = await fetch(
                LOCATIONKEY_BASE_URL +
                ACUWEATHER_KEY +
                    `&q=${locationLat},${locationLng}`
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

const locationKeySlice = createSlice({
    name: 'locationKey',
    initialState: {
        key: '215854',
        currentLocationKey: '',
        name: 'Tel Aviv',
        currentLocationName:'',
        status: null,
        error: null,
    },
    reducers: {
        setLocationKey: (state, action) => {
            state.key = action.payload;
        },

        setCurrentLocationKey: (state, action) => {
            state.key = action.payload;
        },
        setLocationName: (state, action) => {
            state.name = action.payload;
        },
    },
    extraReducers: {
        [fetchLocationKey.pending]: (state) => {
            state.status = 'loading';
            state.error = null;
        },
        [fetchLocationKey.fulfilled]: (state, action) => {
            state.status = 'resolved';
            state.key = action.payload.Key;
            state.currentLocationKey = action.payload.Key;
            state.name = action.payload.EnglishName;
            state.currentLocationName = action.payload.EnglishName;
        },
        [fetchLocationKey.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload;
        },
    },
});

export const { setLocationKey, setLocationName } = locationKeySlice.actions;

export default locationKeySlice.reducer;
