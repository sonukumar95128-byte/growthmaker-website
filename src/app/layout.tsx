import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Growth Maker | Your Digital Growth Partner",
  description:
    "Growth Maker helps coaches, consultants, fitness trainers, real-estate agents, creators, and education brands automate their systems, build sales funnels, run performance ads, and increase sales up to 3x to 5x.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable}`}>
      <body className="font-sans bg-bg-dark text-bg-soft antialiased">{children}</body>
    </html>
  );
}
