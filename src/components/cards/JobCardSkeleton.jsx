import Skeleton from "../ui/Skeleton";

export default function JobCardSkeleton() {
  return (
    <div className="rounded-xl border border-gray-200 p-5 space-y-4">
      <Skeleton className="h-4 w-3/4" />
      <Skeleton className="h-3 w-full" />
      <Skeleton className="h-3 w-5/6" />

      <div className="flex justify-between items-center pt-2">
        <Skeleton className="h-3 w-24" />
        <Skeleton className="h-8 w-20 rounded-full" />
      </div>
    </div>
  );
}
