"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Home() {
  const navLink = [{ name: "Product", href: "/product" }];
  const pathname = usePathname();
  return (
    <>
      <h2>Home page</h2>
      {navLink.map((link) => {
        const isActive = pathname.startsWith(link.href);
        return (
          <Link
            href={link.href}
            replace
            className={isActive ? "text-blue-200" : "text-red-400"}
          >
            {link.name}
          </Link>
        );
      })}
    </>
  );
}
