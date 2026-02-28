import { nanoid } from "nanoid";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { recipeContext } from "../context/RecipeContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

const CreateRecipes = () => {
  const { updateData } = useContext(recipeContext);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm();

  function onSubmit(recipe) {
    recipe.id = nanoid();
    updateData(recipe);
    toast.success("Recipe added success !");
    navigate("/recipes");
  }

  return (
    <div className="w-full h-full flex justify-center py-5">
      <div className="form-outer w-1/3 flex gap-9 flex-col items-center">
        <h1 className="font-semibold text-xl">Add a recipes</h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-10 w-full">
          <input
            className="border-b outline-0 w-full"
            type="url"
            placeholder="URL"
            {...register("image", { required: "Image is required" })}
          />
          {errors.image ? (
            <p className="text-red-700">{errors.image.message}</p>
          ) : (
            ""
          )}
          <input
            className="border-b outline-0 w-full"
            type="text"
            {...register("title", { required: "Title is required" })}
            placeholder="Title"
          />
          {errors.title ? (
            <p className="text-red-700">{errors.title.message}</p>
          ) : (
            ""
          )}
          <textarea
            className="border-b outline-0 w-full"
            type="text"
            {...register("description", {
              required: "Description is required",
            })}
            placeholder="Description"
          />
          {errors.description ? (
            <p className="text-red-700">{errors.description.message}</p>
          ) : (
            ""
          )}
          <select
            className="border-b bg-gray-800  outline-0 w-full"
            type="text"
            {...register("cats", {
              required: "Category is required",
            })}
            placeholder="Description">
            <option>Select Category</option>
            <option value="1" className="bg-gray-800">
              Category-1
            </option>
            <option value="2" className="bg-gray-800">
              Category-2
            </option>
            <option value="3" className="bg-gray-800">
              Category-3
            </option>
          </select>
          {errors.cats ? (
            <p className="text-red-700">{errors.cats.message}</p>
          ) : (
            ""
          )}

          <input
            className="border-b outline-0 w-full"
            type="text"
            {...register("chef", { required: "chef name is required" })}
            placeholder="chef"
          />
          {errors.chef ? (
            <p className="text-red-700">{errors.chef.message}</p>
          ) : (
            ""
          )}

          <button className="w-full bg-red-900 rounded-sm py-1.5 active:scale-98 duration-100 cursor-pointer font-semibold">
            Save a Recipe
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateRecipes;
