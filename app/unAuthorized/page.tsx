"use client";

import { IoWarning } from "react-icons/io5";

import { LoginDialog } from "@/components/auth/login-dialog";
import { HeroSmall } from "@/components/layout/hero-small";
import { redirect, useSearchParams } from "next/navigation";
import { useSession } from "next-auth/react";

const UnAuthorized = () => {
  const { data: session } = useSession();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/";
  let pathname = "/";

  if (callbackUrl && callbackUrl !== "/") {
    const url = new URL(searchParams.get("callbackUrl")!);
    pathname = url.pathname;
  }
  if (session) {
    redirect(pathname);
  }

  return (
    <>
      <HeroSmall title="401 - Unauthorized" breadcrumbPage="UnAuthorized" />
      <section className="px-5 py-2 md:px-10 bg-neutral-50 dark:bg-neutral-800 dark:text-white">
        <div className="flex flex-col mx-5 gap-5 sm:mx-10 h-[60dvh] justify-start items-center">
          <IoWarning className="text-5xl mx-auto" />
          <h1 className="text-4xl font-bold">Ooopss!</h1>
          <p className="text-xl font-medium mt-2 text-center">
            You don{"'"}t have permission to access this page, please sign in first!
          </p>
          <div className="w-full sm:w-[50dvh]">
            <LoginDialog
              classNames="py-2 bg-neutral-50 dark:bg-neutral-900 dark:hover:bg-neutral-900/80 dark:border-none justify-center border font-semibold rounded"
              pathname={pathname}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default UnAuthorized;
