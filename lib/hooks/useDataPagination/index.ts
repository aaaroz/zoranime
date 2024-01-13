import { useCallback, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

import { getAnimeResponse } from "@/lib/apis";

export function useDataPagination<T>(request: string, query?: string) {
  const [dataState, setDataState] = useState<T | null>(null);
  const searchParams = useSearchParams();
  const pageNumberLimit = 5;
  const currentPage = Number(searchParams?.get("page")) || 1;

  const fetchData = useCallback(async () => {
    try {
      if (query) {
        const res = await getAnimeResponse(`${request}`, `${query}&page=${currentPage}`);
        setDataState(res);
      } else {
        const res = await getAnimeResponse(`${request}`, `limit=24&page=${currentPage}`);
        setDataState(res);
      }
    } catch (err) {
      console.error(err);
      throw new Error("Something went wrong");
    }
  }, [currentPage, query, request]);

  useEffect(() => {
    fetchData();
  }, [currentPage, fetchData]);

  return {
    dataState,
    pageNumberLimit,
    currentPage,
  };
}
