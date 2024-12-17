"use client";

import { useState, useRef } from "react";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-800 text-white z-50">
      <div className="container mx-auto flex justify-between items-center p-5">
        <h1 className="text-xl sm:text-2xl font-bold">Jason Newsom</h1>
        {/* Desktop Menu */}
        <div className="space-x-4 hidden md:flex">
          <Link href="#hero" className="hover:text-yellow-300">
            Home
          </Link>
          <Link href="#about" className="hover:text-yellow-300">
            About
          </Link>
          <Link href="/project-page" className="hover:text-yellow-300">
            Projects
          </Link>
          <Link href="#contact" className="hover:text-yellow-300">
            Contact
          </Link>
        </div>

        {/* Hamburger and Links Wrapper */}
        <div className="flex items-center ">
          {/* Mobile Hamburger */}
          <div>
            <button
              className="block md:hidden focus:outline-none "
              id="menu-toggle"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
            >
              <svg
                className="h-6 w-6 mx-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

          {/* Mobile Dropdown Menu */}
          {menuOpen && (
            <div
              ref={menuRef}
              id="mobile-menu"
              className={`md:hidden overflow-hidden transition-all duration-300 ${
                menuOpen ? "max-h-screen" : "max-h-0"
              }`}
            >
              <a href="#hero" className="block text-lg hover:text-yellow-500">
                Home
              </a>
              <a
                href="/projects"
                className="block text-lg hover:text-yellow-500"
              >
                Projects
              </a>
              <a
                href="#contact"
                className="block text-lg hover:text-yellow-500"
              >
                Contact
              </a>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
