import { getAnimeResponse } from "@/lib/apis";
import { TFullRecommendedAnime } from "@/types";
import { useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

export function useAnimeRecommended() {
  const searchParams = useSearchParams();
  const pageNumberLimit = 5;
  const currentPage = Number(searchParams?.get("page")) || 1;
  const [dataRecommendedAnime, setDataRecommendedAnime] = useState<TFullRecommendedAnime | null>(
    null
  );

  const fetchAnime = useCallback(async () => {
    try {
      const res: TFullRecommendedAnime = await getAnimeResponse(
        "recommendations/anime",
        `page=${currentPage}`
      );

      setDataRecommendedAnime(res);
    } catch (err) {
      console.error(err);
    }
  }, [currentPage]);

  useEffect(() => {
    fetchAnime();
  }, [currentPage, fetchAnime]);

  return {
    dataRecommendedAnime,
    pageNumberLimit,
    currentPage,
  };
}
