import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/Components/layout/Navbar";
import { ThemeProvider } from "next-themes";
import localFont from "next/font/local";
import Footer from "@/Components/layout/Footer";
import { CardProvider } from "@/Components/context/Context";

const lexend = localFont({
  src: "../fonts/Lexend.ttf",
  variable: "--font-lexend",
});
const bricolage = localFont({
  src: "../fonts/Bricolage.ttf",
  variable: "--font-bricolage",
});
// seo part
export const metadata: Metadata = {
  title: {
    default: "benfort",
    template: "%s | benfort",
  },
  description:
    "benfort — A premium real estate platform helping you find, buy, and sell properties with confidence.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/apple-touch-icon.png",
  },
  keywords: [
    "real estate",
    "benfort",
    "property listings",
    "buy property",
    "sell property",
    "luxury homes",
    "housing market",
    "real estate website",
  ],
  authors: [{ name: "benfort Team", url: "https://benfort.com" }],
  creator: "benfort",
  openGraph: {
    title: "benfort Real Estate",
    description:
      "Explore the latest property listings, homes, and real estate trends on benfort.",
    url: "https://mcoding-benfort.vercel.app",
    siteName: "benfort",
    images: [
      {
        url: "/public/favicon.svg",
        width: 1200,
        height: 630,
        alt: "benfort - Real Estate Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "benfort Real Estate",
    description:
      "Buy, sell, and explore premium real estate listings on benfort.",
    images: ["/og-image.jpg"],
    creator: "@benfortOfficial", // Optional
  },
  metadataBase: new URL("https://mcoding-benfort.vercel.app"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${lexend.className} ${bricolage.variable} antialiased flex flex-col min-h-screen overflow-x-hidden`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <CardProvider>
            <main className="flex-grow">{children}</main>
          </CardProvider>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
