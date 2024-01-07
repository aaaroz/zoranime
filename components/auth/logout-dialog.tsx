"use client";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react";

export const LogoutDialog = () => {
  return (
    <Dialog>
      <DialogTrigger className="px-2 py-2 text-sm rounded-md border transition-all duration-500 hover:text-red-600 dark:hover:text-red-600 dark:border-none dark:bg-black dark:hover:bg-neutral-900">
        Sign Out
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Do you want to sign out?</DialogTitle>
        </DialogHeader>
        <DialogDescription>
          Just click a red button if you want to sign out, but if you didn{"'"}t meant to sign out,
          just click another one or close this dialog.
        </DialogDescription>
        <DialogFooter className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-end sm:space-x-2">
          <DialogClose asChild>
            <Button variant="destructive" onClick={() => signOut({ callbackUrl: "/" })}>
              Sign Out
            </Button>
          </DialogClose>
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
