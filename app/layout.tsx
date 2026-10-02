import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./hero-spacing.css";
import "./tombell-typography.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kbazz Apartments | Serviced Apartments in Ibadan",
  description:
    "Tastefully furnished serviced apartments in Ibadan for private, comfortable stays in Iyaganku and Basorun.",
  keywords: [
    "Kbazz Apartments",
    "serviced apartments Ibadan",
    "shortlet Ibadan",
    "Iyaganku apartments",
    "Basorun apartments",
  ],
  icons: {
    icon: "/media/brand/plot1-logo.png",
    shortcut: "/media/brand/plot1-logo.png",
    apple: "/media/brand/plot1-logo.png",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
