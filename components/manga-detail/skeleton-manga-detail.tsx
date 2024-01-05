import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { HeroSmall } from "../layout/hero-small";

const SkeletonMangaDetail = () => {
  return (
    <>
      <HeroSmall title="Manga Detail" breadcrumb />
      <section className="px-2 pb-8 md:px-10 bg-neutral-100 dark:bg-neutral-800 dark:text-white">
        <div className="bg-neutral-50 dark:bg-neutral-700 p-2">
          <div className="flex flex-col md:flex-row ">
            <Skeleton className="w-full md:w-[500px] h-[350px]" />
            <Card className="my-5 md:my-0 ml-5 hidden lg:flex flex-col border-0 min-h-full w-full justify-around col-span-1 bg-inherit dark:bg-neutral-700 shadow-none">
              <div className="mx-8 my-2">
                <Skeleton className="w-1/3 h-5" />
              </div>
              <div className="flex">
                <div className="mx-8 my-3 space-y-1 flex flex-col items-center justify-between p-2 w-[15dvh]">
                  <Skeleton className="w-[7rem] h-[2rem]" />
                  <Skeleton className="w-[7rem] h-[2rem]" />
                  <Skeleton className="w-[7rem] h-[1rem]" />
                </div>
                <Separator orientation="vertical" className="py-5 h-3/4 my-auto" />
                <div className="flex flex-col flex-wrap">
                  <div className="flex mx-5 mt-10 gap-5 text-2xl font-medium">
                    <Skeleton className="w-40 h-10" />
                    <Skeleton className="w-40 h-10" />
                    <Skeleton className="w-40 h-10" />
                  </div>
                  <div className="flex mx-5 py-5 gap-5 text-sm font-medium">
                    <Skeleton className="w-1/3 h-5" />
                    <Separator orientation="vertical" />
                    <Skeleton className="w-1/3 h-5" />
                    <Separator orientation="vertical" />
                    <Skeleton className="w-1/3 h-5" />
                  </div>
                </div>
              </div>
              <div className="mx-8 mb-5 space-y-2">
                <Skeleton className="w-1/4 h-5" />
                <Separator className="my-2" />
                <Skeleton className="w-full h-5" />
                <Skeleton className="w-full h-5" />
                <Skeleton className="w-full h-5" />
                <Skeleton className="w-3/4 h-5" />
              </div>
            </Card>
          </div>
          <div className="lg:hidden flex flex-col items-center justify-center gap-2 py-5">
            <Skeleton className="w-1/5 h-5" />
            <div className="flex flex-row flex-wrap justify-center items-center space-y-2">
              <Skeleton className="w-1/3 h-5" />
              <Skeleton className="w-1/3 h-5" />
              <Skeleton className="w-1/3 h-5" />
              <Skeleton className="w-1/3 h-5" />
              <Skeleton className="w-1/3 h-5" />
            </div>
            <Skeleton className="w-full h-5" />
            <Skeleton className="w-full h-5" />
            <Skeleton className="w-full h-5" />
            <Skeleton className="w-full h-5" />
            <Skeleton className="w-3/4 h-5" />
          </div>
          <div className="py-8 pb-14 space-y-2">
            <Skeleton className="w-1/3 h-5" />
            <Separator className="my-2" />
            <Skeleton className="w-full h-5" />
            <Skeleton className="w-full h-5" />
            <Skeleton className="w-full h-5" />
            <Skeleton className="w-full h-5" />
            <Skeleton className="w-full h-5" />
            <Skeleton className="w-3/4 h-5" />
            <ul className="mt-5 space-y-2">
              <li>
                <Skeleton className="w-full h-5" />
              </li>
              <li>
                <Skeleton className="w-full h-5" />
              </li>
              <li>
                <Skeleton className="w-full h-5" />
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default SkeletonMangaDetail;
