"use client";

import { FC } from "react";

import { AnimeList } from "@/components/layout/anime-list";
import { DataNotFound } from "@/components/layout/data-not-found";
import { CustomPagination } from "@/components/layout/custom-pagination";
import { TAnime } from "@/types";
import { useDataPagination } from "@/lib/hooks";

const AnimeLists: FC = () => {
  const { dataState, pageNumberLimit, currentPage } = useDataPagination<TAnime>(
    "anime",
    "limit=24"
  );
  return (
    <>
      {dataState && dataState.data?.length > 0 && <AnimeList api={dataState} large />}
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

export default AnimeLists;
