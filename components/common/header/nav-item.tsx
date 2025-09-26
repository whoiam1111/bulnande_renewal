"use client";

import { usePathname } from "next/navigation";

export default function NavItem({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  const pathname = usePathname();
  // const isMainPage = pathname === "/";

  return (
    <a
      onClick={onClick}
      className={`cursor-pointer text-base sm:text-lg text-white hover:text-red-500 transition-colors duration-300`}
    >
      {active ? (
        <span className="font-semibold underline text-red-500 transition-all duration-300">
          {label}
        </span>
      ) : (
        <span>{label}</span>
      )}
    </a>
  );
}
