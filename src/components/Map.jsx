import React from "react";

const Map = () => {
  return (
    <div className="text-center mt-[3em] mb-[4em]">
      <h3
        className="font-heading text-berekley-blue underline text-3xl font-semibold mb-[0.75em]
      md:text-4xl"
      >
        weSellFish Company
      </h3>
      <div className="font-text mb-[1.75em] text-lg">
        <p>111 Street Avenue, Los Angeles</p>
        <p>California 99999</p>
        <p>United States</p>
      </div>
      <img
        className="h-[500px] object-cover w-[300px] m-auto border-3 border-berekley-blue
        md:w-[700px] lg:w-[1000px]"
        src="../src/assets/images/map1.png"
        alt="google maps location of company"
      />
    </div>
  );
};

export default Map;
