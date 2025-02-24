import '@fontsource/merriweather/300.css';
import '@fontsource/merriweather/400.css';
import '@fontsource/merriweather/700.css';
import '@fontsource/merriweather/900.css';
import '@fontsource/merriweather/300-italic.css';
import '@fontsource/merriweather/400-italic.css';
import '@fontsource/merriweather/700-italic.css';
import '@fontsource/merriweather/900-italic.css';
import ReactDOM from "react-dom/client";
import { Routes, Route } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Layout from "./components/Layout.tsx";
import Home from "./Home.tsx";
import Recipes from "./pages/recipes/Recipes.tsx";
import Popular from "./pages/recipes/Popular.tsx";
import CategoryRecipes from "./pages/recipes/CategoryRecipes.tsx";
import "./index.css";
import RecipeDetail from "./pages/recipes/RecipeDetail.tsx";

const root = document.getElementById("root");

ReactDOM.createRoot(root!).render(
  <BrowserRouter>
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<Recipes />} >
          <Route path="popular" element={<Popular />} />
          <Route path="category/:slug" element={<CategoryRecipes />} />
          <Route path=":id" element={<RecipeDetail />} />
        </Route>
      </Routes>
    </Layout>
  </BrowserRouter>,
);
