import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Bruno_Ace } from "next/font/google";

const brunoAce = Bruno_Ace({
  subsets: ["latin"],
  weight: "400",
});

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
  title: "Aim Block",
  description: "Aim training game",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html id="main" lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${brunoAce.className}`}
      >
        {children}
      </body>
    </html>
  );
}
