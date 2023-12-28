import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";

export const Star = ({
  score,
  scoredBy,
}: {
  score: number;
  scoredBy?: number;
}) => {
  const rating = score / 2;
  const ratingStar = Array.from({ length: 5 }, (_, index) => {
    let number = index + 0.5;

    return (
      <span key={index}>
        {rating >= index + 1 ? (
          <FaStar className="text-yellow-400 text-xs sm:text-sm" />
        ) : rating >= number ? (
          <FaStarHalfAlt className="text-yellow-400 text-xs sm:text-sm" />
        ) : (
          <AiOutlineStar className="text-yellow-400 text-sm sm:text-base" />
        )}
      </span>
    );
  });
  return (
    <div className="flex flex-col lg:flex-row text-sm gap-1">
      <span className="flex">{ratingStar}</span>
      {scoredBy && <p className="text-xs">({scoredBy} reviews)</p>}
    </div>
  );
};
