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
