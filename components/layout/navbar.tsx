"use client";

import Link from "next/link";
import { FC, useState } from "react";
import { LogoText } from "./logo-text";
import { IoCloseSharp, IoSearch } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { ChevronDown } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ThemeSwitcher } from "@/components/ui/theme-switcher";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export const Navbar: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <header className="bg-white py-3 px-3 sm:px-10 dark:bg-neutral-800 dark:text-white overflow-hidden">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center">
        <div className="flex justify-between md:w-[40%]">
          <Link href="/">
            <LogoText />
          </Link>
          <div className="flex gap-2 md:hidden">
            <ThemeSwitcher />
            <Button
              aria-label="Open menu"
              onClick={handleOpen}
              className="block bg-white border transition-all text-black hover:bg-neutral-100 md:hidden dark:bg-black dark:text-white dark:hover:bg-inherit dark:hover:text-white dark:border-0"
            >
              {isOpen ? (
                <IoCloseSharp className="text-base" />
              ) : (
                <GiHamburgerMenu className="text-base" />
              )}
            </Button>
          </div>
        </div>
        <nav
          className={`absolute left-0 w-full pb-5 px-11 font-semibold bg-white dark:bg-neutral-800
      md:static md:z-auto md:flex md:w-auto md:items-center md:gap-6 md:pb-0 md:pl-0 lg:gap-11 ${
        isOpen ? "top-16" : "top-[-300px] hidden"
      }`}
        >
          <ul className="block md:flex space-x-2 space-y-4 mb-4 md:mb-0 md:space-y-0 md:space-x-5">
            <li>
              <DropdownMenu>
                <DropdownMenuTrigger className="ps-2 flex items-center outline-none transition-all hover:text-red-600">
                  <span>Top Lists</span>
                  <ChevronDown className="ml-1" size={16} />
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <Link href="/anime/top">
                    <DropdownMenuItem>Top Anime</DropdownMenuItem>
                  </Link>
                  <Link href="/manga/top">
                    <DropdownMenuItem>Top Manga</DropdownMenuItem>
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
            <Input aria-label="Search bar" placeholder="Search Anime...">
              <button type="submit" aria-label="Search">
                <IoSearch />
              </button>
            </Input>
            <div className="hidden md:block">
              <ThemeSwitcher />
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};
