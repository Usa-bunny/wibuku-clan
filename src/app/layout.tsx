import type { Metadata } from "next";
import "./globals.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import { Noto_Sans_JP, Noto_Serif_JP } from "next/font/google";

export const fontBody = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
});

export const fontHeading = Noto_Serif_JP({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-heading",
});

export const metadata: Metadata = {
  title: "Senpai Clan",
  description: "Official website for Senpai Clan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fontBody.variable} ${fontHeading.variable}`}
      suppressHydrationWarning
    >
      <body className="bg-layer" suppressHydrationWarning>{children}</body>
    </html>
  );
}