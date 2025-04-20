export type Category = {
  id: number;
  name: string;
  slug: string;
  img: string;
  count: number;
}

export type Recipe = {
  id: number;
  category: Category;
  author_name: string;
  name: string;
  total_time: string;
  date_published: string;
  description: string;
  rating: number;
  calories: number;
  fat: number;
  cholesterol: number;
  sodium: number;
  carbohydrate: number;
  fiber: number;
  sugar: number;
  protein: number;
  portions: string;
  tags: string[];
  instructions: string[];
  images: string[];
  ingredient_qty: string[];
  ingredients: string[];
  keywords: string[];
  slug: string[];
  review_count: number;
  reviews: Review[];
};

export type Review = {
  id: number;
  recipe: Recipe;
  name: string;
  rating: number;
  review: string;
  date_submitted: string;
};