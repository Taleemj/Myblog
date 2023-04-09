"use client";
import { usePreview } from "../../lib/sanity.preview";
import BlogList from "../BlogList/BlogList";

const PreviewBlogList = ({ query }) => {
  const posts = usePreview(null, query);
  return <BlogList posts={posts} />;
};

export default PreviewBlogList;
