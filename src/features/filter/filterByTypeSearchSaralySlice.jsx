import {createSlice } from "@reduxjs/toolkit";

const initialState = {
    byType:'all',
    bySearch:'',
    bySalary:'default',
};


// create slice
const filterByTypeSearchSaralySlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
        filterByType: (state, action) => {
            state.byType = action.payload;
        },
        filterBySearch:(state, action) => {
            state.bySearch = action.payload;
        },
        sortBySalary:(state, action) => {
            state.bySalary = action.payload;
        },
    },
});

export default filterByTypeSearchSaralySlice.reducer;
export const { filterByType, filterBySearch,sortBySalary } = filterByTypeSearchSaralySlice.actions;