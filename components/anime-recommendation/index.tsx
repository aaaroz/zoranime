"use client";

import { DataNotFound } from "@/components/layout/data-not-found";
import { CustomPagination } from "@/components/layout/custom-pagination";
import { ListRecommended } from "./list-recommended";
import { TFullRecommendedAnime } from "@/types";
import { useDataPagination } from "@/lib/hooks";

const RecommendedAnimeList = () => {
  const { dataState, pageNumberLimit, currentPage } =
    useDataPagination<TFullRecommendedAnime>("recommendations/anime");
  return (
    <>
      {dataState && dataState.data?.length > 0 && <ListRecommended dataAnime={dataState} />}
      {dataState && dataState.data?.length <= 0 && <DataNotFound />}
      {dataState?.pagination?.last_visible_page && (
        <CustomPagination
          currentPage={currentPage}
          lastPage={dataState?.pagination?.last_visible_page}
          pageNumberLimit={pageNumberLimit}
        />
      )}
    </>
  );
};

export default RecommendedAnimeList;
