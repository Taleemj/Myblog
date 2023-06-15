"use client";
import Link from "next/link";
import styles from "./Header.module.scss";
import { AiOutlineLinkedin, AiFillGithub } from "react-icons/ai";
const Header = () => {
  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.links}>
          <li>
            <Link href={`/`}>Home</Link>
          </li>
          <li>
            <Link href={`/blogs`}>Blog</Link>
          </li>
          <li>
            <Link href={`/aboutMe`}>About</Link>
          </li>
          <li>
            <a href={"#contact"}>Contact</a>
          </li>
          <li>
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
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
