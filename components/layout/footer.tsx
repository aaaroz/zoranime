import Link from "next/link";
import { FC } from "react";
import { FacebookIcon, GithubIcon, InstagramIcon } from "lucide-react";

import { LogoText } from "./logo-text";
import { Separator } from "@/components/ui/separator";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const Footer: FC = () => {
  return (
    <div className="relative md:h-[35dvh] lg:h-[27dvh] text-neutral-400 bg-neutral-800 dark:bg-neutral-700 py-1">
      <div className="flex flex-col lg:flex-row gap-8 justify-between h-full px-10">
        <div className="md:flex gap-8 items-start pt-10 md:ml-5">
          <Link href="/">
            <LogoText />
          </Link>
          <div className="flex flex-col sm:flex-row sm:gap-8 h-5 mt-3 pb-32 sm:pb-0">
            <Accordion type="single" collapsible>
              <AccordionItem value="top-list" className="border-none">
                <AccordionTrigger className="py-0 border-0">Top Lists</AccordionTrigger>
                <AccordionContent>
                  <ul className="flex flex-col gap-1">
                    <Link href="/anime/top" className="hover:underline">
                      <li>Top Anime</li>
                    </Link>
                    <Link href="/manga/top" className="hover:underline">
                      <li>Top Manga</li>
                    </Link>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <Separator orientation="vertical" className="hidden sm:block dark:bg-neutral-400" />
            <Link href="/anime" className="hover:underline">
              Anime
            </Link>
            <Separator orientation="vertical" className="hidden sm:block dark:bg-neutral-400" />
            <Link href="/manga" className="hover:underline">
              Manga
            </Link>
          </div>
        </div>
        <div className="flex justify-center md:mr-5">
          <Link href="https://www.facebook.com/Rhamdanz18/" target="_blank">
            <div className="px-6 py-10 flex justify-center items-center hover:bg-gradient-to-b from-neutral-800 via-blue-900 dark:from-neutral-700 dark:via-blue-900 bg-opacity-70 w-full h-full">
              <FacebookIcon size={20} color="#ffffff" strokeWidth={1} />
            </div>
          </Link>
          <Link href="https://www.instagram.com/rmdnmar/" target="_blank">
            <div className="px-6 py-10 flex justify-center items-center hover:bg-gradient-to-b from-neutral-800 via-red-900 dark:from-neutral-700 dark:via-red-900 bg-opacity-70 w-full h-full">
              <InstagramIcon size={20} color="#ffffff" strokeWidth={1} />
            </div>
          </Link>
          <Link href="https://github.com/aaaroz" target="_blank">
            <div className="px-6 py-10 flex justify-center items-center hover:bg-gradient-to-b from-neutral-800 via-neutral-500 dark:from-neutral-700 dark:via-neutral-900 bg-opacity-70 w-full h-full">
              <GithubIcon size={20} color="#ffffff" strokeWidth={1} />
            </div>
          </Link>
        </div>
      </div>
      <div className="text-neutral-400 bg-neutral-800 dark:bg-neutral-700 px-10">
        <Separator className="dark:bg-neutral-400" />
        <p className="text-center text-xs py-3">Copyright © 2023 ZORANIME, All rights reserved.</p>
      </div>
    </div>
  );
};
