"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

import { Card, CardContent } from "@/components/ui/card";
import { getAnimeResponse } from "@/lib/apis";
import { CustomPagination } from "@/components/layout/custom-pagination";
import { ListRecommended } from "./list-recommended";

import type { TFullRecommendedAnime } from "@/types";

const RecommendedAnimeList = () => {
  const searchParams = useSearchParams();
  const pageNumberLimit = 5;
  const currentPage = Number(searchParams?.get("page")) || 1;
  const [dataRecommendedAnime, setDataRecommendedAnime] =
    useState<TFullRecommendedAnime | null>(null);

  const fetchAnime = async () => {
    try {
      const res: TFullRecommendedAnime = await getAnimeResponse(
        "recommendations/anime",
        `page=${currentPage}`
      );

      setDataRecommendedAnime(res);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchAnime();
  }, [currentPage]);

  return (
    <>
      {dataRecommendedAnime && dataRecommendedAnime.data?.length > 0 && (
        <ListRecommended dataAnime={dataRecommendedAnime} />
      )}
      {dataRecommendedAnime && dataRecommendedAnime.data?.length <= 0 && (
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
      {dataRecommendedAnime?.pagination?.last_visible_page && (
        <CustomPagination
          currentPage={currentPage}
          lastPage={dataRecommendedAnime?.pagination?.last_visible_page}
          pageNumberLimit={pageNumberLimit}
        />
      )}
    </>
  );
};

export default RecommendedAnimeList;
