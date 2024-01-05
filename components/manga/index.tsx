"use client";

import { FC } from "react";

import { useDataManga } from "@/lib/hooks";
import { CustomPagination } from "@/components/layout/custom-pagination";
import { MangaList } from "@/components/layout/manga-list";
import { DataNotFound } from "@/components/layout/data-not-found";

const MangaLists: FC = () => {
  const { dataManga, pageNumberLimit, currentPage } = useDataManga("manga");
  return (
    <>
      {dataManga && dataManga.data?.length > 0 && <MangaList api={dataManga} large />}
      {dataManga && dataManga.data?.length <= 0 && <DataNotFound />}
      {dataManga?.pagination?.last_visible_page && (
        <CustomPagination
          currentPage={currentPage}
          lastPage={dataManga?.pagination?.last_visible_page}
          pageNumberLimit={pageNumberLimit}
        />
      )}
    </>
  );
};

export default MangaLists;
