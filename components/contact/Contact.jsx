"use client";
import { useRef } from "react";
import styles from "./Contact.module.scss";
import { BsArrowUp } from "react-icons/bs";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const emailRef = useRef();
  const subjectRef = useRef();
  const nameRef = useRef();
  const messageRef = useRef();
  const sendMessage = (e) => {
    e.preventDefault();
    const templateParams = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      subject: subjectRef.current.value,
      message: messageRef.current.value,
    };
    emailjs
      .send(
        "service_jh4xi75",
        "template_lblvtdj",
        templateParams,
        "ds8naY5oswUXiMUbp"
      )
      .then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text);
          alert("Thanks, message sent successfully");
        },
        function (error) {
          alert("OOPs something went wrong... Try again later");
          console.log("FAILED...", error);
        }
      );
    nameRef.current.value = "";
    emailRef.current.value = "";
    subjectRef.current.value = "";
    messageRef.current.value = "";
  };

  return (
    <div id="contact" className={styles.container}>
      <BsArrowUp />
      <h1>Let me know what you think, drop me a message </h1>
      <form onSubmit={sendMessage} action="">
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Enter Name"
          ref={nameRef}
          required
        />
        <input
          type="text"
          name="subject"
          id="subject"
          required
          placeholder="Enter Subject"
          ref={subjectRef}
        />
        <input
          type="email"
          name="email"
          id="email"
          required
          placeholder="Enter Email"
          ref={emailRef}
        />
        <textarea
          name="message"
          id="message"
          cols="25"
          rows="7"
          required
          placeholder="Enter Message..."
          ref={messageRef}
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
