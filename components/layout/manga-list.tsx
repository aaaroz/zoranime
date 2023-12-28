import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Star } from "@/components/ui/star";

import type { TManga } from "@/types";

interface MangaListProps {
  api: TManga;
  large?: boolean;
}

export const MangaList: FC<MangaListProps> = ({ api, large }) => {
  return (
    <>
      <div
        className={cn(
          "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 py-5",
          large ? `xl:grid-cols-6` : `xl:grid-cols-4`
        )}
      >
        {api.data?.map((anime, index) => {
          return (
            <Link
              href={`/manga/${anime.mal_id}`}
              className=" transition-all"
              key={index}
            >
              <Card className="flex flex-col border-none h-full justify-between bg-transparent ">
                <CardContent className="p-0">
                  <Image
                    src={anime.images.webp.image_url}
                    alt="image"
                    width={200}
                    height={350}
                    className="hover-image w-full max-h-72 object-cover rounded-sm transition-all"
                  />
                </CardContent>
                <CardHeader className="py-2 px-0">
                  <span className="text-xs dark:text-neutral-300 text-neutral-950">
                    {anime.genres.map((genre) => genre.name).join(", ")}
                  </span>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        <CardTitle className="line-clamp-1 p-0 text-start text-base sm:text-xl transition-all dark:text-neutral-50 dark:hover:text-red-700 text-neutral-950 hover:text-red-700">
                          {anime.title_english
                            ? anime.title_english
                            : anime.title}
                        </CardTitle>
                      </TooltipTrigger>
                      <TooltipContent>
                        {anime.title_english
                          ? anime.title_english
                          : anime.title}
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                  <Star score={anime.score} scoredBy={anime.scored_by} />
                </CardHeader>
                <CardFooter className="flex justify-around items-end rounded p-2 bg-neutral-100 dark:bg-neutral-700">
                  <div className="flex flex-col text-center">
                    <p className="text-sm font-semibold">{anime.members}</p>
                    <span className="text-xs">Views</span>
                  </div>
                  <div className="flex flex-col text-center">
                    <p className="text-sm font-semibold">
                      {anime.chapters ? anime.chapters : "1"}
                    </p>
                    <span className="text-xs ">Chapters</span>
                  </div>
                </CardFooter>
              </Card>
            </Link>
          );
        })}
      </div>
    </>
  );
};
