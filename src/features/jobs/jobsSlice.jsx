import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addNewJob, getJobs,editJobs,deleteJobs } from "./jobsAPI";

const initialState = {
    jobs: [],
    isLoading: false,
    isError: false,
    error: "",
    editing:{}
};

// async thunks
export const fetchJobs = createAsyncThunk("job/fetchJobs",
    async () => {
        const jobs = await getJobs();
        return jobs;
    }
);

export const createJob = createAsyncThunk(
    "job/createJob",
    async (data) => {
        const result = await addNewJob(data);
        return result;
    }
);



export const editJob = createAsyncThunk(
    "job/editJob",
    async ({ id, data }) => {
        const result = await editJobs(id, data);
        return result;
    }
);

export const deleteJob = createAsyncThunk(
    "job/deleteJob",
    async (id) => {
        const result = await deleteJobs(id);
        return id;
    }
);

// create slice
const jobsSlice = createSlice({
    name: "jobs",
    initialState,
    reducers: {
        editActive: (state, action) => {
            state.editing = action.payload;
        },
        editInActive: (state) => {
            state.editing = {};
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchJobs.pending, (state) => {
                state.isError = false;
                state.isLoading = true;
            })
            .addCase(fetchJobs.fulfilled, (state, action) => {
                state.isError = false;
                state.isLoading = false;
                state.jobs = action.payload;
            })
            .addCase(fetchJobs.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.error = action.error?.message;
                state.jobs = [];
            })
            .addCase(createJob.pending, (state) => {
                state.isError = false;
                state.isLoading = true;
            })
            .addCase(createJob.fulfilled, (state, action) => {
                state.isError = false;
                state.isLoading = false;
                state.jobs.push(action.payload);
            })
            .addCase(createJob.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.error = action.error?.message;
            })
            // edit and delete !!!
            .addCase(editJob.pending, (state) => {
                state.isError = false;
                state.isLoading = true;
            })
            .addCase(editJob.fulfilled, (state, action) => {
                state.isError = false;
                state.isLoading = false;

                const indexToUpdate = state.jobs.findIndex(
                    (t) => t.id === action.payload.id
                );

                state.jobs[indexToUpdate] = action.payload;
            })
            .addCase(editJob.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.error = action.error?.message;
            })
            .addCase(deleteJob.pending, (state) => {
                state.isError = false;
                state.isLoading = true;
            })
            .addCase(deleteJob.fulfilled, (state, action) => {
                state.isError = false;
                state.isLoading = false;
                state.jobs = state.jobs.filter(
                    (t) => t.id !== action.payload
                );
            })
            .addCase(deleteJob.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.error = action.error?.message;
            });
    },
});

export default jobsSlice.reducer;
export const { editActive, editInActive } = jobsSlice.actions;
