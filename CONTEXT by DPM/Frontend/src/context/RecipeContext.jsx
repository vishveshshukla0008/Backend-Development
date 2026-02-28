import React, { createContext, useState } from "react";

export const recipeContext = createContext();

const RecipeContext = ({ children }) => {
  const getItem = JSON.parse(localStorage.getItem("recipes")) || [];
  const [data, setData] = useState(getItem);

  function updateData(data) {
    setData((prev) => {
      const updatedData = [...prev, data];
      localStorage.setItem("recipes", JSON.stringify(updatedData));
      return updatedData;
    });
  }

  function deleteData(id) {
    setData((prev) => {
      const data = prev.filter((el) => el.id !== id);
      localStorage.setItem("recipes", JSON.stringify(data));
      return data;
    });
  }

  function fetchRecipe(id) {
    return data.find((item) => item.id === id);
  }
  return (
    <recipeContext.Provider value={{ data, updateData, fetchRecipe, deleteData }}>
      {children}
    </recipeContext.Provider>
  );
};

export default RecipeContext;
