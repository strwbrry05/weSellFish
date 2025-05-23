import React from "react";
import picturesArr from "../../src/recentPictures.js";

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
          {picturesArr.map((img, index) => {
            return (
              <img
                className="w-[150px] md:w-[250px] border-[2px] border-white-smoke"
                key={index}
                src={img}
              ></img>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default RecentPictures;
