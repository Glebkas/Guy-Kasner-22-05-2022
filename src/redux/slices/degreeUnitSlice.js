import { createSlice } from '@reduxjs/toolkit';

export const degreeUnitSlice = createSlice({
    name: 'degreeUnit',
    initialState: {
        value: true,
    },
    reducers: {
        toggleDegreeUnit: (state) => {
            state.value = !state.value;
        },
    },
});

export const { toggleDegreeUnit } = degreeUnitSlice.actions;

export default degreeUnitSlice.reducer;
