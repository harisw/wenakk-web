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
  id: number;
  slug: string;
  Name: string;
  Ingredients: string[];
  instructions: string;
};