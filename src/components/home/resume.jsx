"use client";

import { AnimatedOnScroll } from "@/app/layout";
import Image from "next/image";
import React from "react";

function Resume() {
  return (
    <div
      id="resume"
      className="pt-20 w-full m-auto min-h-screen flex flex-col px-3 md:px-10 universe gradient"
    >
      <h1 className="text-4xl font-bold text-white text-center">Resume</h1>
      <span className="text-white text-center mt-4">
        Here are a few projects I&apos;ve worked on recently.
      </span>

      {/* <embed
        src={`http://docs.google.com/gview?embedded=true&url=@/access/pdf/resume.pdf`}
        type="application/pdf"
        width="100%"
        height="600px"
      /> */}
    </div>
  );
}

export default Resume;
