"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const hideNavbar = pathname.startsWith("/auth");

  return (
    <>
      {!hideNavbar && <Navbar />}

      {/* Match main padding to the navbar height (h-20 md:h-24) */}
      <main className={`${hideNavbar ? "pt-0" : "pt-20 md:pt-24"} relative z-0`}>
        {children}
      </main>
    </>
  );
}



