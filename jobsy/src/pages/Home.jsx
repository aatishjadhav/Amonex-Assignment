import React, { useMemo, useState } from "react";
import { Search, Star, Menu } from "lucide-react";
import JobCard from "../components/JobCard";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

const SUGGESTED_IDS = ["1"]; 
const RECOMMENDED_IDS = ["2", "3"]; 

function BookmarkIcon(){
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" className="text-white/70"><path d="M6 2h12a2 2 0 012 2v18l-8-4-8 4V4a2 2 0 012-2z"/></svg>
  );
}

function FilterIcon(){
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" className="text-white/70"><path d="M3 4h18v2l-7 8v5l-4 2v-7L3 6z"/></svg>
  );
}

function Home({ jobs, onOpenJob, goProfile, currentTab, setCurrentTab }) {
  const [query, setQuery] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return jobs;
    return jobs.filter(
      (j) =>
        j.title.toLowerCase().includes(q) ||
        j.company.toLowerCase().includes(q) ||
        j.location.toLowerCase().includes(q)
    );
  }, [query, jobs]);

  const suggested = filtered.filter((j) => SUGGESTED_IDS.includes(j.id));
  const recommended = filtered.filter((j) => RECOMMENDED_IDS.includes(j.id));

  return (
    <>
      <div className="px-4 lg:px-8 pb-24 lg:pb-8">
        <div className="pt-6 flex items-center justify-between">
          <button 
            className="text-white/70 hover:text-white lg:hidden"
            onClick={() => setSidebarOpen(true)}
          >
            <span className="sr-only">Menu</span>
            <Menu size={20} />
          </button>
          <div className="text-white font-semibold text-xl lg:text-2xl">Let's Find Job</div>
          <button onClick={goProfile} className="w-8 h-8 rounded-full bg-white/20 lg:hidden"/>
        </div>

        <div className="mt-4 lg:mt-6 relative max-w-2xl">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-white/60" size={18}/>
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search Job"
            className="w-full bg-white/10 border border-white/10 rounded-2xl pl-10 pr-12 py-3 text-white placeholder:text-white/50 outline-none focus:border-white/20"
          />
          <button className="absolute right-3 top-1/2 -translate-y-1/2 text-white/70 hover:text-white">
            <FilterIcon />
          </button>
        </div>

        <div className="mt-6 lg:mt-8 space-y-4 lg:space-y-6">
          <div className="space-y-3 lg:space-y-4">
            <Header title="Suggested for you" actionLabel="View All" />
            <div className="grid gap-3 lg:grid-cols-2 xl:grid-cols-3">
              {suggested.map((j) => (
                <JobCard key={j.id} job={j} onOpen={onOpenJob} trailing={<Star size={18} className="text-white/60"/>} />
              ))}
            </div>
          </div>

          <div className="space-y-3 lg:space-y-4">
            <Header title="Recommended for you" actionLabel="View All" />
            <div className="grid gap-3 lg:grid-cols-2 xl:grid-cols-3">
              {recommended.map((j) => (
                <JobCard key={j.id} job={j} onOpen={onOpenJob} trailing={<BookmarkIcon/>} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <Sidebar 
        tab={currentTab} 
        setTab={setCurrentTab} 
        isOpen={sidebarOpen} 
        onClose={() => setSidebarOpen(false)} 
      />
    </>
  );
}

export default Home;