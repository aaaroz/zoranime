import Link from "next/link";
import Image from "next/image";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import type { TRandomAnime } from "@/types";

export const AnimeForYou = ({ dataAnime }: { dataAnime: TRandomAnime }) => {
  return (
    <Card className="my-5 w-full lg:w-[50dvh] rounded">
      <CardHeader className="text-base font-semibold py-3">
        Anime For You
      </CardHeader>
      <CardContent className="space-y-2">
        <Image
          src={dataAnime?.data.images.webp.image_url || ""}
          alt="anime"
          width={200}
          height={350}
          className="hover-image w-full max-h-32 object-cover rounded-sm transition-all"
        />
        <Link href={`/anime/${dataAnime?.data.mal_id}`}>
          <CardTitle className="line-clamp-1 text-lg hover:text-red-600">
            {dataAnime?.data.title}
          </CardTitle>
        </Link>
        <CardDescription className="line-clamp-3">
          {dataAnime?.data.synopsis}
        </CardDescription>
      </CardContent>
      <CardFooter>
        <Link
          href={`/anime/${dataAnime?.data.mal_id}`}
          className="text-sm hover:underline"
        >
          Read anime detail
        </Link>
      </CardFooter>
    </Card>
  );
};
