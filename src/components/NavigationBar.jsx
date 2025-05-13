import { FiMenu } from "react-icons/fi";
import NavigationBurger from "./NavigationBurger";

const NavigationBar = (props) => {
  return (
    <nav className="">
      <div className="p-4 bg-[var(--color-berekley-blue)] text-[var(--color-white-smoke)] text-xl  flex flex-row ">
        <button onClick={props.toggleBurgerMenu} className="scale-[1.5] mr-5">
          <FiMenu />
        </button>
        <h1 className="font-[var(font-titles)] font-bold">weSellFish</h1>
      </div>
    </nav>
  );
};

export default NavigationBar;
