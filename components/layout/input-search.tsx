"use client";

import Image from "next/image";
import Link from "next/link";
import {
  type FormEvent,
  useRef,
  InputHTMLAttributes,
  ReactNode,
  RefAttributes,
  useState,
  ChangeEventHandler,
  useEffect,
} from "react";
import { Loader2Icon } from "lucide-react";
import { IoSearch } from "react-icons/io5";
import { useRouter } from "next/navigation";

import { getAnimeResponse } from "@/lib/apis";
import { useDebounce } from "@/lib/hooks/useDebounce";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

import type { TAnime, TManga } from "@/types";

type FormEvents = InputHTMLAttributes<HTMLInputElement> & {
  children?: ReactNode;
} & RefAttributes<HTMLInputElement> &
  FormEvent;

export const InputSearch = () => {
  const searchRef = useRef<HTMLInputElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const [keyword, setKeyword] = useState<string>("");
  const [dropdownContent, setDropdownContent] = useState<"open" | "closed">("closed");
  const [dataAnime, setDataAnime] = useState<TAnime | null>(null);
  const [dataManga, setDataManga] = useState<TManga | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();
  const query = useDebounce(keyword.trim(), 800);

  useEffect(() => {
    setIsLoading(true);
    if (!query) return;
    const fetchDataAnime = async () => {
      const response = await getAnimeResponse("anime", `limit=5&q=${query}`);
      setDataAnime(response);
      setIsLoading(false);
    };
    const fetchDataManga = async () => {
      const response = await getAnimeResponse("manga", `limit=5&q=${query}`);
      setDataManga(response);
      setIsLoading(false);
    };
    fetchDataManga();
    fetchDataAnime();
  }, [query]);

  const handleSearch = (event: FormEvents) => {
    const keyword = searchRef?.current?.value;

    if (!keyword || keyword.trim() == "") {
      event.preventDefault();
      return null;
    }

    event.preventDefault();
    router.push(`/search/${keyword.trim()}`);
    setKeyword("");
    setDropdownContent("closed");
  };

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setKeyword(e.target.value);

    if (
      (e.target.value.trim() === "" && e.target.value.length > 10) ||
      (e.target.value.length > 0 && e.target.value.trim() !== "")
    ) {
      setDropdownContent("open");
    } else if (e.target.value.length === 0) {
      setDropdownContent("closed");
    }
  };

  return (
    <div ref={dropdownRef}>
      <form onSubmit={handleSearch}>
        <Input
          aria-label="Search bar"
          placeholder="Search..."
          ref={searchRef}
          value={keyword}
          onChange={handleChange}
          onFocus={(e) => {
            if (e.target.value.trim() !== "" && dropdownContent === "closed") {
              setDropdownContent("open");
            }
          }}
        >
          <button type="submit" aria-label="Search">
            <IoSearch />
          </button>
        </Input>
      </form>
      <DropdownContentSearch
        state={dropdownContent}
        setDropdownContent={setDropdownContent}
        dropdownRef={dropdownRef}
        dataManga={dataManga}
        dataAnime={dataAnime}
        isLoading={isLoading}
        query={query}
      />
    </div>
  );
};

type DropdownContentSearchProps = {
  state: "open" | "closed";
  setDropdownContent: (value: "open" | "closed") => void;
  dropdownRef: React.RefObject<HTMLDivElement>;
  dataManga: TManga | null;
  dataAnime: TAnime | null;
  isLoading: boolean;
  query: string;
};

const DropdownContentSearch = ({
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
  }, [state]);

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
              <p>View all results for "{query}"</p>
            </Link>
          </div>
        ) : (
          <div className="flex py-2 text-xs font-normal">
            <p>View all results for "{query}"</p>
            <Loader2Icon className="w-4 h-4 animate-spin ml-1" />
          </div>
        )}
      </div>
    </div>
  );
};
