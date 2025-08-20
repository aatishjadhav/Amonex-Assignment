import { Clock } from "lucide-react";
import Badge from "./Badge";

function JobCard({ job, onOpen, trailing }) {
  return (
    <div
      className="p-4 rounded-2xl bg-white/5 border border-white/10 active:scale-[0.99] transition hover:bg-white/[0.07] cursor-pointer"
      onClick={() => onOpen(job)}
      role="button"
    >
      <div className="flex items-center gap-3">
        <div className={`w-12 h-12 ${job.logoBg} rounded-2xl grid place-items-center text-white font-semibold`}>
          {job.title.split(" ")[0].slice(0, 1)}
        </div>
        <div className="flex-1 min-w-0">
          <div className="text-white font-semibold truncate">{job.title}</div>
          <div className="text-white/60 text-sm truncate">
            {job.company} <span className="mx-1">/</span> {job.location}
          </div>
          <div className="mt-2 flex flex-wrap gap-2">
            <Badge>{job.seniority}</Badge>
            <Badge>{job.type}</Badge>
            {job.remote && <Badge>Remote</Badge>}
          </div>
        </div>
        {trailing}
      </div>
      <div className="mt-3 flex items-center justify-between text-white/70 text-sm">
        <div>{job.salary || "—"}</div>
        <div className="flex items-center gap-1"><Clock size={14}/> {job.posted}</div>
      </div>
    </div>
  );
}

export default JobCard;