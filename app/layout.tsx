import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "PT Nitoriyo Fuku Hana | Industrial Supplier & Engineering Solutions",

  description:
    "PT Nitoriyo Fuku Hana adalah industrial supplier dan solution partner yang menyediakan Warehouse Solutions, LED Solutions, General Industrial Supply, Engineering Support, dan Procurement Services untuk kebutuhan industri di Indonesia.",

  verification: {
    google: "dhTaOHZxh3I826Qo-VSfkLTtUhev6BQyCfgaL2oETfk",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
