import Link from "next/link";
import { formatDistanceStrict } from "date-fns/formatDistanceStrict";

import { Card, CardContent, CardDescription, CardFooter, CardHeader } from "@/components/ui/card";
import { StarRating } from "@/components/layout/star-rating";

import type { TAnimeComment, TMangaComment } from "@/types";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../ui/tooltip";

type Props = {
  data: TAnimeComment[];
  dataManga: TMangaComment[];
};

const CommentLists = ({ data, dataManga }: Props) => {
  return (
    <>
      <div className="grid grid-cols-1 gap-4">
        <section id="anime">
          <h1 className="text-lg md:text-xl font-semibold mb-5">Anime Comment</h1>
          {data.length === 0 && (
            <div className="flex justify-center items-center h-[60dvh]">
              <h1 className="text-center text-neutral-600 dark:text-neutral-500">
                No anime comment found
              </h1>
            </div>
          )}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
            {data.map((item) => {
              const date = item.createdAt ? new Date(item.createdAt) : null;
              const dateStr = date
                ? formatDistanceStrict(date, Date.now(), {
                    addSuffix: true,
                  })
                : null;
              return (
                <Card key={item.id}>
                  <CardContent className="p-3">
                    <TooltipProvider>
                      <Tooltip>
                        <CardHeader className="p-0 flex flex-row gap-1 items-center">
                          <span className="text-xs md:text-sm mt-1 text-neutral-500">
                            commented at
                          </span>
                          <TooltipTrigger>
                            <Link
                              href={`/anime/${item.anime_mal_id}`}
                              className="hover:text-red-600 transition-all font-medium line-clamp-1 text-left"
                            >
                              {item.anime_title}
                            </Link>
                          </TooltipTrigger>
                          <TooltipContent>{item.anime_title}</TooltipContent>
                        </CardHeader>
                      </Tooltip>
                    </TooltipProvider>
                    <CardDescription>
                      {'"'}
                      {item.comment}
                      {'"'}
                    </CardDescription>
                    <CardFooter className="p-0 py-2">
                      <span className="text-sm mr-3 text-neutral-600 dark:text-neutral-500">
                        Your rating :
                      </span>
                      <StarRating rating={item.rating} />
                    </CardFooter>
                    <p className="text-xs md:text-sm text-neutral-600 dark:text-neutral-500">
                      {dateStr}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>
        <section id="manga">
          <h1 className="text-lg md:text-xl font-semibold mb-5">Manga Comment</h1>
          {dataManga.length === 0 && (
            <div className="flex justify-center items-center h-[60dvh]">
              <h1 className="text-center text-neutral-600 dark:text-neutral-500">
                No manga comment found
              </h1>
            </div>
          )}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-2">
            {dataManga.map((item) => {
              const date = item.createdAt ? new Date(item.createdAt) : null;
              const dateStr = date
                ? formatDistanceStrict(date, Date.now(), {
                    addSuffix: true,
                  })
                : null;
              return (
                <Card key={item.id}>
                  <CardContent className="p-3">
                    <TooltipProvider>
                      <Tooltip>
                        <CardHeader className="p-0 flex flex-row gap-2 items-center">
                          <span className="text-xs md:text-sm mt-1 text-neutral-500">
                            commented at
                          </span>
                          <TooltipTrigger>
                            <Link
                              href={`/anime/${item.mal_id}`}
                              className="hover:text-red-600 transition-all font-medium"
                            >
                              {item.title}
                            </Link>
                          </TooltipTrigger>
                          <TooltipContent>{item.title}</TooltipContent>
                        </CardHeader>
                      </Tooltip>
                    </TooltipProvider>
                    <CardDescription>
                      {'"'}
                      {item.comment}
                      {'"'}
                    </CardDescription>
                    <CardFooter className="p-0 py-2">
                      <span className="text-sm mr-3 text-neutral-600 dark:text-neutral-500">
                        Your rating :
                      </span>
                      <StarRating rating={item.rating} />
                    </CardFooter>
                    <p className="text-xs md:text-sm text-neutral-600 dark:text-neutral-500">
                      {dateStr}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>
      </div>
    </>
  );
};

export default CommentLists;
