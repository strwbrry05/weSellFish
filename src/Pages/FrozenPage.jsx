import React from "react";
import Products from "../components/Products.jsx";
import ContactMini from "../components/ContactMini.jsx";

const FrozenPage = () => {
  return (
    <>
      <Products title="Our Frozen Products" number={24} />
      <div className="border-t-2 border-berekley-blue">
        <ContactMini />
      </div>
    </>
  );
};

export default FrozenPage;
