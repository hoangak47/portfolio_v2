"use client";

import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-orange-300">
      <Image src={require(`@/access/img/page_not_found.png`)} alt="404" />
      <Link href={"/"}>
        <p className="text-lg font-bold text-[var(--primary-color)] cursor-pointer underline animate-pulse mt-4">
          Go back to Home
        </p>
      </Link>
    </div>
  );
}
