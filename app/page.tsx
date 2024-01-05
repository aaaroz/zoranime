import { getAnimeResponse, getRandomAnimeResponse } from "@/lib/apis";
import { AnimeList } from "@/components/layout/anime-list";
import { TabsAnime } from "@/components/landing-page/anime-tabs";
import { AnimeForYou } from "@/components/landing-page/anime-for-you";
import { Recommendations } from "@/components/landing-page/anime-recommendations";
import { HeroSection } from "@/components/layout/hero-section";
import { HeaderSection } from "@/components/landing-page/header-section";

import type { TNowAnime, TRandomAnime, TTopAnime, TUpcomingAnime } from "@/types";

export default async function Home() {
  const topAnime: TTopAnime | null = await getAnimeResponse("top/anime", "limit=8&filter=favorite");
  const upcomingAnime: TUpcomingAnime | null = await getAnimeResponse(
    "seasons/upcoming",
    "limit=5"
  );
  const nowAnime: TNowAnime | null = await getAnimeResponse("seasons/now", "limit=5");
  const animeForYou: TRandomAnime | null = await getRandomAnimeResponse("random/anime");

  const recommendAnime: TTopAnime = await getAnimeResponse(
    "top/anime",
    "limit=6&filter=bypopularity"
  );
  return (
    <>
      <HeroSection />
      <section className="bg-neutral-50 dark:bg-neutral-800 dark:text-white">
        <div className="flex flex-col lg:flex-row mx-5 gap-5 py-5 sm:mx-10 h-auto">
          <div className="block">
            <HeaderSection highlight="Top" title="Anime" href="/anime/top" />
            {topAnime ? (
              <AnimeList api={topAnime} />
            ) : (
              <div className="flex h-screen justify-center text-xl">
                <h1>Something went wrong! try again later!</h1>
              </div>
            )}
          </div>
          <aside>
            {nowAnime && upcomingAnime && animeForYou ? (
              <>
                <TabsAnime dataNow={nowAnime} dataUpcoming={upcomingAnime} />
                <AnimeForYou dataAnime={animeForYou} />
              </>
            ) : (
              <div className="flex h-screen justify-center text-xl">
                <h1>Something went wrong! try again later!</h1>
              </div>
            )}
          </aside>
        </div>
        <div className="block mx-2 sm:mx-10 pb-11">
          <HeaderSection highlight="Anime" title="Recommendations" href="/anime/recommendations" />
          <Recommendations dataAnime={recommendAnime} />
        </div>
      </section>
    </>
  );
}
