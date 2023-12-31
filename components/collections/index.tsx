import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import type { TAnimeCollection } from "@/types";

interface MyCollectionsProps {
  data: TAnimeCollection[];
}

export const MyCollections: FC<MyCollectionsProps> = ({ data }) => {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {data.map((anime) => (
          <Link href={`/anime/${anime.anime_mal_id}`} key={anime.id}>
            <Card className="border hover-image hover:text-red-600 dark:hover:text-red-600">
              <CardContent className="relative p-1">
                <Image
                  src={`${anime.anime_image_url}`}
                  width={450}
                  height={350}
                  alt="logo"
                  className="w-full max-h-96 object-cover rounded"
                />
                <CardHeader className="absolute w-full rounded bottom-0 left-0 mr-1 p-2 py-3 bg-gradient-to-t from-neutral-50 via-neutral-100 dark:from-neutral-950 dark:via-neutral-900">
                  <h3 className="text-xl font-bold">{anime.anime_title}</h3>
                </CardHeader>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </>
  );
};
