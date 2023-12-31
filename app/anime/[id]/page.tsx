import { Metadata } from "next";

import AnimeDetail from "@/components/anime-detail";
import { HeroSmall } from "@/components/layout/hero-small";
import { getAnimeFullById } from "@/lib/apis";
import { ButtonAddCollection } from "@/components/layout/button-add-collection";

import type { TFullAnime } from "@/types";
import { authUserSession } from "@/lib/utils";
import APICollection from "@/lib/apis/collection";

export const metadata: Metadata = {
  title: "Anime Detail",
};

const Anime = async ({ params }: { params: { id: string } }) => {
  const dataAnime: TFullAnime = await getAnimeFullById(params.id);
  metadata.title = dataAnime.data.title;
  const user = await authUserSession();
  const data = {
    user_email: user?.email as string,
    anime_mal_id: params.id,
    anime_image_url: dataAnime.data.images.webp.large_image_url,
    anime_title: dataAnime.data.title,
  };
  const collection = await prisma.collection.findFirst({
    where: { user_email: user?.email as string, anime_mal_id: params.id },
  });

  return (
    <>
      <HeroSmall title={dataAnime.data.title} genres={dataAnime.data.genres} />
      {user && !collection && <ButtonAddCollection data={data} />}
      <section className="px-2 md:px-10 bg-neutral-100 dark:bg-neutral-800 dark:text-white">
        <AnimeDetail dataAnime={dataAnime} />
      </section>
    </>
  );
};

export default Anime;
