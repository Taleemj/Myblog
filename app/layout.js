// export const metadata = {
//   title: "The Developer Blog",
//   description: "get the latest in programming and web development",
//   googlesiteverification: "O_grUoAkNqBhd8JaaX1YpzQO4ti2Njc6w_Oul2kjNRQ",
// };
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
