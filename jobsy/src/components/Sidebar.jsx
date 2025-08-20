import { Star, Briefcase, X } from "lucide-react";

function HomeIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="20"
      height="20"
      fill="currentColor"
      className="text-current"
    >
      <path d="M12 3l9 8h-3v8h-5v-5H11v5H6v-8H3z" />
    </svg>
  );
}

function UserIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="20"
      height="20"
      fill="currentColor"
      className="text-current"
    >
      <path d="M12 12c2.761 0 5-2.239 5-5s-2.239-5-5-5-5 2.239-5 5 2.239 5 5 5zm0 2c-4.418 0-8 2.239-8 5v3h16v-3c0-2.761-3.582-5-8-5z" />
    </svg>
  );
}

function Sidebar({ tab, setTab, isOpen, onClose }) {
  const ITEM = (id, label, icon) => (
    <button
      onClick={() => {
        setTab(id);
        onClose();
      }}
      className={`flex items-center gap-3 w-full px-4 py-3 rounded-xl text-left transition ${
        tab === id
          ? "bg-white/10 text-white"
          : "text-white/70 hover:text-white hover:bg-white/5"
      }`}
    >
      <div className="w-5 h-5">{icon}</div>
      <span className="font-medium">{label}</span>
    </button>
  );

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar itself (always visible on desktop) */}
      <div
        className={`fixed left-0 top-0 bottom-0 w-64 bg-[#121424] border-r border-white/10 p-6 z-50
        ${isOpen ? "block" : "hidden"} lg:block`}
      >
        <div className="flex items-center justify-between mb-8">
          <div className="text-white font-bold text-xl">JobFinder</div>
          <button
            onClick={onClose}
            className="text-white/70 hover:text-white lg:hidden"
          >
            <X size={20} />
          </button>
        </div>

        <nav className="space-y-2">
          {ITEM("home", "Home", <HomeIcon />)}
          {ITEM("saved", "Saved", <Star size={20} />)}
          {ITEM("apps", "Applications", <Briefcase size={20} />)}
          {ITEM("profile", "Profile", <UserIcon />)}
        </nav>
      </div>
    </>
  );
}


export default Sidebar;
