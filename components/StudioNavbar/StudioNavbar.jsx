import styles from "./StudioNavbar.module.scss";
import Link from "next/link";
import { ArrowUturnLeftIcon } from "@heroicons/react/24/solid";

const StudioNavbar = (props) => {
  return (
    <div>
      <div className={styles.container}>
        <Link href="/" className={styles.backlink}>
          <ArrowUturnLeftIcon className={styles.backicon} />
          <span>Go to website</span>
        </Link>
      </div>
      <>{props.renderDefault(props)}</>
    </div>
  );
};

export default StudioNavbar;
