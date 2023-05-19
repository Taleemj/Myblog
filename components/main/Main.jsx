import styles from "./Main.module.scss";
import Image from "next/image";
import image from "../../assets/img2.jpg";
import Link from "next/link";
import urlFor, { UrlFor } from "../../lib/urlFor";

const Main = ({ posts }) => {
  return (
    <div className={styles.container}>
      <div className={styles.blogs}>
        <h1>The developer blog</h1>
        {posts.map((post, i) => {
          if ((i < 6) & (i !== 0)) {
            return (
              <div key={i + post._id} className={styles.blog}>
                <Image
                  src={urlFor(post.mainImage).url()}
                  width={200}
                  height={280}
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
                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Corrupti, consequatur labore molestias explicabo quasi
                      nostrum?
                    </p>
                  </div>
                </Link>
              </div>
            );
          }
        })}
        <Link href={""}>
          <button>More Posts</button>
        </Link>
      </div>
      <div className={styles.aboutme}>
        <h1>about me</h1>
        <Image src={image} alt="thats me" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae,
          fugit quos! Incidunt aut numquam nobis vero in asperiores quis
          deleniti enim quas necessitatibus quos doloribus, ad ipsa fuga
          cupiditate, quae, reprehenderit eveniet explicabo. Facere a fugiat.
        </p>
        <Link href={``}>
          <h4>Read More &rarr; </h4>
        </Link>
      </div>
    </div>
  );
};

export default Main;
