const StatCard = ({ icon, value, label }) => {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="text-purple-500 text-4xl mb-3">{icon}</div>
      <h3 className="text-2xl font-bold">{value}</h3>
      <p className="text-gray-600 max-w-xs">{label}</p>
    </div>
  );
};

export default StatCard;
