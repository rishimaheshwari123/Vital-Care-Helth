import Wrapper from "./wrapper";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Wrapper>{children}</Wrapper>
      </body>
    </html>
  );
}
export const generateMetadata = () => {
  return {
    title: "VitalCare Health",
    description: "VitalCare Health",
    keywords: "VitalCare Health",
    url: "http://vitalcarega.com",
    image: "/android-chrome-192x192.png",

    // Open Graph Tags
    openGraph: {
      type: "website",
      url: "VitalCare Health",
      title: "VitalCare Health",
      description: "VitalCare Health",
      image: "/android-chrome-192x192.png",
    },
  };
};
