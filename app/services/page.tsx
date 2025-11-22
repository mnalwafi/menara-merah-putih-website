import { FadeIn } from "@/components/animations/FadeIn";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  ArrowRight,
  Download,
  HardHat,
  Layers,
  Activity,
  Wind,
  Droplets,
  Shield,
  Flame,
  Sprout,
  FlaskConical,
  Construction,
  Mountain,
  CheckCircle2,
  Beaker,
} from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Product Catalog & Services",
  description:
    "Browse our inventory of 20+ specialized mining chemical agents, including NEDA rock breaking, road stabilization, and dust control solutions.",
  openGraph: {
    title: "EcoBuild Mining Product Catalog",
    description:
      "Comprehensive chemical solutions for rock breaking, road hardening, and dust suppression.",
    images: ["/land-road-hardness.webp"],
  },
};

/**
 * Data structure for a featured service.
 * @typedef {Object} ServiceItem
 * @property {string} id - Unique identifier.
 * @property {string} title - Service headline.
 * @property {string} subtitle - Technical subheading.
 * @property {string} description - Detailed explanation of the chemical process.
 * @property {string[]} benefits - List of key advantages.
 * @property {LucideIcon} icon - Lucide icon component.
 * @property {string} image - Path to the representative image.
 * @property {"left" | "right"} align - Layout alignment for the image.
 */

/**
 * Top-tier services highlighted with detailed descriptions and zig-zag layout.
 * Diagram tags have been added to descriptions to visualize chemical mechanisms.
 * @type {ServiceItem[]}
 */
const featuredServices = [
  {
    id: "roads",
    title: "Land Road Hardness Agents",
    subtitle: "Soil Stabilization & CBR Improvement",
    description:
      "Improve the California Bearing Ratio (CBR) of your haul roads. Our ionic stabilizers bind soil particles to create a concrete-like surface that resists rutting and reduces rolling resistance. ",
    benefits: [
      "Increase Road Bearing Capacity by 300%",
      "Reduce Fuel Consumption (Rolling Resistance)",
      "Minimize Aggregate Loss",
      "All-Weather Trafficability",
    ],
    icon: Layers,
    image: "/land-road-hardness.webp",
    align: "left",
  },
  {
    id: "coal",
    title: "Coal Quality Control",
    subtitle: "Calorific Preservation & Moisture Management",
    description:
      "Chemical treatments to prevent spontaneous combustion (sponcom) in stockpiles and manage moisture content during the rainy season to avoid penalties at the jetty. ",
    benefits: [
      "Spontaneous Combustion Inhibitors",
      "Moisture Reduction Agents",
      "Ash Fusion modifiers",
      "Transport Loss Prevention",
    ],
    icon: Activity,
    image: "/coal-quality-control.webp",
    align: "right",
  },
  {
    id: "dust",
    title: "Mining Dust Control",
    subtitle: "PM10 / PM2.5 Suppression",
    description:
      "Advanced polymer sealants that crust over tailings dams and haul roads. More effective than water, saving millions of liters of precious water resources annually. ",
    benefits: [
      "95% Reduction in Airborne Dust",
      "Water Conservation (Reduce Spray Frequency)",
      "Tailings Dam Capping",
      "Community Health Compliance",
    ],
    icon: Wind,
    image: "/dust-control.webp",
    align: "left",
  },
];

/**
 * Full inventory of chemical agents available.
 * @type {Array<{name: string, icon: LucideIcon, category: string}>}
 */
const catalogItems = [
  {
    name: "Tires and Rim Protection",
    icon: Construction,
    category: "Fleet Care",
  },
  { name: "Flame Retardant", icon: Flame, category: "Safety" },
  { name: "Soil Stabilizer", icon: Mountain, category: "Infrastructure" },
  { name: "Aggregating Agents", icon: Layers, category: "Processing" },
  { name: "Wetting Agents", icon: Droplets, category: "Processing" },
  { name: "Erosion Control", icon: Mountain, category: "Environment" },
  { name: "Veneering Agents", icon: Shield, category: "Logistics" },
  { name: "Hydroseeding Agents", icon: Sprout, category: "Reclamation" },
  { name: "Fly Ash Control", icon: Wind, category: "Environment" },
  { name: "Foaming Agents", icon: FlaskConical, category: "Processing" },
  { name: "Water Treatment", icon: Droplets, category: "Environment" },
  { name: "Flexible Membranes", icon: Layers, category: "Infrastructure" },
  { name: "Viscosity Modifier", icon: Beaker, category: "Processing" },
  { name: "Hygroscopic Agents", icon: Droplets, category: "Dust" },
  { name: "Waterproofing Agents", icon: Shield, category: "Infrastructure" },
  { name: "Super Absorbents", icon: Droplets, category: "Safety" },
];

/**
 * Services Page Component.
 * Displays a comprehensive catalog of mining chemical solutions, highlighting
 * flagship products like NEDA and providing a full searchable inventory.
 *
 * @returns {JSX.Element} The rendered services page.
 */
export default function ServicesPage() {
  return (
    <div className="bg-white min-h-screen pt-24 pb-20">
      <section className="container py-12 md:py-24">
        <div className="max-w-4xl">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-100 text-brand-600 text-sm font-semibold mb-6">
              Product Catalog
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              Advanced Chemical <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-brand-400">
                Mining Solutions.
              </span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="text-lg text-slate-600 max-w-2xl mb-8 leading-relaxed">
              We supply a comprehensive range of 20+ specialized chemical agents
              designed to solve physical mining challenges—from haul road
              stability to coal caloric preservation.
            </p>
            <Link href={"/contact"}>
              <Button
                variant="outline"
                className="h-12 px-6 border-slate-300 text-slate-700 hover:border-brand-600 hover:text-brand-600 cursor-pointer justify-center w-full md:w-fit flex"
              >
                <Download className="mr-2 h-4 w-4" /> Download Full Material
                Safety Data Sheets
              </Button>
            </Link>
          </FadeIn>
        </div>
      </section>

      <section className="container pb-24">
        <FadeIn>
          <div className="bg-emerald-950 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden group border border-emerald-900">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-emerald-900/30 skew-x-12 group-hover:skew-x-6 transition-transform duration-700" />

            <div className="relative z-10 max-w-xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-4">
                No. 1 Best Seller
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">
                NEDA (Non-Explosive Demolition)
              </h2>
              <p className="text-emerald-100/80 mb-6">
                Our flagship rock breaking agent. Silent, vibration-free, and
                safer than explosives. See why 35+ sites have switched to NEDA.
              </p>
              <div className="mb-6"></div>
              <Link href="/neda">
                <Button className="bg-emerald-500 hover:bg-emerald-600 text-white border-0 h-12 cursor-pointer">
                  View NEDA Technical Specs{" "}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>

            <div className="relative z-10 h-32 w-32 bg-emerald-500/10 rounded-full flex items-center justify-center border border-emerald-500/20 shrink-0">
              <HardHat className="h-12 w-12 text-emerald-400" />
            </div>
          </div>
        </FadeIn>
      </section>

      <section className="container pb-24 space-y-24 md:space-y-32">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-slate-900">
            Core Infrastructure Solutions
          </h2>
        </div>

        {featuredServices.map((service) => (
          <FadeIn
            key={service.id}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            <div
              className={`space-y-6 ${
                service.align === "right" ? "lg:order-2" : "lg:order-1"
              }`}
            >
              <div className="h-14 w-14 bg-brand-50 rounded-2xl flex items-center justify-center">
                <service.icon className="h-7 w-7 text-brand-600" />
              </div>

              <div>
                <h3 className="text-3xl font-bold text-slate-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-lg text-brand-600 font-medium">
                  {service.subtitle}
                </p>
              </div>

              <p className="text-slate-600 leading-relaxed">
                {service.description}
              </p>

              <ul className="grid sm:grid-cols-2 gap-3">
                {service.benefits.map((benefit, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-sm text-slate-700"
                  >
                    <CheckCircle2 className="h-4 w-4 text-brand-600 mt-0.5 shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div
              className={`relative ${
                service.align === "right" ? "lg:order-1" : "lg:order-2"
              }`}
            >
              <div className="aspect-[4/3] rounded-3xl overflow-hidden relative shadow-xl group border border-slate-100">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url('${service.image}')` }}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />

                <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg text-xs font-bold text-slate-900 shadow-sm">
                  {service.title}
                </div>
              </div>
            </div>
          </FadeIn>
        ))}
      </section>

      <section className="bg-slate-50 py-24 border-y border-slate-200">
        <div className="container">
          <div className="max-w-3xl mb-16">
            <FadeIn>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                Specialized Chemical Agents
              </h2>
              <p className="text-slate-600">
                A complete inventory of reagents, additives, and stabilizers for
                specific mining applications.
              </p>
            </FadeIn>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {catalogItems.map((item, i) => (
              <FadeIn key={i} delay={i * 0.05}>
                <div className="bg-white p-6 rounded-xl border border-slate-200 hover:border-brand-400 hover:shadow-md transition-all group h-full flex flex-col">
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-2 bg-slate-50 rounded-lg group-hover:bg-brand-50 transition-colors">
                      <item.icon className="h-5 w-5 text-slate-500 group-hover:text-brand-600" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 bg-slate-100 px-2 py-1 rounded">
                      {item.category}
                    </span>
                  </div>
                  <h3 className="font-bold text-slate-900 text-lg mb-2 group-hover:text-brand-700">
                    {item.name}
                  </h3>
                  <Link href={"/contact"}>
                    <div className="mt-auto pt-4 flex items-center text-xs font-bold text-slate-400 group-hover:text-brand-600 transition-colors cursor-pointer">
                      Request TDS <ArrowRight className="ml-1 h-3 w-3" />
                    </div>
                  </Link>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="container py-24 text-center">
        <FadeIn>
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Need a custom formulation?
          </h2>
          <p className="text-lg text-slate-600 mb-8 max-w-xl mx-auto">
            Our lab can adjust viscosity, pH, and reaction times to suit your
            specific site conditions (e.g., high rainfall or acidic soil).
          </p>
          <Link href="/contact">
            <Button
              size="lg"
              className="cursor-pointer bg-brand-600 hover:bg-brand-700 text-white h-12 px-10"
            >
              Contact Chemical Engineer
            </Button>
          </Link>
        </FadeIn>
      </section>
    </div>
  );
}
