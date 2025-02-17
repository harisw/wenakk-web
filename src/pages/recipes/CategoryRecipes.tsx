import { useParams } from 'react-router-dom';
import { api } from '../../services/api';
import { Recipe, Category } from '../../types/types';
import Spinner from '../../components/Spinner';
import { useEffect, useState } from 'react';
import { Carousel } from 'flowbite-react';
import { GrTrophy } from "react-icons/gr";
import { PiStarFill } from "react-icons/pi";
import { getDummyData, getRandomFloatInRange, getRandomIntInrange } from '../../services/helper';
import MyCarousel from '../../components/MyCarousel';

const fetchRecipesByCategory =  async (slug, setRecipes, setCategory) => {
  try {
    const {category, recipes} = await api.getRecipesByCategory(slug);
    setRecipes(recipes);
    setCategory(category);
    console.log('Fetched recipes by category ', recipes);
  } catch (error) {
    console.log('Failed to fetch recipes by category ', error);
  }
}
function CategoryRecipes() {
  const { slug } = useParams();
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [category, setCategory] = useState<Category>();
  
  useEffect(() => {
    fetchRecipesByCategory(slug, setRecipes, setCategory);
  }, []);

  if (!recipes.length || !category) {
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
        <h3 className='text-xs font-bold text-gray-600'>FEATURED RECIPE:</h3>
        <h3 className='font-highlight text-lg font-extrabold tracking-wider'>{recipes[0].Name}</h3>
        <h3 className='font-highlight text-xl font-semibold tracking-wider'>{category.Name} Recipes</h3>
        <p className='px-6 tracking-wider'>Soup is the beeeeest! Honestly, it's one of our favorite food groups. 
          There is nothing quite like curling up with a steaming cozy bowl of soup slurped by the spoonful
          or devoured with crusty bread dips. Yes yes and yes.</p>
      </div>
    </div>
    <div className='mt-4 flex w-full flex-col items-center gap-4 text-center'>
      <GrTrophy className='font-main text-2xl' />
      <h3 className='font-highlight text-3xl font-bold uppercase tracking-wider'>top rated {category.Name} recipes</h3>
      <div className='h-96 w-full bg-slate-600 pt-4'>
        <MyCarousel>
          {recipes.slice(0, 5).map((recipe, index) => {
            const reviews = getRandomIntInrange(100, 500);
            const rating = getRandomFloatInRange(3, 5);
            return (
            <div className='flex flex-col items-center gap-2 h-full py-2' key={index}>
              <img src={getDummyData().filename} alt={recipe.Name} className='w-72 h-64 object-cover rounded shadow-lg' />
              <div className='flex flex-col items-center gap-2'>
                <div className='flex gap-1'>
                  <PiStarFill className='text-yellow-500' />
                  <PiStarFill className='text-yellow-500' />
                  <PiStarFill className='text-yellow-500' />
                  <PiStarFill className='text-yellow-500' />
                  <PiStarFill className='text-yellow-500' />
                </div>
                <h3 className='text-xs font-bold text-gray-500 uppercase'>{reviews} reviews / {rating} average</h3>
              </div>
              <h3 className='text-lg font-bold font-highlight'>{recipe.Name}</h3>
            </div>
          );
        })}
        </MyCarousel>
      </div>
    </div>
  </div>);
}

export default CategoryRecipes;