"use client";
// Re-export `NextStudioHead` as default if you're happy with the default behavior
export { NextStudioHead } from "next-sanity/studio/head";

// To customize it, use it as a children component:
import { NextStudioHead } from "next-sanity/studio/head";

export default function StudioLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <NextStudioHead favicons={false} />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
      </head>
      <body>{children}</body>
    </html>
  );
}
