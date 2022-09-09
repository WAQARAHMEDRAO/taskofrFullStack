import React, { useState } from "react";
import axios from "axios";

const UpdateJob = () => {
  const [first, setfirst] = useState({
    CompanyName: "",
    JobTitle: "",
    JobDescription: "",
    CreatedAt: "",
    _id: "",
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
    axios.put(`http://localhost:5000/api/adminRouter/${first._id}`, newJob);
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
        <input
          type="text"
          name="_id"
          onChange={inPtValue}
          value={first._id}
          placeholder="Job Id"
        />

        <button onClick={onSub}>CLICK MEs</button>
      </form>
    </>
  );
};

export default UpdateJob;
