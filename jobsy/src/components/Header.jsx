function Header({ title, actionLabel, onAction }) {
  return (
    <div className="flex items-center justify-between">
      <div className="text-white/90 font-semibold">{title}</div>
      {actionLabel && (
        <button onClick={onAction} className="text-xs text-indigo-300 hover:text-indigo-200">
          {actionLabel}
        </button>
      )}
    </div>
  );
}

export default Header