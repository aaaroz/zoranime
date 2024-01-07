import { TAnime, TManga } from "@/types";
import { useEffect } from "react";
import { Separator } from "../ui/separator";
import Link from "next/link";
import Image from "next/image";
import { Loader2Icon } from "lucide-react";

type DropdownContentSearchProps = {
  state: "open" | "closed";
  setDropdownContent: (value: "open" | "closed") => void;
  dropdownRef: React.RefObject<HTMLDivElement>;
  dataManga: TManga | null;
  dataAnime: TAnime | null;
  isLoading: boolean;
  query: string;
};

export const DropdownContentSearch = ({
  state,
  setDropdownContent,
  dropdownRef,
  dataAnime,
  dataManga,
  isLoading,
  query,
}: DropdownContentSearchProps) => {
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownContent("closed");
      }
    };

    if (state) {
      document.addEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [state, dropdownRef, setDropdownContent]);

  return (
    <div className="absolute">
      <div
        data-loading={isLoading}
        ref={dropdownRef}
        data-state={state}
        className="absolute border overflow-hidden text-base rounded p-3 pe-0 py-1 z-50 md:-right-[16dvh] lg:-right-[34dvh] top-1 w-[35dvh] sm:w-[40dvh] md:w-[50dvh] data-[loading=true]:h-auto data-[loading=false]:h-[60dvh] origin-top transition-all
          data-[state=open]:block data-[state=closed]:hidden data-[state=open]:animate-in data-[state=closed]:animate-out
          data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95
          text-neutral-900 dark:text-neutral-50 bg-neutral-50 dark:bg-neutral-900 border-neutral-200 dark:border-neutral-900"
      >
        <div
          data-loading={isLoading}
          className="flex flex-col overflow-y-auto scroll-ml-10 data-[loading=true]:h-[10dvh] h-[54dvh]"
        >
          {dataAnime && (
            <div className="flex flex-col gap-2 my-1">
              <h3 className="text-sm font-normal">Anime</h3>
              <Separator />
              <ul className="space-y-1">
                {dataAnime.data.length > 0 ? (
                  dataAnime?.data?.map((item) => (
                    <Link key={item.mal_id} href={`/anime/${item.mal_id}`}>
                      <li className="p-1 rounded flex gap-2 dark:hover:bg-neutral-700 hover:bg-neutral-100 cursor-pointer">
                        <Image
                          src={item.images.webp.small_image_url}
                          width={30}
                          height={50}
                          alt="..."
                          className="max-h-20"
                        />
                        <div>
                          <h3 className="line-clamp-1 text-left text-sm hover:underline hover:text-neutral-900 dark:hover:text-neutral-50">
                            {item.title}
                          </h3>
                          <p className="text-left text-xs font-normal">{item.type}</p>
                        </div>
                      </li>
                    </Link>
                  ))
                ) : (
                  <p className="text-sm font-normal text-neutral-500">No results found</p>
                )}
              </ul>
            </div>
          )}
          {dataManga && (
            <div className="flex flex-col gap-2 my-1">
              <h3 className="text-sm font-normal">Manga</h3>
              <Separator />
              <ul className="space-y-1">
                {dataManga.data.length > 0 ? (
                  dataManga?.data?.map((item) => (
                    <Link key={item.mal_id} href={`/manga/${item.mal_id}`}>
                      <li className="p-1 rounded flex gap-2 dark:hover:bg-neutral-700 hover:bg-neutral-100 cursor-pointer">
                        <Image
                          src={item.images.webp.small_image_url}
                          width={30}
                          height={50}
                          alt="..."
                          className="max-h-20"
                        />
                        <div>
                          <h3 className="line-clamp-1 text-left text-sm hover:underline hover:text-neutral-900 dark:hover:text-neutral-50">
                            {item.title}
                          </h3>
                          <p className="text-left text-xs font-normal">{item.type}</p>
                        </div>
                      </li>
                    </Link>
                  ))
                ) : (
                  <p className="text-sm font-normal text-neutral-500">No results found</p>
                )}
              </ul>
            </div>
          )}
        </div>
        {dataAnime && dataManga && !isLoading ? (
          <div className="py-2 text-xs font-normal">
            <Link href="/search/[keyword]" as={`/search/${query}`} className="hover:underline">
              <p>
                View all results for {'"'}
                {query}
                {'"'}
              </p>
            </Link>
          </div>
        ) : (
          <div className="flex py-2 text-xs font-normal">
            <p>
              View all results for {'"'}
              {query}
              {'"'}
            </p>
            <Loader2Icon className="w-4 h-4 animate-spin ml-1" />
          </div>
        )}
      </div>
    </div>
  );
};
