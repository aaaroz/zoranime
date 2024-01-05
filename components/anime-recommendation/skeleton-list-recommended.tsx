import { HeroSmall } from "../layout/hero-small";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { Skeleton } from "../ui/skeleton";

const SkeletonListRecommended = () => {
  return (
    <>
      <HeroSmall title="Anime Recommendations" breadcrumb />
      <section className="px-5 md:px-10 bg-neutral-50 dark:bg-neutral-800 dark:text-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {[...Array(24)].map((_, index) => (
            <Card className="p-3" key={index}>
              <CardContent className="p-0 flex gap-3">
                <Skeleton className="w-full h-[15rem]" />
                <Skeleton className="w-full h-[15rem]" />
              </CardContent>
              <CardHeader className="py-3 px-0">
                <Skeleton className="w-1/3 h-5" />
                <Skeleton className="w-full h-5" />
                <Skeleton className="w-3/4 h-5" />
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
};

export default SkeletonListRecommended;
