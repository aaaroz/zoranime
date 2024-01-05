"use client";

import { FC } from "react";

import { useDataManga } from "@/lib/hooks";
import { MangaList } from "@/components/layout/manga-list";
import { CustomPagination } from "@/components/layout/custom-pagination";
import { DataNotFound } from "@/components/layout/data-not-found";

const TopMangaList: FC = () => {
  const { dataManga, pageNumberLimit, currentPage } = useDataManga("top/manga");
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

export default TopMangaList;
