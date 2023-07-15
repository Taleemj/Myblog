import "../../styles/globals.scss";
import "../../assets/prism.css";
import Footer from "../../components/Footer/Footer";
import { Analytics } from "@vercel/analytics/react";
import Header from "../../components/header/Header";
import Contact from "../../components/contact/Contact";
import Script from "next/script";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
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
      </head>
      <body>
        <Script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
        />
        <Script async id="google-analytics">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');
        `}
        </Script>
        <script
          defer
          type="text/javascript"
          src="//pl19915133.highrevenuegate.com/e9/ea/7a/e9ea7a47ee32f5b4f3a610cdcab223e8.js"
        ></script>
        <Analytics />
        <Header />
        {children}
        <Contact />
        <Footer />
        <Script src="../../assets/prism.js" />
      </body>
    </html>
  );
}
