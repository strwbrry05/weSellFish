import { FiMenu } from "react-icons/fi";
import { NavLink } from "react-router";

const NavigationBar = (props) => {
  return (
    <nav className="sticky top-0 z-5 shadow-xl/20">
      <div className="md:flex md:justify-between md:items-center md:pl-[3em] md:pr-[3em] p-4 bg-[var(--color-berekley-blue)] text-[var(--color-white-smoke)] text-xl  flex flex-row ">
        <button
          onClick={props.toggleBurgerMenu}
          className="cursor-pointer md:hidden scale-[1.5] mr-5"
        >
          <FiMenu />
        </button>
        <h1 className="font-(family-name:--font-titles)">weSellFish</h1>
        <ul className="hidden md:block md:flex font-medium text-base font-(family-name:--font-text)">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "inline-block relative after:origin-bottom-center after:scale-x-70 after:scale-x-0 after:h-[2px] after:w-[100%] after:bg-[var(--color-white-smoke)] after:content-[''] after:absolute after:bottom-0 after:left-0 after:origin-bottom-center"
                : "inline-block relative hover:after:origin-bottom-center hover:after:scale-x-70 after:scale-x-0 after:h-[2px] after:w-[100%] after:bg-[var(--color-white-smoke)] after:content-[''] after:absolute after:bottom-0 after:left-0 after:origin-bottom-center after:transition-transform after:duration-300 after:ease-in-out "
            }
          >
            <li className="mr-4 ml-4">Home</li>
          </NavLink>
          <NavLink
            to="/frozen"
            className={({ isActive }) =>
              isActive
                ? "inline-block relative after:origin-bottom-center after:scale-x-70 after:scale-x-0 after:h-[2px] after:w-[100%] after:bg-[var(--color-white-smoke)] after:content-[''] after:absolute after:bottom-0 after:left-0 after:origin-bottom-center"
                : "inline-block relative hover:after:origin-bottom-center hover:after:scale-x-70 after:scale-x-0 after:h-[2px] after:w-[100%] after:bg-[var(--color-white-smoke)] after:content-[''] after:absolute after:bottom-0 after:left-0 after:origin-bottom-center after:transition-transform after:duration-300 after:ease-in-out "
            }
          >
            <li className="mr-4 ml-4">Frozen</li>
          </NavLink>
          <NavLink
            to="/fresh"
            className={({ isActive }) =>
              isActive
                ? "inline-block relative after:origin-bottom-center after:scale-x-70 after:scale-x-0 after:h-[2px] after:w-[100%] after:bg-[var(--color-white-smoke)] after:content-[''] after:absolute after:bottom-0 after:left-0 after:origin-bottom-center"
                : "inline-block relative hover:after:origin-bottom-center hover:after:scale-x-70 after:scale-x-0 after:h-[2px] after:w-[100%] after:bg-[var(--color-white-smoke)] after:content-[''] after:absolute after:bottom-0 after:left-0 after:origin-bottom-center after:transition-transform after:duration-300 after:ease-in-out "
            }
          >
            <li className="mr-4 ml-4">Fresh</li>
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "inline-block relative after:origin-bottom-center after:scale-x-70 after:scale-x-0 after:h-[2px] after:w-[100%] after:bg-[var(--color-white-smoke)] after:content-[''] after:absolute after:bottom-0 after:left-0 after:origin-bottom-center"
                : "inline-block relative hover:after:origin-bottom-center hover:after:scale-x-70 after:scale-x-0 after:h-[2px] after:w-[100%] after:bg-[var(--color-white-smoke)] after:content-[''] after:absolute after:bottom-0 after:left-0 after:origin-bottom-center after:transition-transform after:duration-300 after:ease-in-out "
            }
          >
            <li className="mr-4 ml-4">Contact</li>
          </NavLink>
        </ul>
      </div>
    </nav>
  );
};

export default NavigationBar;
