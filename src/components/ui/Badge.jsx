export default function Badge({ children }) {
  return (
    <span className="bg-[#DFDFDF] px-3 py-1 rounded-[4px] flex items-center gap-2">
      {children}
    </span>
  );
}
