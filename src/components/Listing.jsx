import React from "react";
import img from "../assets/images/listing.png";

const Fresh = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-berekley-blue w-[315px] m-auto mb-[1.5em] text-white-smoke">
      <img
        src={img}
        alt="product"
        className="w-[270px] border-3 border-white-smoke ml-[1.25em] mr-[1.25em] mt-[1.25em]"
      />
      <div className="flex justify-between align-center w-full pl-6 pr-6 mt-[0.5em]">
        <h3 className="font-heading text-2xl">Tuna</h3>
        <p>99lb / Case</p>
      </div>
      <p className="w-full pl-6 text-sm mb-[1.25em]">location/location</p>
    </div>
  );
};

export default Fresh;
