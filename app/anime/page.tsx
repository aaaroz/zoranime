import { Metadata } from "next";

import AnimeLists from "@/components/animes";
import { HeroSmall } from "@/components/layout/hero-small";

export const metadata: Metadata = {
  title: "Anime",
};

const Animes = async () => {
  return (
    <>
      <HeroSmall title="All Anime" breadcrumb />
      <section className="px-5 md:px-10 bg-neutral-50 dark:bg-neutral-800 dark:text-white">
        <AnimeLists />
      </section>
    </>
  );
};

export default Animes;
