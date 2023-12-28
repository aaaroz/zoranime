import { Metadata } from "next";

import MangaDetail from "@/components/manga-detail";
import { HeroSmall } from "@/components/layout/hero-small";
import { getMangaFullById } from "@/lib/apis";
import type { TFullManga } from "@/types";

export const metadata: Metadata = {
  title: "Manga Detail",
};

const Manga = async ({ params }: { params: { id: number } }) => {
  const dataManga: TFullManga = await getMangaFullById(params.id);
  metadata.title = dataManga.data.title;
  return (
    <>
      <HeroSmall title={dataManga.data.title} genres={dataManga.data.genres} />
      <section className="px-2 md:px-10 bg-neutral-100 dark:bg-neutral-800 dark:text-white">
        <MangaDetail dataManga={dataManga} />
      </section>
    </>
  );
};

export default Manga;
