import { Suspense } from "react";

import { getAnimeResponse, getNestedAnimeResponse, getRandomAnimeResponse } from "@/lib/apis";
import { AnimeList } from "@/components/layout/anime-list";
import { TabsAnime } from "@/components/landing-page/anime-tabs";
import { AnimeForYou } from "@/components/landing-page/anime-for-you";
import { AnimeRecommendations } from "@/components/landing-page/anime-recommendations";
import { HeroSection } from "@/components/layout/hero-section";
import { HeaderSection } from "@/components/landing-page/header-section";

import type {
  TNowAnime,
  TRandomAnime,
  TRecommendedAnime,
  TTopAnime,
  TUpcomingAnime,
} from "@/types";

export default async function Home() {
  const topAnime: TTopAnime | null = await getAnimeResponse("top/anime", "limit=8");
  const upcomingAnime: TUpcomingAnime | null = await getAnimeResponse(
    "seasons/upcoming",
    "limit=5&filter=movie"
  );
  const nowAnime: TNowAnime | null = await getAnimeResponse("seasons/now", "limit=5&filter=movie");
  const animeForYou: TRandomAnime | null = await getRandomAnimeResponse("random/anime");
  const recommendedAnime: TRecommendedAnime[] = await getNestedAnimeResponse(
    "recommendations/anime",
    "entry"
  );
  console.error(recommendedAnime);
  return (
    <>
      <HeroSection />
      <section className="bg-neutral-50 dark:bg-neutral-800 dark:text-white">
        <div className="flex flex-col lg:flex-row mx-5 gap-5 py-5 sm:mx-10 h-auto">
          <div className="block">
            <HeaderSection highlight="Top" title="Anime" href="/anime/top" />
            {topAnime ? (
              <Suspense fallback={<div>Loading AnimeList...</div>}>
                <AnimeList api={topAnime} />
              </Suspense>
            ) : (
              <div className="flex h-screen justify-center text-xl">
                <h1>Something went wrong! try again later!</h1>
              </div>
            )}
          </div>
          <aside>
            {nowAnime && upcomingAnime && animeForYou ? (
              <Suspense fallback={<div>Loading Tabs...</div>}>
                <TabsAnime dataNow={nowAnime} dataUpcoming={upcomingAnime} />
                <AnimeForYou dataAnime={animeForYou} />
              </Suspense>
            ) : (
              <div className="flex h-screen justify-center text-xl">
                <h1>Something went wrong! try again later!</h1>
              </div>
            )}
          </aside>
        </div>
        <div className="block mx-2 sm:mx-10 pb-11">
          <HeaderSection highlight="Anime" title="Recommendations" href="/anime/recommendations" />
          <AnimeRecommendations dataAnime={recommendedAnime} />
        </div>
      </section>
    </>
  );
}
