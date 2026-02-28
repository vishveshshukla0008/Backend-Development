import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { recipeContext } from "../context/RecipeContext";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";

const SingleRecipe = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [singleRecipe, setSingleRecipe] = useState(null);
  const [formOpen, setFormOpen] = useState(false);
  const { fetchRecipe, data, deleteData } = useContext(recipeContext);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm();

  useEffect(() => {
    const recipe = fetchRecipe(params.id);
    setSingleRecipe(recipe);

    if (recipe) {
      reset({
        title: recipe.title,
        image: recipe.image,
        description: recipe.description,
        cats: recipe.cats,
        chef: recipe.chef,
      });
    }
  }, [params.id]);

  function deleteHandler() {
    deleteData(params.id);
    navigate("/recipes");
    toast.error("Recipe deleted success !");
  }

  function updateHandler() {
    setFormOpen(true);
  }

  function onUpdate() {
    // find the index in data

    const index = data.findIndex((el) => el.id === singleRecipe.id);

    //todo

  }

  if (!singleRecipe) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="wrapper w-full flex justify-center">
        <div className="recipe-wrapper flex flex-col gap-3 w-1/2 border border-gray-600 p-3 rounded-sm">
          <div className="image">
            <img
              className="object-cover object-bottom rounded-sm w-full h-120"
              src={singleRecipe?.image}
              alt=""
            />
          </div>
          <div className="details flex-col flex gap-3">
            <div className="title">
              <p className="text-xl font-semibold text-blue-600">
                {singleRecipe?.title}
              </p>
            </div>
            <div className="chef flex items-center gap-2">
              <span className="text-lg">{singleRecipe?.chef}</span>
              <span className="px-3 rounded-sm text-sm  bg-blue-600">Chef</span>
            </div>

            <div className="category flex items-center gap-2">
              <span className="text-blue-600 font-black">Categories</span>
              <p className="italic text-gray-400">{singleRecipe.cats}</p>
            </div>

            <div className="desc">
              <span className="font-bold text-blue-600">Description </span>
              <p>{singleRecipe?.description}</p>
            </div>

            <div className="controls flex flex-col gap-3">
              <p className="text-blue-600 font-black">Controls</p>
              <div className="buttons flex gap-2">
                <button
                  onClick={updateHandler}
                  className="px-3 cursor-pointer py-1 bg-blue-700 rounded-sm">
                  Update
                </button>
                <button
                  onClick={deleteHandler}
                  className="px-3 cursor-pointer py-1 bg-red-700 rounded-sm">
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {formOpen && (
        <div className="h-screen w-full absolute top-0 left-0 z-10 bg-black">
          <div className="w-full h-full flex justify-center py-5">
            <div className="form-outer w-1/3 flex gap-9 flex-col items-center">
              <h1 className="font-semibold text-xl">Add a recipes</h1>
              <form
                onSubmit={handleSubmit(onUpdate)}
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
        </div>
      )}
    </>
  );
};

export default SingleRecipe;
