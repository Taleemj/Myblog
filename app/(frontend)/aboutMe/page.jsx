import styles from "./Aboutme.module.scss";
import Image from "next/image";
import Link from "next/link";
import urlFor from "@/lib/urlFor";
import { groq } from "next-sanity";
import { client } from "../../../lib/sanity.client";
import { PortableText } from "@portabletext/react";
import { RichText } from "@/components/Richtext/RichText";

export const revalidate = 60;

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
