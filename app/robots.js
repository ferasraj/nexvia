export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: "https://nexvia.com.eg/sitemap.xml",
  };
}
