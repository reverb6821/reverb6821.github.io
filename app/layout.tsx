import type { Metadata } from "next";
import { Orbitron, Share_Tech_Mono } from "next/font/google";
import Providers from "@/components/providers";
import "./globals.css";

const orbitron = Orbitron({ variable: "--font-orbitron", subsets: ["latin"], weight: ["400", "700", "900"] });
const shareTechMono = Share_Tech_Mono({ variable: "--font-share-tech-mono", subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Giuseppe Gigliotti",
  description: "JavaScript developer",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      className={`
        ${orbitron.variable}
        ${shareTechMono.variable}
        h-full antialiased bg-[#020810]
      `}
    >
      <body className="flex min-h-full flex-col">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}