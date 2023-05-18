"use client";
import Link from "next/link";
import Image from "next/image";
import logo from "../../assets/tm.png";
import heroImg from "../../assets/img2.jpg";
import styles from "./Header.module.scss";
import { ArrowLongRightIcon } from "@heroicons/react/24/solid";
import Logo from "../../assets/logo.png";
import { AiOutlineLinkedin, AiFillGithub } from "react-icons/ai";
const Header = () => {
  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.links}>
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
          <li>
            <Link href={``}>
              <AiOutlineLinkedin />
            </Link>
            <Link href={``}>
              <AiFillGithub />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

// <header className={styles.header}>
//   <nav className={styles.nav}>
//     <Link href="/" className={styles.logocontainer}>
//       <Image src={logo} alt="TM" /> BLOG
//     </Link>
//     <div className={styles.contact}>
//       <Link href="https://taleem-mankuer.web.app" target="_blank">
//         <h4>
//           Get In Touch <ArrowLongRightIcon />
//         </h4>
//       </Link>
//     </div>
//   </nav>
//   <div className={styles.hero}>
//     <div className={styles.herotext}>
//       <h1>Developer&apos;s Daily Blog</h1>
//       <p>
//         Welcome to every developer&apos;s favorite blog with the latest in
//         web development and technology.
//       </p>
//       <br />
//       <p className={styles.p}>
//         New technologies | The latest in programming | full stack Web
//         Development Roadmap
//       </p>
//     </div>
//     <div className={styles.heroimg}>
//       <Image src={heroImg} alt="Hero image" />
//     </div>
//   </div>
// </header>
