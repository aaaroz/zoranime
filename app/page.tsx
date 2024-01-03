import { Suspense } from "react";

import {
  getAnimeResponse,
  getNestedAnimeResponse,
  getRandomAnimeResponse,
  reproduce,
} from "@/lib/apis";
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
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

export default async function Home() {
  const topAnime: TTopAnime | null = await getAnimeResponse("top/anime", "limit=8");
  const upcomingAnime: TUpcomingAnime | null = await getAnimeResponse(
    "seasons/upcoming",
    "limit=5&filter=movie"
  );
  const nowAnime: TNowAnime | null = await getAnimeResponse("seasons/now", "limit=5&filter=movie");
  const animeForYou: TRandomAnime | null = await getRandomAnimeResponse("random/anime");
  // const recommendedAnime: TRecommendedAnime[] = await getNestedAnimeResponse(
  //   "recommendations/anime",
  //   "entry"
  // );
  const recommendAnime = await getAnimeResponse("recommendations/anime");
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
          {/* <AnimeRecommendations dataAnime={recommendedAnime} /> */}
          <Recommendations dataAnime={recommendAnime} />
        </div>
      </section>
    </>
  );
}

const Recommendations = ({ dataAnime }: any) => {
  const dataAnimes = reproduce(dataAnime.data, 6);
  return (
    <div className="grid grid-cols-3 md:grid-cols-6 gap-4 mt-5 md:mr-5">
      {dataAnimes.data.map((anime: any, index: number) => {
        return (
          <Link href={`/anime/${anime.entry[0].mal_id}`} className=" transition-all" key={index}>
            <Card className="relative flex flex-col border-0 h-full justify-between bg-inherit p-1">
              <CardContent className="p-0">
                <Image
                  src={anime.entry[0].images.webp.large_image_url}
                  alt="image"
                  width={150}
                  height={350}
                  className="hover-image w-full max-h-72 object-cover rounded-sm transition-all"
                />
                <CardHeader className="absolute flex justify-end bottom-0 left-0 py-2 px-0 bg-gradient-to-t from-neutral-950 via-neutral-900 h-[10dvh] w-full">
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        <CardTitle className="line-clamp-1 ps-1 text-start text-base sm:text-xl transition-all dark:text-neutral-50 dark:hover:text-red-700 text-neutral-50 hover:text-red-700">
                          {anime.entry[0].title}
                        </CardTitle>
                      </TooltipTrigger>
                      <TooltipContent>{anime.entry[0].title}</TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </CardHeader>
              </CardContent>
            </Card>
          </Link>
        );
      })}
    </div>
  );
};
