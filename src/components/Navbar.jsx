import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <div className="nav">
        <div className="jTask">
          <a>
            <Link to="/">JOB TASK</Link>
          </a>
        </div>
        <div className="navitem">
          <a>
            <Link to="/"></Link>
          </a>
          <a>
            <Link to="/editJOBS">Update Job</Link>
          </a>
          <a>
            <Link to="/delteJOBS">Delete Job</Link>
          </a>
          <a>
            <Link to="jobs">JOB</Link>
          </a>
        </div>
      </div>
      <div className="btnDiv">
        <button>
          <Link to="jobs">ADD NEW JOB</Link>
        </button>
        <button>
          <Link to="delteJOBS">DELETE JOB</Link>
        </button>
        <button>
          <Link to="editJOBS">EDITJOB</Link>
        </button>
      </div>
    </>
  );
};

export default Navbar;
