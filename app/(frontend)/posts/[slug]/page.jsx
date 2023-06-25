import Link from "next/link";
import Image from "next/image";
import { groq } from "next-sanity";
import { client } from "../../../../lib/sanity.client";
import styles from "./Postpage.module.scss";
import { ClipboardIcon, ArrowLongRightIcon } from "@heroicons/react/24/solid";
import urlFor from "../../../../lib/urlFor";
import { PortableText } from "@portabletext/react";
import { RichText } from "../../../../components/Richtext/RichText";
import RelatedPosts from "../../../../components/RelatedPosts/RelatedPosts";
import Head from "next/head";
import Comments from "@/components/comments/Comments";

export const revalidate = 30;

export async function generateStaticParams() {
  const query = groq`
        *[_type == "post"]
    {
        slug
    }
    `;
  const slugs = await client.fetch(query);

  const slugRoutes = slugs.map((slug) => slug.slug.current);

  return slugRoutes.map((slug) => ({
    slug,
  }));
}

const Post = async ({ params: { slug } }) => {
  const query = groq`
  *[_type == "post" && slug.current == $slug][0]
  {
      ...,
      author->,
      categories[]->
  }
  `;
  const post = await client.fetch(query, { slug });

  const query2 = groq`
  *[_type == "post"]{
    ...,
    author->,
    categories[]->
  } | order(_createdAt desc)
  `;
  const posts = await client.fetch(query2);
  const latestPosts = posts.filter((post) => post.slug.current !== slug);

  const query3 = groq`
  *[_type == "comment" && approved == true]
  `;
  const comments = await client.fetch(query3);
  return (
    <>
      <Head>
        <title>{post.title}</title>
        <meta name="description" content={`${post.description}`} />
        <meta
          name="google-site-verification"
          content="O_grUoAkNqBhd8JaaX1YpzQO4ti2Njc6w_Oul2kjNRQ"
        />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8299193659017860"
          crossOrigin="anonymous"
        ></script>
      </Head>
      <main className={styles.container}>
        <div className={styles.blog}>
          <p className={styles.date}>
            {new Date(post._createdAt).toLocaleDateString("en-US", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </p>
          <h1>{post.title}</h1>
          <div className={styles.imagebox}>
            <Image
              src={urlFor(post.mainImage).url()}
              className={styles.bgimg}
              width={1000}
              height={400}
              alt="image"
            />
          </div>

          <article>
            <PortableText value={post.body} components={RichText} />
          </article>
        </div>
        <Comments postId={post._id} comments={comments} />
        <div className={styles.relatedposts}>
          <h1>Latest Posts</h1>
          <div className={styles.postscontainer}>
            {latestPosts.map((post, i) => {
              if (i < 3) {
                return <RelatedPosts key={post._id} post={post} />;
              }
            })}
          </div>
        </div>
      </main>
    </>
  );
};

export default Post;