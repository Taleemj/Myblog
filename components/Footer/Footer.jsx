import styles from "./Footer.module.scss";
import Link from "next/link";
import Script from "next/script";
import {
  AiOutlineLinkedin,
  AiFillGithub,
  AiOutlineHeart,
} from "react-icons/ai";

const Footer = () => {
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
        <h4>Never miss a post</h4>
        <p>Enter email here</p>
        <form action="">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email Adress"
            required
          />
          <button type="submit">Subscribe</button>
        </form>
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
