import React from "react";
import { FaX } from "react-icons/fa6";
import { GiCirclingFish } from "react-icons/gi";
import { NavLink } from "react-router";

const NavigationBurger = (props) => {
  return (
    <nav className="md:hidden flex flex-col justify-start items-end h-screen w-75 bg-[var(--color-berekley-blue)] text-[var(--color-white-smoke)] font[var(--font-headings)]">
      <button
        className="cursor-pointer p-4 mt-3"
        onClick={props.toggleBurgerMenu}
      >
        <FaX className="text-2xl" />
      </button>
      <div className="w-[90%] mt-2 mb-8 border-1 self-center"></div>
      <ul className="w-[100%] flex flex-col justify-center items-center text-2xl font-semibold font-(family-name:--font-text)">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "border-b-2 mb-5" : "mb-5")}
        >
          <li className="mt-5">Home</li>
        </NavLink>
        <NavLink
          to="/frozen"
          className={({ isActive }) => (isActive ? "border-b-2 mb-5" : "mb-5")}
        >
          <li className="mt-5 ">Frozen</li>
        </NavLink>
        <NavLink
          to="/fresh"
          className={({ isActive }) => (isActive ? "border-b-2 mb-5" : "mb-5")}
        >
          <li className="mt-5">Fresh</li>
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) => (isActive ? "border-b-2 mb-5" : "mb-5")}
        >
          <li className="mt-5 ">Contact</li>
        </NavLink>
      </ul>
      <div className="w-[90%] mt-8 border-1 self-center"></div>

      <div className="mt-8 flex flex-col self-center justify-center items-center">
        <GiCirclingFish className="text-8xl" />
        <p className="text-sm mt-2 font-(family-name:--font-text)">
          &copy; 2025 Jacqueline Molina
        </p>
      </div>
    </nav>
  );
};

export default NavigationBurger;
