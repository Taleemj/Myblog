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
export const revalidate = 60;
export const metadata = {
  title: "The developer Blog",
  description:
    "the developer blog is a platform dedicated to sharing knowledge, experience, and insights on programming and technology-related topics. It aims to provide valuable information and resources to fellow developers, beginners, and enthusiasts alike. we covers a wide range of topics such as programming languages, web development, software engineering, algorithms, data structures, best practices, and industry news. It also features tutorials, code snippets, and practical examples that help readers understand complex concepts and apply them in real-world scenarios. The developer blog style is approachable, informative, and engaging, making it easy for readers to follow and learn. Whether you are a seasoned programmer or a beginner, it offers something for everyone who is interested in the world of programming and technology",
};
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
