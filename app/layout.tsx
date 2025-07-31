/** @format */

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import CopilotKitProvider from "@/app/components/CopilotKitProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio | Developer & Designer",
  description:
    "Personal portfolio showcasing my work in web development, design, and technology.",
  keywords: [
    "portfolio",
    "developer",
    "designer",
    "web development",
    "react",
    "next.js",
  ],
  authors: [{ name: "Your Name" }],
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        <CopilotKitProvider>{children}</CopilotKitProvider>
      </body>
    </html>
  );
}
