import { ArrowLeft, Share2 } from "lucide-react";
import Badge from "../components/Badge";

function JobDetails({ job, onBack, onApply }) {
  if (!job) return null;
  return (
    <div className="px-4 lg:px-8 pb-24 lg:pb-8">
      <div className="pt-6 flex items-center justify-between">
        <button className="text-white/80 hover:text-white" onClick={onBack}><ArrowLeft/></button>
        <div className="text-white/90 font-medium">Job Description</div>
        <button className="text-white/80 hover:text-white"><Share2/></button>
      </div>

      <div className="mt-6 lg:mt-8 max-w-4xl mx-auto">
        <div className="lg:grid lg:grid-cols-3 lg:gap-8">
          <div className="lg:col-span-2">
            <div className="flex flex-col items-center lg:items-start lg:flex-row lg:gap-6">
              <div className={`w-16 h-16 lg:w-20 lg:h-20 ${job.logoBg} rounded-2xl grid place-items-center text-white font-semibold text-xl lg:text-2xl`}>
                {job.title.split(" ")[0].slice(0, 1)}
              </div>
              <div className="mt-3 lg:mt-0 text-center lg:text-left">
                <div className="text-white text-xl lg:text-2xl font-semibold">{job.title}</div>
                <div className="text-white/60 text-sm lg:text-base">{job.company} <span className="mx-1">/</span> {job.country}</div>
                <div className="text-white/80 mt-1 lg:text-lg">{job.salary}</div>
                <div className="mt-3 flex gap-2 justify-center lg:justify-start">
                  <Badge>{job.seniority}</Badge>
                  <Badge>{job.type}</Badge>
                  {job.remote && <Badge>Remote</Badge>}
                </div>
              </div>
            </div>

            <div className="mt-6 lg:mt-8 flex gap-2">
              <button className="flex-1 py-2 lg:py-3 rounded-xl bg-white/10 text-white hover:bg-white/15">Job Details</button>
              <button className="flex-1 py-2 lg:py-3 rounded-xl bg-white/5 text-white/70 border border-white/10 hover:bg-white/10">About Company</button>
            </div>

            <div className="mt-5 lg:mt-6 text-white/90 font-semibold lg:text-lg">Job Description</div>
            <p className="mt-2 text-white/70 text-sm lg:text-base leading-relaxed">{job.description}</p>

            <div className="mt-5 lg:mt-6 text-white/90 font-semibold lg:text-lg">Key Responsibilities</div>
            <ul className="mt-2 space-y-2 text-white/70 text-sm lg:text-base">
              {job.responsibilities.map((r, idx) => (
                <li key={idx} className="flex gap-2 items-start"><span className="mt-1 lg:mt-1.5 w-1.5 h-1.5 rounded-full bg-white/60"/> <span>{r}</span></li>
              ))}
            </ul>
          </div>

          <div className="mt-6 lg:mt-0">
            <button
              onClick={() => onApply(job)}
              className="w-full py-3 lg:py-4 rounded-2xl bg-indigo-400 text-indigo-950 font-semibold active:scale-[0.99] hover:bg-indigo-300 lg:text-lg"
            >
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobDetails;