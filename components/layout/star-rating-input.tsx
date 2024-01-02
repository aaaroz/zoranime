"use client";

import {
  ChangeEventHandler,
  Dispatch,
  FC,
  MouseEventHandler,
  SetStateAction,
  useState,
} from "react";
import { FaStar } from "react-icons/fa";
import { Errors } from "./comment-input";

type Props = {
  rating: number;
  setRating: Dispatch<SetStateAction<number>>;
  setErrors: Dispatch<SetStateAction<Errors | null>>;
  setIsSubmitting: Dispatch<SetStateAction<boolean>>;
};

export const StarRatingInput: FC<Props> = ({
  rating,
  setRating,
  setErrors,
  setIsSubmitting,
}) => {
  const [hover, setHover] = useState<number | null>(null);

  return (
    <div className="flex items-center">
      <p className="text-sm mr-3">Give Your Rating For This Anime</p>
      {[...Array(5)].map((_, index) => {
        const currentRating = index + 1;
        const handleClick = () => {
          if (typeof setRating === "function") {
            setRating(currentRating);
            setErrors(null);
            setIsSubmitting(false);
          }
        };
        return (
          <label
            htmlFor={`rating${index + 1}`}
            key={index}
            onClick={handleClick}
          >
            <input
              id={`rating${index + 1}`}
              type="radio"
              name="rating"
              value={currentRating}
              className="hidden"
            />
            <FaStar
              size={18}
              color={
                currentRating <= (rating || hover || 0) ? "#ffc107" : "#e4e5e9"
              }
              onMouseEnter={() => setHover(currentRating)}
              onMouseLeave={() => setHover(null)}
              className="cursor-pointer"
            />
          </label>
        );
      })}
    </div>
  );
};
