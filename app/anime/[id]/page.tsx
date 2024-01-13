import { Metadata } from "next";

import AnimeDetail from "@/components/anime-detail";
import prisma from "@/lib/prisma";
import { getAnimeFullById } from "@/lib/apis";
import { authUserSession } from "@/lib/utils";
import { ButtonAddCollection } from "@/components/layout/button-add-collection";
import { CommentSection } from "@/components/layout/comment-section";
import { CommentInput } from "@/components/layout/comment-input";
import { HeroSmall } from "@/components/layout/hero-small";

import type { TFullAnime } from "@/types";

type Props = {
  params: { id: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const id = params.id;

  const dataAnime = await getAnimeFullById(id);

  return {
    title: `${dataAnime.data?.title}` || "Anime",
  };
}

const Anime = async ({ params }: { params: { id: string } }) => {
  const dataAnime: TFullAnime = await getAnimeFullById(params.id);
  const user = await authUserSession();
  const data = {
    user_email: user?.email as string,
    anime_mal_id: params.id,
    anime_image_url: dataAnime.data.images.webp.large_image_url,
    anime_title: dataAnime.data.title,
  };

  const dataComment = {
    username: user?.name as string,
    user_email: user?.email as string,
    user_image: user?.image as string,
    anime_mal_id: params.id,
    anime_title: dataAnime.data.title,
  };

  const collection = await prisma.collection.findFirst({
    where: { user_email: user?.email as string, anime_mal_id: params.id },
  });

  return (
    <>
      <HeroSmall title={dataAnime.data.title} genres={dataAnime.data.genres} />
      {user && !collection && <ButtonAddCollection data={data} />}
      <section className="px-2 pb-8 md:px-10 bg-neutral-100 dark:bg-neutral-800 dark:text-white">
        <AnimeDetail dataAnime={dataAnime} />
        <CommentSection anime_mal_id={params.id} />
        {user && <CommentInput data={dataComment} />}
      </section>
    </>
  );
};

export default Anime;
