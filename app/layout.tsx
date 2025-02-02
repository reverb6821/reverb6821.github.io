import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from '@/components/header';
import Footer from '@/components/footer';
import { NAV_ITEMS, FOOTER_ITEMS } from '@/data';
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Giuseppe Gigliotti Developer",
  description: "Portfolio Resume generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-mode="light">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header items={NAV_ITEMS}/>
        <main>
        {children}
        </main>
        <Footer {...FOOTER_ITEMS}/>
      </body>
    </html>
  );
}
