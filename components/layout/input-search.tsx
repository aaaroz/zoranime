"use client";

import { IoSearch } from "react-icons/io5";

import { Input } from "@/components/ui/input";
import {
  type FormEvent,
  useRef,
  MutableRefObject,
  FormEventHandler,
  InputHTMLAttributes,
  ReactNode,
  RefAttributes,
} from "react";
import { useRouter } from "next/navigation";

type FormEvents = InputHTMLAttributes<HTMLInputElement> & {
  children?: ReactNode;
} & RefAttributes<HTMLInputElement> &
  FormEvent;

export const InputSearch = () => {
  const searchRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const handleSearch = (event: FormEvents) => {
    const keyword = searchRef?.current?.value;

    if (!keyword || keyword.trim() == "") {
      event.preventDefault();
      return null;
    }

    event.preventDefault();
    router.push(`/search/${keyword.trim()}`);
  };
  return (
    <form onSubmit={handleSearch}>
      <Input
        aria-label="Search bar"
        placeholder="Search Anime..."
        ref={searchRef}
      >
        <button type="submit" aria-label="Search">
          <IoSearch />
        </button>
      </Input>
    </form>
  );
};
