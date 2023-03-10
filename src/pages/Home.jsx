import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import HomeMenu from '../components/HomeMenu';
import Job from '../components/Job';
import SideBar from '../components/SideBar';
import { fetchJobs } from '../features/jobs/jobsSlice';

const Home = () => {
    const dispatch = useDispatch();

    const { jobs, isLoading, isError } = useSelector(
        (state) => state.jobs
    );
    const { byType,bySearch,bySalary } = useSelector(
        (state) => state.filters
    );

    useEffect(() => {
        dispatch(fetchJobs());
    }, [dispatch]);
    // filter here - 

    const handleFilterByType=(dt)=>{
        if(byType=='internship') return dt.type=='Internship'
        if(byType=='remote') return dt.type=='Remote'
        if(byType=='full_time') return dt.type=='Full Time'
        return true;
    }

    const handleFilterBySearch=(dt)=>{
        if(bySearch) return dt.title.toLowerCase().includes(bySearch.toLowerCase())
        return true;
    }

    const handleSortBySalary=(a, b) =>{
        if (bySalary == 'default') {
            return true;
        } else if (bySalary == 'lowTohigh') {
            return parseFloat(b.salary) - parseFloat(a.salary) ;
        } else if (bySalary == 'highTolow') {
            return parseFloat(a.salary) - parseFloat(b.salary);
        }
        return true;
    }


    //filter end

    let content = null;
    if (isLoading) content = <p>Loading...</p>;

    if (!isLoading && isError)
        content = <p className="error">There was an error occured</p>;

    if (!isLoading && !isError && jobs?.length > 0) {
        content = jobs
            .filter(handleFilterByType)
            .filter(handleFilterBySearch)
            .slice().sort(handleSortBySalary)
            .map((dt) => (
                <Job key={dt.id} job={dt} />
            )).reverse();
    }

    if (!isLoading && !isError && jobs?.length === 0) {
        content = <p>No jobs found!</p>;
    }

    return (
        <div className="max-w-[90rem] mx-auto px-4 sm:px-6 md:px-8 ">
            <SideBar />
            <div className="lg:pl-[14rem]  mt-[5.8125rem]">
                <main className="max-w-3xl rounded-lg  mx-auto relative z-20 p-10 xl:max-w-none bg-[#1E293B]">
                    <HomeMenu byType={byType}/>
                    <div className="jobs-list">
                        {
                            content
                        }
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Home;