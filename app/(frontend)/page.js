import { groq } from "next-sanity";
import { client } from "../../lib/sanity.client";
import Hero from "../../components/Hero/Hero";
import Featured from "../../components/Featured/Featured";
import Newsletter from "../../components/Newsletter/Newsletter";
import Main from "../../components/main/Main";

export const metadata = {
  title: "The developer Blog",
  description:
    "the developer blog is a platform dedicated to sharing knowledge, experience, and insights on programming and technology-related topics. It aims to provide valuable information and resources to fellow developers, beginners, and enthusiasts alike. we covers a wide range of topics such as programming languages, web development, software engineering, algorithms, data structures, best practices, and industry news. It also features tutorials, code snippets, and practical examples that help readers understand complex concepts and apply them in real-world scenarios. The developer blog style is approachable, informative, and engaging, making it easy for readers to follow and learn. Whether you are a seasoned programmer or a beginner, it offers something for everyone who is interested in the world of programming and technology",
};

const query = groq`
*[_type =="post"]{
  ...,
  author->,
  categories[]->
} | order(_createdAt desc)
`;

export const revalidate = 60;

const Page = async () => {
  const posts = await client.fetch(query);
  return (
    <div className="container">
      <Hero />
      <Featured post={posts[0]} />
      <Newsletter />
      <script
        async="async"
        data-cfasync="false"
        src="//pl19914491.highrevenuegate.com/db5a30a7a3e08b7d754cc80feee53da7/invoke.js"
      ></script>
      <div id="container-db5a30a7a3e08b7d754cc80feee53da7"></div>
      <Main posts={posts} />
      <script
        async="async"
        data-cfasync="false"
        src="//pl19914491.highrevenuegate.com/db5a30a7a3e08b7d754cc80feee53da7/invoke.js"
      ></script>
      <div id="container-db5a30a7a3e08b7d754cc80feee53da7"></div>
    </div>
  );
};

export default Page;
