import React, { useState } from "react";
import "../styles/Contact.css";

const Contact = () => {
  const [form, SetForm] = useState("");

  const HandleInput = (e) => {
    SetForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const HandleContact = async (e) => {
    e.preventDefault();
    console.log(e);
    const responce = await fetch("http://localhost:4000/user", {
      method: "POST",
      body: JSON.stringify(form),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = responce.json();
    console.log(data);
  };

  return (
    <>
      <div className="contact">
        <div className="title-contact">
          <h1>
            Contact <span>here</span>
          </h1>
        </div>
        <div className="container">
          {/* <div className="parragh-contact">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore facilis illum necessitatibus obcaecati sunt.<span>Lorem, ipsum dolor.</span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis dolorum.</p>
      </div> */}
        </div>
        <div className="container Form-container">
          <form onSubmit={HandleContact}>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your name.."
              required
              onChange={HandleInput}
            />
            <br />

            <input
              type="mail"
              id="gmail"
              name="mail"
              placeholder="Your gmail"
              required
              onChange={HandleInput}
            />
            <br />

            <textarea
              id="subject"
              name="subject"
              placeholder="Write something.."
              required
              onChange={HandleInput}
              style={{ height: "100px" }}
            ></textarea>
            <br />
            <button id="submit" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
