import React, { useEffect, useState } from "react";
import hero1 from "../assets/images/heidi-bruce-hero.png";
import hero2 from "../assets/images/hiroko-yoshii-hero.png";
import hero3 from "../assets/images/karen-kayser-hero.png";

const images = [hero1, hero2, hero3];
const delay = 5000;

const Hero = () => {
  const [index, setIndex] = useState(2);

  useEffect(() => {
    setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );
    // return () => {};
  }, [index]);

  return (
    <div className="m-auto overflow-hidden max-w-full">
      <div
        className={`whitespace-nowrap translate-x-[${
          -index * 100
        }%] transition ease-[1000ms]`}
      >
        {images.map((image, index) => {
          return (
            <img
              key={index}
              src={image}
              alt=""
              className=" h-screen w-fill inline-block"
            />
          );
        })}
      </div>

      {/* <div className="blackScreen"></div>
      <h2>weSellFish</h2>
      <button>find out more!</button> */}
      <div className="text-center">
        {images.map((_, idx) => {
          return (
            <div
              key={idx}
              className={`inline-block h-[20px] w-[20px] rounded-[50%] m-1 cursor-pointer ${
                index === idx ? "bg-[#6a0dad]" : "bg-[#c4c4c4]"
              }`}
            ></div>
          );
        })}
      </div>
    </div>
  );
};

export default Hero;
