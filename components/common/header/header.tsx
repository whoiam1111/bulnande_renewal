"use client";

import Image from "next/image";
import NavItem from "./nav-item";
import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();

  return (
    <div className="w-full px-30 py-10 flex justify-between items-center fixed left-0 top-0 z-10">
      <div className="cursor-pointer" onClick={() => router.push("/")}>
        <Image
          src="/assets/logo_redwhite.png"
          alt=""
          width={180}
          height={100}
        />
      </div>
      <div className="flex gap-10">
        <NavItem
          label="About"
          active={false}
          onClick={() => router.push("/about")}
        />
        <NavItem
          label="Works"
          active={false}
          onClick={() => router.push("/works")}
        />
        <NavItem
          label="Contact"
          active={false}
          onClick={() => router.push("/contact")}
        />
      </div>
    </div>
  );
}
