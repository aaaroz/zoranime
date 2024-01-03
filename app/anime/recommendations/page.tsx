import { Metadata } from "next";
import { Suspense } from "react";

import RecommendedAnimeList from "@/components/anime-recommendation";
import { HeroSmall } from "@/components/layout/hero-small";

export const metadata: Metadata = {
  title: "Anime Recommendations",
};

const AnimeRecommendations = () => {
  return (
    <>
      <HeroSmall title="Anime Recommendations" breadcrumb />
      <section className="px-5 py-3 md:px-10 md:py-5 bg-neutral-50 dark:bg-neutral-800 dark:text-white">
        <Suspense fallback={<div>Loading Tod...</div>}>
          <RecommendedAnimeList />
        </Suspense>
      </section>
    </>
  );
};

export default AnimeRecommendations;
