import type { Metadata } from "next";
import { Jost, Asap } from "next/font/google";
import "./globals.css";

const heading = Jost({
  variable: "--font-heading",
  subsets: ["latin"],
});

const body = Asap({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gabe Serna- Web Developer",
  description: "Frontend Developer specializing in Next.js and Typescript",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${heading.variable} ${body.variable} dark antialiased`}>
        {children}
      </body>
    </html>
  );
}
