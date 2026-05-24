import React from "react";
import Home from "./Components/Home";
import { Routes, Route } from "react-router-dom";
import Jobs from "./Components/Jobs";
import Joblist from "./Components/Joblist";
import Jobdescription from "./Components/Jobdescription";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/joblist" element={<Joblist />} />
        <Route path="/job/:id" element={<Jobdescription />} />
      </Routes>


      {/* <Joblist/> */}
    </div>
  );
};

export default App;
