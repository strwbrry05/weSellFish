import React from "react";

const Contact = () => {
  function submitForm(e) {
    e.preventDefault();
  }

  return (
    <div className="">
      <div>
        <h3>Contact Us!</h3>
        <p>Send us a direct message</p>
        <p>or</p>
        <p>weSellFish@officialemail.com</p>
        <p>(000)-000-0000</p>
      </div>
      <div>
        <form onSubmit={submitForm} className="flex flex-col bg-berekley-blue">
          <div>
            <label>
              First Name: <input name="fName" type="text" placeholder="John" />
            </label>
            <label>
              Last Name: <input name="lName" type="text" placeholder="Smith" />
            </label>
          </div>

          <label>
            Email:
            <input name="email" type="text" placeholder="email@email.com" />
          </label>
          <label>
            Phone Number:
            <input name="phoneNum" type="text" placeholder="999-999-9999" />
          </label>
          <label>
            First Name:
            <textarea name="message" placeholder="type message here..." />
          </label>
        </form>
      </div>
    </div>
  );
};

export default Contact;
