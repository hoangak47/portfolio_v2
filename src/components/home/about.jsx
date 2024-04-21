import { AnimatedOnScroll } from "@/app/layout";
import Image from "next/image";
import React from "react";
import about from "@/access/img/about.png";
import skill from "@/access/img/skill.png";
import tool from "@/access/img/tool.png";

import {
  SvgHtml,
  SvgCss,
  SvgJs,
  SvgReact,
  SvgFirebase,
  SvgMongodb,
  SvgNodejs,
  SvgNextjs,
  SvgVSCode,
  SvgPostman,
  SvgVercel,
} from "@/access/svg";

const skills = [
  {
    name: "HTML",
    icon: <SvgHtml fill="#e34c26" height="50" width="50" />,
  },
  {
    name: "CSS",
    icon: <SvgCss fill="#264de4" height="50" width="50" />,
  },
  {
    name: "JavaScript",
    icon: <SvgJs fill="#f7df1e" height="50" width="50" />,
  },
  {
    name: "React",
    icon: <SvgReact fill="#61dafb" height="50" width="50" />,
  },
  {
    name: "Nodejs",
    icon: <SvgNodejs fill="#68a063" height="50" width="50" />,
  },
  {
    name: "Nextjs",
    icon: <SvgNextjs fill="#000000" height="50" width="50" />,
  },
  {
    name: "Firebase",
    icon: <SvgFirebase fill="#ffca28" height="50" width="50" />,
  },
  {
    name: "MongoDB",
    icon: <SvgMongodb fill="#47a248" height="50" width="50" />,
  },
];

const tools = [
  {
    name: "VSCode",
    icon: <SvgVSCode fill="#007acc" height="50" width="50" />,
  },
  {
    name: "Postman",
    icon: <SvgPostman fill="#ff6c37" height="50" width="50" />,
  },
  {
    name: "Vercel",
    icon: <SvgVercel fill="#000000" height="50" width="50" />,
  },
];

function About() {
  return (
    <div
      id="about"
      className="pt-20 gradient w-full m-auto min-h-screen flex flex-col px-3 md:px-10"
    >
      <h1 className="text-4xl font-bold text-white text-center">About Me</h1>

      <div className="flex md:flex-row flex-col-reverse items-center justify-center flex-1 mt-20">
        <AnimatedOnScroll
          animation={"animate__fadeInLeft"}
          threshold={0}
          className="flex justify-center flex-1 md:mt-0 mt-10"
        >
          <Image src={about} alt="about" className="h-2/3 w-2/3" />
        </AnimatedOnScroll>
        <div className="flex-1 flex flex-col items-center">
          <AnimatedOnScroll animation={"animate__fadeInDown"} threshold={0.1}>
            <h1 className="text-2xl font-bold text-white text-center mt-4 font-mono">
              LET ME{" "}
              <span className="text-[var(--primary-color)]">INTRODUCE</span>{" "}
              MYSELF
            </h1>
          </AnimatedOnScroll>
          <AnimatedOnScroll animation={"animate__fadeInUp"}>
            <p className="text-white mt-4 font-mono">
              Good day, everyone! I&apos;m
              <span className="text-[var(--primary-color)]">
                {" "}
                Nguyen Van Hoang
              </span>
              , I&apos;m {new Date().getFullYear() - 1999} years old and
              I&apos;m from
              <span className="text-[var(--primary-color)]">
                {" "}
                Binh Duong
              </span>{" "}
              and currently, I live in{" "}
              <span className="text-[var(--primary-color)]">
                Ho Chi Minh City
              </span>
              .
            </p>
          </AnimatedOnScroll>

          <AnimatedOnScroll
            animation={"animate__fadeInUp"}
            style={{ animationDelay: "0.3s" }}
          >
            <p className="text-white mt-4 font-mono">
              After graduating, I want to challenge myself in a more dynamic and
              creative working environment like your company. I want to be able
              to use my knowledge and skills to contribute to the company as
              well as have the opportunity to learn and accumulate more
              experience.
            </p>
          </AnimatedOnScroll>

          <AnimatedOnScroll
            animation={"animate__fadeInUp"}
            style={{ animationDelay: "0.6s" }}
          >
            <p className="text-white mt-4 font-mono">
              I have enough independent working skills. I always put my heart
              and soul into every single website that I develop. I guess
              that&apos;s all I have to share about myself. Thank you for
              reading!
            </p>
          </AnimatedOnScroll>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center mt-10">
        <div className="flex-2 flex flex-col items-center">
          <AnimatedOnScroll animation={"animate__fadeInDown"} threshold={0.1}>
            <h1 className="text-2xl font-bold text-white text-center mt-4 font-mono">
              Professional{" "}
              <span className="text-[var(--primary-color)]">Skillset</span>
            </h1>
          </AnimatedOnScroll>

          <div className="grid md:grid-flow-col-dense grid-cols-3 gap-4 mt-4">
            {skills.map((skill, index) => (
              <AnimatedOnScroll
                animation={"animate__fadeInUp"}
                style={{ animationDelay: `${0.2 + index * 0.2}s` }}
                key={index}
              >
                <div className="flex flex-col items-center">
                  {skill.icon}
                  <span className="text-white mt-2">{skill.name}</span>
                </div>
              </AnimatedOnScroll>
            ))}
          </div>
        </div>

        <AnimatedOnScroll
          animation={"animate__fadeInRight"}
          threshold={0}
          className="flex md:justify-start justify-center flex-1 mt-10"
        >
          <Image
            src={skill}
            alt="skill"
            className="md:h-2/3 md:w-2/3 h-1/2 w-1/2 transform rotate-y-180"
          />
        </AnimatedOnScroll>
      </div>

      <div className="flex md:flex-row justify-center items-center md:mt-0 my-10">
        <AnimatedOnScroll
          animation={"animate__fadeInRight"}
          threshold={0}
          className="flex justify-center flex-1"
        >
          <Image src={tool} alt="tool" className="h-2/3 w-2/3" />
        </AnimatedOnScroll>
        <div className="md:flex-1 flex-2 flex flex-col md:items-start items-center justify-center">
          <AnimatedOnScroll animation={"animate__fadeInDown"} threshold={0.1}>
            <h1 className="text-2xl font-bold text-white text-center mt-4 font-mono">
              <span className="text-[var(--primary-color)]">Tools</span> I Use
            </h1>
          </AnimatedOnScroll>

          <div className="grid grid-cols-3 gap-4 mt-4 i">
            {tools.map((tool, index) => (
              <AnimatedOnScroll
                animation={"animate__fadeInUp"}
                style={{ animationDelay: `${0.2 + index * 0.2}s` }}
                key={index}
              >
                <div className="flex flex-col items-center">
                  {tool.icon}
                  <span className="text-white mt-2">{tool.name}</span>
                </div>
              </AnimatedOnScroll>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
