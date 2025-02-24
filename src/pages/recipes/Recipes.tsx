import { Breadcrumb, BreadcrumbItem } from "flowbite-react";
import { HiHome } from "react-icons/hi";
import { Outlet, useLocation } from "react-router-dom";
import { Category, Recipe } from "../../types/types";


interface MyBreadCrumbProps {
  category?: Category;
  recipe?: Recipe;
}

const MyBreadCrumb: React.FC<MyBreadCrumbProps> = ({ category, recipe }) =>{
  return (
    <div className="px-2 w-full">
    <Breadcrumb aria-label="Solid background breadcrumb example" className="bg-main px-5 py-3 dark:bg-gray-800 rounded">
      <BreadcrumbItem href="#" icon={HiHome}>
        Home
      </BreadcrumbItem>
      <BreadcrumbItem href="#">Recipes</BreadcrumbItem>
      <BreadcrumbItem>{category?.Name}</BreadcrumbItem>
      <BreadcrumbItem>{recipe?.Name}</BreadcrumbItem>
    </Breadcrumb>
    </div>
  );
}

function Recipes() {
  const location = useLocation();
  const category: Category = location.state?.category as Category || undefined;
  const recipe: Recipe = location.state?.recipe as Recipe || undefined;
  return <div className="flex flex-col items-center gap-4 w-full">
    <MyBreadCrumb category={category} recipe={recipe}/>
    <Outlet />
  </div>  ;
}

export default Recipes;