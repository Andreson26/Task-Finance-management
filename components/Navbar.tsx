"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll position for shadow
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [menuOpen]);

  return (
    <header

      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out ${
        scrolled
          ? "bg-background shadow-[0_2px_8px_rgba(0,0,0,0.08)] dark:shadow-[0_2px_8px_rgba(255,255,255,0.05)]"
          : "bg-background"
      }`}
    >
      <nav
        className={`mx-auto flex justify-between items-center z-100 px-6 md:px-12 transition-all duration-500 ${
          scrolled ? "py-4" : "py-6 md:py-8"
        }`}
      >
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="h-9 w-9 flex items-center justify-center btn font-bold text-white shadow-md">
            A
          </div>
          <span className="text-lg font-semibold text-foreground tracking-tight">
            Task Productivity
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          {["Dashboard", "Tasks", "Finance", "Reports", "Pricing"].map(
            (item) => (
              <Link key={item} href="#" className="nav-link">
                {item}
              </Link>
            )
          )}

          {/* Buttons */}
          <button type="button" className="btn">
            Sign Up
          </button>

          <button type="button" className="btn btn-outline">
            Sign In
          </button>

          {/* Theme Toggle */}
          <ThemeToggle />
        </div>

        {/* Mobile Right Side: Theme + Menu */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <button
            type="button"
            className="p-2 rounded-md hover:bg-card transition-all duration-300 ease-in-out"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <X size={26} className="text-foreground" />
            ) : (
              <Menu size={26} className="text-foreground" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
  <div className="fixed top-[74px] md:top-[88px] left-0 right-0 bottom-0 bg-background flex flex-col items-center justify-center space-y-8 md:hidden z-998 transition-all duration-500 ease-in-out">
          {["Dashboard", "Tasks", "Finance", "Reports", "Pricing"].map(
            (item) => (
              <Link
                key={item}
                href="#"
                className="text-2xl font-medium text-foreground hover:text-accent transition-all duration-300 ease-in-out"
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </Link>
            )
          )}

          <div className="flex flex-col items-center gap-4 mt-8">
            <button type="button" className="btn w-40">
              Sign Up
            </button>
            <button type="button" className="btn btn-outline w-40">
              Sign In
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

