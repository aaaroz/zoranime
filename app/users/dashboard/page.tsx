import { Metadata } from "next";

import { HeroSmall } from "@/components/layout/hero-small";
import { authUserSession } from "@/lib/utils";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Dashboard",
};

type Props = {};

const Dashboard = async (props: Props) => {
  const user = await authUserSession();
  metadata.title = `${user?.name} - Dashboard`;

  return (
    <>
      <HeroSmall title="Dashboard" breadcrumbPage={user?.name as string} />
      <section className="p-10 bg-neutral-50 dark:bg-neutral-800">
        <div className="flex flex-col md:flex-row mx-5 gap-5 sm:mx-10 h-auto justify-start items-center md:items-start">
          <Image
            src={user?.image as string}
            width={400}
            height={300}
            alt="logo"
            className="max-h-72 rounded hover-image"
          />
          <div className="flex flex-col w-full space-y-5 md:space-y-3 text-center sm:text-left">
            <h1 className="text-3xl font-bold">Here{"'"}s your Dashboard !</h1>
            <Separator />
            <div className="flex flex-col gap-1">
              <h3 className="text-xl font-semibold">{user?.name}</h3>
              <h4 className="text-lg font-medium">{user?.email}</h4>
            </div>
            <div className="flex justify-center md:justify-normal gap-2 md:min-h-[30dvh]">
              <Link href="/users/dashboard/collections">
                <Button>My Collections</Button>
              </Link>
              <Link href="/users/dashboard/comments">
                <Button>My Comments</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Dashboard;
