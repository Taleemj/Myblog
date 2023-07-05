import styles from "./Newsletter.module.scss";
import Script from "next/script";

const Newsletter = () => {
  return (
    <div className={styles.container}>
      <div className={styles.txt}>
        <h1>Never Miss a New Post.</h1>
      </div>
      <form action="">
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter your Email *"
          required
        />
        <button type="submit">Subscribe</button>
      </form>
    </div>
  );
};

export default Newsletter;
