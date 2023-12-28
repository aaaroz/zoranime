"use client";

import { FC, useCallback, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

import { getAnimeResponse } from "@/lib/apis";
import { Card, CardContent } from "@/components/ui/card";
import { CustomPagination } from "@/components/layout/custom-pagination";
import { MangaList } from "@/components/layout/manga-list";

import type { TManga } from "@/types";

const MangaLists = () => {
  const searchParams = useSearchParams();
  const pageNumberLimit = 5;
  const currentPage = Number(searchParams?.get("page")) || 1;
  const [dataManga, setDataManga] = useState<TManga | null>(null);

  const fetchAnime = useCallback(async () => {
    try {
      const res = await getAnimeResponse(
        "manga",
        `limit=24&page=${currentPage}`
      );
      setDataManga(res);
    } catch (err) {
      console.error(err);
    }
  }, [currentPage]);

  useEffect(() => {
    fetchAnime();
  }, [currentPage, fetchAnime]);
  return (
    <>
      {dataManga && dataManga.data?.length > 0 && (
        <MangaList api={dataManga} large />
      )}
      {dataManga && dataManga.data?.length <= 0 && (
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
      {dataManga?.pagination?.last_visible_page && (
        <CustomPagination
          currentPage={currentPage}
          lastPage={dataManga?.pagination?.last_visible_page}
          pageNumberLimit={pageNumberLimit}
        />
      )}
    </>
  );
};

export default MangaLists;
