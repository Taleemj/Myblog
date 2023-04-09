import Image from "next/image";
import styles from "./BlogList.module.scss";

import Post from "../post/Post";

const BlogList = ({ posts }) => {
  return (
    <div className={styles.container}>
      <hr />
      <div className={styles.BlogList}>
        {posts.map((post, _i) => (
          <Post post={post} key={post._id} />
        ))}
      </div>
    </div>
  );
};

export default BlogList;
