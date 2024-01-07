"use client";

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
import { IoSearch } from "react-icons/io5";
import { useRouter } from "next/navigation";

import { getAnimeResponse } from "@/lib/apis";
import { useDebounce } from "@/lib/hooks";
import { Input } from "@/components/ui/input";

import type { TAnime, TManga } from "@/types";
import { DropdownContentSearch } from "./dropdown-content-search";

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
