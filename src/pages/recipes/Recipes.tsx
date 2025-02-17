import { Breadcrumb, BreadcrumbItem } from "flowbite-react";
import { HiHome } from "react-icons/hi";
import { Outlet, useLocation } from "react-router-dom";
import { Category } from "../../types/types";


interface MyBreadCrumbProps {
  category?: Category;
}

const MyBreadCrumb: React.FC<MyBreadCrumbProps> = ({ category }) =>{
  return (
    <div className="px-6 w-full">
    <Breadcrumb aria-label="Solid background breadcrumb example" className="bg-main px-5 py-3 dark:bg-gray-800 rounded">
      <BreadcrumbItem href="#" icon={HiHome}>
        Home
      </BreadcrumbItem>
      <BreadcrumbItem href="#">Recipes</BreadcrumbItem>
      <BreadcrumbItem>{category?.Name}</BreadcrumbItem>
    </Breadcrumb>
    </div>
  );
}

function Recipes() {
  const location = useLocation();
  const category: Category = location.state?.category as Category || undefined;
  return <div className="flex flex-col items-center gap-4 w-full">
    <MyBreadCrumb category={category}/>
    <Outlet />
  </div>  ;
}

export default Recipes;