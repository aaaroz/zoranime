import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { GiHamburgerMenu } from "react-icons/gi";
import { LogoText } from "./logo-text";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import { InputSearch } from "./input-search";

export const SheetNavbar = () => {
  return (
    <Sheet>
      <SheetTrigger
        aria-label="Open menu"
        className="flex items-center min-h-[40px] rounded-md px-3 bg-white border transition-all text-black hover:bg-neutral-100 md:hidden dark:bg-black dark:text-white dark:hover:bg-inherit dark:hover:text-white dark:border-0"
      >
        <GiHamburgerMenu className="text-base hover:text-red-600 transition-all duration-500" />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="flex justify-center">
            <LogoText />
          </SheetTitle>
          <div className="flex flex-col justify-center w-full gap-1">
            <Accordion type="single" collapsible>
              <AccordionItem
                value="top-list"
                className="border-none p-0 flex flex-col items-center justify-center sm:items-start"
              >
                <AccordionTrigger className="py-2 w-full hover:text-red-600 dark:text-white dark:hover:text-red-600 transition-all duration-500 cursor-pointer">
                  <p>More</p>
                </AccordionTrigger>
                <AccordionContent className="flex flex-col w-full">
                  <Link
                    href="/anime/top"
                    className="py-2 hover:text-red-600 dark:text-white dark:hover:text-red-600 transition-all duration-500 cursor-pointer"
                  >
                    Top Anime
                  </Link>
                  <Link
                    href="/manga/top"
                    className="py-2 hover:text-red-600 dark:text-white dark:hover:text-red-600 transition-all duration-500 cursor-pointer"
                  >
                    Top Manga
                  </Link>
                  <Link
                    href="/anime/recommendations"
                    className="py-2 hover:text-red-600 dark:text-white dark:hover:text-red-600 transition-all duration-500 cursor-pointer"
                  >
                    Recommended Anime
                  </Link>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <Link href="/anime">
              <p className="py-2 hover:text-red-600 dark:text-white dark:hover:text-red-600 transition-all duration-500 cursor-pointer">
                Anime
              </p>
            </Link>
            <Link href="/manga">
              <p className="py-2 hover:text-red-600 dark:text-white dark:hover:text-red-600 transition-all duration-500 cursor-pointer">
                Manga
              </p>
            </Link>
          </div>
          <InputSearch />
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};
