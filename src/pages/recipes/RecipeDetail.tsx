import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { Recipe } from '../../types/types';
import StarRating from '../../components/StarRating';
import { getRandomIntInrange } from '../../services/helper';
import { ArrowDown, MessageSquareText } from 'lucide-react';

function RecipeDetail() {
  const { id } = useParams<{ id: string }>();
  const location = useLocation();
  const recipe: Recipe = location.state?.recipe as Recipe || undefined;
  const reviews = getRandomIntInrange(100, 500);

  if (!recipe) {
    return <div>Loading...</div>;
  }
  console.log('Recipe Detail: ', recipe);
  return (
    <div className='flex flex-col items-center gap-4 text-left w-full px-4'>
      <div className='flex flex-col gap-2 w-full text-left px-4'>
      <h1 className='text-3xl font-semibold tracking-wider font-merriWeather'>{recipe.Name}</h1>
      <div className='flex gap-2'>
        <StarRating />
        <h3 className='text-xs font-bold uppercase text-gray-500'>{reviews} reviews / {recipe.Rating} average</h3>
      </div>
      <p className='font-light italic font-merriWeather'>
        {recipe.Description}
      </p>
      </div>
      <button className='flex bg-slate-100 rounded-lg w-full py-2 items-center justify-center
      font-highlight font-extrabold tracking-wider'><ArrowDown /> JUMP TO RECIPE</button>
      <div className="relative w-full h-96 rounded-xl overflow-hidden shadow-2xl bg-gray-100">
      {/* Image */}
      <img
        src="/placeholder-2.webp"
        alt="3D Effect Image"
        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105 hover:shadow-[0px_20px_30px_rgba(0,0,0,0.3)]"
      />

      {/* Optional Glow Effect */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-b from-white/20 to-transparent pointer-events-none"></div>
    </div>
    <div className='flex flex-col gap-4 text-left'>
        <h3 className='text-gray-400 font-extrabold tracking-wider text-lg'>FEATURED COMMENT</h3>
        <p className='tracking-wider font-semibold font-merriWeather text-sm'>"There are no words to describe how delicious this soup was! I made it exactly according to the recipe and
          there wasn’t a drop left after my husband got a hold of it."</p>
        <div className='flex justify-between'>
          <div className='flex gap-1 items-center'>
            <img src="/person.jpg" alt="" className='w-6 h-6 rounded-full'/>
            <p className='text-gray-400 font-extrabold tracking-wider text-sm'>HILLARY</p>
            </div>
            <div className='flex gap-1 items-center'>
            <MessageSquareText size={23} />
            <p className='text-gray-400 font-extrabold tracking-wider'>{getRandomIntInrange(10, 50)} MORE COMMENTS</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;