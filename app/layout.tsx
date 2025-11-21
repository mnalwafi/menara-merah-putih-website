import type { Metadata } from "next";
import { Manrope } from "next/font/google"; // Manrope looks industrial/technical
import "./globals.css";
import SmoothScroll from "@/components/animations/SmoothScroll";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const manrope = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://ecobuild-mining.id"), // Replace with actual domain
  title: {
    default: "EcoBuild Mining Services | NEDA & Infrastructure",
    template: "%s | EcoBuild Mining",
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
    url: "https://ecobuild-mining.id",
    siteName: "EcoBuild Mining Services",
    images: [
      {
        url: "/og-image.jpg", // You need to add this image to your public folder
        width: 1200,
        height: 630,
        alt: "EcoBuild Mining Operations",
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
