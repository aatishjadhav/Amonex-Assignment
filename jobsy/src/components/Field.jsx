
function Field({ icon, label, value, onChange, editable }) {
  return (
    <div>
      <div className="text-xs lg:text-sm text-white/60 mb-1">{label}</div>
      <div className="flex items-center gap-2">
        <div className="text-white/60">{icon}</div>
        {editable ? (
          <input
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="flex-1 bg-white/10 border border-white/10 rounded-xl px-3 py-2 text-white outline-none focus:border-white/20"
          />
        ) : (
          <div className="text-white/80 lg:text-base">{value}</div>
        )}
      </div>
    </div>
  );
}

export default Field;