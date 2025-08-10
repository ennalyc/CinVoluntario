import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SideBar from "@/components/sidebar/SideBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CinVoluntario",
  description: "Projeto da disciplina Desenvolvimento de Software",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex flex-row">
          <SideBar/>
          <main className='bg-red-800 w-screen h-screen flex justify-center items-center'>
            <div className='bg-neutral-100 w-16/17 h-13/14 rounded-2xl flex items-start p-8 overflow-hidden'>
              {children}
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}
