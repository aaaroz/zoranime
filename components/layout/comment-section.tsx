import Image from "next/image";
import { FC } from "react";

import prisma from "@/lib/prisma";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { StarRating } from "./star-rating";
import { TAnimeComment, TMangaComment } from "@/types";
import { formatDistanceStrict } from "date-fns/formatDistanceStrict";

interface CommentSectionProps {
  anime_mal_id?: string;
  mal_id?: string;
}
export const CommentSection: FC<CommentSectionProps> = async ({
  anime_mal_id,
  mal_id,
}) => {
  let mangaComments: TMangaComment[] = [];
  let comments: TAnimeComment[] = [];
  if (mal_id) {
    mangaComments = await prisma.mangaComment.findMany({
      where: {
        mal_id,
      },
    });
  }
  if (anime_mal_id) {
    comments = await prisma.comment.findMany({
      where: {
        anime_mal_id,
      },
    });
  }

  return (
    <section className="mb-3 mt-5">
      <div className="flex flex-col gap-4 py-3 px-5 w-full rounded h-auto drop-shadow-md bg-neutral-50 dark:bg-neutral-800">
        <h1 className="text-xl font-semibold w-full">Comments</h1>
        <Separator />
        <div className="flex flex-col gap-2">
          {anime_mal_id && comments.length === 0 && (
            <p className="text-sm md:text-base text-center py-5 text-neutral-500 dark:text-neutral-400">
              No comments yet
            </p>
          )}
          {comments.map((item) => {
            const date = item.createdAt ? new Date(item.createdAt) : null;
            const dateStr = date
              ? formatDistanceStrict(date, Date.now(), {
                  addSuffix: true,
                })
              : null;

            return (
              <Card
                className="flex flex-wrap md:flex-nowrap gap-1 p-2 py-4"
                key={item.id}
              >
                <CardContent className="p-1">
                  <Image
                    src={item.user_image as string}
                    alt="..."
                    width={50}
                    height={50}
                    className="max-h-full rounded-full transition-all hover:scale-105"
                  />
                </CardContent>
                <div className="pl-2">
                  <CardHeader className="p-0 text-base md:text-lg font-semibold">
                    {item.username}
                  </CardHeader>
                  <CardDescription className="text-neutral-950 dark:text-white">
                    {item.comment}
                  </CardDescription>
                  <CardFooter className="p-0 pt-3 flex-col items-start">
                    <StarRating rating={item.rating} />
                    <span className="text-xs md:text-sm mt-1 text-neutral-600 dark:text-neutral-500">
                      {date === new Date() ? "just now" : dateStr}
                    </span>
                  </CardFooter>
                </div>
              </Card>
            );
          })}
          {mal_id && mangaComments.length === 0 && (
            <p className="text-sm md:text-base text-center py-5 text-neutral-500 dark:text-neutral-400">
              No comments yet
            </p>
          )}
          {mangaComments.map((item) => {
            const date = item.createdAt ? new Date(item.createdAt) : null;
            const dateStr = date
              ? formatDistanceStrict(date, Date.now(), {
                  addSuffix: true,
                })
              : null;

            return (
              <Card
                className="flex flex-wrap md:flex-nowrap gap-1 p-2 py-4"
                key={item.id}
              >
                <CardContent className="p-1">
                  <Image
                    src={item.user_image as string}
                    alt="..."
                    width={50}
                    height={50}
                    className="max-h-full rounded-full transition-all hover:scale-105"
                  />
                </CardContent>
                <div className="pl-2">
                  <CardHeader className="p-0 text-base md:text-lg font-semibold">
                    {item.username}
                  </CardHeader>
                  <CardDescription className="text-neutral-950 dark:text-white">
                    {item.comment}
                  </CardDescription>
                  <CardFooter className="p-0 pt-3 flex-col items-start">
                    <StarRating rating={item.rating} />
                    <span className="text-xs md:text-sm mt-1 text-neutral-600 dark:text-neutral-500">
                      {dateStr}
                    </span>
                  </CardFooter>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
