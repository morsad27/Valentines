"use client";

import { useRef, useState } from "react";
import bgsky from "../public/images/bgsky.jpg"; // default

export default function Home() {
  const [isDating, setIsDating] = useState(false);
  const noButtonRef = useRef<HTMLButtonElement>(null);

  const handleYesClick = () => {
    setIsDating(true);
  };

  const handleNoHover = () => {
    if (noButtonRef.current) {
      // Get the button's parent dimensions
      const parentElement = noButtonRef.current.parentElement;
      if (parentElement) {
        const parentWidth = parentElement.clientWidth;
        const parentHeight = parentElement.clientHeight;

        // Generate random new positions within the parent element
        const newTop = Math.random() * (parentHeight + 500); // 50 is the button's approximate height
        const newLeft = Math.random() * (parentWidth + 1000);
        const newnTop = Math.random() * (parentHeight + 650); // 50 is the button's approximate height
        const newnLeft = Math.random() * (parentWidth + 1100);
        const newmLeft = Math.random() * (parentWidth + 800);
        const newoLeft = Math.random() * (parentWidth + 600);

        // Move the button to a new random position
        noButtonRef.current.style.position = "absolute";
        noButtonRef.current.style.top = `${newTop}px`;
        noButtonRef.current.style.left = `${newLeft}px`;
        noButtonRef.current.style.top = `${newnTop}px`;
        noButtonRef.current.style.left = `${newnLeft}px`;
        noButtonRef.current.style.left = `${newmLeft}px`;
        noButtonRef.current.style.left = `${newoLeft}px`;
      }
    }
  };
  

  return (
    <div
      style={{
        backgroundImage: `url(${bgsky.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
      }}
      className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]"
    >
      <div className="container flex flex-col items-center gap-6">
        {/* Change the image based on state */}
        <img
          src={isDating ? "/images/cinnayaygif.gif" : "/images/cinnagif.gif"}
          alt={isDating ? "Romantic GIF" : "Cinna GIF"}
          className="rounded-lg w-96 h-96 object-cover"
        />

        <div className="text">
          {/* Change the text based on state */}
          <p>{isDating ? "Yeyyy Knew it you would say that!" : "will you be my valentine?"}</p>
        </div>

        <div className="button flex gap-4">
          {/* Yes Button */}
          <button onClick={handleYesClick} className="Yes">
            Yes
          </button>

         {/* No Button: Avoids cursor on hover */}
         <button
            ref={noButtonRef}
            className="No"
            onMouseEnter={handleNoHover}
          >
            No
          </button>
        </div>
      </div>


      {/* Footer Section */}
      <footer className="absolute bottom-4 text-black text-sm">
        &copy; {new Date().getFullYear()} Morsadpogi | for my girl Shiela ♡
      </footer>
    </div>
  );
}
