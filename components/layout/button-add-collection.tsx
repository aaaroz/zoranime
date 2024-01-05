"use client";

import { useState, type MouseEventHandler } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

import APICollection from "@/lib/apis/collection";
import { Button } from "@/components/ui/button";
import type { TAnimeCollection, TMangaCollection } from "@/types";

type Props = {
  data?: TAnimeCollection;
  dataManga?: TMangaCollection;
};

export const ButtonAddCollection = ({ data, dataManga }: Props) => {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleClick: MouseEventHandler<HTMLButtonElement> = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    if (data) {
      toast.promise(APICollection.addCollection(data), {
        loading: "Loading... ",
        success: (data) => `${data.message}`,
        error: "Failed to add to Collection",
        finally: () => {
          router.refresh();
          setIsSubmitting(false);
        },
      });
    }
    if (dataManga) {
      toast.promise(APICollection.addMangaCollection(dataManga), {
        loading: "Loading... ",
        success: (data) => `${data.message}`,
        error: "Failed to add to Collection",
        finally: () => {
          router.refresh();
          setIsSubmitting(false);
        },
      });
    }
  };

  return (
    <div className="flex justify-end pb-5 px-10 bg-neutral-100 dark:bg-neutral-800">
      <Button size="sm" onClick={handleClick} disabled={isSubmitting}>
        Add to Collection
      </Button>
    </div>
  );
};
