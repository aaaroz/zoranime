"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

import { getAnimeResponse } from "@/lib/apis";
import { AnimeList } from "@/components/layout/anime-list";
import { Card, CardContent } from "@/components/ui/card";
import { CustomPagination } from "@/components/layout/custom-pagination";

import type { TTopAnime } from "@/types";

const TopAnimeList = () => {
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
      {topAnime && topAnime.data?.length > 0 && (
        <AnimeList api={topAnime} large />
      )}
      {topAnime && topAnime.data?.length <= 0 && (
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
      {topAnime?.pagination?.last_visible_page && (
        <CustomPagination
          currentPage={currentPage}
          lastPage={topAnime?.pagination?.last_visible_page}
          pageNumberLimit={pageNumberLimit}
        />
      )}
    </>
  );
};

export default TopAnimeList;
