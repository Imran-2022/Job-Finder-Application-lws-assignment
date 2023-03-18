import axios from "../../utils/axios";

// get jobs !
export const getJobs = async () => {
    const response = await axios.get("/jobs");
    return response.data;
};

// add jobs !
export const addNewJob = async (data) => {
    const response = await axios.post("/jobs", data);
    return response.data;
};

// edit job post !
export const editJobs= async (id, data) => {
    const response = await axios.put(`/jobs/${id}`, data);
    return response.data;
};

// delete job post !
export const deleteJobs = async (id) => {
    const response = axios.delete(`/jobs/${id}`);
    return response.data;
};
// get single job post !
export const getJob = async (editId) => {
    const response = await axios.get(`/jobs/${editId}`);
    return response.data
};
