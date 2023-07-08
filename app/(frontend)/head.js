const head = () => {
  return (
    <>
      {/* <Script
        async
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />
      <Script
        async
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
            page_path: window.location.pathname,
          });
        `,
        }}
      /> */}
      <title>The developer Blog</title>
      <meta
        name="description"
        content="the developer blog is a platform dedicated to sharing knowledge, experience,
         and insights on programming and technology-related topics. It aims to provide valuable
         information and resources to fellow developers, beginners, and enthusiasts alike.
         we covers a wide range of topics such as programming languages, web development,
         software engineering, algorithms, data structures, best practices, and industry news.
         It also features tutorials, code snippets, and practical examples that help readers understand
         complex concepts and apply them in real-world scenarios. The developer blog style is approachable, informative,
         and engaging, making it easy for readers to follow and learn. Whether you are a seasoned programmer
         or a beginner, it offers something for everyone who is interested in the world of programming 
         and technology"
      />
      <meta
        name="google-site-verification"
        content="O_grUoAkNqBhd8JaaX1YpzQO4ti2Njc6w_Oul2kjNRQ"
      />
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
