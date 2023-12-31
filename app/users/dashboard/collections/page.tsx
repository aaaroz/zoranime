import { FC } from "react";
import { Metadata } from "next";

import { MyCollections } from "@/components/collections";
import { HeroSmall } from "@/components/layout/hero-small";
import { authUserSession } from "@/lib/utils";

export const metadata: Metadata = {
  title: "My Collections",
};

const Collections: FC = async () => {
  const user = await authUserSession();
  const collections = await prisma.collection.findMany({
    where: { user_email: user?.email as string },
  });

  return (
    <>
      <HeroSmall title="My Collections" breadcrumb />
      <section className="px-10 py-5 bg-neutral-50 dark:bg-neutral-800">
        <MyCollections data={collections} />
      </section>
    </>
  );
};

export default Collections;
