import { useQuery } from "@tanstack/react-query";
import { getJobById } from "../services/jobs.service";

export function useJobDetails(id) {
  return useQuery({
    queryKey: ["job", id],
    queryFn: () => getJobById(id),
    enabled: !!id, // important
  });
}
