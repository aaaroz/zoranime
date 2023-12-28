import { Metadata } from "next";
import { Suspense } from "react";

import { HeroSmall } from "@/components/layout/hero-small";
import RecommendedAnimeList from "@/components/anime-recommendation";

export const metadata: Metadata = {
  title: "Anime Recommendations",
};

const AnimeRecommendations = () => {
  return (
    <>
      <HeroSmall title="Anime Recommendations" breadcrumb />
      <section className="px-5 py-3 md:px-10 md:py-5 bg-neutral-50 dark:bg-neutral-800 dark:text-white">
        <Suspense fallback={<div>Loading...</div>}>
          <RecommendedAnimeList />
        </Suspense>
      </section>
    </>
  );
};

export default AnimeRecommendations;
