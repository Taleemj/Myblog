import { groq } from "next-sanity";
import { client } from "../../lib/sanity.client";
import Hero from "../../components/Hero/Hero";
import Featured from "../../components/Featured/Featured";
import Newsletter from "../../components/Newsletter/Newsletter";
import Main from "../../components/main/Main";
import Script from "next/script";

const query = groq`
*[_type =="post"]{
  ...,
  author->,
  categories[]->
} | order(_createdAt desc)
`;

export const revalidate = 30;

const Page = async () => {
  const posts = await client.fetch(query);
  return (
    <div className="container">
      <Hero />
      <Featured post={posts[0]} />
      <Newsletter />
      <script
        defer
        src="//servedby.studads.com/ads/ads.php?t=MTg5NTg7MTI3MDI7aG9yaXpvbnRhbC5iYW5uZXI=&index=1"
      ></script>
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
