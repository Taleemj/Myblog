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
import Comments from "@/components/comments/Comments";
import ScrollBar from "@/components/ScrollBar";

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
    <div className={styles.main}>
      <ScrollBar styles={styles} />
      <div className={styles.ads1}>
        {/* <amp-ad
          width="100vw"
          height="320"
          type="adsense"
          data-ad-client="ca-pub-8299193659017860"
          data-ad-slot="5863084931"
          data-auto-format="rspv"
          data-full-width=""
        >
          <div overflow=""></div>
        </amp-ad> */}
        {/* <script
          async="async"
          data-cfasync="false"
          src="//pl19914491.highrevenuegate.com/db5a30a7a3e08b7d754cc80feee53da7/invoke.js"
        ></script>
        <div id="container-db5a30a7a3e08b7d754cc80feee53da7"></div>
        <script
          defer
          src="//servedby.studads.com/ads/ads.php?t=MTg5NTg7MTI3MDE7dmVydGljYWwuc2t5c2NyYXBlcg==&index=1"
        ></script> */}
      </div>
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
          <a
            href="https://www.highrevenuegate.com/pvruix6d7?key=b91887cc749eaeef938cbef22ffd7655"
            target="_blank"
            rel="noreferrer"
          >
            <div className={styles.imagebox}>
              <Image
                src={urlFor(post.mainImage).url()}
                className={styles.bgimg}
                width={1000}
                height={400}
                alt="image"
              />
            </div>
          </a>

          <article>
            <PortableText value={post.body} components={RichText} />
            {/* <amp-ad
              width="100vw"
              height="320"
              type="adsense"
              data-ad-client="ca-pub-8299193659017860"
              data-ad-slot="6865746235"
              data-auto-format="rspv"
              data-full-width=""
            >
              <div overflow=""></div>
            </amp-ad> */}
            <p>
              Click{" "}
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.highrevenuegate.com/pvruix6d7?key=b91887cc749eaeef938cbef22ffd7655"
              >
                Here
              </a>{" "}
              for a surpries?
            </p>
            <p>Found this article useful? leave a comment down below.</p>
            <script
              async="async"
              data-cfasync="false"
              src="//pl19914491.highrevenuegate.com/db5a30a7a3e08b7d754cc80feee53da7/invoke.js"
            ></script>
            <div id="container-db5a30a7a3e08b7d754cc80feee53da7"></div>
          </article>
        </div>
        <Comments postId={post._id} comments={comments} />
        {/* <amp-ad
          width="100vw"
          height="320"
          type="adsense"
          data-ad-client="ca-pub-8299193659017860"
          data-ad-slot="6865746235"
          data-auto-format="rspv"
          data-full-width=""
        >
          <div overflow=""></div>
        </amp-ad> */}
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
      <div className={styles.ads}>
        {/* <amp-ad
          width="100vw"
          height="320"
          type="adsense"
          data-ad-client="ca-pub-8299193659017860"
          data-ad-slot="5863084931"
          data-auto-format="rspv"
          data-full-width=""
        >
          <div overflow=""></div>
        </amp-ad> */}
        <script
          defer
          src="//servedby.studads.com/ads/ads.php?t=MTg5NTg7MTI3MDE7dmVydGljYWwuc2t5c2NyYXBlcg==&index=1"
        ></script>
        {/* <script
          async="async"
          data-cfasync="false"
          src="//pl19914491.highrevenuegate.com/db5a30a7a3e08b7d754cc80feee53da7/invoke.js"
        ></script>
        <div id="container-db5a30a7a3e08b7d754cc80feee53da7"></div> */}
      </div>
    </div>
  );
};

export default Post;
