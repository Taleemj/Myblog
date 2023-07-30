"use client";
import styles from "./Footer.module.scss";
import Link from "next/link";
import {
  AiOutlineLinkedin,
  AiFillGithub,
  AiOutlineHeart,
} from "react-icons/ai";
import { useRef, useState } from "react";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "@/firebaseconfig";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

const Footer = () => {
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
    setloading(false);
    setsubmitted(true);
  };
  return (
    <div className={styles.container}>
      <ul className={styles.links}>
        <li>
          <strong>
            <h1>The Developer Blog</h1>
          </strong>
        </li>
        <li>
          <Link href={`/`}>Home</Link>
        </li>
        <li>
          <Link href={`/post`}>Posts</Link>
        </li>
        <li>
          <Link href={`/aboutMe`}>About</Link>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>

        <li>
          <Link href={"/privacy-policy"}>Privacy Policy</Link>
        </li>
        <div className={styles.socials}>
          <Link
            href={`https://www.linkedin.com/in/taleem-mankuer-713367235/`}
            target="_blank"
            rel="norefferal"
          >
            <AiOutlineLinkedin />
          </Link>
          <Link
            target="_blank"
            rel="norefferal"
            href={`https://github.com/Taleemj`}
          >
            <AiFillGithub />
          </Link>
        </div>
      </ul>
      <div className={styles.newsletter}>
        {!loading & !submitted ? (
          <>
            <h4>Never miss a post</h4>
            <p>Enter email here</p>
            <form onSubmit={getUserEmail}>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email Adress"
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
        <p className={styles.copy}>
          <span className={styles.copy2}>
            2023 made with
            <AiOutlineHeart />
            by Taleem{" "}
          </span>
          <br />
          <span>
            Design inspired by wix&apos;s{" "}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.wix.com/website-template/view/html/2502"
            >
              Train of thought
            </a>{" "}
            and{" "}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.wix.com/website-template/view/html/2747"
            >
              Poise
            </a>{" "}
            templates.
          </span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
