import { AnimatedOnScroll } from "@/app/layout";
import Image from "next/image";
import React from "react";
import project from "@/access/img/projects.png";

const projects = [
  {
    title: "HCODE ZING",
    img: "zing.PNG",
    date: "07/2022 - 09/2022",
    description: "This is a clone of the Zing MP3 website.",
    frontend: [
      "HTML/CSS/SCSS/JS",
      "Reactjs",
      "Reactjs hook",
      "React context",
      "Reactrouter-dom",
      "Chart.js",
      "Axios",
    ],
    backend: ["Nodejs", "Express"],
    functions: [
      "Change theme",
      "Skeleton",
      "Song control",
      "Volume control",
      "Search music",
      "Playlists",
      "Control the time to play music",
    ],
    demo: "https://hcode-zing.vercel.app/",
    code: "https://github.com/hoangak47/HCode.Zing",
  },
  {
    title: "HCODE SHOP",
    img: "HCode_shop.png",
    date: "05/2023 - 07/2023",
    description: "This is a clone of the Shopee website.",
    frontend: [
      "HTML/SCSS/JS",
      "Reactjs",
      "Axios",
      "Redux",
      "Redux Toolkit",
      "Antd",
    ],
    backend: ["Nodejs", "Express", "MongoDB"],
    functions: [
      "View Product",
      "Add to cart",
      "Payment",
      "Login",
      "Register",
      "View Order",
      "View User",
      "Update Password",
    ],
    demo: "https://hcode-shop.vercel.app/",
    code: "https://github.com/hoangak47/HCode.Shop",
  },
  {
    title: "HCODE ANIME",
    img: "CNAnimation.png",
    date: "08/2023 - 09/2023",
    description: "This is a website that displays anime.",
    frontend: [
      "HTML/SCSS/JS",
      "Tailwind",
      "Reactjs",
      "Axios",
      "Redux",
      "Redux Toolkit",
    ],
    backend: ["Nodejs", "Express"],
    functions: [
      "View Anime",
      "View Episode",
      "View Anime By Category",
      "View Anime By Search",
      "View Anime by day",
      "View detail Anime",
      "Top view",
    ],
    demo: "https://hcode-anime.vercel.app/",
    code: "https://github.com/hoangak47/HCode.Anime",
  },
  {
    title: "THE CAO COMPANY WEBSITE",
    img: "thecao.png",
    date: "10/2023 - 12/2023",
    description: "This is the website of the company The Cao.",
    frontend: ["HTML/CSS/JS", "Bootstrap"],
    functions: ["Display detailed company information"],
    demo: "https://www.thecaovn.space/",
  },
  {
    title: "HCODE CHAT",
    img: "chat.png",
    date: "01/2024 - 03/2024",
    description: "This is a chat application.",
    frontend: [
      "HTML/SCSS/JS",
      "Tailwind",
      "Reactjs",
      "Axios",
      "Redux",
      "Redux Toolkit",
    ],
    backend: ["Nodejs", "Express", "Socket.io", "MongoDB"],
    functions: [
      "Login",
      "Register",
      "Chat",
      "View User",
      "Update Password",
      "View Message",
    ],
    demo: "https://hcode-chat.vercel.app/",
    code: "https://github.com/hoangak47/HCode_Chat",
  },
  {
    title: "HCODE PORTFOLIO",
    img: "portfolio.png",
    date: "4/2024",
    description: "This is my portfolio website.",
    frontend: ["HTML/CSS/JS", "Reactjs", "Nextjs", "Tailwind"],
    // backend: ["Nodejs", "Express"],
    functions: ["Display detailed personal information"],
    demo: "https://hcode-portfolio.vercel.app/",
    code: "https://github.com/hoangak47/HCode.Anime",
  },
];

function Project() {
  return (
    <div
      id="projects"
      className="pt-20 w-full m-auto min-h-screen flex flex-col px-3 md:px-10 universe re-gradient"
    >
      <h1 className="text-4xl font-bold text-white text-center">
        Things I&apos;ve Built
      </h1>
      <span className="text-white text-center mt-4">
        Here are a few projects I&apos;ve worked on recently.
      </span>

      <div className="mt-10 gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {React.Children.toArray(
          projects.map((project, index) => {
            return (
              <AnimatedOnScroll
                animation={"animate__fadeInUp"}
                className="relative card sm:h-[520px] h-[550px]"
                style={{
                  animationDelay: `${
                    index < 4 ? index * 0.2 : ((index % 4) + 1) * 0.2
                  }s`,
                }}
                threshold={0.3}
              >
                <div className="absolute w-full h-full z-10 rounded-lg front">
                  <Image
                    src={require(`@/access/img/${project.img}`)}
                    alt={project.title}
                    className="w-full aspect-video"
                  />

                  <h1 className="text-3xl font-bold text-center mt-2 text-[var(--primary-color)] font-mono">
                    {project.title}
                  </h1>

                  <h4 className="text-white text-center font-mono">
                    {project.date}
                  </h4>

                  <p className="text-white text-center mt-4">
                    {project.description}
                  </p>
                  <div className="flex justify-center mt-4"></div>
                </div>
                <div className="absolute w-full h-full z-10 rounded-lg back flex flex-col">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-center mt-2 text-[var(--primary-color)] font-mono">
                      Technologies
                    </h3>

                    <span className="text-white text-center mt-2 font-mono">
                      {project.frontend ? "Frontend: " : ""}
                    </span>

                    <ul className="text-white mt-2 flex flex-wrap">
                      {React.Children.toArray(
                        project.frontend?.map((item) => (
                          <li className="mr-2 mb-2 bg-[var(--primary-color)] rounded-full px-4">
                            {item}
                          </li>
                        ))
                      )}
                    </ul>

                    <span className="text-white text-center mt-2 font-mono">
                      {project.backend ? "Backend: " : ""}
                    </span>

                    <ul className="text-white mt-2 flex flex-wrap">
                      {React.Children.toArray(
                        project.backend?.map((item) => (
                          <li className="mr-2 mb-2 bg-[var(--primary-color)] rounded-full px-4">
                            {item}
                          </li>
                        ))
                      )}
                    </ul>

                    <h3 className="text-2xl font-bold text-center mt-2 text-[var(--primary-color)] font-mono">
                      Functions such as:
                    </h3>

                    <ul className="text-white mt-2 flex flex-wrap">
                      {React.Children.toArray(
                        project.functions?.map((item) => (
                          <li className="mr-2 mb-2 bg-[var(--primary-color)] rounded-full px-4">
                            {item}
                          </li>
                        ))
                      )}
                    </ul>
                  </div>

                  <div className="flex justify-around mt-2 border-t-2 border-[var(--primary-color)] pt-2">
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="hover:bg-[var(--primary-color)] btn px-4 rounded-full border-[var(--primary-color)] border-2"
                      >
                        View Demo
                      </a>
                    )}

                    {project.code && (
                      <a
                        href={project.code}
                        target="_blank"
                        rel="noreferrer"
                        className="hover:bg-[var(--primary-color)] btn px-4 rounded-full border-[var(--primary-color)] border-2"
                      >
                        View Code
                      </a>
                    )}
                  </div>
                </div>
              </AnimatedOnScroll>
            );
          })
        )}
      </div>
      <AnimatedOnScroll
        animation={"animate__backInLeft"}
        className="mt-10"
        threshold={0.3}
      >
        <h1 className="text-3xl font-bold text-center mt-2 text-white font-mono">
          More projects are coming soon ...
          <br />
          <br />
          You can see more projects at{" "}
          <a
            href="https://github.com/hoangak47"
            target="_blank"
            rel="noreferrer"
            className="text-[var(--primary-color)]"
          >
            Github
          </a>
        </h1>
      </AnimatedOnScroll>
    </div>
  );
}

export default Project;
