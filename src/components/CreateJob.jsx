import React, { useState } from "react";
import "./CreateJob.css";
import axios from "axios";

const CreateJob = () => {
  const [first, setfirst] = useState({
    CompanyName: "",
    JobTitle: "",
    JobDescription: "",
    CreatedAt: "",
  });
  const inPtValue = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setfirst((previos) => {
      return {
        ...previos,
        [name]: value,
      };
    });
  };
  const onSub = (event) => {
    // event.preventDefault();
    event.preventDefault();
    const newJob = {
      Company_Name: first.CompanyName,
      Job_Title: first.JobTitle,
      Job_Description: first.JobDescription,
      Created_at: first.CreatedAt,
    };
    axios.post("http://localhost:5000/api/adminRouter", newJob);
    window.location.reload();
    console.log(first);
  };

  return (
    <>
      <form className="jobDesc">
        <input
          type="text"
          name="CompanyName"
          onChange={inPtValue}
          value={first.CompanyName}
          placeholder="Company Name"
        />
        <input
          type="text"
          name="JobTitle"
          onChange={inPtValue}
          value={first.JobTitle}
          placeholder="Job Title"
        />
        <input
          type="text"
          name="JobDescription"
          onChange={inPtValue}
          value={first.JobDescription}
          placeholder="Job Desc"
        />
        <input
          type="text"
          name="CreatedAt"
          onChange={inPtValue}
          value={first.CreatedAt}
          placeholder="Job Created"
        />
        <button onClick={onSub} className="btn">
          Click Me
        </button>
      </form>
    </>
  );
};

export default CreateJob;
