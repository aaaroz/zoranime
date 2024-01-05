import { Suspense } from "react";
import { Metadata } from "next";

import RecommendedAnimeList from "@/components/anime-recommendation";
import SkeletonListRecommended from "@/components/anime-recommendation/skeleton-list-recommended";
import { HeroSmall } from "@/components/layout/hero-small";

export const metadata: Metadata = {
  title: "Anime Recommendations",
};

const AnimeRecommendations = () => {
  return (
    <Suspense fallback={<SkeletonListRecommended />}>
      <HeroSmall title="Anime Recommendations" breadcrumb />
      <section className="px-5 py-3 md:px-10 md:py-5 bg-neutral-50 dark:bg-neutral-800 dark:text-white">
        <RecommendedAnimeList />
      </section>
    </Suspense>
  );
};

export default AnimeRecommendations;
