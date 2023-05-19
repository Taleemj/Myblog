import styles from "./Contact.module.scss";
import { BsArrowUp } from "react-icons/bs";

const Contact = () => {
  return (
    <div id="contact" className={styles.container}>
      <BsArrowUp />
      <h1>Let me know what you think, drop me a message </h1>
      <form action="">
        <input type="text" name="name" id="name" placeholder="Enter Name" />
        <input
          type="text"
          name="subject"
          id="subject"
          placeholder="Enter Subject"
        />
        <input type="email" name="email" id="email" placeholder="Enter Email" />
        <textarea
          name="message"
          id="message"
          cols="25"
          rows="7"
          placeholder="Enter Message..."
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
