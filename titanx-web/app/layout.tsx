import type { Metadata } from "next";
import { Barlow_Semi_Condensed, Inter } from "next/font/google";
import "./globals.css";

const barlow = Barlow_Semi_Condensed({
  weight: ["600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-barlow",
});

const inter = Inter({
  weight: ["400", "500"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "TitanX Group | Construction & Electrical Contractors Cape Town",
  description:
    "TitanX Group — premium electrical installations, LED lighting, building & construction, roofing, tiling, and property maintenance in Cape Town and the Western Cape.",
  keywords:
    "construction Cape Town, electrical contractor Cape Town, LED lighting, roofing Western Cape, building contractor",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${barlow.variable} ${inter.variable}`}>
      <body className="min-h-dvh flex flex-col">{children}</body>
    </html>
  );
}
