import styles from "./Main.module.scss";
import Image from "next/image";
import image from "../../assets/img2.jpg";
import Link from "next/link";
import urlFor, { UrlFor } from "../../lib/urlFor";

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
        <Link href={"/blogs"}>
          <button>More Posts</button>
        </Link>
      </div>
      <div className={styles.aboutme}>
        <h1>about me</h1>
        <Image src={image} alt="thats me" />
        <p>
          My name is Taleem Mankuer, the creator of the developer blog an
          aspiring developer and student specialing in frontend web development.
          I work with React and Next js and enjoy finding creative solutions to
          problems related to web development and spend my time experimenting
          with technologies and inhale a wide variety of potentially useful
          information through different platforms.
        </p>
        <Link href={`/aboutMe`}>
          <h4>Read More &rarr; </h4>
        </Link>
      </div>
    </div>
  );
};

export default Main;
