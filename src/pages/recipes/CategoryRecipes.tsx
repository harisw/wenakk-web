import { useParams } from 'react-router-dom';
import { api } from '../../services/api';
import { Recipe, Category } from '../../types/types';

import { useEffect, useState } from 'react';

const fetchRecipesByCategory =  async (slug, setRecipes, setCategory) => {
  try {
    const {category, recipes} = await api.getRecipesByCategory(slug);
    setRecipes(recipes);
    setCategory(category);
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
  }, [])
  return <div className='flex flex-col items-center gap-4'>
    <img src="placeholder-1.webp" alt="" />
    <div>
      <h3>FEATURED RECIPE:</h3>
      <h3></h3>
    </div>
  </div>;
}

export default CategoryRecipes;