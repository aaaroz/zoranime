"use client";

import { FC } from "react";
import { signIn } from "next-auth/react";
import { GithubIcon } from "lucide-react";
import { FaGoogle } from "react-icons/fa";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface Props {
  classNames?: string;
  pathname?: string;
}

export const LoginDialog: FC<Props> = ({ classNames, pathname }) => {
  return (
    <Dialog>
      <DialogTrigger
        className={cn(
          "w-full relative flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-neutral-100 hover:text-red-600  dark:hover:bg-neutral-800 dark:hover:text-red-600",
          classNames
        )}
      >
        Sign In
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Choose Your Account</DialogTitle>
        </DialogHeader>
        <DialogDescription>
          When you sign in, you can add anime/manga to your own collection list,
          then you also can add your comment for the anime/manga.
        </DialogDescription>
        {pathname ? (
          <div className="flex flex-col gap-2">
            <DialogClose asChild>
              <Button
                onClick={() => signIn("github", { callbackUrl: `${pathname}` })}
                className="w-full dark:text-white dark:bg-neutral-800  dark:hover:bg-neutral-900"
              >
                Sign In with GitHub
                <GithubIcon className="ml-2 w-5 h-5" />
              </Button>
            </DialogClose>
            <DialogClose asChild>
              <Button
                onClick={() => signIn("google", { callbackUrl: `${pathname}` })}
                className="w-full dark:text-white dark:bg-neutral-800  dark:hover:bg-neutral-900"
              >
                Sign In with Google
                <FaGoogle className="ml-2 text-base font-thin" />
              </Button>
            </DialogClose>
          </div>
        ) : (
          <div className="flex flex-col gap-2">
            <DialogClose asChild>
              <Button
                onClick={() => signIn("github")}
                className="w-full dark:text-white dark:bg-neutral-800  dark:hover:bg-neutral-900"
              >
                Sign In with GitHub
                <GithubIcon className="ml-2 w-5 h-5" />
              </Button>
            </DialogClose>
            <DialogClose asChild>
              <Button
                onClick={() => signIn("google")}
                className="w-full dark:text-white dark:bg-neutral-800  dark:hover:bg-neutral-900"
              >
                Sign In with Google
                <FaGoogle className="ml-2 text-base font-thin" />
              </Button>
            </DialogClose>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};
