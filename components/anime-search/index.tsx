"use client";

import { TAnime } from "@/types";
import { SearchIcon } from "lucide-react";
import { FC } from "react";
import { Button } from "../ui/button";
import { AnimeList } from "../layout/anime-list";

interface SearchAnimeProps {
  keyword: string;
  searchAnime: TAnime;
}
const SearchAnime: FC<SearchAnimeProps> = ({ keyword, searchAnime }) => {
  return (
    <div>
      <h1 className="text-2xl font-bold">
        Search results for {`'`}
        {keyword}
        {`'`}
      </h1>
      {searchAnime.data.length <= 0 ? (
        <div className="gap-3 flex flex-col items-center justify-center h-[50dvh]">
          <SearchIcon className="h-12 w-10 text-neutral-400" />
          <p className="text-lg">No results found</p>
          <Button>Go Back</Button>
        </div>
      ) : (
        <AnimeList api={searchAnime} large />
      )}
    </div>
  );
};

export default SearchAnime;
