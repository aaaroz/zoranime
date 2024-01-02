import { FaStar } from "react-icons/fa";

type Props = {
  rating: number;
};

export const StarRating = ({ rating = 4 }: Props) => {
  return (
    <div className="flex items-center">
      {[...Array(5)].map((_, index) => {
        const currentRating = index + 1;
        return (
          <label htmlFor={`rating${index + 1}`} key={index}>
            <input
              id={`rating${index + 1}`}
              type="radio"
              name="rating"
              value={currentRating}
              className="hidden"
            />
            <FaStar
              size={15}
              color={currentRating <= (rating || 0) ? "#ffc107" : "#e4e5e9"}
            />
          </label>
        );
      })}
    </div>
  );
};
