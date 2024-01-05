"use client";

import { FC } from "react";

import { useDataAnime } from "@/lib/hooks";
import { AnimeList } from "@/components/layout/anime-list";
import { DataNotFound } from "@/components/layout/data-not-found";
import { CustomPagination } from "@/components/layout/custom-pagination";

const TopAnimeList: FC = () => {
  const { dataAnime, currentPage, pageNumberLimit } = useDataAnime("top/anime");
  return (
    <>
      {dataAnime && dataAnime.data?.length > 0 && <AnimeList api={dataAnime} large />}
      {dataAnime && dataAnime.data?.length <= 0 && <DataNotFound />}
      {dataAnime?.pagination?.last_visible_page && (
        <CustomPagination
          currentPage={currentPage}
          lastPage={dataAnime?.pagination?.last_visible_page}
          pageNumberLimit={pageNumberLimit}
        />
      )}
    </>
  );
};

export default TopAnimeList;
