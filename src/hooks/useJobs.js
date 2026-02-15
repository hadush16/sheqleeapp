// import { api } from "../lib/axios";

// export const getJobs = async () => {
//   const res = await fetch("/api/jobs");
//   return res.json();
// };

import { useEffect, useState } from "react";
import { getJobById } from "../services/jobs.service";

export function useJobs() {
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getJobById()
      .then((res) => {
        setJobs(res.data);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return {
    jobs,
    isLoading,
  };
}
