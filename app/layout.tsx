import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Next SaaS Fullstack Starter",
  description: "Reusable fullstack-ready Next.js SaaS starter"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
