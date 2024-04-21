import { AnimatedOnScroll } from "@/app/layout";
import Image from "next/image";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import hello from "@/access/img/hello2.png";

const typing = [
  "Web Developer",
  2000,
  "React Developer",
  2000,
  "Backend Developer",
  2000,
  "Software Engineer",
  2000,
  "MERN Stack Developer",
  2000,
];

function Home() {
  return (
    <div className="md:min-h-screen h-full pt-20 relative flex " id="home">
      <div className="background absolute-full"></div>
      <div className="universe absolute-full"></div>

      <div className="flex md:flex-row flex-col gap-4 items-center">
        <div className="flex flex-col justify-center items-center flex-1">
          <AnimatedOnScroll animation="animate__lightSpeedInLeft">
            <h1 className="text-4xl font-bold text-white text-center font-serif">
              Hi There! <span className="animate-wave">👋🏻</span>
            </h1>
          </AnimatedOnScroll>
          <AnimatedOnScroll
            animation="animate__lightSpeedInLeft"
            style={{ animationDelay: "0.3s" }}
          >
            <h1 className="text-4xl font-bold text-white mt-4 text-center font-serif">
              I&apos;m{" "}
              <span className="text-[var(--primary-color)] text-center">
                Nguyen Van Hoang
              </span>
            </h1>
          </AnimatedOnScroll>
          <TypeAnimation
            sequence={typing}
            wrapper="span"
            speed={300}
            deletionSpeed={200}
            className="text-[var(--primary-color)] md:text-4xl text-3xl mt-16 none-scroll font-serif"
            repeat={Infinity}
          />
        </div>
        <AnimatedOnScroll
          animation="animate__lightSpeedInRight"
          className={"flex-1"}
        >
          <div className="flex justify-center">
            <Image src={hello} alt="hello" className="h-2/3 w-2/3" />
          </div>
        </AnimatedOnScroll>
      </div>
    </div>
  );
}

export default Home;
