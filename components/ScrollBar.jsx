"use client";
import { useState, useEffect } from "react";

const ScrollBar = ({ styles }) => {
  const [scrollTop, setScrollTop] = useState(0);

  const onScroll = () => {
    const winScroll = document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    const scrolled = (winScroll / height) * 100;

    setScrollTop(scrolled);
  };

  useEffect(() => {
    // Fires when the document view has been scrolled
    window.addEventListener("scroll", onScroll);

    //
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div className={styles.progress} style={{ width: `${scrollTop}%` }}></div>
  );
};

export default ScrollBar;
