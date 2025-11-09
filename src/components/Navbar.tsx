"use client";

import Link from "next/link";
import Image from "next/image"; // ✅ for optimized images
import { usePathname } from "next/navigation";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Education", href: "#education" },
  { name: "Experience", href: "#experience" },
  { name: "Work", href: "#work" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="w-full fixed top-0 right-0 bg-white/80 backdrop-blur-md shadow-sm z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* ---------- Left: Logo ---------- */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.png" // ✅ place your logo file inside /public folder (e.g., public/logo.png)
            alt="Don Roy J Logo"
            width={45}
            height={45}
            className="rounded-sm hover:scale-105 transition-transform duration-300"
          />
          <span className="font-bold text-lg text-gray-800">Don Roy J</span>
        </Link>

        {/* ---------- Right: Navigation Links ---------- */}
        <ul className="flex items-center gap-10">
          {navItems.map((item) => (
            <li key={item.name} className="relative group">
              <Link
                href={item.href}
                className={`font-semibold ${
                  pathname === item.href
                    ? "text-blue-600"
                    : "text-gray-800 hover:text-black"
                } transition-colors duration-200`}
              >
                {item.name}
              </Link>

              {/* Underline animation */}
              <span className="absolute left-0 -bottom-4 h-[2.5px] w-0 bg-blue-600 transition-all duration-300 ease-out group-hover:w-full origin-left"></span>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
