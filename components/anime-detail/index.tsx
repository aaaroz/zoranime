"use client";

import Image from "next/image";
import Link from "next/link";
import YouTube from "react-youtube";
import { usePathname } from "next/navigation";

import { Badge } from "@/components/ui/badge";
import { Star } from "@/components/ui/star";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import type { TFullAnime } from "@/types";

const AnimeDetail = ({ dataAnime }: { dataAnime: TFullAnime }) => {
  let arrayPath;
  const path = usePathname();
  arrayPath = path.split("/").filter(Boolean);

  return (
    <>
      <div className="flex flex-col md:flex-row">
        <Image
          src={
            dataAnime.data.images.webp.large_image_url
              ? dataAnime.data.images.webp.large_image_url
              : dataAnime.data.images.webp.image_url
          }
          alt="image"
          width={500}
          height={350}
          className="hover-image w-full md:w-auto max-h-96 object-cover rounded-sm transition-all"
        />
        <Card className="my-5 md:my-0 md:ml-5 flex flex-col border-0 min-h-full w-full justify-between col-span-1">
          <div className="hidden md:block mx-8 my-2">
            <Breadcrumb path={arrayPath} page={dataAnime.data.title} />
            <Separator className="my-2" />
          </div>
          <YouTube
            className="md:p-8 md:pt-0 w-full h-full"
            videoId={dataAnime.data.trailer.youtube_id}
            onReady={(event) => event.target.pauseVideo()}
            opts={{
              width: "100%",
              height: "100%",
            }}
            onError={(error) => console.log(error)}
          />
        </Card>
      </div>
      <div className="flex flex-col items-center justify-center gap-2 py-5">
        <Star
          score={dataAnime.data.score}
          scoredBy={dataAnime.data.scored_by}
        />
        <div className="flex flex-row flex-wrap justify-center items-center gap-2 text-xs md:text-sm">
          <Badge>Rank #{dataAnime.data.rank}</Badge>
          <Badge>Popularity #{dataAnime.data.popularity}</Badge>
          <Badge>Members #{dataAnime.data.members}</Badge>
          <Badge>Favorites #{dataAnime.data.favorites}</Badge>
          <Badge>Episodes #{dataAnime.data.episodes}</Badge>
        </div>
        <p className="text-xs text-center">{dataAnime.data.background}</p>
      </div>
      <div className="py-8 pb-14 text-sm md:text-base">
        <h3>
          {dataAnime.data.duration} | {dataAnime.data.rating} |{" "}
          {dataAnime.data.status}
        </h3>
        <Separator className="my-2 dark:bg-slate-50" />
        <p className=" text-justify mt-2">{dataAnime.data.synopsis}</p>
        <ul className="mt-2">
          Soundtrack List :
          {dataAnime.data.theme.openings.map((opening, index) => (
            <li key={index}>{opening}</li>
          ))}
        </ul>
        <ul className="mt-2">
          Studios :
          {dataAnime.data.studios.map((studio, index) => (
            <li key={index}>{studio.name}</li>
          ))}
        </ul>
        <ol className="mt-2 list-disc">
          Producers :
          {dataAnime.data.producers.map((producer, index) => (
            <li key={index} className="list-inside">
              {producer.name}
            </li>
          ))}
        </ol>
        <Link
          href={dataAnime.data.url}
          target="_blank"
          className="mt-4 text-sm hover:text-red-600 hover:underline"
        >
          Visit Official Website
        </Link>
      </div>
    </>
  );
};

export default AnimeDetail;
