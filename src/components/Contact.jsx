import React, { useState } from "react";

const Contact = () => {
  const [sentMessage, setSentMessage] = useState("");
  const [fName, setfName] = useState("");
  const [lName, setlName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  function submitForm(e) {
    e.preventDefault();
    setSentMessage("Your information has been passed on!");
    setfName("");
    setlName("");
    setEmail("");
    setPhone("");
    setMessage("");
  }

  function setInputFirstName(e) {
    setfName(e.target.value);
  }
  function setInputLastName(e) {
    setlName(e.target.value);
  }
  function setInputEmail(e) {
    setEmail(e.target.value);
  }
  function setInputPhone(e) {
    setPhone(e.target.value);
  }
  function setInputMessage(e) {
    setMessage(e.target.value);
  }

  return (
    <div className="md:flex items-center border-b-2 border-berekley-blue">
      <div
        className="font-heading text-center text-xl mb-[1.5em]
      md:w-[40%] md:text-2xl xl:text-end pt-[1em] "
      >
        <h3 className="text-5xl font-bold mb-[0.5em] md:text-6xl xl:mr-[1.75em]">
          Contact Us!
        </h3>
        <p className="xl:mr-[5.25em]">Send us a direct message</p>
        <p className="mt-4 mb-4 xl:mr-[10em]">or</p>
        <p className="xl:mr-[4em]">weSellFish@officialemail.com</p>
        <p className="xl:mr-[7.5em]">(000)-000-0000</p>
      </div>
      <div className="text-lg md:w-[60%] bg-berekley-blue pt-[5em] pb-[5em]">
        <form
          onSubmit={submitForm}
          className="flex flex-col text-white-smoke p-[2em] font-text 
          md:w-[80%] md:m-auto xl:w-2xl xl:m-0 xl:ml-[3em] 2xl:ml-[6em]
          "
        >
          <div className="flex flex-col md:grid md:grid-rows-1 md:grid-cols-2 md:justify-center md:items-center">
            <label className="">
              First Name <span className="text-red-500 text-2xl">*</span>
              <input
                className="bg-white-smoke text-black w-full md:w-[85%] rounded-md pl-3 p-[0.05em] mb-[0.75em]"
                name="fName"
                value={fName}
                onChange={(e) => setInputFirstName(e)}
                type="text"
                placeholder="John"
                required
              />
            </label>
            <label>
              Last Name
              <input
                className="bg-white-smoke text-black w-full md:w-[85%] rounded-md pl-3 p-[0.05em] mb-[0.75em]"
                name="lName"
                type="text"
                value={lName}
                onChange={(e) => setInputLastName(e)}
                placeholder="Smith"
              />
            </label>
          </div>
          <div className="flex flex-col">
            <label className="">
              Email <span className="text-red-500 text-2xl">*</span>
              <br />
              <input
                className="bg-white-smoke text-black w-full md:w-[93%] rounded-md pl-3 p-[0.05em] mb-[0.75em]"
                name="email"
                type="email"
                value={email}
                onChange={(e) => setInputEmail(e)}
                placeholder="email@email.com"
              />
            </label>
            <label>
              Phone <span className="text-red-500 text-2xl">*</span>
              <input
                className="bg-white-smoke text-black w-full md:w-[93%] rounded-md pl-3 p-[0.05em] mb-[0.75em]"
                name="phoneNum"
                type="text"
                value={phone}
                onChange={(e) => setInputPhone(e)}
                placeholder="999-999-9999"
              />
            </label>
            <label>
              Message <span className="text-red-500 text-2xl">*</span>
              <textarea
                className="bg-white-smoke text-black w-full md:w-[93%] rounded-md pl-3 p-[0.05em] mb-[0.75em]"
                name="message"
                rows={5}
                value={message}
                onChange={(e) => setInputMessage(e)}
                placeholder="type message here..."
              />
            </label>
          </div>
          <button
            className="font-bold text-2xl border-3 rounded-lg w-45 m-auto p-1 hover:bg-light-blue hover:cursor-pointer hover:outline-2 hover:outline-offset-2 hover:outline-[var(--color-white-smoke)] hover:text-berekley-blue active:bg-light-blue"
            type="submit"
          >
            Send
          </button>
          {sentMessage && (
            <p className="text-center mt-2 text-red-200 italic">
              {sentMessage}
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Contact;
