import "./styles.css";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Login from "./Login";
import JobBoard from "./JobBoard";
import JobDetail from "./JobDetail";
import { useState, useEffect } from "react";
import JOBS from "./jobs";
export default function App() {
  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useState(false);
  const [allJobs, setAllJobs] = useState(JOBS);
  useEffect(() => {
    if (loggedIn) {
      navigate("/jobs");
    }
  });

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={<Login loggedIn={loggedIn} setLoggedIn={setLoggedIn} />}
        />
        <Route
          path="/jobs"
          element={<JobBoard allJobs={allJobs} setAllJobs={setAllJobs} />}
        />
        <Route path="/job/:id" element={<JobDetail allJobs={allJobs} />} />
      </Routes>
    </div>
  );
}
