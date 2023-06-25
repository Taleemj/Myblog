import styles from "./Featured.module.scss";
import Image from "next/image";
import UrlFor from "../../lib/urlFor";
import Link from "next/link";

const Featured = ({ post }) => {
  return (
    <div className={styles.container}>
      <Link href={`posts/${post.slug.current}`} className={styles.post}>
        <div className={styles.featuredFlag}>
          <h1>LATEST POST</h1>
        </div>
        <Image
          src={UrlFor(post.mainImage).url()}
          alt="image"
          width={1000}
          height={500}
        />
        <div className={styles.desc}>
          <p>
            {new Date(post._createdAt).toLocaleDateString("en-US", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </p>
          <h1>{post.title}</h1>
          <p>{post.description}</p>
        </div>
      </Link>
    </div>
  );
};

export default Featured;
