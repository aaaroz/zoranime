"use client";

import { TFullManga } from "@/types";
import Image from "next/image";
import { Card } from "../ui/card";
import { Star } from "../ui/star";

import { Badge } from "../ui/badge";
import { Separator } from "../ui/separator";
import Link from "next/link";
import { Breadcrumb } from "../ui/breadcrumb";
import { usePathname } from "next/navigation";
import { FC } from "react";

interface MangaDetailProps {
  dataManga: TFullManga;
}

const MangaDetail: FC<MangaDetailProps> = ({ dataManga }) => {
  let arrayPath;
  const path = usePathname();
  arrayPath = path.split("/").filter(Boolean);

  return (
    <>
      <div className="flex flex-col md:flex-row">
        <Image
          src={dataManga.data.images.webp.image_url}
          alt="image"
          width={500}
          height={350}
          className="hover-image w-full lg:w-auto max-h-96 object-cover rounded-sm transition-all"
        />
        <Card className="my-5 md:my-0 ml-5 hidden lg:flex flex-col border-0 min-h-full w-full justify-around col-span-1 bg-inherit shadow-none">
          <div className="mx-8 my-2">
            <Breadcrumb path={arrayPath} page={dataManga.data.title} />
            <Separator className="my-2" />
          </div>
          <div className="flex">
            <div className="mx-8 my-3 space-y-1 flex flex-col items-center justify-between p-2 w-[15dvh]">
              <h3 className="text-xs py-1 text-center w-full rounded text-white bg-red-600">
                SCORE
              </h3>
              <h4 className="text-3xl font-bold">{dataManga.data.score}</h4>
              <h5 className="text-xs">{dataManga.data.scored_by} users</h5>
              <Star score={dataManga.data.score} />
            </div>
            <Separator orientation="vertical" className="py-5 h-3/4 my-auto" />
            <div className="flex flex-col flex-wrap">
              <div className="flex mx-5 mt-10 gap-5 text-2xl font-medium">
                <h3>
                  Ranked <strong>#{dataManga.data.rank}</strong>
                </h3>
                <h3>
                  Popularity <strong>#{dataManga.data.popularity}</strong>
                </h3>
                <h3>
                  Members <strong>#{dataManga.data.members}</strong>
                </h3>
              </div>
              <div className="flex mx-5 py-5 gap-5 text-sm font-medium">
                <h5>{dataManga.data.type}</h5>
                <Separator orientation="vertical" />
                <h5 className="flex">
                  {dataManga.data.external.map((ext, index) => (
                    <>
                      {index !== 0 && (
                        <Separator orientation="vertical" className="mx-2" />
                      )}
                      <Link
                        key={index}
                        href={ext.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-red-600 hover:underline"
                      >
                        {ext.name}
                      </Link>
                    </>
                  ))}
                </h5>
                <Separator orientation="vertical" />
                <h5>
                  {dataManga.data.chapters ? dataManga.data.chapters : "?"}{" "}
                  Chapters
                </h5>
              </div>
            </div>
          </div>
          <div className="mx-8 mb-5">
            <h4>Background</h4>
            <Separator className="my-2" />
            <p className="text-base text-justify">
              {dataManga.data.background}
            </p>
          </div>
        </Card>
      </div>
      <div className="lg:hidden flex flex-col items-center justify-center gap-2 py-5">
        <Star
          score={dataManga.data.score}
          scoredBy={dataManga.data.scored_by}
        />
        <div className="flex flex-row flex-wrap justify-center items-center gap-2">
          <Badge>Rank #{dataManga.data.rank}</Badge>
          <Badge>Popularity #{dataManga.data.popularity}</Badge>
          <Badge>Members #{dataManga.data.members}</Badge>
          <Badge>Favorites #{dataManga.data.favorites}</Badge>
          <Badge>Chapters #{dataManga.data.chapters}</Badge>
        </div>
        <p className="text-xs text-center">{dataManga.data.background}</p>
      </div>
      <div className="py-8 pb-14">
        <h3 className="text-base">Status : {dataManga.data.status}</h3>
        <Separator className="my-2" />
        <p className="text-base text-justify m-2 ">{dataManga.data.synopsis}</p>
        <ul className="mt-2">
          Serializations :
          {dataManga.data.serializations.map((studio, index) => (
            <li key={index}>{studio.name}</li>
          ))}
        </ul>
        <ol className="mt-2 list-disc">
          Authors :
          {dataManga.data.authors.map((producer, index) => (
            <li key={index} className="list-inside">
              {producer.name}
            </li>
          ))}
        </ol>
        <Link
          href={dataManga.data.url}
          target="_blank"
          className="mt-4 text-sm hover:text-red-600"
        >
          Visit Official Website
        </Link>
      </div>
    </>
  );
};

export default MangaDetail;
