import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)


// import React, { useMemo, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   Search,
//   Star,
//   ArrowLeft,
//   Share2,
//   Edit2,
//   Plus,
//   MapPin,
//   Briefcase,
//   Clock,
//   Banknote,
//   Building2,
//   Phone,
//   Mail,
// } from "lucide-react";

// /**
//  * Single-file, mobile-first job listing app
//  * - Home (search + suggested/recommended)
//  * - Job Detail (tabs: Job Details / About Company)
//  * - Profile (editable contact/about + experience add/edit)
//  *
//  * Tech: React + TailwindCSS + Framer Motion + Lucide icons
//  * Data: Static mocks (can be replaced by API later)
//  */

// // ---------- Mock Data ----------
// const JOBS = [
//   {
//     id: "j1",
//     title: "Frontend Designer",
//     company: "Info Corp",
//     location: "New York",
//     seniority: "Senior",
//     type: "Full Time",
//     salary: "50k - 70k",
//     postedAgo: "10 hours ago",
//     tags: ["Senior", "Full Time"],
//     mode: "Onsite",
//     logo: "🧩",
//     description:
//       "We are looking for a seasoned Frontend Designer to craft elegant, accessible and high-performing UI experiences across web and mobile.",
//     responsibilities: [
//       "Translate user needs into pixel-perfect interfaces",
//       "Own component libraries and design systems",
//       "Collaborate with PMs, Designers and Engineers",
//       "Ship performance-focused code with modern tooling",
//     ],
//     aboutCompany:
//       "Info Corp builds tools that power modern digital businesses. Our design culture values craft, curiosity and low-ego collaboration.",
//   },
//   {
//     id: "j2",
//     title: "Python Developer",
//     company: "Code INC",
//     location: "Germany",
//     seniority: "Senior",
//     type: "Full Time",
//     salary: "80k - 90k",
//     postedAgo: "2 days ago",
//     tags: ["Senior", "Full Time", "Remote"],
//     mode: "Remote",
//     logo: "🧠",
//     description:
//       "Design, develop and optimize backend services and APIs using Python. Own reliability, observability and developer experience.",
//     responsibilities: [
//       "Build scalable microservices in Python",
//       "Write tests and automate CI/CD",
//       "Collaborate on architecture and design docs",
//       "Monitor, profile and improve performance",
//     ],
//     aboutCompany:
//       "Code INC is an engineering-first company shipping developer platforms and data products used worldwide.",
//   },
//   {
//     id: "j3",
//     title: "Product Engineer",
//     company: "Cube Tech",
//     location: "UK",
//     seniority: "Senior",
//     type: "Part Time",
//     salary: "—",
//     postedAgo: "3 days ago",
//     tags: ["Senior", "Part Time", "Remote"],
//     mode: "Remote",
//     logo: "🧪",
//     description:
//       "Shape product from 0→1 with rapid prototyping, customer discovery and pragmatic engineering.",
//     responsibilities: [
//       "Prototype new product bets",
//       "Instrument analytics and feedback loops",
//       "Own end-to-end vertical slices",
//     ],
//     aboutCompany:
//       "Cube Tech is a small distributed team building workflow tools for modern teams.",
//   },
// ];

// const INITIAL_PROFILE = {
//   name: "Atish Jadhav",
//   location: "New York, United States",
//   phone: "(208) 555-0112",
//   email: "example@mail.com",
//   about:
//     "Frontend developer with a knack for delightful UX, performance and clean abstractions.",
//   experience: [
//     {
//       id: "e1",
//       role: "Frontend Designer",
//       company: "Info Corp",
//       location: "New York",
//       start: "Dec 2020",
//       end: "Present",
//       description:
//         "Led UI system migration to Tailwind and improved CLS by 35%. Mentored 4 engineers.",
//     },
//   ],
// };

// // ---------- UI Primitives ----------
// const Screen = ({ children }) => (
//   <div className="min-h-screen bg-[#0C0E16] text-slate-100 flex flex-col">
//     <div className="h-6" />
//     <div className="mx-auto w-full max-w-md px-4 pb-28">{children}</div>
//   </div>
// );

// const Card = ({ children, className = "" }) => (
//   <div className={`bg-[#15192C] rounded-2xl border border-white/5 ${className}`}>{children}</div>
// );

// const Tag = ({ children }) => (
//   <span className="text-xs rounded-xl bg-white/5 px-2.5 py-1 border border-white/10">{children}</span>
// );

// const BottomBar = ({ current, onNavigate }) => {
//   const items = [
//     { key: "home", label: "Home", icon: <svg width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M12 3l9 8h-3v9h-5v-6H11v6H6v-9H3z"/></svg> },
//     { key: "saved", label: "Saved", icon: <Star className="w-5 h-5" /> },
//     { key: "profile", label: "Profile", icon: <svg width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M12 12c2.76 0 5-2.24 5-5s-2.24-5-5-5s-5 2.24-5 5s2.24 5 5 5m0 2c-4.42 0-8 1.79-8 4v3h16v-3c0-2.21-3.58-4-8-4"/></svg> },
//   ];
//   return (
//     <div className="fixed bottom-0 inset-x-0 z-10">
//       <div className="mx-auto max-w-md px-4 pb-6">
//         <Card className="px-3 py-2 backdrop-blur">
//           <div className="flex items-center justify-around">
//             {items.map((it) => (
//               <button
//                 key={it.key}
//                 onClick={() => onNavigate(it.key)}
//                 className={`flex flex-col items-center gap-1 px-3 py-2 rounded-xl ${
//                   current === it.key ? "text-indigo-300" : "text-slate-300/80"
//                 }`}
//               >
//                 {it.icon}
//                 <span className="text-[11px]">{it.label}</span>
//               </button>
//             ))}
//           </div>
//         </Card>
//       </div>
//     </div>
//   );
// };

// // ---------- Screens ----------
// function Home({ onOpenJob }) {
//   const [query, setQuery] = useState("");

//   const filtered = useMemo(() => {
//     const q = query.toLowerCase();
//     return JOBS.filter(
//       (j) => j.title.toLowerCase().includes(q) || j.company.toLowerCase().includes(q)
//     );
//   }, [query]);

//   return (
//     <Screen>
//       <header className="flex items-center justify-between pt-2">
//         <button className="p-2 rounded-xl bg-white/5 border border-white/10">
//           <svg width="18" height="18" viewBox="0 0 24 24"><path fill="currentColor" d="M3 6h18v2H3V6m0 5h18v2H3v-2m0 5h18v2H3v-2"/></svg>
//         </button>
//         <h1 className="text-xl font-semibold tracking-tight">Let’s Find Job</h1>
//         <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-400 to-fuchsia-400 flex items-center justify-center text-xs font-bold">AJ</div>
//       </header>

//       {/* search */}
//       <div className="mt-4">
//         <div className="flex items-center gap-2 bg-[#101323] border border-white/10 rounded-2xl px-3 py-3">
//           <Search className="w-5 h-5 text-slate-300" />
//           <input
//             value={query}
//             onChange={(e) => setQuery(e.target.value)}
//             placeholder="Search Job"
//             className="bg-transparent outline-none w-full text-sm placeholder:text-slate-400"
//           />
//           <button className="p-2 rounded-xl bg-white/5 border border-white/10">
//             <svg width="16" height="16" viewBox="0 0 24 24"><path fill="currentColor" d="M3 5h18v2H3V5m4 6h14v2H7v-2M3 17h18v2H3v-2Z"/></svg>
//           </button>
//         </div>
//       </div>

//       {/* Suggested */}
//       <section className="mt-6">
//         <div className="flex items-center justify-between">
//           <h2 className="text-sm text-slate-300">Suggested for you</h2>
//           <button className="text-xs text-indigo-300">View All</button>
//         </div>
//         <div className="mt-3 space-y-3">
//           <Card className="p-4">
//             <div className="flex items-start gap-3">
//               <div className="w-12 h-12 rounded-2xl bg-indigo-300/20 border border-indigo-400/20 flex items-center justify-center text-xl">🧩</div>
//               <div className="flex-1">
//                 <div className="text-sm font-semibold">Frontend Designer</div>
//                 <div className="text-xs text-slate-400 flex items-center gap-1">
//                   Info Corp <span className="opacity-40">/</span> New York
//                 </div>
//                 <div className="flex gap-2 mt-2">
//                   <Tag>Senior</Tag>
//                   <Tag>Full Time</Tag>
//                   <Tag>50k - 70k</Tag>
//                 </div>
//                 <div className="text-[11px] text-slate-400 mt-3">10 hours ago</div>
//               </div>
//               <button className="p-2 rounded-xl bg-white/5 border border-white/10">
//                 <Star className="w-4 h-4" />
//               </button>
//             </div>
//           </Card>
//           <div className="flex items-center justify-center gap-2">
//             <div className="w-1.5 h-1.5 rounded-full bg-white/30" />
//             <div className="w-3 h-1.5 rounded-full bg-white/70" />
//             <div className="w-1.5 h-1.5 rounded-full bg-white/30" />
//           </div>
//         </div>
//       </section>

//       {/* Recommended */}
//       <section className="mt-4">
//         <div className="flex items-center justify-between">
//           <h2 className="text-sm text-slate-300">Recommended for you</h2>
//           <button className="text-xs text-indigo-300">View All</button>
//         </div>

//         <div className="mt-3 space-y-3">
//           {filtered.map((job) => (
//             <Card key={job.id} className="p-4">
//               <button onClick={() => onOpenJob(job)} className="w-full text-left">
//                 <div className="flex items-start gap-3">
//                   <div className="w-12 h-12 rounded-2xl bg-indigo-300/20 border border-indigo-400/20 flex items-center justify-center text-xl">
//                     {job.logo}
//                   </div>
//                   <div className="flex-1">
//                     <div className="text-sm font-semibold">{job.title}</div>
//                     <div className="text-xs text-slate-400 flex items-center gap-1">
//                       {job.company} <span className="opacity-40">/</span> {job.location}
//                     </div>
//                     <div className="flex gap-2 mt-2 flex-wrap">
//                       {job.tags.map((t) => (
//                         <Tag key={t}>{t}</Tag>
//                       ))}
//                     </div>
//                     <div className="flex items-center justify-between mt-3 text-[11px] text-slate-400">
//                       <span>{job.salary}</span>
//                       <span>{job.postedAgo}</span>
//                     </div>
//                   </div>
//                   <div className="opacity-60">
//                     <svg width="16" height="16" viewBox="0 0 24 24"><path fill="currentColor" d="M12 8l6 4l-6 4z"/></svg>
//                   </div>
//                 </div>
//               </button>
//             </Card>
//           ))}
//         </div>
//       </section>
//     </Screen>
//   );
// }

// function JobDetail({ job, onBack }) {
//   const [tab, setTab] = useState("details");
//   if (!job) return null;
//   return (
//     <Screen>
//       <header className="flex items-center justify-between pt-2">
//         <button onClick={onBack} className="p-2 rounded-xl bg-white/5 border border-white/10">
//           <ArrowLeft className="w-5 h-5" />
//         </button>
//         <div className="text-sm">Job Description</div>
//         <button className="p-2 rounded-xl bg-white/5 border border-white/10">
//           <Share2 className="w-4 h-4" />
//         </button>
//       </header>

//       <div className="flex flex-col items-center mt-6">
//         <div className="w-14 h-14 rounded-2xl bg-indigo-300/20 border border-indigo-400/20 flex items-center justify-center text-2xl">
//           {job.logo}
//         </div>
//         <div className="mt-3 text-lg font-semibold">{job.title}</div>
//         <div className="text-xs text-slate-400 flex items-center gap-1">
//           {job.company} <span className="opacity-40">/</span> {job.location}
//         </div>
//         <div className="mt-2 text-sm">{job.salary}</div>
//         <div className="flex gap-2 mt-3 flex-wrap">
//           {job.tags.map((t) => (
//             <Tag key={t}>{t}</Tag>
//           ))}
//         </div>
//       </div>

//       {/* Tabs */}
//       <div className="mt-6 flex gap-2">
//         <button
//           onClick={() => setTab("details")}
//           className={`flex-1 text-sm rounded-xl px-3 py-2 border ${
//             tab === "details"
//               ? "bg-indigo-400/20 border-indigo-300/40 text-indigo-200"
//               : "bg-white/5 border-white/10"
//           }`}
//         >
//           Job Details
//         </button>
//         <button
//           onClick={() => setTab("about")}
//           className={`flex-1 text-sm rounded-xl px-3 py-2 border ${
//             tab === "about"
//               ? "bg-indigo-400/20 border-indigo-300/40 text-indigo-200"
//               : "bg-white/5 border-white/10"
//           }`}
//         >
//           About Company
//         </button>
//       </div>

//       <AnimatePresence mode="wait">
//         {tab === "details" ? (
//           <motion.div
//             key="details"
//             initial={{ opacity: 0, y: 8 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -8 }}
//             className="mt-6"
//           >
//             <div>
//               <div className="text-sm font-semibold">Job Description</div>
//               <p className="mt-2 text-sm text-slate-300/90 leading-6">
//                 {job.description}
//               </p>
//             </div>
//             <div className="mt-6">
//               <div className="text-sm font-semibold">Key Responsibilities</div>
//               <ul className="mt-2 space-y-2 text-sm text-slate-300/90">
//                 {job.responsibilities.map((r, i) => (
//                   <li key={i} className="flex gap-2">
//                     <span className="mt-1 block w-1.5 h-1.5 rounded-full bg-slate-400/80" />
//                     <span>{r}</span>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </motion.div>
//         ) : (
//           <motion.div
//             key="about"
//             initial={{ opacity: 0, y: 8 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -8 }}
//             className="mt-6"
//           >
//             <p className="text-sm text-slate-300/90 leading-6">{job.aboutCompany}</p>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       <div className="mt-8">
//         <button className="w-full rounded-2xl bg-indigo-500/90 hover:bg-indigo-500 transition-colors text-sm font-semibold py-3">
//           Apply Now
//         </button>
//       </div>
//     </Screen>
//   );
// }

// function Profile() {
//   const [profile, setProfile] = useState(INITIAL_PROFILE);
//   const [progress, setProgress] = useState(9);
//   const [draft, setDraft] = useState(profile);
//   const [editing, setEditing] = useState({ contact: false, about: false });

//   const saveSection = (key) => {
//     setProfile((p) => ({ ...p, ...draft }));
//     setEditing((e) => ({ ...e, [key]: false }));
//     setProgress((x) => Math.min(10, x + 1));
//   };

//   const addExperience = () => {
//     const n = {
//       id: crypto.randomUUID(),
//       role: "New Role",
//       company: "Company",
//       location: "Remote",
//       start: "Jan 2024",
//       end: "Present",
//       description: "Describe impact and outcomes.",
//     };
//     setDraft((d) => ({ ...d, experience: [n, ...d.experience] }));
//     setProfile((p) => ({ ...p, experience: [n, ...p.experience] }));
//   };

//   const updateExp = (id, patch) => {
//     setDraft((d) => ({
//       ...d,
//       experience: d.experience.map((e) => (e.id === id ? { ...e, ...patch } : e)),
//     }));
//     setProfile((p) => ({
//       ...p,
//       experience: p.experience.map((e) => (e.id === id ? { ...e, ...patch } : e)),
//     }));
//   };

//   return (
//     <Screen>
//       <header className="flex items-center gap-3 pt-2">
//         <button className="p-2 rounded-xl bg-white/5 border border-white/10">
//           <ArrowLeft className="w-5 h-5" />
//         </button>
//         <div className="text-sm">Profile</div>
//         <div className="ml-auto flex items-center gap-3">
//           <button className="p-2 rounded-xl bg-white/5 border border-white/10">
//             <svg width="16" height="16" viewBox="0 0 24 24"><path fill="currentColor" d="M12 8a4 4 0 1 0 4 4a4 4 0 0 0-4-4m8.66 4a6.66 6.66 0 0 1-.11 1.22l2.11 1.65a.5.5 0 0 1 .12.64l-2 3.46a.5.5 0 0 1-.61.22l-2.49-1a7.1 7.1 0 0 1-1.06.62l-.38 2.65a.5.5 0 0 1-.5.42h-4a.5.5 0 0 1-.5-.42l-.38-2.65a7.1 7.1 0 0 1-1.06-.62l-2.49 1a.5.5 0 0 1-.61-.22l-2-3.46a.5.5 0 0 1 .12-.64l2.11-1.65a6.66 6.66 0 0 1 0-2.44L2.66 9.13a.5.5 0 0 1-.12-.64l2-3.46a.5.5 0 0 1 .61-.22l2.49 1a7.1 7.1 0 0 1 1.06-.62l.38-2.65A.5.5 0 0 1 10.5 0h4a.5.5 0 0 1 .5.42l.38 2.65a7.1 7.1 0 0 1 1.06.62l2.49-1a.5.5 0 0 1 .61.22l2 3.46a.5.5 0 0 1-.12.64L20.55 9a6.66 6.66 0 0 1 .11 1"/></svg>
//           </button>
//           <button className="p-2 rounded-xl bg-white/5 border border-white/10">
//             <svg width="16" height="16" viewBox="0 0 24 24"><path fill="currentColor" d="M12 7a5 5 0 1 0 5 5a5 5 0 0 0-5-5m0-5a1 1 0 0 1 1 1v2.07a7 7 0 0 1 5 3l1.79-.89a1 1 0 0 1 1.34.45l1 1.73a1 1 0 0 1-.36 1.37l-1.79.9a6.92 6.92 0 0 1 0 3.46l1.79.9a1 1 0 0 1 .36 1.37l-1 1.73a1 1 0 0 1-1.34.45L18 19.93a7 7 0 0 1-5 3V25a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2.07a7 7 0 0 1-5-3l-1.79.89a1 1 0 0 1-1.34-.45l-1-1.73a1 1 0 0 1 .36-1.37l1.79-.9a6.92 6.92 0 0 1 0-3.46l-1.79-.9A1 1 0 0 1 .21 8.7l1-1.73a1 1 0 0 1 1.34-.45L4.34 7.4a7 7 0 0 1 5-3V2a1 1 0 0 1 1-1Z"/></svg>
//           </button>
//         </div>
//       </header>

//       {/* progress */}
//       <div className="mt-4">
//         <div className="text-xs text-slate-300">{progress}/10</div>
//         <div className="h-2 rounded-full bg-white/5 overflow-hidden mt-2">
//           <div
//             className="h-full bg-indigo-400"
//             style={{ width: `${(progress / 10) * 100}%` }}
//           />
//         </div>
//       </div>

//       {/* Contact */}
//       <Card className="mt-5 p-4">
//         <div className="flex items-center justify-between">
//           <div className="text-sm font-semibold">Contact Info</div>
//           <button
//             onClick={() => setEditing((e) => ({ ...e, contact: !e.contact }))}
//             className="text-xs flex items-center gap-1 text-indigo-300"
//           >
//             <Edit2 className="w-3.5 h-3.5" /> Edit
//           </button>
//         </div>
//         <div className="mt-3 space-y-3 text-sm">
//           <div className="flex items-center gap-3">
//             <MapPin className="w-4 h-4 text-slate-300" />
//             {editing.contact ? (
//               <input
//                 className="flex-1 bg-white/5 border border-white/10 rounded-lg px-3 py-2"
//                 value={draft.location}
//                 onChange={(e) => setDraft({ ...draft, location: e.target.value })}
//               />
//             ) : (
//               <div>{profile.location}</div>
//             )}
//           </div>
//           <div className="flex items-center gap-3">
//             <Phone className="w-4 h-4 text-slate-300" />
//             {editing.contact ? (
//               <input
//                 className="flex-1 bg-white/5 border border-white/10 rounded-lg px-3 py-2"
//                 value={draft.phone}
//                 onChange={(e) => setDraft({ ...draft, phone: e.target.value })}
//               />
//             ) : (
//               <div>{profile.phone}</div>
//             )}
//           </div>
//           <div className="flex items-center gap-3">
//             <Mail className="w-4 h-4 text-slate-300" />
//             {editing.contact ? (
//               <input
//                 className="flex-1 bg-white/5 border border-white/10 rounded-lg px-3 py-2"
//                 value={draft.email}
//                 onChange={(e) => setDraft({ ...draft, email: e.target.value })}
//               />
//             ) : (
//               <div>{profile.email}</div>
//             )}
//           </div>
//         </div>
//         {editing.contact && (
//           <div className="mt-4 flex justify-end gap-2">
//             <button onClick={() => setEditing((e) => ({ ...e, contact: false }))} className="text-xs px-3 py-2 rounded-lg bg-white/5 border border-white/10">Cancel</button>
//             <button onClick={() => saveSection("contact")} className="text-xs px-3 py-2 rounded-lg bg-indigo-500/90">Save</button>
//           </div>
//         )}
//       </Card>

//       {/* About */}
//       <Card className="mt-4 p-4">
//         <div className="flex items-center justify-between">
//           <div className="text-sm font-semibold">About Me</div>
//           <button
//             onClick={() => setEditing((e) => ({ ...e, about: !e.about }))}
//             className="text-xs flex items-center gap-1 text-indigo-300"
//           >
//             <Edit2 className="w-3.5 h-3.5" /> Edit
//           </button>
//         </div>
//         <div className="mt-3 text-sm text-slate-300">
//           {editing.about ? (
//             <textarea
//               className="w-full min-h-[90px] bg-white/5 border border-white/10 rounded-lg p-3"
//               value={draft.about}
//               onChange={(e) => setDraft({ ...draft, about: e.target.value })}
//             />
//           ) : (
//             <p>{profile.about}</p>
//           )}
//         </div>
//         {editing.about && (
//           <div className="mt-4 flex justify-end gap-2">
//             <button onClick={() => setEditing((e) => ({ ...e, about: false }))} className="text-xs px-3 py-2 rounded-lg bg-white/5 border border-white/10">Cancel</button>
//             <button onClick={() => saveSection("about")} className="text-xs px-3 py-2 rounded-lg bg-indigo-500/90">Save</button>
//           </div>
//         )}
//       </Card>

//       {/* Experience */}
//       <Card className="mt-4 p-4">
//         <div className="flex items-center justify-between">
//           <div className="text-sm font-semibold">Experience</div>
//           <button onClick={addExperience} className="text-xs flex items-center gap-1 text-indigo-300">
//             <Plus className="w-3.5 h-3.5" /> Add
//           </button>
//         </div>
//         <div className="mt-3 space-y-3">
//           {profile.experience.map((exp) => (
//             <Card key={exp.id} className="p-3">
//               <div className="flex items-start gap-3">
//                 <div className="w-10 h-10 rounded-xl bg-indigo-300/20 border border-indigo-400/20 flex items-center justify-center"><Briefcase className="w-4 h-4"/></div>
//                 <div className="flex-1 text-sm">
//                   <div className="font-semibold">{exp.role}</div>
//                   <div className="text-slate-400 flex items-center gap-1 text-xs">
//                     {exp.company} <span className="opacity-40">/</span> {exp.location}
//                   </div>
//                   <div className="text-xs text-slate-400 mt-1">{exp.start} - {exp.end}</div>
//                   <textarea
//                     className="w-full mt-2 bg-white/5 border border-white/10 rounded-lg p-2"
//                     value={exp.description}
//                     onChange={(e) => updateExp(exp.id, { description: e.target.value })}
//                   />
//                 </div>
//                 <button className="opacity-70"><Edit2 className="w-4 h-4" /></button>
//               </div>
//             </Card>
//           ))}
//         </div>
//       </Card>
//     </Screen>
//   );
// }

// // ---------- App Shell ----------
// export default function App() {
//   const [view, setView] = useState("home"); // home | detail | profile
//   const [selected, setSelected] = useState(null);

//   const openJob = (job) => {
//     setSelected(job);
//     setView("detail");
//   };

//   return (
//     <div className="font-[Inter] antialiased">
//       <AnimatePresence mode="wait">
//         {view === "home" && (
//           <motion.div key="home" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
//             <Home onOpenJob={openJob} />
//           </motion.div>
//         )}
//         {view === "detail" && (
//           <motion.div key="detail" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
//             <JobDetail job={selected} onBack={() => setView("home")} />
//           </motion.div>
//         )}
//         {view === "profile" && (
//           <motion.div key="profile" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
//             <Profile />
//           </motion.div>
//         )}
//       </AnimatePresence>

//       <BottomBar current={view === "detail" ? "saved" : view} onNavigate={(k) => {
//         if (k === "home") setView("home");
//         if (k === "saved") setView("detail"); // demo: open detail or saved
//         if (k === "profile") setView("profile");
//       }} />
//     </div>
//   );
// }
