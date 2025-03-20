"use client";
import Script from "next/script";
import { useEffect } from "react";

const GoogleReview = () => {
  useEffect(() => {
    const fixOverflow = () => {
      const elfsightContainer = document.querySelector(
        ".elfsight-app-db5f80c5-b7a2-4ea3-92d4-99f49fd06f38"
      );
      if (elfsightContainer) {
        elfsightContainer.style.width = "100%";
        elfsightContainer.style.clipPath = "inset(30px 0 0 0)";
      }
    };

    setTimeout(fixOverflow, 2000);
  }, []);

  return (
    <div className="relative">
      <div className="h-[530px] p-4 w-full lg:h-[450px] max-w-full overflow-hidden">
        <Script
          src="https://static.elfsight.com/platform/platform.js"
          strategy="lazyOnload"
        />
        <div
          className="elfsight-app-db5f80c5-b7a2-4ea3-92d4-99f49fd06f38 object-cover"
          data-elfsight-app-lazy
        ></div>
      </div>
    </div>
  );
};

export default GoogleReview;
