import React, { useEffect, useRef } from "react";
import { Link as Link_ } from "react-scroll";
import Link from "next/link";
import {
  SvgHome,
  SvgLogo,
  SvgMail,
  SvgProjects,
  SvgShareGithub,
  SvgStar,
  SvgUser,
} from "@/access/svg";

const navItems = [
  {
    title: "Home",
    to: "home",
    icon: <SvgHome />,
  },
  {
    title: "About",
    to: "about",
    icon: <SvgUser />,
  },
  {
    title: "Projects",
    to: "projects",
    icon: <SvgProjects />,
  },
  {
    title: "Contact",
    to: "contact",
    icon: <SvgMail />,
  },
];

export default function Nav() {
  const nav_ = useRef(null);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 20) {
        nav_.current.classList.add("backdrop-blur-3xl");
      } else {
        nav_.current.classList.remove("backdrop-blur-3xl");
      }
    });
  }, []);

  return (
    <nav
      className="px-3 md:px-10 flex justify-between items-center pb-5 pt-3 fixed top-0 left-0 right-0 z-10 text-xl"
      ref={nav_}
    >
      <Link_
        to="home"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        className="flex items-center select-none cursor-pointer"
      >
        <SvgLogo />
        <h1 className="ml-2 font-bold text-2xl ">HCode.dev</h1>
      </Link_>
      <div className="md:flex items-center hidden">
        <ul className="flex justify-center space-x-4">
          {navItems.map((item, index) => (
            <li key={index} className="px-4 py-2 relative">
              <Link_
                activeClass="active"
                to={item.to}
                spy={true}
                smooth={true}
                duration={200}
                className="flex items-center flex-nowrap justify-center nav-item cursor-pointer"
              >
                {item.icon}
                <span className="ml-2">{item.title}</span>
              </Link_>
            </li>
          ))}
        </ul>
        <Link
          href="https://github.com/hoangak47"
          target="_blank"
          className="px-4 py-2 relative hidden lg:flex items-center justify-center border-solid border-2
           border-[#613382] bg-[#462B65] rounded-full hover:bg-[#613382] hover:text-white 
           transition-colors duration-300 ease-in-out ml-5"
        >
          <SvgShareGithub />
          <SvgStar />
        </Link>
      </div>
    </nav>
  );
}
