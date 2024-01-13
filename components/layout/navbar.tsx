import Link from "next/link";
import { FC } from "react";
import { LogoText } from "./logo-text";
import { ChevronDown } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ThemeSwitcher } from "@/components/ui/theme-switcher";
import { AuthButton } from "@/components/auth/auth-button";

import { InputSearch } from "./input-search";
import { SheetNavbar } from "./sheet-navbar";

export const Navbar: FC = () => {
  return (
    <header className="bg-white py-3 px-3 sm:px-10 dark:bg-neutral-800 dark:text-white overflow-hidden">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center">
        <div className="flex justify-between md:w-[40%]">
          <Link href="/">
            <LogoText />
          </Link>
          <div className="flex items-center gap-2 md:hidden">
            <ThemeSwitcher />
            <AuthButton />
            <SheetNavbar />
          </div>
        </div>
        <nav
          className="absolute z-50 left-0 w-full pb-5 px-11 font-semibold bg-white dark:bg-neutral-800
      md:static md:z-auto md:flex md:w-auto md:items-center md:gap-6 md:pb-0 md:pl-0 lg:gap-11 
     top-[-300px] hidden transition-all duration-500 ease-in-out"
        >
          <ul className="block md:flex space-x-2 space-y-4 mb-4 md:mb-0 md:space-y-0 md:space-x-5">
            <li>
              <DropdownMenu>
                <DropdownMenuTrigger className="ps-2 flex items-center outline-none transition-all hover:text-red-600">
                  <span>More</span>
                  <ChevronDown className="ml-1" size={16} />
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <Link href="/anime/top">
                    <DropdownMenuItem>Top Anime</DropdownMenuItem>
                  </Link>
                  <Link href="/manga/top">
                    <DropdownMenuItem>Top Manga</DropdownMenuItem>
                  </Link>
                  <Link href="/anime/recommendations">
                    <DropdownMenuItem>Recommended Anime</DropdownMenuItem>
                  </Link>
                </DropdownMenuContent>
              </DropdownMenu>
            </li>
            <li>
              <Link href="/anime" className="transition-all hover:text-red-600">
                Anime
              </Link>
            </li>
            <li>
              <Link href="/manga" className="transition-all hover:text-red-600">
                Manga
              </Link>
            </li>
          </ul>
          <div className="md:flex items-center space-x-2 space-y-4 justify-end md:space-y-0">
            <InputSearch />
            <div className="hidden md:flex items-center gap-1">
              <ThemeSwitcher />
              <AuthButton />
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};
