import PopularTagsSkeleton from "../../components/cards/PopularTagsSkeleton";
import LatestJobsSkeleton from "../../components/cards/LatestJobsSkeleton";
import PlatformStatsSkeleton from "../../components/cards/PlatformStatsSkeleton";

export default function HomeGuestLoading() {
  return (
    <div className="space-y-16">
      {/* Hero already done – skip */}

      {/* Popular Tags */}
      <section className="space-y-6">
        <div className="h-6 w-40 bg-gray-200 rounded-md animate-pulse" />
        <PopularTagsSkeleton />
      </section>

      {/* Latest Jobs */}
      <section className="space-y-6">
        <div className="h-6 w-40 bg-gray-200 rounded-md animate-pulse" />
        <LatestJobsSkeleton />
      </section>

      {/* Platform Stats */}
      <section className="bg-gray-50 py-12 rounded-xl">
        <PlatformStatsSkeleton />
      </section>
    </div>
  );
}
