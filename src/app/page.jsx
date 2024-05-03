"use client";

import Home from "@/components/home/home";
import About from "@/components/home/about";
import Project from "@/components/home/project";
import Contact from "@/components/home/contact";
import Footer from "@/components/footer/page";
import Nav from "@/components/nav/page";

export default function HomePage() {
  return (
    <div>
      <Nav />
      <Home />
      <About />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}
