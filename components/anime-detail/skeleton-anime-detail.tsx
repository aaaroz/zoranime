import { FC } from "react";

import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { HeroSmall } from "../layout/hero-small";

const SkeletonAnimeDetail: FC = () => {
  return (
    <>
      <HeroSmall title="Anime Detail" breadcrumb />
      <section className="px-2 pb-8 md:px-10 bg-neutral-100 dark:bg-neutral-800 dark:text-white">
        <div className="bg-neutral-50 dark:bg-neutral-700 p-2">
          <div className="flex flex-col md:flex-row">
            <Skeleton className="w-[500px] h-[350px]" />
            <Card className="my-5 md:my-0 md:ml-5 flex flex-col border-0 min-h-full w-full justify-between col-span-1">
              <div className="hidden md:block mx-8 my-2">
                <Skeleton className="w-1/3 h-5" />
              </div>
              <Skeleton className="w-full h-full" />
            </Card>
          </div>
          <div className="flex flex-col items-center justify-center gap-2 py-5">
            <Skeleton className="w-1/3 h-5" />
            <div className="flex flex-row flex-wrap justify-center items-center gap-2 text-xs md:text-sm">
              <Skeleton className="w-1/3 h-5" />
            </div>
            <Skeleton className="w-1/2 h-5" />
            <Skeleton className="w-1/2 h-5" />
            <Skeleton className="w-1/2 h-5" />
          </div>
          <div className="py-8 pb-14 text-sm md:text-base space-y-3">
            <Skeleton className="w-1/3 h-5" />
            <Separator className="my-2 dark:bg-slate-50" />
            <Skeleton className="w-1/3 h-5" />
            <Skeleton className="w-1/3 h-5" />
            <Skeleton className="w-1/3 h-5" />
            <Skeleton className="w-1/3 h-5" />
          </div>
        </div>
      </section>
    </>
  );
};

export default SkeletonAnimeDetail;
