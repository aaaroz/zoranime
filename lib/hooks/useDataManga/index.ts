import { getAnimeResponse } from "@/lib/apis";
import { TManga, TTopManga } from "@/types";
import { useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

export function useDataManga(request: string) {
  const searchParams = useSearchParams();
  const pageNumberLimit = 5;
  const currentPage = Number(searchParams?.get("page")) || 1;
  const [dataManga, setDataManga] = useState<TManga | TTopManga | null>(null);

  const fetchAnime = useCallback(async () => {
    try {
      const res = await getAnimeResponse(`${request}`, `limit=24&page=${currentPage}`);
      setDataManga(res);
    } catch (err) {
      console.error(err);
    }
  }, [currentPage]);

  useEffect(() => {
    fetchAnime();
  }, [currentPage, fetchAnime]);

  return {
    dataManga,
    pageNumberLimit,
    currentPage,
  };
}
