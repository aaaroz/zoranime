import { HeroSmall } from "@/components/layout/hero-small";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

const SkeletonAllManga = () => {
  const large = true;
  return (
    <>
      <HeroSmall title="All Manga" breadcrumb />
      <section className="px-5 md:px-10 bg-neutral-50 dark:bg-neutral-800 dark:text-white">
        <div
          className={cn(
            "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 py-5",
            large ? `xl:grid-cols-6` : `xl:grid-cols-4`
          )}
        >
          {[...Array(24)].map((_, index) => (
            <Card key={index}>
              <CardContent className="p-0">
                <Skeleton className="p-3 w-full h-72 animate-pulse"></Skeleton>
              </CardContent>
              <CardFooter className="flex py-2 px-3 flex-col items-start gap-1">
                <Skeleton className="w-1/2 h-[10px]" />
                <Skeleton className="w-full h-[20px]" />
                <Skeleton className="w-full h-[20px]" />
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
};

export default SkeletonAllManga;
