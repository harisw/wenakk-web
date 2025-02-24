export type Category = {
  Id: number;
  Name: string;
  Slug: string;
  Img: string;
}

export type Origin = {
  Id: number;
  Name: string;
  Slug: string;
  Img: string;
}

export type Recipe = {
  Id: number;
  Name: string;
  Category: Category;
  Origin: Origin;
  Date_published: string;
  Ingredients: string[];
  Keywords: string[];
  Instructions: string;
  Description: string;
  Calories: number;
  Protein: number;
  Rating: number;
};