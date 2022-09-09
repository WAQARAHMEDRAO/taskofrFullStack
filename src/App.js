import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateJob from "./components/CreateJob";
import Home from "./components/Home";
import Jobs from "./components/Jobs";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import SignIn from "./components/SignIn";
import UpdateJob from "./components/UpdateJob";
import DeleteJob from "./DeleteJob";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Login" element={<Login />} />
        <Route path="Signin" element={<SignIn />} />
        <Route path="Jobs" element={<CreateJob />} />
        <Route path="editJOBS" element={<UpdateJob />} />
        <Route path="delteJOBS" element={<DeleteJob />} />
      </Routes>

      <Jobs />
    </BrowserRouter>
  );
};

export default App;
