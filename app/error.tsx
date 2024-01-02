"use client";

import Link from "next/link";
import { HeroSmall } from "@/components/layout/hero-small";
import { Button } from "@/components/ui/button";

const ErrorPage = ({ error }: { error: Error }) => {
  return (
    <>
      <HeroSmall title="Something Went Wrong!" />
      <section className="flex justify-center px-10 h-screen bg-neutral-50 dark:bg-neutral-800">
        <div className="p-10 text-center space-y-10">
          <h1 className="text-lg font-medium text-red-500">
            There was a problem!
          </h1>
          <p className="text-xl md:text-4xl font-black">{error.message}</p>
          <p className="text-xs md:text-sm font-medium text-neutral-600 dark:text-neutral-500">
            Please try again later or contact support if the problem persist.
          </p>
          <div className="space-x-2">
            <Link href="/">
              <Button
                variant="outline"
                className="hover:text-red-500 dark:hover:text-red-500 transition-all duration-500"
              >
                Try Again
              </Button>
            </Link>
            <Link href="mailto:zoldyckramdanz@gmail.com">
              <Button variant="ghost">Contact Support</Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default ErrorPage;
