import { Metadata } from "next";

import prisma from "@/lib/prisma";
import MangaDetail from "@/components/manga-detail";
import { authUserSession } from "@/lib/utils";
import { getMangaFullById } from "@/lib/apis";
import { HeroSmall } from "@/components/layout/hero-small";
import { ButtonAddCollection } from "@/components/layout/button-add-collection";
import { CommentSection } from "@/components/layout/comment-section";
import { CommentInput } from "@/components/layout/comment-input";

import type { TFullManga } from "@/types";

type Props = {
  params: { id: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const id = params.id;

  const dataManga = await getMangaFullById(id);

  return {
    title: `${dataManga.data?.title}` || "Manga",
  };
}

const Manga = async ({ params }: { params: { id: string } }) => {
  const dataManga: TFullManga = await getMangaFullById(params.id);
  const user = await authUserSession();
  const data = {
    user_email: user?.email as string,
    mal_id: params.id,
    image_url: dataManga.data.images.webp.image_url,
    title: dataManga.data.title,
  };

  const dataComment = {
    username: user?.name as string,
    user_email: user?.email as string,
    user_image: user?.image as string,
    mal_id: params.id,
    title: dataManga.data.title,
  };

  const mangaCollection = await prisma.mangaCollection.findFirst({
    where: { user_email: user?.email as string, mal_id: data.mal_id },
  });
  return (
    <>
      <HeroSmall title={dataManga.data.title} genres={dataManga.data.genres} />
      {user && !mangaCollection && <ButtonAddCollection dataManga={data} />}
      <section className="px-2 pb-8 md:px-10 bg-neutral-100 dark:bg-neutral-800 dark:text-white">
        <MangaDetail dataManga={dataManga} />
        <CommentSection mal_id={params.id} />
        {user && <CommentInput dataManga={dataComment} />}
      </section>
    </>
  );
};

export default Manga;
