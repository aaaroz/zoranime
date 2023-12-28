import { Metadata } from "next";

import TopMangaList from "@/components/manga-top";
import { HeroSmall } from "@/components/layout/hero-small";

export const metadata: Metadata = {
  title: "Top Manga",
};
const TopManga = () => {
  return (
    <>
      <HeroSmall title="Top Manga" breadcrumb />
      <section className="px-5 md:px-10 bg-neutral-50 dark:bg-neutral-800 dark:text-white">
        <TopMangaList />
      </section>
    </>
  );
};

export default TopManga;
