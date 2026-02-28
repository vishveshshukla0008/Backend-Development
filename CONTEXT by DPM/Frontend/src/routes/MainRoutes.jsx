import React from "react";
import { Route, Routes } from "react-router";
import Home from "../pages/Home";
import Recipes from "../pages/Recipes";
import About from "../pages/About";
import CreateRecipes from "../pages/CreateRecipes";
import SingleRecipe from "../pages/SingleRecipe";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/recipes" element={<Recipes />} />
      <Route path="/about" element={<About />} />
      <Route path="/create" element={<CreateRecipes />} />
      <Route path="/recipe/details/:id" element={<SingleRecipe />} />
    </Routes>
  );
};

export default MainRoutes;
