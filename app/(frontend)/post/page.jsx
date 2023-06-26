import styles from "./Blogs.module.scss";
import { groq } from "next-sanity";
import { client } from "../../../lib/sanity.client";
import BlogList from "../../../components/BlogList/BlogList";

const query = groq`
*[_type =="post"]{
  ...,
  author->,
  categories[]->
} | order(_createdAt desc)`;
export const revalidate = 30;
const page = async () => {
  const posts = await client.fetch(query);

  return (
    <div className={styles.container}>
      <p className={styles.heading}>All posts</p>
      <div className={styles.blogs}>
        <BlogList posts={posts} />
      </div>
    </div>
  );
};

export default page;
