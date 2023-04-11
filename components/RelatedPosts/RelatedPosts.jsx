import Image from "next/image";
import urlFor from "@/lib/urlFor";
import styles from "./RelatedPosts.module.scss";
import Link from "next/link";

const RelatedPosts = ({ post }) => {
  return (
    <Link href={`post/${post.slug.current}`} className={styles.container}>
      <Image src={urlFor(post.mainImage).url()} fill alt={post.title} />
      <div className={styles.black}>
        <p>Read More</p>
      </div>
      <h1>{post.title}</h1>
    </Link>
  );
};

export default RelatedPosts;
