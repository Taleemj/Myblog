import { groq } from "next-sanity";
import { client } from "../../../../lib/sanity.client";

const head = async ({ params: { slug } }) => {
  const query = groq`
  *[_type == "post" && slug.current == $slug][0]
  {
      ...,
      author->,
      categories[]->
  }
  `;
  const post = await client.fetch(query, { slug });

  return (
    <>
      <title>{post.title}</title>
      <meta name="description" content={`${post.description}`} />
      <meta
        name="google-site-verification"
        content="O_grUoAkNqBhd8JaaX1YpzQO4ti2Njc6w_Oul2kjNRQ"
      />
      <meta name="keyword" content={`${post.title}`} />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon.png" />
      <script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8299193659017860"
        crossOrigin="anonymous"
      ></script>
    </>
  );
};

export default head;
