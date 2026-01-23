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
  title: "Charlie Miner | Digital Marketing Portfolio",
  description: "Portfolio of Charlie Miner, Digital Marketing Specialist. Case studies, testimonials, and contact information.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        {/* Optionally keep the .ico as fallback: <link rel="alternate icon" href="/favicon.ico" /> */}
      </head>
      <body
        className={`min-h-screen flex flex-col bg-background text-foreground ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <main className="flex-1 w-full mx-auto max-w-5xl px-4 sm:px-8 md:px-12 lg:px-16">
          {children}
        </main>
      </body>
    </html>
  );
}
