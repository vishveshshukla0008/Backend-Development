import React from "react";
import { Link } from "react-router";

const Recipe = ({ data }) => {
  return (
    <Link
      to={`/recipe/details/${data.id}`}
      className="max-w-76 sm:w-full bg-gray-900 p-6 rounded-sm shadow-[inset_0_2px_70px_rgba(0,0,65,0.25)]  text-gray-200">
      <div>
        <img
          className="w-full rounded-md h-50 object-cover object-bottom"
          src={data.image}
          alt=""
        />
      </div>

      <div className="details flex flex-col gap-6">
        <p>{data.title}</p>
        <div className="cat flex items-center gap-2">
          <div className="px-1 py-1 bg-gray-700 w-fit text-xs rounded-sm text-amber-100 ">
            Category
          </div>
          <p className="text-xs">{data.cats}</p>
        </div>
        <p>{data.chef}</p>
        <p className="desc">{data.desc}</p>
      </div>
    </Link>
  );
};

export default Recipe;
