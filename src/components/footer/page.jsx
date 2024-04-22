import React from "react";
import Link from "next/link";
import { SvgFacebook, SvgGithub, SvgLinkedin } from "@/access/svg";

export default function Footer() {
  return (
    <footer
      className="w-full px-3 md:px-10 mx-auto text-center py-5 bg-[var(--primary-color-footer)]
     grid grid-cols-1 md:grid-cols-3"
    >
      <p className="text-lg text-white">
        Designed and Developed by HoangNguyen
      </p>
      <p className="text-lg text-white mx-10 my-4 md:my-0">
        Copyright &copy; 2024 - HCode.dev
      </p>
      <ul className="flex justify-center space-x-4">
        <li>
          <Link
            href="https://www.facebook.com/hoangak747/"
            className="text-white icon-facebook"
            target="_blank"
          >
            <SvgFacebook width="1.5em" height="1.5em" />
          </Link>
        </li>
        <li>
          <Link
            href="https://github.com/hoangak47"
            className="text-white icon-github"
            target="_blank"
          >
            <SvgGithub width="1.5em" height="1.5em" />
          </Link>
        </li>
        <li>
          <Link
            href="https://www.linkedin.com/in/ho%C3%A0ng-nguy%E1%BB%85n-035945294/"
            className="text-white icon-linkedin"
            target="_blank"
          >
            <SvgLinkedin width="1.5em" height="1.5em" />
          </Link>
        </li>
      </ul>
    </footer>
  );
}
