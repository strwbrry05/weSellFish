import React from "react";
import NavigationBar from "./NavigationBar";
import NavigationBurger from "./NavigationBurger";
import { useState } from "react";

const Navigation = () => {
  const [burgerMenu, setBurgerMenu] = useState(false);

  const toggleBurgerMenu = () => {
    setBurgerMenu((prevBurger) => !prevBurger);
    console.log("hi still here");
  };

  return (
    <>
      <NavigationBar toggleBurgerMenu={toggleBurgerMenu} />
      <div
        className={`fixed z-5 left-0 top-0  transition duration-300 ease-in-out ${
          burgerMenu
            ? "transform-[translate3d(0vw,0,0)]"
            : "transform-[translate3d(-100vw,0,0)]"
        }`}
      >
        <NavigationBurger toggleBurgerMenu={toggleBurgerMenu} />
      </div>
    </>
  );
};

export default Navigation;
