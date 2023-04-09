export const metadata = {
  title: "The Developer Blog",
  description: "Generated by Next.js",
};
import "../styles/globals.css";
import Footer from "@/components/Footer/Footer";
import { Analytics } from "@vercel/analytics/react";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Analytics />
        {children}
        <Footer />
      </body>
    </html>
  );
}
