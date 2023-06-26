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
          <Link href={`/posts`}>Posts</Link>
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
        <iframe
          data-w-type="embedded"
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
          src="https://0ysz6.mjt.lu/wgt/0ysz6/hh1/form?c=84d47493"
          width="100%"
        ></iframe>

        <Script
          type="text/javascript"
          src=" https://app.mailjet.com/pas-nc-embedded-v1.js"
        />

        <p className={styles.copy}>
          <span className={styles.copy2}>
            2023 made with
            <AiOutlineHeart />
            by Taleem{" "}
          </span>
          <br />
          <span>
            Design inspired by wix's{" "}
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
