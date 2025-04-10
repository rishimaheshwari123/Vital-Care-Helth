
export default function robots() {
  const baseURL = "https://palakchoudhary52.wixsite.com";
  return {
    rules: {
      userAgent: "*",
      allow: ["/", "/*"],
    },
    sitemap: `${baseURL}/sitemap.xml`,
  };
}