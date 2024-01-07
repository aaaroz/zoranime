"use client";

import { FC } from "react";

import { useDataPagination } from "@/lib/hooks";
import { CustomPagination } from "@/components/layout/custom-pagination";
import { MangaList } from "@/components/layout/manga-list";
import { DataNotFound } from "@/components/layout/data-not-found";
import { TManga } from "@/types";

const MangaLists: FC = () => {
  const { dataState, pageNumberLimit, currentPage } = useDataPagination<TManga>(
    "manga",
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

export default MangaLists;
