import React from "react";
import { LuFish } from "react-icons/lu";

const MissionCard = (props) => {
  return (
    <div className="md:w-70 lg:w-68 p-9 mt-3 mb-5 w-85 m-auto flex flex-col border-2 border-inherit rounded-md justify-center items-center text-[var(--color-berekley-blue)]">
      <div className="text-center">
        <LuFish className="md:text-5xl text-7xl" />
      </div>
      <h4 className="md:text-xl text-2xl mb-4 mt-4 bg-[var(--color-light-blue)] font-bold h-[1.75em] w-[9em] text-center content-center rounded-[20px]">
        {props.title}
      </h4>
      <p className="text-lg">{props.text}</p>
    </div>
  );
};

export default MissionCard;
