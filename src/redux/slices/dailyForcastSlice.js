import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { ACUWEATHER_KEY, DAILYFORCAST_BASE_URL } from '../../utils/api';

export const fetchDailyForcast = createAsyncThunk(
    'dailyForcast/fetchDailyForcast',
    async function ({ locationKey, degreeUnit }, { rejectWithValue }) {
        try {
            const response = await fetch(
                DAILYFORCAST_BASE_URL +
                locationKey +
                ACUWEATHER_KEY +
                    `&metric=${degreeUnit}`
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

const dailyForcastSlice = createSlice({
    name: 'dailyForcast',
    initialState: {
        data: {},
        status: null,
        error: null,
    },
    extraReducers: {
        [fetchDailyForcast.pending]: (state) => {
            state.status = 'loading';
            state.error = null;
        },
        [fetchDailyForcast.fulfilled]: (state, action) => {
            state.status = 'resolved';
            state.data = action.payload;
        },
        [fetchDailyForcast.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload;
        },
    },
});

export default dailyForcastSlice.reducer;
