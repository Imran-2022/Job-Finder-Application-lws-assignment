import { configureStore } from "@reduxjs/toolkit";
import filterByTypeSearchSaralySlice from "../features/filter/filterByTypeSearchSaralySlice";
import jobsSlice from "../features/jobs/jobsSlice";

export const store = configureStore({
    reducer: {
        jobs: jobsSlice,
        filters:filterByTypeSearchSaralySlice
    },
});
