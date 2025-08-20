import React, { useState } from "react";
import Home from "./pages/Home";
import JobDetails from "./pages/JobDetails";
import Profile from "./pages/Profile";
import Sidebar from "./components/Sidebar";
import BottomTab from "./components/BottomTab";
import { MOCK_JOBS, initialProfile } from "./data/jobsData";

export default function App() {
  const [jobs] = useState(MOCK_JOBS);
  const [currentTab, setCurrentTab] = useState("home");
  const [selectedJob, setSelectedJob] = useState(null);
  const [profile, setProfile] = useState(initialProfile);

  const openJob = (job) => {
    setSelectedJob(job);
    setCurrentTab("job");
  };

  return (
    <div className="min-h-screen bg-[#121424] text-white/90">
      <Sidebar tab={currentTab} setTab={setCurrentTab} />

      <div className="lg:ml-64">
        <div className="mx-auto max-w-7xl">
          {currentTab === "home" && (
            <Home
              jobs={jobs}
              onOpenJob={openJob}
              goProfile={() => setCurrentTab("profile")}
            />
          )}
          {currentTab === "job" && (
            <JobDetails
              job={selectedJob}
              onBack={() => setCurrentTab("home")}
              onApply={(j) => alert(`Applied to ${j.title}!`)}
            />
          )}
          {currentTab === "profile" && (
            <Profile profile={profile} setProfile={setProfile} />
          )}
        </div>
      </div>

      {/* Bottom nav is hidden on the Job detail apply confirmation to mimic modal; keep it global otherwise */}
      {currentTab !== "job" && (
        <BottomTab tab={currentTab} setTab={setCurrentTab} />
      )}
    </div>
  );
}
