import Link from "next/link";
import Image from "next/image";
import { groq } from "next-sanity";
import { client } from "@/lib/sanity.client";
import styles from "./Postpage.module.scss";
import { ClipboardIcon, ArrowLongRightIcon } from "@heroicons/react/24/solid";
import urlFor from "@/lib/urlFor";
import { PortableText } from "@portabletext/react";
import { RichText } from "@/components/Richtext/RichText";
import RelatedPosts from "@/components/RelatedPosts/RelatedPosts";

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
  const postcategory = post.categories[0].title;

  const query2 = groq`
  *[_type == "post"]{
    ...,
    author->,
    categories[]->
  }
  `;
  const relatedposts = await client.fetch(query2, { post, slug });
  const relatedposts2 = relatedposts.filter(
    (item) =>
      item.categories[0].title == post.categories[0].title &&
      item.slug.current != slug
  );
  return (
    <>
      <main className={styles.container}>
        <nav className={styles.nav}>
          <div className={styles.navcontainer}>
            <Link href="/" className={styles.logocontainer}>
              <h1>TM BLOG</h1>
            </Link>
            <div className={styles.contact}>
              <Link href="https://taleem-mankuer.web.app" target="_blank">
                <h4>
                  Get In Touch <ArrowLongRightIcon />
                </h4>
              </Link>
            </div>
          </div>
        </nav>
        <div className={styles.header}>
          <div className={styles.heroimg}>
            <Image
              src={urlFor(post.mainImage).url()}
              fill
              className={styles.bgimg}
              alt="image"
            />
          </div>
          <div className={styles.herotext}>
            <h1>{post.title}</h1>
            <div className={styles.author}>
              <div className={styles.img}>
                <Image src={urlFor(post.author.image).url()} fill alt="image" />
              </div>
              <div className={styles.bio}>
                <h4>{post.author.name}</h4>
                <PortableText value={post.author.bio} />
              </div>
            </div>
            <p className={styles.date}>
              {new Date(post._createdAt).toLocaleDateString("en-US", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </p>
          </div>
        </div>
        <div className={styles.routes}>
          <Link href="/">HOME</Link>
          <p>/</p>
          <p>{post.slug.current}</p>
        </div>
        <article>
          <PortableText value={post.body} components={RichText} />
        </article>
        <div className={styles.share}>
          <hr />
          <p>
            <span className={styles.sharecontainer}>
              <span>
                Useful article? Please share it with your friends hold / right
                click
              </span>{" "}
              <span className={styles.copy}>
                {" "}
                <Link href={`/post/${slug}`}>Here</Link>
                <ClipboardIcon />{" "}
              </span>
              <span>to copy link</span>
            </span>
          </p>
          <hr style={{ width: "95%" }} />
        </div>
        <div className={styles.relatedposts}>
          <h1>Related Posts</h1>
          <div className={styles.postscontainer}>
            {relatedposts2.map((post) => (
              <RelatedPosts key={post._id} post={post} />
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default Post;
