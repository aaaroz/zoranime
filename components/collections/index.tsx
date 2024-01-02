import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import type { TAnimeCollection, TMangaCollection } from "@/types";

import { DeleteDialog } from "./delete-dialog";

interface MyCollectionsProps {
  data: TAnimeCollection[];
  dataManga: TMangaCollection[];
}

export const MyCollections: FC<MyCollectionsProps> = ({ data, dataManga }) => {
  return (
    <>
      <div className="grid grid-cols-1 gap-4">
        <section id="anime">
          <h1 className="text-lg md:text-xl font-semibold mb-5">
            Anime Collections
          </h1>
          {data.length === 0 && (
            <div className="flex justify-center items-center h-[60dvh]">
              <h1 className="text-center text-neutral-600 dark:text-neutral-500">
                No anime found
              </h1>
            </div>
          )}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-2">
            {data.map((anime) => (
              <Card
                className="relative border hover-image hover:text-red-600 dark:hover:text-red-600"
                key={anime.id}
              >
                <DeleteDialog
                  anime_title={anime.anime_title as string}
                  id={anime.id}
                />
                <Link href={`/anime/${anime.anime_mal_id}`}>
                  <CardContent className="relative p-1">
                    <Image
                      src={`${anime.anime_image_url}`}
                      width={450}
                      height={350}
                      alt="anime"
                      className="w-full max-h-72 object-cover rounded"
                    />
                    <CardHeader className="absolute w-full rounded bottom-0 left-0 mr-1 p-2 py-3 bg-gradient-to-t from-neutral-50 via-neutral-50 dark:from-neutral-950 dark:via-neutral-900">
                      <h3 className="text-xl font-bold line-clamp-1 text-left">
                        {anime.anime_title}
                      </h3>
                    </CardHeader>
                  </CardContent>
                </Link>
              </Card>
            ))}
          </div>
        </section>
        <section id="manga">
          <h1 className="text-lg md:text-xl font-semibold mb-5">
            Manga Collections
          </h1>
          {dataManga.length === 0 && (
            <div className="flex justify-center items-center h-[60dvh]">
              <h1 className="text-center text-neutral-600 dark:text-neutral-500">
                No manga found
              </h1>
            </div>
          )}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {dataManga.map((manga) => (
              <Card
                className="relative border hover-image hover:text-red-600 dark:hover:text-red-600"
                key={manga.id}
              >
                <DeleteDialog title={manga.title as string} id={manga.id} />
                <Link href={`/manga/${manga.mal_id}`}>
                  <CardContent className="relative p-1">
                    <Image
                      src={`${manga.image_url}`}
                      width={450}
                      height={350}
                      alt="manga"
                      className="w-full max-h-72 object-cover rounded"
                    />
                    <CardHeader className="absolute w-full rounded bottom-0 left-0 mr-1 p-2 py-3 bg-gradient-to-t from-neutral-50 via-neutral-50 dark:from-neutral-950 dark:via-neutral-900">
                      <h3 className="text-xl font-bold line-clamp-1 text-left">
                        {manga.title}
                      </h3>
                    </CardHeader>
                  </CardContent>
                </Link>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};
