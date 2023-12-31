import { FC } from "react";
import { Metadata } from "next";

import { MyCollections } from "@/components/collections";
import { HeroSmall } from "@/components/layout/hero-small";

export const metadata: Metadata = {
  title: "My Collections",
};

type Props = {};

const Collections: FC = (props: Props) => {
  return (
    <>
      <HeroSmall title="My Collections" breadcrumb />
      <section className="px-10 py-5 bg-neutral-50 dark:bg-neutral-800">
        <MyCollections />
      </section>
    </>
  );
};

export default Collections;
