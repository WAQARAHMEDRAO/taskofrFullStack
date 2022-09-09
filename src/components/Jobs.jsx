import React, { useEffect, useState } from "react";
import "./Jobs.css";
import axios from "axios";

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    const getJobs = async () => {
      const jobsData = await axios.get("http://localhost:5000/api/adminRouter");
      setJobs(jobsData.data);
    };
    getJobs();
  }, []);
  return (
    <>
      <div className="mJobDiv">
        {jobs.map((job) => {
          return (
            <div className="jobDetail">
              <h3 className="jid">job Id : {job._id}</h3>
              <h3>job title : {job.Job_Title}</h3>
              <h3>company name : {job.Company_Name}</h3>
              <h3>job description : {job.Job_Description}</h3>
              <h3>job creation : {job.Created_at}</h3>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Jobs;
