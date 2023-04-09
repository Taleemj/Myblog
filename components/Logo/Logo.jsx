import Image from "next/image";
import logo from "../../assets/tm.png";
import styles from "./Logo.module.scss";

const Logo = () => {
  return (
    <div className={styles.logocontainer}>
      <div className={styles.img}>
        <Image src={logo} alt="image" height={35} />
      </div>
      <span>Taleem&apos;s content studio</span>
    </div>
  );
};

export default Logo;
