function Badge({ children }) {
  return (
    <span className="px-2 py-1 rounded-xl text-xs bg-white/10 text-white/90">
      {children}
    </span>
  );
}

export default Badge;