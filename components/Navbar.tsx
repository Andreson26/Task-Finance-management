"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

const navItems: { name: string; href: string }[] = [
  { name: "Dashboard", href: "/dashboard" },
  { name: "Tasks", href: "/tasks" },
  { name: "Finance", href: "/finance" },
  { name: "Reports", href: "/reports" },
  { name: "Pricing", href: "/pricing" },
];

  return (
    <header
      className={`fixed inset-x-0 top-0 transition-all duration-300 py-2 z-50 ${
        scrolled
          ? "nav-bg shadow-[0_2px_8px_rgba(0,0,0,0.08)] dark:shadow-[0_2px_8px_rgba(255,255,255,0.05)]"
          : ""
      }`}
    >
      <nav className="max-w-7xl mx-auto h-20 md:h-24 px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center group" onClick={() => setMenuOpen(false)}>
          <Image
            src="/logo.png"
            alt="Task Productivity Logo"
            width={90}
            height={100}
            priority
            className="object-contain transition-transform duration-300 group-hover:scale-105"
          />
          <span className="ml-2 text-lg font-semibold tracking-tight">P&M</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link key={item.name} href={item.href} className="nav-link">
              {item.name}
            </Link>
          ))}
          <Link href="/auth" className="btn">
            Sign Up
          </Link>
          <Link href="/auth" className="btn-outline">
            Sign In
          </Link>
          <ThemeToggle />
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <button
            type="button"
            className="p-2 rounded-md hover:bg-card transition"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </nav>

      {/* Mobile Overlay Menu */}
 <div
  id="mobile-menu"
  className={`fixed inset-0 flex flex-col nav-transition ${
    menuOpen ? "translate-x-0" : "-translate-x-full"
  } md:hidden`}
  role="dialog"
  aria-modal="true"
>
        {/* Top bar inside mobile menu */}
        <div className="flex justify-between items-center px-6 py-4">
          <Link
            href="/"
            className="flex items-center group"
            onClick={() => setMenuOpen(false)}
          >
            <Image
              src="/logo.png"
              alt="Task Productivity Logo"
              width={60}
              height={60}
              className="object-contain"
            />
            <span className="ml-2 text-lg font-semibold tracking-tight">P&M</span>
          </Link>
          <button
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
            className="p-2 rounded-md hover:bg-muted transition"
          >
            <X size={26} />
          </button>
        </div>

        {/* Links */}
        <nav className="flex flex-col items-center justify-center space-y-8 mt-10">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-2xl font-medium text-foreground hover:text-accent transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}

          <div className="flex flex-col items-center gap-4 mt-8">
            <Link
              href="/auth"
              className="btn w-40"
              onClick={() => setMenuOpen(false)}
            >
              Sign Up
            </Link>
            <Link
              href="/auth"
              className="btn-outline w-40"
              onClick={() => setMenuOpen(false)}
            >
              Log In
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
