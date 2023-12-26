"use client";

import { AnimeList } from "@/components/layout/anime-list";
import { HeroSmall } from "@/components/layout/hero-small";
import CustomPagination from "@/components/top-anime/custom-pagination";
import { Card, CardContent } from "@/components/ui/card";

import { getAnimeResponse } from "@/lib/apis";
import type { TTopAnime } from "@/types";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const TopAnime = () => {
  const searchParams = useSearchParams();
  const pageNumberLimit = 5;
  const currentPage = Number(searchParams?.get("page")) || 1;
  const [topAnime, setTopAnime] = useState<TTopAnime | null>(null);

  const fetchAnime = async () => {
    try {
      const res = await getAnimeResponse(
        "top/anime",
        `limit=24&page=${currentPage}`
      );
      setTopAnime(res);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchAnime();
  }, [currentPage]);
  return (
    <>
      <HeroSmall title="Top Anime" breadcrumb />
      <section className="px-10 bg-neutral-50 dark:bg-neutral-800 dark:text-white">
        {topAnime && <AnimeList api={topAnime} pagination />}
        {topAnime && topAnime?.data.length <= 0 && (
          <Card>
            <CardContent className="text-center py-10">
              <h1 className="text-3xl font-semibold">Data Not Found</h1>
              <p>
                Please try again! or you can check another page through this
                pagination below!
              </p>
            </CardContent>
          </Card>
        )}
        <CustomPagination
          currentPage={currentPage}
          lastPage={topAnime?.pagination?.last_visible_page}
          pageNumberLimit={pageNumberLimit}
        />
      </section>
    </>
  );
};

export default TopAnime;
