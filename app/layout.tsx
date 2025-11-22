import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/animations/SmoothScroll";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const manrope = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://menaramerahputih.com"),
  title: {
    default: "Menara Merah Putih Mining Services | NEDA & Infrastructure",
    template: "%s | Menara Merah Putih Mining",
  },
  description:
    "Indonesia's leading mining contractor for Non-Explosive Demolition (NEDA), Haul Road Construction, and Heavy Fleet Management. ISO 45001 Certified.",
  keywords: [
    "Mining Contractor",
    "NEDA Indonesia",
    "Rock Breaking",
    "Heavy Equipment Rental",
    "Haul Road Construction",
    "Ecobust Alternative",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://menaramerahputih.com",
    siteName: "Menara Merah Putih Mining Services",
    images: [
      {
        url: "/logo.svg",
        width: 1200,
        height: 630,
        alt: "Menara Merah Putih Mining Operations",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${manrope.className} antialiased bg-white text-slate-900`}
      >
        <SmoothScroll>
          <Navbar />
          <main className="min-h-screen w-full">{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
