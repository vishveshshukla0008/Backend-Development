import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <nav className="w-full flex justify-center mb-5">
      <div className="nav w-fit bg-white px-5 py-1.5 flex justify-center gap-10 rounded-sm text-black">
        <NavLink
          to="/"
          className={(e) => (e.isActive ? "text-red-500 font-semibold" : "")}>
          Home
        </NavLink>
        <NavLink
          to="/recipes"
          className={(e) => (e.isActive ? "text-red-500 font-semibold" : "")}>
          Recipes
        </NavLink>
        <NavLink
          to="/about"
          className={(e) => (e.isActive ? "text-red-500 font-semibold" : "")}>
          About
        </NavLink>
        <NavLink
          to="/create"
          className={(e) => (e.isActive ? "text-red-500 font-semibold" : "")}>
          Create Recipe
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
