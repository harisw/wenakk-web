import { Link, useParams } from 'react-router-dom';
import { api } from '@/services/api';
import { Recipe, Category } from '@/types/types';
import Spinner from '@/components/Spinner';
import { useEffect, useState } from 'react';
import { Carousel } from 'flowbite-react';
import { GrTrophy } from "react-icons/gr";
import { getDummyData, getRandomFloatInRange, getRandomIntInrange } from '@/services/helper';
import { CircleChevronLeft, CircleChevronRight } from 'lucide-react';
import StarRating from '@/components/StarRating';
import { PLACEHOLDER_IMG } from '@/types/constants';

const fetchRecipesByCategory =  async (slug, setRecipes, setCategory, setIsLoading) => {
  try {
    setIsLoading(true);
    const {category, recipes} = await api.getRecipesByCategory(slug);
    setRecipes(recipes);
    setCategory(category);
    setIsLoading(false);
    console.log('Fetched recipes by category ', recipes);
  } catch (error) {
    console.log('Failed to fetch recipes by category ', error);
  }
}
function CategoryRecipes() {
  const { slug } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [category, setCategory] = useState<Category>();
  
  useEffect(() => {
    fetchRecipesByCategory(slug, setRecipes, setCategory, setIsLoading);
  }, []);

  if (isLoading || !category) {
    return <div className='flex flex-col items-center gap-2'>
      <Spinner size="w-16 h-16" color="border-t-green-500" /> 
    </div>
  }

  return (
  <div className='flex flex-col items-center gap-2'>
    
    <div className='bg-default flex flex-col items-center gap-4 p-4'>
      <div className="relative size-48">
        <img
          src="/placeholder-1.webp"
          alt="3D Image"
          className="size-full rounded-full border border-gray-300 shadow-xl ring-2 ring-gray-300 transition-all
          hover:scale-105 hover:shadow-[0px_10px_20px_rgba(0,0,0,0.3)]"
        />
        <div className="absolute inset-0 rounded-full bg-gradient-to-b from-white/30 to-transparent" />
      </div>

      <div className='flex flex-col items-center gap-2 text-center'>
        <h3 className='font-highlight text-xl font-semibold tracking-wider'>{category.name} Recipes</h3>
        { recipes && recipes.length > 0 && (
        <>
          <h3 className='text-xs font-bold text-gray-600'>FEATURED RECIPE:</h3>
          <h3 className='font-highlight text-lg font-extrabold tracking-wider'>{recipes[0].name}</h3>
          <p className='px-6 tracking-wider'>Soup is the beeeeest! Honestly, it's one of our favorite food groups. 
            There is nothing quite like curling up with a steaming cozy bowl of soup slurped by the spoonful
            or devoured with crusty bread dips. Yes yes and yes.</p>
          </>
      )}
    </div>
    </div>
    <div className='mt-4 flex w-full flex-col items-center gap-4 text-center'>
      {!recipes && (
        <div className='h-36 w-full pt-4 px-10'>
          <h3 className='text-lg font-bold tracking-wider'> There is no recipes in {category.name} category yet 😞</h3>
        </div>
      )}
      { recipes && recipes.length > 0 && (
        <>
        <GrTrophy className='font-main text-2xl' />
        <h3 className='font-highlight text-3xl font-bold uppercase tracking-wider'>top rated {category.name} recipes</h3>
      <div className='h-96 w-full pt-4'>
        <Carousel indicators={false} slide={false}
        leftControl={<CircleChevronLeft size={36} color='#D70654'/>} rightControl={<CircleChevronRight size={36} color='#D70654'/>}>
          {recipes.slice(0, 5).map((recipe, index) => {
            const img = recipe.images?.[0] || PLACEHOLDER_IMG;
            const reviews = getRandomIntInrange(100, 500);
            const rating = getRandomFloatInRange(3, 5);
            return (
            <div className='flex h-full flex-col items-center gap-2 py-2 px-2' key={index}>
              <Link to={`/recipes/${recipe.slug}`} state={{ category, recipe}}>
              <img src={img} alt={recipe.name} className='h-64 w-64 rounded object-cover shadow-lg' />
              </Link>
              <div className='flex flex-col items-center gap-2'>
                <StarRating rating={rating}/>
                <h3 className='text-xs font-bold uppercase text-gray-500'>{reviews} reviews / {rating} average</h3>
              </div>
              <Link to={`/recipes/${recipe.slug}`} state={{ category, recipe}}>
                <h3 className='font-highlight text-lg font-bold'>{recipe.name}</h3>
              </Link>
            </div>
          );
        })}
        </Carousel>
      </div>
      </>
      )}
    </div>
  </div>);
}

export default CategoryRecipes;