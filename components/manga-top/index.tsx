"use client";

import { FC } from "react";

import { useDataPagination } from "@/lib/hooks";
import { MangaList } from "@/components/layout/manga-list";
import { CustomPagination } from "@/components/layout/custom-pagination";
import { DataNotFound } from "@/components/layout/data-not-found";
import { TTopManga } from "@/types";

const TopMangaList: FC = () => {
  const { dataState, pageNumberLimit, currentPage } = useDataPagination<TTopManga>(
    "top/manga",
    "limit=24"
  );
  return (
    <>
      {dataState && dataState.data?.length > 0 && <MangaList api={dataState} large />}
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

export default TopMangaList;
