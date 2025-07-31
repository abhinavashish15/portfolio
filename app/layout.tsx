/** @format */

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import CopilotKitProvider from "@/app/components/CopilotKitProvider";
import ThemeToggle from "@/app/components/ThemeToggle";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Abhinav Ashish | Portfolio",
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
  authors: [{ name: "Abhinav Ashish" }],
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
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  var systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  
                  if (theme === 'dark' || (!theme && systemPrefersDark)) {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        <CopilotKitProvider>
          {children}
          <ThemeToggle />
        </CopilotKitProvider>
      </body>
    </html>
  );
}
