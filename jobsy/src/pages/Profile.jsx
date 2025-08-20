import React, { useState } from "react";
import {
  MapPin,
  Phone,
  AtSign,
  Pencil,
  Plus,
  ChevronRight,
} from "lucide-react";
import Field from "../components/Field";

function Profile({ profile, setProfile }) {
  const [editing, setEditing] = useState({ contact: false, about: false });
  const [draft, setDraft] = useState(profile);

  const save = (key) => {
    setProfile((p) => ({ ...p, [key]: draft[key] }));
    setEditing((e) => ({ ...e, [key]: false }));
  };

  const addExperience = () => {
    const n = {
      id: crypto.randomUUID(),
      role: "New Role",
      company: "Company",
      location: "City",
      start: "2024",
      end: "Present",
      description: "Describe your impact…",
      logoBg: "bg-sky-500",
    };
    setDraft({ ...draft, experience: [n, ...draft.experience] });
    setProfile((p) => ({ ...p, experience: [n, ...p.experience] }));
  };

  const updateExp = (id, patch) => {
    setDraft({
      ...draft,
      experience: draft.experience.map((e) =>
        e.id === id ? { ...e, ...patch } : e
      ),
    });
    setProfile((p) => ({
      ...p,
      experience: p.experience.map((e) =>
        e.id === id ? { ...e, ...patch } : e
      ),
    }));
  };

  return (
    <div className="px-4 lg:px-8 pb-24 lg:pb-8">
      <div className="pt-6 flex items-center justify-between">
        <div className="text-white/90 font-medium lg:text-xl">Profile</div>
        <div className="text-white/70 text-sm lg:text-base">9/10</div>
      </div>

      <div className="max-w-4xl mx-auto mt-4 lg:mt-6 space-y-4 lg:space-y-6">
        <div className="p-4 lg:p-6 rounded-2xl bg-white/5 border border-white/10">
          <div className="flex items-center justify-between">
            <div className="text-white/90 font-semibold lg:text-lg">
              Contact Info
            </div>
            <button
              className="text-white/70 hover:text-white"
              onClick={() =>
                setEditing({ ...editing, contact: !editing.contact })
              }
            >
              <Pencil size={18} />
            </button>
          </div>
          <div className="mt-3 lg:mt-4 space-y-3 lg:space-y-4">
            <Field
              icon={<MapPin size={16} />}
              label="Location"
              value={draft.location}
              editable={editing.contact}
              onChange={(v) => setDraft({ ...draft, location: v })}
            />
            <Field
              icon={<Phone size={16} />}
              label="Phone"
              value={draft.phone}
              editable={editing.contact}
              onChange={(v) => setDraft({ ...draft, phone: v })}
            />
            <Field
              icon={<AtSign size={16} />}
              label="Email"
              value={draft.email}
              editable={editing.contact}
              onChange={(v) => setDraft({ ...draft, email: v })}
            />
            {editing.contact && (
              <div className="flex justify-end">
                <button
                  className="px-4 py-2 rounded-lg bg-white/10 text-white/80 hover:bg-white/15"
                  onClick={() =>
                    save("location") && save("phone") && save("email")
                  }
                >
                  Save
                </button>
              </div>
            )}
          </div>
        </div>

        <div className="p-4 lg:p-6 rounded-2xl bg-white/5 border border-white/10">
          <div className="flex items-center justify-between">
            <div className="text-white/90 font-semibold lg:text-lg">
              About Me
            </div>
            <button
              className="text-white/70 hover:text-white"
              onClick={() => setEditing({ ...editing, about: !editing.about })}
            >
              <Pencil size={18} />
            </button>
          </div>
          {editing.about ? (
            <div className="mt-3 lg:mt-4 space-y-2">
              <textarea
                value={draft.about}
                onChange={(e) => setDraft({ ...draft, about: e.target.value })}
                className="w-full min-h-[80px] lg:min-h-[100px] bg-white/10 border border-white/10 rounded-xl p-3 text-white outline-none focus:border-white/20"
              />
              <div className="flex justify-end">
                <button
                  className="px-4 py-2 rounded-lg bg-white/10 text-white/80 hover:bg-white/15"
                  onClick={() => save("about")}
                >
                  Save
                </button>
              </div>
            </div>
          ) : (
            <p className="mt-2 lg:mt-3 text-white/70 text-sm lg:text-base leading-relaxed">
              {profile.about}
            </p>
          )}
        </div>
        <div className="p-4 lg:p-6 rounded-2xl bg-white/5 border border-white/10">
          <div className="flex items-center justify-between">
            <div className="text-white/90 font-semibold lg:text-lg">
              Experience
            </div>
            <button
              className="text-white/80 flex items-center gap-1 hover:text-white"
              onClick={addExperience}
            >
              <Plus size={16} /> Add
            </button>
          </div>
          <div className="mt-3 lg:mt-4 space-y-3 lg:space-y-4">
            {profile.experience.map((e) => (
              <div
                key={e.id}
                className="p-3 lg:p-4 rounded-xl bg-white/5 border border-white/10"
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-10 h-10 lg:w-12 lg:h-12 ${e.logoBg} rounded-xl grid place-items-center text-white font-semibold`}
                  >
                    {e.role.slice(0, 1)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-white font-medium truncate lg:text-lg">
                      {e.role}
                    </div>
                    <div className="text-white/60 text-sm lg:text-base truncate">
                      {e.company} <span className="mx-1">/</span> {e.location}
                    </div>
                    <div className="text-white/60 text-xs lg:text-sm">
                      {e.start} – {e.end}
                    </div>
                  </div>
                  <ChevronRight className="text-white/40" size={18} />
                </div>
                <textarea
                  value={e.description}
                  onChange={(ev) =>
                    updateExp(e.id, { description: ev.target.value })
                  }
                  className="mt-2 lg:mt-3 w-full bg-white/10 border border-white/10 rounded-lg p-2 lg:p-3 text-white text-sm lg:text-base focus:border-white/20 outline-none"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
