import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from '@/components/Navbar'
import TopBanner from "@/components/TopBanner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "E-library",
  description: "An Elibrary management system",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TopBanner/>
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
