"use client";

import { ChangeEventHandler, FormEventHandler, useState } from "react";
import { toast } from "sonner";
import { IoWarning } from "react-icons/io5";
import { useRouter } from "next/navigation";

import APIComment from "@/lib/apis/comment";
import { Button } from "@/components/ui/button";
import { StarRatingInput } from "./star-rating-input";

import type { TAnimeComment, TMangaComment } from "@/types";

interface CommentInputProps {
  data?: Omit<TAnimeComment, "comment" | "rating">;
  dataManga?: Omit<TMangaComment, "comment" | "rating">;
}
export interface Errors {
  comment?: {
    message: string;
  };
  rating?: {
    message: string;
  };
}

export const CommentInput = ({ data, dataManga }: CommentInputProps) => {
  const router = useRouter();
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Errors | null>(null);

  const payloadAnime = {
    ...data,
    comment,
    rating,
  };

  const payloadManga = {
    ...dataManga,
    comment,
    rating,
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (comment.length < 10) {
      setErrors({
        comment: {
          message: "Comment must be at least 10 characters",
        },
      });
      return;
    }
    if (rating < 1) {
      setErrors({
        rating: {
          message: "You need to give a rating",
        },
      });
      return;
    }
    if (data) {
      toast.promise(APIComment.addComment(payloadAnime), {
        loading: "Loading... ",
        success: (data) => `${data.message}`,
        error: "Failed to add comment",
        finally: () => {
          router.refresh();
          setIsSubmitting(false);
          setComment("");
          setRating(0);
        },
      });
    }
    if (dataManga) {
      toast.promise(APIComment.addMangaComment(payloadManga), {
        loading: "Loading... ",
        success: (data) => `${data.message}`,
        error: "Failed to add comment",
        finally: () => {
          router.refresh();
          setIsSubmitting(false);
          setComment("");
          setRating(0);
        },
      });
    }
  };

  const handleChange: ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    setComment(e.target.value);
    if (comment.length > 10) {
      setErrors(null);
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col gap-4 py-3 px-5 w-full rounded drop-shadow-md bg-neutral-50 dark:bg-neutral-800">
        <h1 className="text-xl font-semibold w-full">Add Your Comment</h1>
        <textarea
          name="comment"
          id="comment"
          cols={10}
          rows={5}
          value={comment}
          onChange={handleChange}
          className="p-3 w-full rounded focus:outline-none text-sm md:text-base focus:ring bg-gray-100 dark:bg-neutral-700 focus:ring-neutral-300 dark:focus:ring-neutral-600"
        />
        <StarRatingInput
          rating={rating}
          setRating={setRating}
          setErrors={setErrors}
          setIsSubmitting={setIsSubmitting}
        />
        <div className="py-1">
          {errors?.comment?.message && (
            <p className="text-red-600 flex items-center gap-2 text-sm font-normal bg-red-200 p-2 rounded border border-red-500">
              <IoWarning className="text-lg" />
              {errors.comment.message}
            </p>
          )}
          {errors?.rating?.message && (
            <p className="text-red-600 flex items-center gap-2 text-sm font-normal bg-red-200 p-2 rounded border border-red-500">
              <IoWarning className="text-lg" />
              {errors.rating.message}
            </p>
          )}
        </div>
        <Button type="submit" disabled={isSubmitting}>
          Add Comment
        </Button>
      </div>
    </form>
  );
};
