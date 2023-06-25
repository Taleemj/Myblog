import styles from "./Post.module.scss";
import Image from "next/image";
import urlFor from "../../lib/urlFor";
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";
import ClientSideRoute from "../ClientSideRoute";

const Post = ({ post }) => {
  return (
    <ClientSideRoute route={`/posts/${post.slug.current}`}>
      <div className={styles.blog}>
        <div className={styles.imgcontainer}>
          <Image
            src={urlFor(post.mainImage).url()}
            width={1000}
            height={300}
            alt={post.author.name}
          />
        </div>
        <div className={styles.desc}>
          <h2>{post.title}</h2>
          <p>{post.description}</p>
          <p className={styles.date}>
            {new Date(post._createdAt).toLocaleDateString("en-US", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </p>
        </div>
      </div>
    </ClientSideRoute>
  );
};

export default Post;
