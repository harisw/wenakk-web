import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";

const Layout = ({ children }) => {
  return (
    <main className="flex min-h-screen flex-col gap-2 pb-2 pt-4 dark:bg-gray-800">
      <div className="w-full border-b-2 border-slate-200">
        <div className="flex w-full flex-row justify-between px-2 pb-1">
          <Link to="/">
            <h5 className="text-2xl font-bold italic text-orange-500" >Wenakk</h5>
            </Link>
          <RxHamburgerMenu size={"2.5em"} />
        </div>
      </div>
      {children}
      {/* FOOTER */}
      <div className="bottom-0 mt-8 flex w-full flex-col items-center gap-4 pb-10">
        <div
          className="mb-2 flex w-5/6 flex-row justify-center gap-8 border-t-2 border-t-slate-500 pt-4
        text-xs"
        >
          <div className="flex flex-col gap-2 tracking-wider">
            <p className="font-bold">PINCH OF YUM</p>
            <p>About</p>
            <p>Blog</p>
            <p>Recipe Index</p>
            <p>Contact</p>
          </div>
          <div className="flex flex-col gap-2 tracking-wider">
            <p className="font-bold">FOOD & RECIPES</p>
            <p>Sugar Free January</p>
            <p>Freezer Meals 101</p>
            <p>Quick and Easy Recipes</p>
            <p>Instant Pot Recipes</p>
            <p>Pasta Recipes</p>
            <p>Vegan Recipes</p>
          </div>
        </div>
        <div className="flex flex-row justify-center gap-4">
          <FaInstagram
            size={"2.5em"}
            color="white"
            style={{
              backgroundColor: "purple",
              padding: "7px",
              borderRadius: "50%",
            }}
          />
          <FaLinkedin
            size={"2.5em"}
            color="white"
            style={{
              backgroundColor: "purple",
              padding: "7px",
              borderRadius: "50%",
            }}
          />
          <FaGithub
            size={"2.5em"}
            color="white"
            style={{
              backgroundColor: "purple",
              padding: "7px",
              borderRadius: "50%",
            }}
          />
        </div>
      </div>
    </main>
  );
};

export default Layout;
