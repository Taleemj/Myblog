"use client";
import styles from "./post/Post.module.scss";

import Link from "next/link";
const ClientSideRoute = ({ children, route }) => {
  return (
    <Link className={styles.postLink} href={route}>
      {children}
    </Link>
  );
};

export default ClientSideRoute;
