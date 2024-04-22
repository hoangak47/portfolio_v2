"use client";

import Home from "@/components/home/home";
import About from "@/components/home/about";
import Project from "@/components/home/project";
import Contact from "@/components/home/contact";

export default function HomePage() {
  return (
    <div>
      <Home />
      <About />
      <Project />
      <Contact />
    </div>
  );
}
