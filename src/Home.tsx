import PropTypes from "prop-types";
import ButtonLink from "./components/ButtonLink";
import { TextInput } from "flowbite-react";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { useEffect, useState } from "react";
import { api } from "./services/api";
import { getNRandomIntegersInRange } from "./services/helper";
import { Category } from "./types/types";

const dummmyHighlights = [
  {
    filename: "placeholder-1.webp",
    caption: "Breakfast",
  },
  {
    filename: "placeholder-2.webp",
    caption: "Spicy",
  },
  {
    filename: "placeholder-3.webp",
    caption: "Chicken",
  },
  {
    filename: "placeholder-4.jpg",
    caption: "Holiday Series",
  },
];

const dummmyCarousels = [
  {
    filename: "placeholder-1.webp",
    caption: "QUICK AND EASY",
  },
  {
    filename: "placeholder-2.webp",
    caption: "DINNER",
  },
  {
    filename: "placeholder-3.webp",
    caption: "VEGETARIAN",
  },
  {
    filename: "placeholder-4.jpg",
    caption: "HEALTHY",
  },
  {
    filename: "placeholder-1.webp",
    caption: "INSTANT POT",
  },
  {
    filename: "placeholder-2.webp",
    caption: "VEGAN",
  },
  {
    filename: "placeholder-3.webp",
    caption: "MEAL PREP",
  },
  {
    filename: "placeholder-4.jpg",
    caption: "SOUPS",
  },
];

const imageCaptionClass =
  "rounded-lg bg-orange-500 p-3 py-1 font-semibold tracking-wider text-white";
const ImageCard = ({ filename, caption }) => {
  return (
    <div className="relative">
      <img
        src={"/" + filename}
        alt=""
        style={{
          width: "11rem",
          height: "10rem",
          objectFit: "cover",
        }}
      />
      <div
        className="absolute left-0 flex w-full items-center justify-center"
        style={{ bottom: "-10px" }}
      >
        <p className={imageCaptionClass}>{caption}</p>
      </div>
    </div>
  );
};

ImageCard.propTypes = {
  filename: PropTypes.string,
  caption: PropTypes.string,
};

const fetchCategories = async (setLoading, setData) => {
  try {
    console.log('fetching categories');
    setLoading(true);
    const data = await api.getCategories();
    const randomIndexes = getNRandomIntegersInRange(0, data.length, 4);
    console.log(data);
    const randomizedCategories = [];
    for (let i = 0; i < 4; i++) {
      randomizedCategories.push(data[randomIndexes[i]]);
    }
    setData(randomizedCategories);
  } catch (error) {
    console.log('Failed to fetch post ', error);
  }
}

function Home() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [isCategoriesLoading, setIsCategoriesLoading] = useState(false);

  useEffect(() => {
    fetchCategories(setIsCategoriesLoading, setCategories);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <h5 className="mt-6 text-xl font-bold tracking-wider">
        SIMPLE RECIPES MADE FOR
      </h5>
      <h5 className="font-semibold tracking-widest">
        real, actual, everyday life.
      </h5>
      <div className="relative mb-3">
        <img
          src="/placeholder.jpeg"
          alt=""
          style={{
            width: "26rem",
          }}
        />
        <div
          className="absolute left-0 flex w-full items-center justify-center"
          style={{ bottom: "-10px" }}
        >
          <p className={imageCaptionClass}>MOST POPULAR</p>
        </div>
      </div>
      <div className="mb-4 grid grid-cols-2 gap-5">
        {categories.map((category, index) => (
          <Link to={`/recipes/category/${category.slug}`} key={index}
          state={{ category }}>
          <ImageCard
            key={index}
            filename={dummmyHighlights[index].filename}
            caption={category.name}
          />
          </Link>
        ))}
      </div>

      {/* SEARCH ALL RECIPES SECTION */}
      <div className="mb-5 flex w-screen flex-col items-center gap-2 bg-slate-200 py-3">
        <ButtonLink
          to="/"
          className="mb-2 bg-purple-600 px-8 py-3 font-bold tracking-widest text-white"
        >
          + VIEW ALL RECIPES
        </ButtonLink>
        <div className="flex w-full flex-row gap-5 overflow-x-scroll">
          {dummmyCarousels.map((dummy, index) => (
            <div className="flex w-72 flex-col items-center gap-2" key={index}>
              <img
                src={dummy.filename}
                alt=""
                style={{
                  width: "14rem",
                  height: "10rem",
                  borderRadius: "50%",
                  objectFit: "cover",
                  maxWidth: "100%",
                }}
              />
              <h5 className="w-full font-bold">{dummy.caption}</h5>
            </div>
          ))}
        </div>
        <TextInput
          id="search"
          type="text"
          icon={FaSearch}
          placeholder="Search our recipes"
          className="w-full px-2"
        />
      </div>

      {/* LATEST RECIPES SECTION */}
      <div className="flex flex-col items-center gap-10">
        <h5 className="text-lg font-bold tracking-widest text-purple-800">
          THE LATEST & GREATEST
        </h5>
        <div className="flex flex-col gap-2">
          <img
            src="dessert-1.webp"
            alt=""
            style={{
              width: "fit-screen",
              height: "14rem",
              objectFit: "cover",
              maxWidth: "100%",
            }}
          />
          <div className="flex flex-col gap-2 px-3">
            <p className="text-sm font-medium tracking-wider">
              DECEMBER 6, 2024
            </p>
            <h5 className="text-2xl font-bold tracking-wider">
              Dulce De Leche Tiramisu
            </h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vel
              lorem at sapien malesuada posuere. Fusce consequat lectus elit, et
              sodales turpis accumsan nec. Integer consectetur, enim rhoncus
              venenatis euismod, justo nunc fermentum diam
            </p>
            <Link to={"/"}>
              <p className="text-lg font-bold tracking-wider text-orange-500">
                CONTINUE READING
              </p>
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <img
            src="dessert-2.jpg"
            alt=""
            style={{
              width: "fit-screen",
              height: "14rem",
              objectFit: "cover",
              maxWidth: "100%",
            }}
          />
          <div className="flex flex-col gap-2 px-3">
            <p className="text-sm font-medium tracking-wider">MAY 13, 2024</p>
            <h5 className="text-2xl font-bold tracking-wider">
              Strawberry Shortcake
            </h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vel
              lorem at sapien malesuada posuere. Fusce consequat lectus elit, et
              sodales turpis accumsan nec. Integer consectetur, enim rhoncus
              venenatis euismod, justo nunc fermentum diam
            </p>
            <Link to={"/"}>
              <p className="text-lg font-bold tracking-wider text-orange-500">
                CONTINUE READING
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
