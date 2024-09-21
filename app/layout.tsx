import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { DockDemo } from "@/components/ui/doc";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Masyhudi Affandi - Web Developer",
  description: "Masyhudi Affandi adalah seorang web developer yang berfokus pada frontend development dan memiliki pengalaman dalam berbagai teknologi seperti React, Laravel, dan lainnya.",
  keywords: "Masyhudi Affandi, web developer, frontend development, React, Laravel, e-commerce, chatbot",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="dark" lang="en">
      <head>
        <meta name="google-site-verification" content="7cxWx6U3jctrMRSwPrTjG__cN8yS_DY5UuweCDNoyZE" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
