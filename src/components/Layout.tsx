import { MySidebar } from "./MySidebar";
import { RxHamburgerMenu } from "react-icons/rx";

const Layout = ({ children }) => {
  return (
    <main className="flex min-h-screen flex-col gap-2 pb-2 pt-4 dark:bg-gray-800">
    <div className="w-full border-slate-200 border-b-2">
      <div className="flex w-full flex-row justify-between px-2 pb-1">
        <h5 className="text-2xl font-bold italic text-orange-500">Wenakk</h5>
        <RxHamburgerMenu size={'2.5em'}/>
      </div>
    </div>
    {children}
  </main>
  )
}

export default Layout;