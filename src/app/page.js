"use client";

import Home from "@/components/home/home";
import About from "@/components/home/about";
import Project from "@/components/home/project";
import Resume from "@/components/home/resume";

export default function HomePage() {
  return (
    <div>
      <Home />
      <About />
      <Project />
      <Resume />
    </div>
  );
}
