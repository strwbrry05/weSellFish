import React, { useEffect, useRef, useState } from "react";
import hero1 from "../assets/images/heidi-bruce-hero.png";
import hero2 from "../assets/images/hiroko-yoshii-hero.png";
import hero3 from "../assets/images/karen-kayser-hero.png";
import { Link } from "react-scroll";

const images = [hero1, hero2, hero3];
const delay = 10000;

const Hero = () => {
  const timeoutRef = useRef(null);
  const [index, setIndex] = useState(0);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );
    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className="grid grid-cols-3 grid-rows-3 m-auto overflow-hidden max-w-full">
      <div
        className={`col-span-full row-span-full whitespace-nowrap translate-x-[${
          -index * 100
        }%] transition ease-[1000ms] brightness-50`}
      >
        {/* <div
        className={`col-span-full row-span-full whitespace-nowrap translate-x-[-200%] transition ease-[1000ms] brightness-50`}
      > */}
        {images.map((image, index) => {
          return (
            <img
              key={index}
              src={image}
              alt=""
              className=" h-screen w-screen md:max-h-[700px] inline-block"
            />
          );
        })}
      </div>

      <h2 className="z-1 col-span-full row-start-2 row-end-2 self-start justify-self-center font-(family-name:--font-titles) text-[var(--color-white-smoke)] font-semibold text-6xl sm:text-7xl md:text-8xl">
        weSellFish
      </h2>
      <button
        className="z-1 col-span-full row-start-2 row-end-2 self-center justify-self-center 
      bg-[var(--color-white-smoke)] text-[var(--color-berekley-blue)] 
      sm:mt-[-2em] md:mt-[1em] md:text-2xl font-(family-name:--font-text) font-extrabold text-xl w-[11em] h-[2em] mt-[-3em] 
      rounded-[25px] cursor-pointer hover:bg-[#1D3557] hover:text-[#F5F6F4] hover:active:outline-2 hover:outline-offset-3 hover:outline-[var(--color-white-smoke)]"
      >
        <Link to="contact" smooth={true} offset={-100}>
          find out more!{" "}
        </Link>
      </button>

      <div className="z-1 text-center col-start-2 col-end-3 row-start-3 row-end-4 self-end ">
        {images.map((_, idx) => {
          return (
            <div
              key={idx}
              className={`inline-block h-[20px] w-[20px] rounded-[50%] m-1 cursor-pointer ${
                index === idx
                  ? "outline-1 outline-[#8E8E8E] bg-[#040A10]"
                  : "bg-[#8E8E8E]"
              }`}
              onClick={() => {
                setIndex(idx);
              }}
            ></div>
          );
        })}
      </div>
    </div>
  );
};

export default Hero;
