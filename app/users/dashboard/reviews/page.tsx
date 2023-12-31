import Loading from "@/app/loading";
import { HeroSmall } from "@/components/layout/hero-small";
import { Metadata } from "next";
import { FC } from "react";

export const metadata: Metadata = {
  title: "My Reviews",
};

const Reviews: FC = () => {
  return (
    <>
      <HeroSmall title="My Reviews" breadcrumb />
      <Loading />
    </>
  );
};

export default Reviews;
