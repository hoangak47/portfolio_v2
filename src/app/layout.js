"use client";

import "./globals.css";
import Nav from "@/components/nav/page";
import "animate.css";
import { useEffect, useRef } from "react";
import Footer from "@/components/footer/page";

// function createStar() {
//   const canvas_ = document.querySelectorAll(".canvas");

//   if (!canvas_) {
//     return;
//   }

//   canvas_.forEach((canvas) => {
//     const ctx = canvas.getContext("2d");

//     canvas.style.position = "fixed";
//     canvas.style.top = "0";
//     canvas.style.left = "0";
//     canvas.style.width = "100%";
//     canvas.style.height = "100%";
//     canvas.style.zIndex = "-1";
//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;

//     function drawStar(ctx, x, y, radius, color) {
//       ctx.save();
//       ctx.fillStyle = color;
//       ctx.beginPath();
//       ctx.translate(x, y);
//       ctx.moveTo(0, 0 - radius);
//       for (let i = 0; i < 5; i++) {
//         ctx.rotate(Math.PI / 5);
//         ctx.lineTo(0, 0 - radius * 0.5);
//         ctx.rotate(Math.PI / 5);
//         ctx.lineTo(0, 0 - radius);
//       }
//       ctx.fill();
//       ctx.restore();
//     }

//     function drawSky() {
//       ctx.fillStyle = "#000";
//       ctx.fillRect(0, 0, canvas.width, canvas.height);
//       for (let i = 0; i < 150; i++) {
//         const x = Math.random() * canvas.width;
//         const y = Math.random() * canvas.height;
//         const radius = Math.random() * 3;

//         // const r = Math.floor(Math.random() * 255);
//         // const g = Math.floor(Math.random() * 255);
//         // const b = Math.floor(Math.random() * 255);
//         // const color = `rgb(${r},${g},${b})`;

//         const color = "#fff";
//         drawStar(ctx, x, y, radius, color);
//       }
//     }

//     drawSky();
//   });
// }

export function AnimatedOnScroll({
  children,
  animation,
  style,
  className,
  threshold,
  fast,
}) {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("invisible");
            entry.target.classList.add(
              "animate__animated",
              `${animation}`,
              fast && `${fast}`
            );
          }
        });
      },
      {
        threshold: threshold || 0.8,
      }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [animation, threshold]);

  return (
    <div ref={ref} className={`${className} invisible`} style={style}>
      {children}
    </div>
  );
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
