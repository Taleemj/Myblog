import { previewData } from "next/headers";
import { groq } from "next-sanity";
import Header from "../components/header/Header";
import { client } from "../lib/sanity.client";
import PreviewSuspense from "../components/PreviewSuspense";
import PreviewBlogList from "../components/PreviewBlogList/PreviewBlogList";
import BlogList from "../components/BlogList/BlogList";
import Hero from "../components/Hero/Hero";

const query = groq`
*[_type =="post"]{
  ...,
  author->,
  categories[]->
} | order(_createdAt desc)
`;

export const revalidate = 30;

const page = async () => {
  if (previewData()) {
    return (
      <PreviewSuspense>
        <div className="container">
          <Header />
          <div>In preview mode</div>
          <div>
            <PreviewBlogList query={query} />
          </div>
        </div>
      </PreviewSuspense>
    );
  }

  const posts = await client.fetch(query);
  return (
    <div className="container">
      <Hero />
    </div>
  );
};

export default page;
