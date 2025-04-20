import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/Components/layout/Navbar";
import { ThemeProvider } from "next-themes";
import localFont from "next/font/local";
import Footer from "@/Components/layout/Footer";

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
    default: "Benport",
    template: "%s | Benport",
  },
  description:
    "Benport — A premium real estate platform helping you find, buy, and sell properties with confidence.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/apple-touch-icon.png", // Optional if available
  },
  keywords: [
    "real estate",
    "Benport",
    "property listings",
    "buy property",
    "sell property",
    "luxury homes",
    "housing market",
    "real estate website",
  ],
  authors: [{ name: "Benport Team", url: "https://benport.com" }],
  creator: "Benport",
  openGraph: {
    title: "Benport Real Estate",
    description:
      "Explore the latest property listings, homes, and real estate trends on Benport.",
    url: "https://benport.com",
    siteName: "Benport",
    images: [
      {
        url: "/og-image.jpg", // Place in /public folder
        width: 1200,
        height: 630,
        alt: "Benport - Real Estate Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Benport Real Estate",
    description:
      "Buy, sell, and explore premium real estate listings on Benport.",
    images: ["/og-image.jpg"],
    creator: "@BenportOfficial", // Optional
  },
  metadataBase: new URL("https://benport.com"),
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
          <main className="flex-grow">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
