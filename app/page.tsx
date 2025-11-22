import HomeClient from "@/components/pages/HomeClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Menara Merah Putih - Advanced Mining Chemical Solutions",
  description:
    "Optimizing mining operations with specialized chemical agents: NEDA rock breaking, road hardening, dust control, and coal quality preservation.",
  keywords: [
    "NEDA",
    "Non-Explosive Demolition Agent",
    "Mining Dust Control",
    "Road Hardening Agents",
    "Coal Spontaneous Combustion",
    "Mining Chemicals Indonesia",
  ],
  openGraph: {
    title: "Menara Merah Putih - Advanced Mining Chemical Solutions",
    description: "Silent rock breaking and eco-friendly mining infrastructure solutions.",
    images: [
      {
        url: "/hero-image-1.webp",
        width: 1200,
        height: 630,
        alt: "Menara Merah Putih Mining Operations",
      },
    ],
  },
};

export default function HomePage() {
  return <HomeClient />;
}