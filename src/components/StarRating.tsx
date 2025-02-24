import { PiStarFill } from "react-icons/pi";

export default function StarRating() {
  return (
  <div className='flex gap-1'>
    <PiStarFill className='text-yellow-500' />
    <PiStarFill className='text-yellow-500' />
    <PiStarFill className='text-yellow-500' />
    <PiStarFill className='text-yellow-500' />
    <PiStarFill className='text-yellow-500' />
  </div>
  );
}