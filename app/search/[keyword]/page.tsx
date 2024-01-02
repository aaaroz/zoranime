import SearchAnime from "@/components/anime-search";
import { HeroSmall } from "@/components/layout/hero-small";
import { getAnimeResponse } from "@/lib/apis";
import type { TAnime, TManga } from "@/types";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Search",
};

const Search = async ({ params }: { params: { keyword: string } }) => {
  const { keyword } = params;

  const decodedKeyword = decodeURI(keyword);

  const searchAnime: TAnime = await getAnimeResponse(
    "anime",
    `limit=24&q=${decodedKeyword}`
  );

  const searchManga: TManga = await getAnimeResponse(
    "manga",
    `limit=24&q=${decodedKeyword}`
  );

  return (
    <>
      <HeroSmall title={decodedKeyword} breadcrumbPage={decodedKeyword} />
      <section className="p-5 pt-3 md:px-10 bg-neutral-50 dark:bg-neutral-800 dark:text-white">
        <SearchAnime
          keyword={decodedKeyword}
          searchAnime={searchAnime}
          searchManga={searchManga}
        />
      </section>
    </>
  );
};

export default Search;
