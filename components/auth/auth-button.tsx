import Image from "next/image";
import Link from "next/link";
import { CircleUserRoundIcon } from "lucide-react";

import { authUserSession } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LogoutDialog } from "./logout-dialog";
import { LoginDialog } from "./login-dialog";
import { Button } from "../ui/button";

export const AuthButton = async () => {
  const user = await authUserSession();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="px-3 py-2 rounded-md border transition-all duration-500 hover:text-red-600 dark:hover:text-red-600 dark:border-none dark:bg-black dark:hover:bg-neutral-800">
        <CircleUserRoundIcon className="w-5 h-5" />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {user ? (
          <>
            <div className="w-[50dvh] flex items-center gap-3 p-3">
              <Image
                src={user.image as string}
                width={45}
                height={45}
                alt="logo"
                className="rounded-full"
              />
              <div className="flex flex-col">
                <h1 className="text-lg font-semibold">
                  Welcome,{" "}
                  {user.name?.split(" ")[1] ? user.name?.split(" ")[1] : user.name?.split(" ")[0]}
                </h1>
                <p className="text-xs text-neutral-500">{user.email as string}</p>
              </div>
            </div>
          </>
        ) : null}
        {user ? (
          <div className="flex flex-col gap-1 p-2 m-2">
            <Link href="/users/dashboard">
              <Button
                variant="outline"
                className="py-2 w-full text-sm font-normal transition-all duration-500 hover:text-red-600 dark:hover:text-red-600 dark:border-none dark:bg-black dark:hover:bg-neutral-900"
              >
                Dashboard
              </Button>
            </Link>
            <LogoutDialog />
          </div>
        ) : (
          <div className="relative flex w-full">
            <LoginDialog />
          </div>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
