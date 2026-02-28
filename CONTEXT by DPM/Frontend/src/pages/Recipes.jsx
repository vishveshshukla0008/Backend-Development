import React, { useContext } from "react";
import { recipeContext } from "../context/RecipeContext";
import Recipe from "../components/Recipe";

const Recipes = () => {
  const { data } = useContext(recipeContext);
  console.log(data);
  return (
    <div className="wrapper w-full min-h-full grid grid-cols-1 max-sm:grid-cols-1 max-md:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 place-items-center">
      {data.map((item) => (
        <Recipe key={item.id} data={item} />
      ))}
    </div>
  );
};

export default Recipes;
