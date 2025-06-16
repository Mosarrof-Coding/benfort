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
    default: "Benfort",
    template: "%s | Benfort",
  },
  description:
    "Benfort — A premium real estate platform to discover, buy, and sell luxury homes, apartments, and properties confidently.",
  keywords: [
    "real estate",
    "Benfort",
    "property listings",
    "luxury real estate",
    "homes for sale",
    "apartments for sale",
    "buy property",
    "sell property",
    "housing market",
    "real estate website",
    "property search",
    "residential properties",
    "commercial properties",
    "property investment",
  ],
  authors: [{ name: "Benfort Team", url: "https://benfort.com" }],
  creator: "Benfort",
  category: "real estate",
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Benfort Real Estate",
    description:
      "Explore luxury property listings, real estate trends, and find your dream home with Benfort.",
    url: "https://mcoding-benfort.vercel.app",
    siteName: "Benfort",
    images: [
      {
        url: "https://mcoding-benfort.vercel.app/favicon.svg",
        width: 1200,
        height: 630,
        alt: "Benfort - Premium Real Estate",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Benfort Real Estate",
    description:
      "Discover premium real estate listings and luxury homes for sale on Benfort.",
    images: ["https://mcoding-benfort.vercel.app/og-image.jpg"],
    creator: "@benfortOfficial",
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
        className={`${lexend.className} ${bricolage.variable} antialiased flex flex-col min-h-screen`}
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
