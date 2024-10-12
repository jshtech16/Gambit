import type { Metadata } from "next";
import { Poppins } from 'next/font/google';
import localFont from 'next/font/local';
import "./globals.css";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Gambit",
  description: "Gambit app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`overflow-x-hidden ${poppins.variable}`}>
        {children}
      </body>
    </html>
  );
}
