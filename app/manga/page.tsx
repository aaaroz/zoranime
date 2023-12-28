import { Metadata } from "next";

import { HeroSmall } from "@/components/layout/hero-small";
import MangaLists from "@/components/manga";

export const metadata: Metadata = {
  title: "Manga",
};

const Manga = () => {
  return (
    <>
      <HeroSmall title="All Manga" breadcrumb />
      <section className="px-5 md:px-10 bg-neutral-50 dark:bg-neutral-800 dark:text-white">
        <MangaLists />
      </section>
    </>
  );
};

export default Manga;
