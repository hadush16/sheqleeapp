import HeroSection from "../../components/home/HeroSection";
import LatestJobs from "../../components/home/LatestJobs";
import PopularTags from "../../components/home/PopularTags";
import DeveloperCTA from "../../components/home/DeveloperCTA";
import PlatformStats from "../../components/home/PlatformStats";

import { useJobs } from "../../hooks/useJobs";
import HomeGuestLoading from "./HomeGuestLoading";

export default function HomeGuest() {
  const { isLoading = "true" } = useJobs();

  if (isLoading) {
    return <HomeGuestLoading />;
  }

  return (
    <>
      <HeroSection />
      <PopularTags />
      <LatestJobs />

      <DeveloperCTA />

      <PlatformStats />
    </>
  );
}
