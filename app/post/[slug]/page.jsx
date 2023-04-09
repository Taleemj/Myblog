import Link from "next/link";
import Image from "next/image";
import { groq } from "next-sanity";
import { client } from "@/lib/sanity.client";
import styles from "./Postpage.module.scss";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import urlFor from "@/lib/urlFor";
import { PortableText } from "@portabletext/react";
import { RichText } from "@/components/Richtext/RichText";

// export const revalidate = 30;

// export async function generateStaticParams() {
//   const query = groq`
//         *[_type == "post"]
//     {
//         slug
//     }
//     `;
//   const slugs = await client.fetch(query);

//   const slugRoutes = slugs.map((slug) => slug.slug.current);

//   return slugRoutes.map((slug) => ({
//     slug,
//   }));
// }

const Post = async ({ params: { slug } }) => {
  const query = groq`
  *[_type == "post" && slug.current == $slug][0]
  {
      ...,
      author->,
  }
  `;
  const post = await client.fetch(query, { slug });

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Image
          src={urlFor(post.mainImage).url()}
          fill
          className={styles.bgimg}
          alt="image"
        />
        <div className={styles.topleft}>
          <div className={styles.date}>
            <Link href="/" className={styles.back}>
              <ArrowLeftIcon />
            </Link>
            <h4>{post.title}</h4>
            <p>
              {new Date(post._createdAt).toLocaleDateString("en-US", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </p>
          </div>
          <div className={styles.author}>
            <div className={styles.img}>
              <Image src={urlFor(post.author.image).url()} fill alt="image" />
            </div>
            <div className={styles.bio}>
              <p>{post.author.name}</p>
              <PortableText value={post.author.bio} />
            </div>
          </div>
        </div>
        <div className={styles.desc}>
          <p>{post.description}</p>
        </div>
      </div>
      <article>
        <PortableText value={post.body} components={RichText} />
      </article>
    </div>
  );
};

export default Post;
