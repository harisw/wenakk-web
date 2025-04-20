import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { Recipe, Review } from '../../types/types';
import StarRating from '../../components/StarRating';
import { getRandomIntInrange } from '../../services/helper';
import { ArrowDown, MessageSquareText } from 'lucide-react';
import { api } from '../../services/api';
import { Spinner } from 'flowbite-react';

const fetchRecipe = async (setLoading, setRecipe, setReviews, slug) => {
  try {
    console.log('fetching Recipe');
    setLoading(true);
    const recipe = await api.getRecipe(slug);
    console.log('Fetched Recipe: ', recipe);
    setRecipe(recipe.recipe);
    setReviews(recipe.reviews);
    setLoading(false);
  } catch (error) {
    console.log('Failed to fetch recipe ', error);
  }
}

function RecipeDetail() {
  const { slug } = useParams<{ slug: string }>();
  const location = useLocation();
  const [recipe, setRecipe] = useState<Recipe | undefined>();
  const [reviews, setReviews] = useState<Review[]>([]);
  const [isRecipeLoading, setIsRecipeLoading] = useState(false);
  // const recipe: Recipe = location.state?.recipe as Recipe || undefined;

  useEffect(() => {
    setRecipe(location.state?.recipe as Recipe);
    fetchRecipe(setIsRecipeLoading, setRecipe, slug);
  }, [slug]);

  if (!recipe) {
    return <div>Loading...</div>;
  }

  console.log('Recipe Detail: ', recipe);
  return (
    <div className='flex w-full flex-col items-center gap-4 px-4 text-left'>
      <div className='flex w-full flex-col gap-2 px-4 text-left'>
      <h1 className='font-merriWeather text-3xl font-semibold tracking-wider'>{recipe.name}</h1>
      <div className='flex gap-2'>
        {recipe.rating && <StarRating rating={recipe.rating}/> }
        <h3 className='text-xs font-bold uppercase text-gray-500'>{recipe.review_count} reviews / {recipe.rating} average</h3>
      </div>
      <p className='font-merriWeather font-light italic'>
        {recipe.description}
      </p>
      </div>
      <button className='font-highlight flex w-full items-center justify-center rounded-lg bg-slate-100
      py-2 font-extrabold tracking-wider'><ArrowDown /> JUMP TO RECIPE</button>
      <div className="relative h-96 w-full overflow-hidden rounded-xl bg-gray-100 shadow-2xl">
      {/* Image */}
      <img
        src="/placeholder-2.webp"
        alt="3D Effect Image"
        className="size-full object-cover transition-transform duration-500 hover:scale-105 hover:shadow-[0px_20px_30px_rgba(0,0,0,0.3)]"
      />

      {/* Optional Glow Effect */}
      <div className="pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-b from-white/20 to-transparent"></div>
    </div>
    
    <div className='flex flex-col gap-4 text-left'>
      <h3 className='text-lg font-extrabold tracking-wider text-gray-400'>FEATURED COMMENT</h3>
      {isRecipeLoading && <Spinner size="w-16 h-16" color="border-t-green-500" />}
      {!isRecipeLoading && reviews.length === 0 && <p className='font-merriWeather text-sm font-semibold tracking-wider'>There's no reviews yet</p>}
      {!isRecipeLoading && reviews.length > 0 && (<>
        <p className='font-merriWeather text-sm font-semibold tracking-wider'>{reviews[0].review}</p>
        <div className='flex justify-between'>
          <div className='flex items-center gap-1'>
            <img src="/person.jpg" alt="" className='size-6 rounded-full'/>
            <p className='text-sm font-extrabold tracking-wider text-gray-400'>{reviews[0].name}</p>
            </div>
            <div className='flex items-center gap-1'>
            <MessageSquareText size={23} />
            <p className='font-extrabold tracking-wider text-gray-400'>{getRandomIntInrange(10, 50)} MORE COMMENTS</p>
            </div>
        </div>  
      </>)}
    
    </div>

    </div>
  );
};

export default RecipeDetail;