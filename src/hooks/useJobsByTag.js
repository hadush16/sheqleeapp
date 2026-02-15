import { useQuery } from "@tanstack/react-query";
import { getJobsByTag } from "../services/jobs.service";

export function useJobsByTag(tag) {
  return useQuery({
    queryKey: ["jobs", "tag", tag],
    queryFn: () => getJobsByTag(tag),
    enabled: !!tag, // ⬅ prevents running before slug exists
  });
}
