import React, { useEffect, useState } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { editJob, fetchJob } from '../features/jobs/jobsSlice';
import { useNavigate, useParams } from 'react-router-dom';

const EditForm = () => {
    const {editId}=useParams()
    // editing
    const { editing } = useSelector((state) => state.jobs);
    const dispatch=useDispatch();
    const navigate=useNavigate()
    const [editTitle, setEditTitle] = useState('')
    const [editType, setEditType] = useState('')
    const [editSalary, setEditSalary] = useState('')
    const [editDeadline, setEditDeadline] = useState(undefined)

    const {deadline,id,salary,title,type}=editing||{};
    
    useEffect(() => {
        dispatch(fetchJob({editId}))
    }, [editId])
    
    useEffect(()=>{
        setEditTitle(title);
        setEditType(type);
        setEditSalary(salary);
        setEditDeadline(deadline);
    },[editing])



    const handleEdit = (e) => {
        e.preventDefault();
        dispatch(
            editJob({
                id: editing?.id,
                data: {
                    title:editTitle,
                    type:editType,
                    salary:editSalary,
                    deadline:editDeadline,
                },
            })
        );
        navigate('/')
    };
    return (
        <form className="space-y-6" onSubmit={handleEdit}>
            <div className="fieldContainer">
                <label htmlFor="lws-JobTitle" className="text-sm font-medium text-slate-300">Job Title</label>
                <select id="lws-JobTitle" name="lwsJobTitle" required  value={editTitle ? editTitle : ''}
                    onChange={(e) => setEditTitle(e.target.value)}>
                    <option value={editTitle} hidden defaultValue>{editTitle}</option>
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
                <select id="lws-JobType" name="lwsJobType" required  value={editType ? editType : ''}
                    onChange={(e) => setEditType(e.target.value)}>
                    <option value={editType} hidden defaultValue>{editType}</option>
                    <option>Full Time</option>
                    <option>Internship</option>
                    <option>Remote</option>
                </select>
            </div>

            <div className="fieldContainer">
                <label htmlFor="lws-JobSalary">Salary</label>
                <div className="flex border rounded-md shadow-sm border-slate-600">
                    <span className="input-tag">BDT</span>
                    <input type="number" name="lwsJobSalary" id="lws-JobSalary" required className="!rounded-l-none !border-0"
                        placeholder="20,00,000" value={editSalary?editSalary:''}
                        onChange={(e) => setEditSalary(e.target.value)} />
                </div>
            </div>

            <div className="fieldContainer">
                <label htmlFor="lws-JobDeadline">Deadline</label>
                <input type="date" name="lwsJobDeadline" id="lws-JobDeadline" required value={editDeadline?editDeadline:''}
                    onChange={(e) => setEditDeadline(e.target.value)} />
            </div>

            <div className="text-right">
                <button type="submit" id="lws-submit" className="cursor-pointer btn btn-primary w-fit">
                    Edit
                </button>
            </div>
        </form>
    );
};

export default EditForm;