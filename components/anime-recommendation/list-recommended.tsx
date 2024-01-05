import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

import { Card, CardContent, CardDescription, CardHeader } from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import type { TFullRecommendedAnime } from "@/types";

interface ListRecommendedProps {
  dataAnime: TFullRecommendedAnime;
}

export const ListRecommended: FC<ListRecommendedProps> = ({ dataAnime }) => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        <TooltipProvider>
          {dataAnime.data.map((anime, index) => {
            return (
              <Card className="rounded border flex flex-col justify-between" key={index}>
                <CardContent className="flex px-3 gap-3 py-3 justify-between">
                  <div className="flex flex-col justify-between">
                    <Link href={`/anime/${anime.entry[0].mal_id}`}>
                      <Image
                        src={anime.entry[0].images.webp.large_image_url}
                        width={300}
                        height={200}
                        alt="..."
                        className="max-h-72 object-cover rounded-sm hover-image"
                      />
                      <Tooltip>
                        <CardHeader className="p-0 pt-1">
                          <span className="text-xs">If you liked</span>
                          <TooltipTrigger>
                            <h1 className="text-xl font-semibold line-clamp-1 text-left transition-all hover:text-red-600">
                              {anime.entry[0].title}
                            </h1>
                          </TooltipTrigger>
                        </CardHeader>
                        <TooltipContent>{anime.entry[0].title}</TooltipContent>
                      </Tooltip>
                    </Link>
                  </div>
                  <div className="flex flex-col justify-between">
                    <Link href={`/anime/${anime.entry[1].mal_id}`}>
                      <Image
                        src={anime.entry[1].images.webp.large_image_url}
                        width={300}
                        height={200}
                        alt="..."
                        className="max-h-72 object-cover rounded-sm hover-image"
                      />
                      <Tooltip>
                        <CardHeader className="p-0 pt-1">
                          <span className="text-xs">Then you might like</span>
                          <TooltipTrigger>
                            <h1 className="text-xl font-semibold line-clamp-1 text-left transition-all hover:text-red-600">
                              {anime.entry[1].title}
                            </h1>
                          </TooltipTrigger>
                        </CardHeader>
                        <TooltipContent>{anime.entry[1].title}</TooltipContent>
                      </Tooltip>
                    </Link>
                  </div>
                </CardContent>
                <Tooltip>
                  <TooltipTrigger>
                    <CardDescription className="text-left px-3 my-2 md:line-clamp-2  text-black dark:text-white">
                      {anime.content}
                    </CardDescription>
                  </TooltipTrigger>
                  <TooltipContent className="w-[50dvh]">{anime.content}</TooltipContent>
                </Tooltip>
              </Card>
            );
          })}
        </TooltipProvider>
      </div>
    </>
  );
};
