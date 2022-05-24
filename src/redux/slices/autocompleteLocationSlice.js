import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { ACUWEATHER_KEY, AUTOCOMPLETE_BASE_URL } from '../../utils/api';

export const fetchAutocomplete = createAsyncThunk(
    'autocomplete/fetchAutocomplete',
    async function (inputValue, { rejectWithValue }) {
        try {
            const response = await fetch(
                AUTOCOMPLETE_BASE_URL + ACUWEATHER_KEY + `&q=${inputValue}`
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

const autocompleteLocationSlice = createSlice({
    name: 'autocomplete',
    initialState: {
        data: [],
        status: null,
        error: null,
    },
    reducers: {
        resetAutocomplete: (state) => {
            state.data = [];
        },
    },
    extraReducers: {
        [fetchAutocomplete.pending]: (state) => {
            state.status = 'loading';
            state.error = null;
        },
        [fetchAutocomplete.fulfilled]: (state, action) => {
            state.status = 'resolved';
            state.data = action.payload;
        },
        [fetchAutocomplete.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload;
        },
    },
});

export const { resetAutocomplete } = autocompleteLocationSlice.actions;

export default autocompleteLocationSlice.reducer;
