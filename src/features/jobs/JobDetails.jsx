import { useParams } from "react-router-dom";
import { useJobDetails } from "../../hooks/useJobDetails";

export default function JobDetails() {
  const { id } = useParams();
  const { data, isLoading, isError } = useJobDetails(id);

  if (isLoading) {
    return <p className="text-center mt-10">Loading job...</p>;
  }

  if (isError) {
    return <p className="text-center mt-10 text-red-500">Failed to load job</p>;
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-4">{data.title}</h1>

      <p className="text-gray-600 mb-2">
        {data.company} • {data.location}
      </p>

      <p className="text-sm text-gray-500 mb-6">
        {data.type} • {data.level}
      </p>

      <div className="prose max-w-none">{data.description}</div>
    </div>
  );
}
