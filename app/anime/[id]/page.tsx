import { Metadata } from "next";

import AnimeDetail from "@/components/anime-detail";
import { HeroSmall } from "@/components/layout/hero-small";
import { getAnimeFullById } from "@/lib/apis";
import type { TFullAnime } from "@/types";

export const metadata: Metadata = {
  title: "Anime Detail",
};

const Anime = async ({ params }: { params: { id: number } }) => {
  const dataAnime: TFullAnime = await getAnimeFullById(params.id);
  metadata.title = dataAnime.data.title;
  return (
    <>
      <HeroSmall title={dataAnime.data.title} genres={dataAnime.data.genres} />
      <section className="px-2 md:px-10 bg-neutral-100 dark:bg-neutral-800 dark:text-white">
        <AnimeDetail dataAnime={dataAnime} />
      </section>
    </>
  );
};

export default Anime;
