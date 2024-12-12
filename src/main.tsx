import ReactDOM from "react-dom/client";
import { Routes, Route } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Layout from "./components/Layout.tsx";
import Home from "./Home.tsx";
import "./index.css";

const root = document.getElementById("root");

ReactDOM.createRoot(root!).render(
  <BrowserRouter>
  <Layout>
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
    </Layout>
  </BrowserRouter>
);
