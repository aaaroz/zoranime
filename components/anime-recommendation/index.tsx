"use client";

import { useAnimeRecommended } from "@/lib/hooks";
import { DataNotFound } from "@/components/layout/data-not-found";
import { CustomPagination } from "@/components/layout/custom-pagination";
import { ListRecommended } from "./list-recommended";

const RecommendedAnimeList = () => {
  const { dataRecommendedAnime, pageNumberLimit, currentPage } = useAnimeRecommended();
  return (
    <>
      {dataRecommendedAnime && dataRecommendedAnime.data?.length > 0 && (
        <ListRecommended dataAnime={dataRecommendedAnime} />
      )}
      {dataRecommendedAnime && dataRecommendedAnime.data?.length <= 0 && <DataNotFound />}
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
