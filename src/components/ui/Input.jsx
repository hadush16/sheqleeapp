export default function Input({ placeholder, ...props }) {
  return (
    <input
      placeholder={placeholder}
      className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-0"
      {...props}
    />
  );
}
