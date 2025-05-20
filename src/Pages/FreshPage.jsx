import React from "react";
import Products from "../components/Products.jsx";
import ContactMini from "../components/ContactMini.jsx";

const FreshPage = () => {
  return (
    <>
      <Products title="Our Fresh Products" number={6} />
      <div className="border-t-2 border-berekley-blue">
        <ContactMini />
      </div>
    </>
  );
};

export default FreshPage;
