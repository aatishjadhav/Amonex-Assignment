export const MOCK_JOBS = [
  {
    id: "1",
    title: "Frontend Designer",
    company: "Info Corp",
    location: "New York",
    seniority: "Senior",
    type: "Full Time",
    salary: "50k - 70k",
    posted: "10 hours ago",
    remote: false,
    country: "USA",
    logoBg: "bg-indigo-500",
    description:
      "We are seeking a seasoned Frontend Designer to craft beautiful, accessible interfaces. You'll collaborate closely with product and engineering to ship polished experiences.",
    responsibilities: [
      "Design and implement pixel-perfect UI with React",
      "Build reusable design system primitives",
      "Partner with UX and PM to scope features",
      "Maintain accessibility and performance best practices",
    ],
  },
  {
    id: "2",
    title: "Python Developer",
    company: "Code INC",
    location: "Germany",
    seniority: "Senior",
    type: "Full Time",
    salary: "80k - 90k",
    posted: "2 days ago",
    remote: true,
    country: "Germany",
    logoBg: "bg-violet-500",
    description:
      "Build reliable data services and APIs powering analytics products. Write clean, well-tested Python and contribute to architecture decisions.",
    responsibilities: [
      "Own backend services in Python/FastAPI",
      "Design scalable data models and pipelines",
      "Collaborate cross‑functionally with Data/Infra",
      "Automate testing and CI/CD workflows",
    ],
  },
  {
    id: "3",
    title: "Product Engineer",
    company: "Cube Tech",
    location: "UK",
    seniority: "Senior",
    type: "Part Time",
    salary: "—",
    posted: "1 week ago",
    remote: true,
    country: "UK",
    logoBg: "bg-fuchsia-500",
    description:
      "Join a small product team shipping end‑to‑end features across the stack. You'll prototype, build, and iterate with speed.",
    responsibilities: [
      "Ship delightful UX with React/Node",
      "Instrument analytics and feedback loops",
      "Participate in on‑call and incident reviews",
      "Mentor junior engineers",
    ],
  },
];

export const initialProfile = {
  name: "Taylor Brooks",
  location: "New York, United States",
  phone: "(208) 555‑0112",
  email: "example@mail.com",
  about:
    "Senior engineer passionate about developer experience and building teams that ship.",
  experience: [
    {
      id: "e1",
      role: "Frontend Designer",
      company: "Info Corp",
      location: "New York",
      start: "Dec 2020",
      end: "Present",
      description: "Led UI system unification across 4 products; 30% faster delivery.",
      logoBg: "bg-indigo-500",
    },
  ],
  education: [
    {
      id: "ed1",
      school: "State University",
      program: "Computer Engineering",
      start: "2016",
      end: "2020",
    },
  ],
};