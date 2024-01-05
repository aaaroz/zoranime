import { TTopAnime } from "@/types";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import Image from "next/image";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../ui/tooltip";

type Recommendations = {
  dataAnime: TTopAnime;
};

export const Recommendations = ({ dataAnime }: Recommendations) => {
  return (
    <div className="grid grid-cols-3 md:grid-cols-6 gap-4 mt-5 md:mr-5">
      {dataAnime.data?.map((anime, index) => {
        return (
          <Link href={`/anime/${anime.mal_id}`} className=" transition-all" key={index}>
            <Card className="relative flex flex-col border-0 h-full justify-between bg-inherit p-1">
              <CardContent className="p-0">
                <Image
                  src={anime.images.webp.large_image_url}
                  alt="image"
                  width={150}
                  height={350}
                  className="hover-image w-full max-h-72 object-cover rounded-sm transition-all"
                />
                <CardHeader className="absolute flex justify-end bottom-0 left-0 py-2 px-0 bg-gradient-to-t from-neutral-950 via-neutral-900 h-[10dvh] w-full">
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        <CardTitle className="line-clamp-1 ps-1 text-start text-base sm:text-xl transition-all dark:text-neutral-50 dark:hover:text-red-700 text-neutral-50 hover:text-red-700">
                          {anime.title}
                        </CardTitle>
                      </TooltipTrigger>
                      <TooltipContent>{anime.title}</TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </CardHeader>
              </CardContent>
            </Card>
          </Link>
        );
      })}
    </div>
  );
};
