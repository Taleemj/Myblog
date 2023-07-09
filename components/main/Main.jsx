import styles from "./Main.module.scss";
import Image from "next/image";
import Link from "next/link";
import urlFor from "../../lib/urlFor";
import { PortableText } from "@portabletext/react";
import { RichText } from "../Richtext/RichText";

const Main = ({ posts }) => {
  return (
    <div className={styles.container}>
      <div className={styles.blogs}>
        <strong>
          <h1>The developer blog</h1>
        </strong>
        {posts.map((post, i) => {
          if ((i < 6) & (i !== 0)) {
            return (
              <div key={i + post._id} className={styles.blog}>
                <Image
                  src={urlFor(post.mainImage).url()}
                  width={1000}
                  height={400}
                  alt="thats me"
                />
                <Link href={`/post/${post.slug.current}`}>
                  <div className={styles.text}>
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
          }
        })}
        <Link href={"/post"}>
          <button>More Posts</button>
        </Link>
      </div>
      <div className={styles.aboutme}>
        <h1>about me</h1>
        <Image
          src={urlFor(posts[posts.length - 1].author.image).url()}
          width={1000}
          height={500}
          alt="me"
        />
        <PortableText
          value={posts[posts.length - 1].author.bio[0]}
          components={RichText}
        />
        <Link href={`/aboutMe`}>
          <h4>Read More &rarr; </h4>
        </Link>
      </div>
    </div>
  );
};

export default Main;
