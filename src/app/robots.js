
export default function robots() {
  const baseURL = "http://vitalcarega.com";
  return {
    rules: {
      userAgent: "*",
      allow: ["/", "/*"],
    },
    sitemap: `${baseURL}/sitemap.xml`,
  };
}