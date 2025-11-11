"use client";

import Link from "next/link";
import { Instagram, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  // Define section names with their dynamic paths
  const sections: Record<string, { name: string; href: string }[]> = {
    Company: [
      { name: "About", href: "/about" },
      { name: "Careers", href: "/careers" },
      { name: "Contact", href: "/contact" },
    ],
    Product: [
      { name: "Features", href: "/features" },
      { name: "Integrations", href: "/integrations" },
      { name: "Pricing", href: "/pricing" },
    ],
    Resources: [
      { name: "Blog", href: "/blog" },
      { name: "Help Center", href: "/help" },
      { name: "API Docs", href: "/api-docs" },
    ],
  };

  // Define your social links (these can be external)
  const socialLinks = [
    { name: "Twitter", href: "https://twitter.com/", icon: Twitter },
    { name: "Instagram", href: "https://instagram.com/", icon: Instagram },
    { name: "LinkedIn", href: "https://linkedin.com/", icon: Linkedin },
  ];

  return (
    <footer className="w-full bg-card py-12 mt-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-sm">
        {/* 🔹 Dynamic Sections */}
        {Object.entries(sections).map(([title, links]) => (
          <div key={title}>
            <h4 className="font-semibold text-lg mb-2 text-center md:text-left">
              {title}
            </h4>
            <ul className="space-y-2 footer-links flex flex-col items-center md:items-start">
              {links.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="nav-link">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* 🔹 Social Section */}
        <div>
          <h4 className="font-semibold text-lg mb-3">Follow Us</h4>
          <div className="flex gap-4">
            {socialLinks.map(({ name, href, icon: Icon }) => (
              <Link
                key={name}
                href={href}
                aria-label={name}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon size={22} className="nav-link" />
              </Link>
            ))}
          </div>

          <p className="mt-6 text-muted text-xs">
            © {year} Task Productivity & Finance. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
