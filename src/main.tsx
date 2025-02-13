import ReactDOM from "react-dom/client";
import { Routes, Route } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Layout from "./components/Layout.tsx";
import Home from "./Home.tsx";
import Recipes from "./pages/recipes/Recipes.tsx";
import Popular from "./pages/recipes/Popular.tsx";
import CategoryRecipes from "./pages/recipes/CategoryRecipes.tsx";
import "./index.css";

const root = document.getElementById("root");

ReactDOM.createRoot(root!).render(
  <BrowserRouter>
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<Recipes />} >
          <Route path="popular" element={<Popular />} />
          <Route path="category/:slug" element={<CategoryRecipes />} />
        </Route>
      </Routes>
    </Layout>
  </BrowserRouter>,
);
