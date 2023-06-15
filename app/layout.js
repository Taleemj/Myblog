import "../styles/globals.scss";
import Footer from "../components/Footer/Footer";
import { Analytics } from "@vercel/analytics/react";
import Header from "../components/header/Header";
import Contact from "../components/contact/Contact";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Analytics />
        <Header />
        {children}
        <Contact />
        <Footer />
      </body>
    </html>
  );
}
