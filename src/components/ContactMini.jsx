import React from "react";

const ContactMini = () => {
  return (
    <div className="md:flex">
      <div className="pt-[5em] pb-[5em] bg-[var(--color-berekley-blue)] text-center">
        <h3 className="font-(family-name:--font-heading) text-[var(--color-white-smoke)] text-5xl">
          Contact Us!
        </h3>{" "}
        <button
          className="md:text-2xl
          bg-[var(--color-white-smoke)] text-[var(--color-berekley-blue)] 
            font-(family-name:--font-text) font-extrabold text-lg w-[10em] h-[2em] mt-4 
            rounded-[25px] cursor-pointer hover:outline-2 hover:outline-offset-3 hover:outline-[var(--color-white-smoke)]"
        >
          click here
        </button>
      </div>
      <div className="pt-[3em] pb-[3em] text-center">
        <h4 className="text-3xl font-bold">Email</h4>
        <p className="text-xl">wesellfish@officialemail.com</p>
        <h4 className="mt-8 text-3xl font-bold">Phone</h4>
        <p className="text-xl">(000)-000-0000</p>
      </div>
    </div>
  );
};

export default ContactMini;
