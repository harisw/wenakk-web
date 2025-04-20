import React from "react";
import { PiStarFill } from "react-icons/pi";

interface StarRatingProps {
  rating: number;
}

const StarRating: React.FC<StarRatingProps> = ({ rating }) => {
  const rateCount = Math.ceil(rating);
  return (
  <div className='flex gap-1'>
    {[...Array(rateCount)].map((_, k) => (
      <PiStarFill className='text-yellow-500' key={k}/>
    ))}
  </div>
  );
}

export default StarRating