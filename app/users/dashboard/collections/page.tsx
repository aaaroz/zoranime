import { FC } from "react";
import { Metadata } from "next";

import prisma from "@/lib/prisma";
import { authUserSession } from "@/lib/utils";
import { MyCollections } from "@/components/collections";
import { HeroSmall } from "@/components/layout/hero-small";

export const metadata: Metadata = {
  title: "My Collections",
};

const Collections: FC = async () => {
  const user = await authUserSession();
  const collections = await prisma.collection.findMany({
    where: { user_email: user?.email as string },
  });
  const mangaCollections = await prisma.mangaCollection.findMany({
    where: { user_email: user?.email as string },
  });
  return (
    <>
      <HeroSmall title="My Collections" breadcrumb />
      <section className="px-5 md:px-10 pt-5 pb-14 bg-neutral-50 dark:bg-neutral-800">
        {collections.length === 0 && mangaCollections.length === 0 ? (
          <div className="h-[60dvh]">
            <h1 className="text-xl font-medium text-center dark:text-neutral-500">
              No collection found
            </h1>
          </div>
        ) : (
          <MyCollections data={collections} dataManga={mangaCollections} />
        )}
      </section>
    </>
  );
};

export default Collections;
