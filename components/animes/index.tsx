"use client";

import { useCallback, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

import { getAnimeResponse } from "@/lib/apis";
import { AnimeList } from "@/components/layout/anime-list";
import { Card, CardContent } from "@/components/ui/card";
import { CustomPagination } from "@/components/layout/custom-pagination";

import type { TAnime } from "@/types";

const AnimeLists = () => {
  const searchParams = useSearchParams();
  const pageNumberLimit = 5;
  const currentPage = Number(searchParams?.get("page")) || 1;
  const [dataAnime, setDataAnime] = useState<TAnime | null>(null);

  const fetchAnime = useCallback(async () => {
    try {
      const res = await getAnimeResponse("anime", `limit=24&page=${currentPage}`);
      setDataAnime(res);
    } catch (err) {
      console.error(err);
      throw new Error("Something went wrong");
    }
  }, [currentPage]);

  useEffect(() => {
    fetchAnime();
  }, [currentPage, fetchAnime]);
  return (
    <>
      {dataAnime && dataAnime.data?.length > 0 ? (
        <AnimeList api={dataAnime} large />
      ) : (
        <div>
          <h1>Data Not Found</h1>
        </div>
      )}
      {dataAnime && dataAnime.data?.length <= 0 && (
        <Card>
          <CardContent className="text-center py-10">
            <h1 className="text-3xl font-semibold">Data Not Found</h1>
            <p>Please try again! or you can check another page through this pagination below!</p>
          </CardContent>
        </Card>
      )}
      {dataAnime?.pagination?.last_visible_page && (
        <CustomPagination
          currentPage={currentPage}
          lastPage={dataAnime?.pagination?.last_visible_page}
          pageNumberLimit={pageNumberLimit}
        />
      )}
    </>
  );
};

export default AnimeLists;
