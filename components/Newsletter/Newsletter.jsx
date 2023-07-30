"use client";
import styles from "./Newsletter.module.scss";
import { useRef, useState } from "react";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "@/firebaseconfig";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

const Newsletter = () => {
  const emailRef = useRef();
  const [loading, setloading] = useState(false);
  const [submitted, setsubmitted] = useState(false);

  const getUserEmail = async (e) => {
    setloading(true);
    e.preventDefault();
    const emails = {};
    const email = emailRef.current.value;
    const newemail = email;
    emails[`${email.substring(0, email.length - 4)}`] = newemail;
    try {
      const docRef = await updateDoc(
        doc(db, "newsletterEmails", "emails"),
        emails
      );
    } catch (error) {
      console.error(error);
    }
    console.log(emails);
    // emailRef && emailRef.current.value == "";
    setloading(false);
    setsubmitted(true);
  };

  return (
    <div className={styles.container}>
      {!loading & !submitted ? (
        <>
          <div className={styles.txt}>
            <h1>Never Miss a New Post.</h1>
          </div>
          <form onSubmit={getUserEmail}>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your Email *"
              ref={emailRef}
              required
            />
            <button type="submit">Subscribe</button>
          </form>
        </>
      ) : loading & !submitted ? (
        <h1>Submiting</h1>
      ) : (
        <div className={styles.submitted}>
          <CheckCircleIcon />
          <h1>Subscribed successfully</h1>
        </div>
      )}
    </div>
  );
};

export default Newsletter;
