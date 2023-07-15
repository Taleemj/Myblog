import styles from "./Aboutme.module.scss";
import Image from "next/image";
import Link from "next/link";
import urlFor from "@/lib/urlFor";
import { groq } from "next-sanity";
import { client } from "../../../lib/sanity.client";
import { PortableText } from "@portabletext/react";
import { RichText } from "@/components/Richtext/RichText";

export const revalidate = 60;

export const metadata = {
  title: "About Me",
  description:
    "the developer blog is a platform dedicated to sharing knowledge, experience, and insights on programming and technology-related topics. It aims to provide valuable information and resources to fellow developers, beginners, and enthusiasts alike. we covers a wide range of topics such as programming languages, web development, software engineering, algorithms, data structures, best practices, and industry news. It also features tutorials, code snippets, and practical examples that help readers understand complex concepts and apply them in real-world scenarios. The developer blog style is approachable, informative, and engaging, making it easy for readers to follow and learn. Whether you are a seasoned programmer or a beginner, it offers something for everyone who is interested in the world of programming and technology",
};

const page = async () => {
  const query = groq`
  *[_type == "author"][0]
  `;
  const author = await client.fetch(query);
  return (
    <div className={styles.container}>
      <div className={styles.aboutme}>
        <Image
          src={urlFor(author.image).url()}
          width={1000}
          height={500}
          alt="me"
        />
        <div className={styles.txt}>
          <h1>Hey! How are you doing?</h1>
          <PortableText value={author.bio} components={RichText} />
          <Link
            href={`https://taleem-mankuer.web.app/`}
            target="_blank"
            rel="noreferral"
          >
            <button>Portfolio</button>
          </Link>
          <p className={styles.bye}>Thanks for stopping by. &#128075;</p>
        </div>
      </div>
    </div>
  );
};

export default page;
