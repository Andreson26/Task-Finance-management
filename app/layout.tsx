import "./globals.css";
import type { Metadata } from "next";
import "@fontsource/plus-jakarta-sans";
import ClientLayout from "@/components/ClientLayout";

export const metadata: Metadata = {
  title: "Task Productivity & Finance Management",
  description: "Manage productivity and finances intelligently",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        {/* Client-side logic: Navbar visible only on non-auth pages */}
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}



