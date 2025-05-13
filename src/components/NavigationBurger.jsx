import React from "react";
import { MdOutlineClose } from "react-icons/md";

const NavigationBurger = (props) => {
  return (
    <nav className="h-screen w-60 bg-[var(--color-berekley-blue)] text-[var(--color-white-smoke)] font[var(--font-headings)]">
      <button onClick={props.toggleBurgerMenu}>
        <MdOutlineClose />
      </button>
      <ul>
        <li>Home</li>
        <li>Frozen</li>
        <li>Fresh</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default NavigationBurger;
