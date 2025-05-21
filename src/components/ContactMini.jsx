import React from "react";
import { Link } from "react-router";

const ContactMini = () => {
  return (
    <div className="md:flex md:flex-row md:w-full">
      <div className="lg:text-end lg:pr-[8.5em] md:w-[50%] md:pt-[3em] md:pb-[3em] pt-[5em] pb-[5em] bg-[var(--color-berekley-blue)] text-center">
        <h3 className="md:text-5xl md:mb-3 font-(family-name:--font-heading) text-[var(--color-white-smoke)] text-5xl">
          Contact Us!
        </h3>
        <Link to="/contact">
          <button
            className="md:text-xl
          lg:mr-[1em] bg-[var(--color-white-smoke)] text-[var(--color-berekley-blue)] 
            font-(family-name:--font-text) font-extrabold text-lg w-[10em] h-[2em] mt-3 
            rounded-[25px] cursor-pointer hover:outline-2 hover:outline-offset-3 hover:outline-[var(--color-white-smoke)]"
          >
            get in touch
          </button>
        </Link>
      </div>
      <div className=" md:pt-[2em] md:pb-[2em] pt-[3em] pb-[3em] text-center md:w-[50%] md:mt-0 md:border-b-2 border-berekley-blue">
        <h4 className="lg:text-start lg:pl-[8.5em] md:text-2xl text-3xl font-bold">
          Email
        </h4>
        <p className="lg:text-start lg:pl-[6.5em] md:text-lg text-xl">
          wesellfish@officialemail.com
        </p>
        <h4 className="lg:text-start lg:pl-[8.5em] md:text-2xl mt-6 text-3xl font-bold">
          Phone
        </h4>
        <p className="lg:text-start lg:pl-[9.5em] md:text-lg text-xl">
          (000)-000-0000
        </p>
      </div>
    </div>
  );
};

export default ContactMini;
