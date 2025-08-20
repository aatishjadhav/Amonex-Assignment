import { Star, Briefcase } from "lucide-react";

function HomeIcon(){
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" className="text-current"><path d="M12 3l9 8h-3v8h-5v-5H11v5H6v-8H3z"/></svg>
  );
}

function UserIcon(){
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" className="text-current"><path d="M12 12c2.761 0 5-2.239 5-5s-2.239-5-5-5-5 2.239-5 5 2.239 5 5 5zm0 2c-4.418 0-8 2.239-8 5v3h16v-3c0-2.761-3.582-5-8-5z"/></svg>
  );
}

function BottomTab({ tab, setTab }) {
  const ITEM = (id, label, icon) => (
    <button
      onClick={() => setTab(id)}
      className={`flex-1 grid place-items-center py-3 rounded-2xl ${
        tab === id ? "bg-white/10" : ""
      }`}
    >
      <div className="text-white/90">{icon}</div>
    </button>
  );
  return (
    <div className="fixed bottom-4 left-0 right-0 px-4 lg:hidden">
      <div className="mx-auto max-w-sm grid grid-cols-4 gap-2 p-2 rounded-2xl bg-white/5 border border-white/10 backdrop-blur">
        {ITEM("home", "Home", <HomeIcon/>) }
        {ITEM("saved", "Saved", <Star size={18}/>) }
        {ITEM("apps", "Apps", <Briefcase size={18}/>) }
        {ITEM("profile", "Profile", <UserIcon/>) }
      </div>
    </div>
  );
}

export default BottomTab;