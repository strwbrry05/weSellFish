import React from "react";
import Listing from "./Listing";

const FreshProducts = (props) => {
  return (
    <>
      <h3 className="font-heading text-4xl md:5xl text-center text-berekley-blue mt-8">
        {props.title}
      </h3>
      <div className="flex flex-wrap gap-5 p-[2em] xl:w-[1200px] md:m-auto md:w-[750px]">
        {Array(props.number).fill(<Listing />)}
      </div>
    </>
  );
};

export default FreshProducts;
