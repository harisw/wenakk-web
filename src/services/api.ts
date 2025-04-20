const BASE_URL = import.meta.env.VITE_WENAKK_API_BASE_URL;

async function fetchData(endpoint: string, options = {}) {
  try {
    const resp = await fetch(`${BASE_URL}${endpoint}`, options);
    if (!resp.ok) {
      throw new Error(`Error: ${resp.statusText}`);
    }
    return await resp.json();
  } catch (err) {
    console.error('API call failed: ', err);
    throw err;
  }
}

export const api = {
  getCategories: () => fetchData('/categories'),
  getTopRecentRecipes: (limit: number)  => fetchData(`/recipes/get-top-recent?limit=${limit}`),
  getRecipe: (slug: string)  => fetchData(`/recipes/${slug}`),
  getRecipesByCategory: (categorySlug: string) => fetchData(`/recipes/category/${categorySlug}`)
}