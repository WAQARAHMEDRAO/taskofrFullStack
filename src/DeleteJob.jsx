import React, { useState } from "react";
import axios from "axios";

const DeleteJob = () => {
  const [first, setfirst] = useState({
    JobTitle: "",
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
    event.preventDefault();

    axios.delete(`http://localhost:5000/api/adminRouter/${first._id}`);
    window.location.reload();
    console.log(first);
  };
  return (
    <>
      <form className="jobDesc">
        <input
          type="text"
          name="JobTitle"
          onChange={inPtValue}
          value={first.JobTitle}
          placeholder="Job Title"
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

export default DeleteJob;
