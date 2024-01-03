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
  breadcrumbPage?: string;
}

export const HeroSmall: FC<HeroSmallProps> = ({ title, breadcrumb, genres, breadcrumbPage }) => {
  const path = usePathname();
  let arrayPath;
  if (breadcrumb || breadcrumbPage) {
    arrayPath = path.split("/").filter(Boolean);
  }
  return (
    <>
      <div className="relative p-5 md:p-10 pt-8 bg-neutral-100 dark:bg-neutral-800">
        <Image
          src="/images/hero-2-light.png"
          alt="Hero Small"
          width={1400}
          height={200}
          className="min-h-[200px] w-auto object-cover dark:hidden"
        />
        <Image
          src="/images/hero-2-dark.png"
          alt="Hero Small"
          width={1400}
          height={200}
          className="min-h-[200px] w-auto object-cover hidden dark:block"
        />
        <div className="absolute top-20 md:top-28 left-10 md:left-20">
          <h1 className="capitalize text-3xl font-bold text-black dark:text-white">{title}</h1>
          {breadcrumb && arrayPath && <Breadcrumb path={arrayPath} />}
          {breadcrumbPage && arrayPath && <Breadcrumb path={arrayPath} page={breadcrumbPage} />}
          {genres?.map((genre) => (
            <Badge key={genre.mal_id} variant="secondary" className="text-xs mr-1">
              {genre.name}
            </Badge>
          ))}
        </div>
      </div>
    </>
  );
};
