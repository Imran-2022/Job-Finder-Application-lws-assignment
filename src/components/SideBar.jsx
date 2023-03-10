import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { filterByType } from '../features/filter/filterByTypeSearchSaralySlice';

const SideBar = () => {

    const dispatch = useDispatch();

    const handleFilterByType = (type) => {
        dispatch(filterByType(type));
    };


    return (
        <div className="sidebar">
            <nav>
                <ul className="space-y-4">
                    <li>
                        <ul onClick={() => handleFilterByType('all')}>
                            <Link to="/" className="main-menu menu-active" id="lws-alljobs-menu">
                                <i className="fa-solid fa-briefcase"></i>
                                <span> All Available Jobs</span>
                            </Link>
                        </ul>
                        <ul className="space-y-6 lg:space-y-2 ">
                            <li onClick={() => handleFilterByType('internship')}>
                                <Link to="/" className="sub-menu" id="lws-internship-menu">
                                    <i className="fa-solid fa-stop !text-[#FF5757]"></i>
                                    <span> Internship</span>
                                </Link>
                            </li>
                            <li onClick={() => handleFilterByType('full_time')}>
                                <Link to="/" className="sub-menu" id="lws-fulltime-menu">
                                    <i className="fa-solid fa-stop !text-[#FF8A00]"></i>
                                    <span> Full Time</span>
                                </Link>
                            </li>
                            <li onClick={() => handleFilterByType('remote')}>
                                <Link to="/" className="sub-menu" id="lws-remote-menu">
                                    <i className="fa-solid fa-stop !text-[#56E5C4]"></i>
                                    <span> Remote</span>
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <Link to="/add" className="main-menu" id="lws-addJob-menu">
                            <i className="fa-solid fa-file-circle-plus"></i>
                            <span> Add NewJob</span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default SideBar;