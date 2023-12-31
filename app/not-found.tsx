import { Metadata } from "next";

import { HeroSmall } from "@/components/layout/hero-small";
import { NotFoundSection } from "@/components/not-found";

export const metadata: Metadata = {
  title: "404 - Not Found",
};

const NotFound = () => {
  return (
    <>
      <HeroSmall title="404 - Not Found" breadcrumbPage="404 - Not Found" />
      <section className="text-center px-10 py-3 h-[60dvh] md:px-10 bg-neutral-50 dark:bg-neutral-800 dark:text-white">
        <NotFoundSection />
      </section>
    </>
  );
};

export default NotFound;
