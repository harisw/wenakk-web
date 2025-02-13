import { Breadcrumb, BreadcrumbItem } from "flowbite-react";
import { HiHome } from "react-icons/hi";
import { Outlet, useLocation } from "react-router-dom";
import { Category } from "../../types/types";


interface MyBreadCrumbProps {
  category?: Category;
}

const MyBreadCrumb: React.FC<MyBreadCrumbProps> = ({ category }) =>{
  return (
    <Breadcrumb aria-label="Solid background breadcrumb example" className="bg-gray-50 px-5 py-3 dark:bg-gray-800">
      <BreadcrumbItem href="#" icon={HiHome}>
        Home
      </BreadcrumbItem>
      <BreadcrumbItem href="#">Recipes</BreadcrumbItem>
      <BreadcrumbItem>{category?.Name}</BreadcrumbItem>
    </Breadcrumb>
  );
}

function Recipes() {
  const location = useLocation();
  const category: Category = location.state?.category as Category || undefined;
  return <div>
    <MyBreadCrumb category={category}/>
    <Outlet />
    <h5>Recipes page</h5>
  </div>  ;
}

export default Recipes;