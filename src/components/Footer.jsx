import React from "react";
import { FiGithub } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="p-10 bg-[var(--color-light-blue)] text-center md:p-4">
      <p className="text-3xl md:text-2xl text-[var(--color-berekley-blue)] font-bold">
        STRWBRRY05
      </p>
      <div>
        <ul className="flex flex-row justify-center gap-3 md:mt-2 mt-4 mb-3">
          <a href="#">
            <li className="p-2 rounded-md bg-[var(--color-berekley-blue)]">
              <FiGithub className="md:text-xl text-2xl text-[var(--color-white-smoke)]" />
            </li>
          </a>
          <a href="#">
            <li className="p-2 rounded-md bg-[var(--color-berekley-blue)]">
              <FiLinkedin className="md:text-xl text-2xl text-[var(--color-white-smoke)]" />
            </li>
          </a>
          <a href="#">
            <li className="p-2 rounded-md bg-[var(--color-berekley-blue)]">
              <FaRegHeart className="md:text-xl text-2xl text-[var(--color-white-smoke)]" />
            </li>
          </a>
        </ul>
      </div>
      <p className="text-[var(--color-berekley-blue)]">
        &copy;2025 Jacqueline Molina
      </p>
    </div>
  );
};

export default Footer;
