"use client";

import Image from "next/image";
import { FC } from "react";
import { usePathname } from "next/navigation";

import { Badge } from "@/components/ui/badge";
import { Breadcrumb } from "@/components/ui/breadcrumb";

interface Genres {
  mal_id: 0;
  type: "string";
  name: "string";
  url: "string";
}
interface HeroSmallProps {
  title: string;
  breadcrumb?: boolean;
  genres?: Genres[];
}

export const HeroSmall: FC<HeroSmallProps> = ({
  title,
  breadcrumb,
  genres,
}) => {
  let arrayPath;
  if (breadcrumb) {
    const path = usePathname();
    arrayPath = path.split("/").filter(Boolean);
  }
  return (
    <>
      <div className="relative p-10 pt-8 pr-16 bg-neutral-100 dark:bg-neutral-800">
        <Image
          src="/images/hero-2-light.png"
          alt="Hero Small"
          width={1400}
          height={200}
          className="max-h-[200px] w-full object-cover dark:hidden"
        />
        <Image
          src="/images/hero-2-dark.png"
          alt="Hero Small"
          width={1400}
          height={200}
          className="min-h-[200px] max-h-[200px] w-full object-cover hidden dark:block"
        />
        <div className="absolute top-20 left-14">
          <h1 className="text-3xl font-bold text-black dark:text-white">
            {title}
          </h1>
          {breadcrumb && arrayPath && <Breadcrumb path={arrayPath} />}
          {genres?.map((genre) => (
            <Badge
              key={genre.mal_id}
              variant="secondary"
              className="text-xs mr-1"
            >
              {genre.name}
            </Badge>
          ))}
        </div>
      </div>
    </>
  );
};
