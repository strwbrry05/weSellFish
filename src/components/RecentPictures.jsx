import React from "react";
import picturesArr from "../../src/recentPictures.js";
import rp from "../assets/images/rp.png";
import rp2 from "../assets/images/rp2.png";
import rp3 from "../assets/images/rp3.png";
import rp4 from "../assets/images/rp4.png";
import rp5 from "../assets/images/rp5.png";
import rp6 from "../assets/images/rp6.png";
import rp7 from "../assets/images/rp7.png";
import rp8 from "../assets/images/rp8.png";

const RecentPictures = () => {
  return (
    <>
      <div className="text-center bg-berekley-blue p-8 m-auto pb-[5em] pt-[3em] ">
        <h3
          className="bg-berekley-blue text-white-smoke font-heading text-4xl mb-5
        md:mb-10"
        >
          Recent Pictures
        </h3>

        <div
          className="flex flex-wrap gap-3 align-center justify-center
         md:gap-6 md:grid md:grid-rows-2 md:grid-cols-4 md:w-[85%] md:m-auto
         xl:w-5xl"
        >
          <img
            src={rp}
            alt="fish"
            className="w-[150px] md:w-[250px] border-[2px] border-white-smoke"
          />
          <img
            src={rp2}
            alt="fish"
            className="w-[150px] md:w-[250px] border-[2px] border-white-smoke"
          />
          <img
            src={rp3}
            alt="fish"
            className="w-[150px] md:w-[250px] border-[2px] border-white-smoke"
          />
          <img
            src={rp4}
            alt="fish"
            className="w-[150px] md:w-[250px] border-[2px] border-white-smoke"
          />
          <img
            src={rp5}
            alt="fish"
            className="w-[150px] md:w-[250px] border-[2px] border-white-smoke"
          />
          <img
            src={rp6}
            alt="fish"
            className="w-[150px] md:w-[250px] border-[2px] border-white-smoke"
          />
          <img
            src={rp7}
            alt="fish"
            className="w-[150px] md:w-[250px] border-[2px] border-white-smoke"
          />
          <img
            src={rp8}
            alt="fish"
            className="w-[150px] md:w-[250px] border-[2px] border-white-smoke"
          />
        </div>
      </div>
    </>
  );
};

export default RecentPictures;
