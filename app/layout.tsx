/*port "./globals.css";
import type { Metadata } from "next";
import "@fontsource/plus-jakarta-sans";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Task Productivity & Finance management",
  description: "Manage productivity and finances intelligently.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Navbar />
        <main className="relative z-0 mt-[88px] md:mt-[104px]">{children}</main>
      </body>
    </html>
  );
}*/

import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Task Productivity & Finance Management",
  description: "A smart productivity and finance management dashboard.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="overflow-x-hidden bg-background text-foreground">
        {/* Fixed Navbar */}
        <Navbar />

        {/* Main content offset below navbar */}
        <main className="relative mt-[88px] md:mt-[104px] z-0">
          {children}
        </main>
      </body>
    </html>
  );
}

