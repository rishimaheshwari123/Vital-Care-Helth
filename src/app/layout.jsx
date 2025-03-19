import Navbar from "@/components/comman/Navbar";
import "./globals.css";
import Footer from "@/components/comman/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <div>{children}</div>
        <br />
        <br />
        <Footer />
      </body>
    </html>
  );
}

export const generateMetadata = () => {
  return {
    title: "VitalCare Health",
    description: "VitalCare Health",
    keywords: "VitalCare Health",
    url: "https://palakchoudhary52.wixsite.com",
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
