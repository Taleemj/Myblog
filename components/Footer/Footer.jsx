import styles from "./Footer.module.scss";
import Link from "next/link";
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
          <h1>The Developer Blog</h1>
        </li>
        <li>
          <Link href={``}>Home</Link>
        </li>
        <li>
          <Link href={``}>Blog</Link>
        </li>
        <li>
          <Link href={``}>About</Link>
        </li>
        <li>
          <Link href={``}>Contact</Link>
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
        <h4>Don&apos;t miss a post</h4>
        <p>Enter your email here*</p>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email Address"
        />
        <Link href={``}>
          <button>Subscribe</button>
        </Link>
        <p className={styles.copy}>
          2023 made with <AiOutlineHeart /> by Taleem
        </p>
      </div>
    </div>
  );
};

export default Footer;
