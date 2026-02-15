import { useQuery } from "@tanstack/react-query";
import { getPopularTags } from "../services/tags.service";

export function usePopularTags() {
  return useQuery({
    queryKey: ["popular-tags"],
    queryFn: getPopularTags,
  });
}
