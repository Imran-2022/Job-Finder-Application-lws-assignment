import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { filterBySearch, filterByType } from '../features/filter/filterByTypeSearchSaralySlice';
import { createJob } from '../features/jobs/jobsSlice';

const AddForm = () => {
    const navigate=useNavigate()
    // createJob
    const [title, setTitle] = useState("");
    const [type, setType] = useState("");
    const [salary, setSalary] = useState("");
    const [deadline, setDeadLine] = useState("");

    const dispatch = useDispatch();

    const handleCreate = (e) => {
        e.preventDefault();
        dispatch(
            createJob({title,type,salary,deadline})
        );
        dispatch(filterByType('all'));
        dispatch(filterBySearch(''))
        navigate('/')
    };

    return (
        <form className="space-y-6" onSubmit={handleCreate}>
            <div className="fieldContainer">
                <label htmlFor="lws-JobTitle" className="text-sm font-medium text-slate-300">Job Title</label>
                <select id="lws-JobTitle" name="lwsJobTitle" required value={title}
                        onChange={(e) => setTitle(e.target.value)}>
                    <option value="" hidden defaultValue>Select Job</option>
                    <option value="Software Engineer">Software Engineer</option>
                    <option value="Software Developer">Software Developer</option>
                    <option value="Full Stack Developer">Full Stack Developer</option>
                    <option value="MERN Stack Developer">MERN Stack Developer</option>
                    <option value="DevOps Engineer">DevOps Engineer</option>
                    <option value="QA Engineer">QA Engineer</option>
                    <option value="Product Manager">Product Manager</option>
                    <option value="Social Media Manager">Social Media Manager</option>
                    <option value="Senior Executive">Senior Executive</option>
                    <option value="Junior Executive">Junior Executive</option>
                    <option value="Android App Developer">Android App Developer</option>
                    <option value="IOS App Developer">IOS App Developer</option>
                    <option value="Frontend Developer">Frontend Developer</option>
                    <option value="Frontend Engineer">Frontend Engineer</option>
                </select>
            </div>

            <div className="fieldContainer">
                <label htmlFor="lws-JobType">Job Type</label>
                <select id="lws-JobType" name="lwsJobType" required value={type}
                        onChange={(e) => setType(e.target.value)}>
                    <option value="" hidden defaultValue>Select Job Type</option>
                    <option value="Full Time">Full Time</option>
                    <option value="Internship">Internship</option>
                    <option value="Remote">Remote</option>
                </select>
            </div>

            <div className="fieldContainer">
                <label htmlFor="lws-JobSalary">Salary</label>
                <div className="flex border rounded-md shadow-sm border-slate-600">
                    <span className="input-tag">BDT</span>
                    <input type="number" name="lwsJobSalary" id="lws-JobSalary" required className="!rounded-l-none !border-0"
                        placeholder="20,00,000" value={salary}
                        onChange={(e) => setSalary(e.target.value)}/>
                </div>
            </div>

            <div className="fieldContainer">
                <label htmlFor="lws-JobDeadline">Deadline</label>
                <input type="date" name="lwsJobDeadline" id="lws-JobDeadline" required value={deadline}
                        onChange={(e) => setDeadLine(e.target.value)}/>
            </div>

            <div className="text-right">
                <button type="submit" id="lws-submit" className="cursor-pointer btn btn-primary w-fit">
                    Add new Job
                </button>
            </div>
        </form>
    );
};

export default AddForm;