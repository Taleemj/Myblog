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
      <body>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
        />
        <Script id="google-analytics">
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
