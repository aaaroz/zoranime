"use client";

import { FC, MouseEventHandler, useState } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Button } from "../ui/button";
import { MdOutlineDeleteSweep } from "react-icons/md";
import APICollection from "@/lib/apis/collection";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

type Props = {
  anime_title?: string;
  title?: string;
  id: number | string | undefined;
};

export const DeleteDialog: FC<Props> = ({ anime_title, id, title }) => {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const deleteCollection: MouseEventHandler<HTMLButtonElement> = () => {
    if (anime_title) {
      toast.promise(APICollection.deleteCollection(id as number), {
        loading: "Loading... ",
        success: (data) => `${data.message}`,
        error: "Failed to delete to Collection",
        finally: () => {
          setIsSubmitting(false);
          router.refresh();
        },
      });
    }
    if (title) {
      toast.promise(APICollection.deleteMangaCollection(id as number), {
        loading: "Loading... ",
        success: (data) => `${data.message}`,
        error: "Failed to delete to Collection",
        finally: () => {
          setIsSubmitting(false);
          router.refresh();
        },
      });
    }
  };

  return (
    <Dialog>
      <DialogTrigger className="absolute top-2 -right-1 z-10 px-2 py-1 shadow-md cursor-pointer rounded-tl rounded-bl bg-slate-50 dark:bg-neutral-800">
        <MdOutlineDeleteSweep className="text-xl" />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you sure?</DialogTitle>
        </DialogHeader>
        <DialogDescription>
          You want to delete{" "}
          <strong>{anime_title ? anime_title : title}</strong> from your
          collections list?.
        </DialogDescription>
        <DialogFooter className="flex gap-3 md:gap-0">
          <DialogClose asChild>
            <Button
              variant="destructive"
              onClick={deleteCollection}
              disabled={isSubmitting}
            >
              Delete
            </Button>
          </DialogClose>
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
