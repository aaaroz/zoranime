import { useCallback, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

import { getAnimeResponse } from "@/lib/apis";
import type { TAnime, TTopAnime } from "@/types";

export function useDataAnime(request: string) {
  const [dataAnime, setDataAnime] = useState<TAnime | TTopAnime | null>(null);
  const searchParams = useSearchParams();
  const pageNumberLimit = 5;
  const currentPage = Number(searchParams?.get("page")) || 1;

  const fetchAnime = useCallback(async () => {
    try {
      const res = await getAnimeResponse(`${request}`, `limit=24&page=${currentPage}`);
      setDataAnime(res);
    } catch (err) {
      console.error(err);
      throw new Error("Something went wrong");
    }
  }, [currentPage]);

  useEffect(() => {
    fetchAnime();
  }, [currentPage, fetchAnime]);

  const data = {
    dataAnime,
    pageNumberLimit,
    currentPage,
  };
  return data;
}
