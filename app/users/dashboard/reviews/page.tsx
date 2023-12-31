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
      {/* <div className="content h-screen bg-green-700 relative">
        <div className="blue-rounded rounded-tl-full h-96 w-72 bg-blue-300 absolute right-0"></div>
      </div> */}
    </>
  );
};

export default Reviews;
