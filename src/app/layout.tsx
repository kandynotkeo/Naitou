import type { Metadata } from "next";
import { M_PLUS_Rounded_1c } from "next/font/google";
import "./globals.css";

const mPlus = M_PLUS_Rounded_1c({
  weight: ["700", "800"],
  subsets: ["latin"],
  preload: false,
  display: "swap",
});

export const metadata: Metadata = {
  title: "MDTC",
  description: "Ma dao thanh cong",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${mPlus.className} antialiased`}>{children}</body>
    </html>
  );
}
