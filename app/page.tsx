import { FadeIn } from "@/components/animations/FadeIn";
import { Button } from "@/components/ui/button"; // Assuming you have shadcn button
import { TechComparison } from "@/components/sections/TechComparison";
import {
  ArrowRight,
  Hammer, // For NEDA
  Activity, // For Coal QC (Analysis)
  Wind, // For Dust Control
  Layers, // For Road Hardness (Layers of soil)
  CheckCircle2,
  XCircle,
} from "lucide-react";
import Link from "next/link";

const services = [
  {
    title: "NEDA Rock Breaking",
    description:
      "Non-Explosive Demolition Agent. Silent, vibration-free rock cracking for sensitive mining zones.",
    icon: Hammer,
    linkText: "Technical Specs",
    theme: "eco",
    href: "/neda",
  },
  {
    title: "Road Hardening Agents",
    description:
      "Increase CBR (California Bearing Ratio) of haul roads. Reduce rolling resistance and tire wear.",
    icon: Layers,
    linkText: "View Soil Solutions",
    theme: "brand",
    href: "/services",
  },
  {
    title: "Coal Quality Control",
    description:
      "Chemical additives to prevent spontaneous combustion and manage moisture content in stockpiles.",
    icon: Activity,
    linkText: "Coal Solutions",
    theme: "brand",
    href: "/services",
  },
  {
    title: "Mine Dust Control",
    description:
      "Advanced polymer sealants for haul roads and stockpiles to meet environmental compliance.",
    icon: Wind,
    linkText: "Dust Suppression",
    theme: "brand",
    href: "/services",
  },
];

const stats = [
  { label: "Safety Record", value: "Zero LTI" },
  { label: "Product Range", value: "20+ Agents" }, // Shows depth of catalog
  { label: "Safe Manhours", value: "160k+" }, // Shows coverage
  { label: "Total Client", value: "10+" },
];

export default function Home() {
  return (
    <div className="flex flex-col gap-0">
      {/* HERO SECTION */}
      <section className="relative h-[90vh] w-full flex items-center overflow-hidden">
        {/* Background Video/Image */}
        <div className="absolute inset-0 z-0 bg-slate-900">
          <div className="absolute inset-0 bg-[url('/hero-mining-red.jpg')] bg-cover bg-center opacity-50 grayscale" />
          {/* Red Overlay Gradient for Branding */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/80 to-transparent" />
        </div>

        {/* Content - Note the container usage for spacing */}
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <FadeIn delay={0.1}>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-600/10 border border-brand-600/20 text-brand-500 font-semibold mb-6">
                <span className="w-2 h-2 rounded-full bg-brand-600 animate-pulse" />
                Operational Excellence Since 2019
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-tight">
                Advanced Mining <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-500 to-red-400">
                  Chemical Solutions.
                </span>
              </h1>
            </FadeIn>

            <FadeIn delay={0.3}>
              <p className="text-lg md:text-xl text-slate-300 mb-8 leading-relaxed max-w-2xl">
                Optimizing mine operations with specialized agents for
                <span className="text-emerald-400 font-semibold">
                  {" "}
                  NEDA
                </span>{" "}
                rock breaking, dust control, and road stabilization.
              </p>
            </FadeIn>

            <FadeIn delay={0.4} className="flex flex-wrap gap-4">
              <Link href={"/services"}>
                <Button
                  size="lg"
                  className="cursor-pointer h-14 px-8 text-lg bg-brand-600 hover:bg-brand-700 text-white border-0 shadow-lg shadow-brand-600/20"
                >
                  Explore Capabilities
                </Button>
              </Link>
              <Link href={"/contact"}>
                <Button
                  size="lg"
                  variant="outline"
                  className="cursor-pointer h-14 px-8 text-lg bg-transparent text-white border-white/30 hover:bg-white/10 hover:text-white backdrop-blur-sm"
                >
                  Contact Procurement
                </Button>
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 2. STATS STRIP */}
      <section className="bg-brand-600 text-white py-16 border-b border-brand-700">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <FadeIn
                key={i}
                delay={i * 0.1}
                className="flex flex-col border-l border-white/20 pl-6"
              >
                <span className="text-4xl font-bold text-white mb-1">
                  {stat.value}
                </span>
                <span className="text-sm text-brand-100 uppercase tracking-wider font-medium">
                  {stat.label}
                </span>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 3. SERVICES SECTION (THE LOOP) */}
      <section className="py-32 bg-white">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <FadeIn className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                Integrated Mining Services
              </h2>
              <p className="text-slate-500 text-lg">
                From site preparation to specialized NEDA demolition, we provide
                the backbone for productive mining operations.
              </p>
            </FadeIn>

            <FadeIn delay={0.2}>
              <Link href={"/projects"}>
                <Button
                  variant="link"
                  className="text-brand-600 font-bold text-lg p-0 h-auto hover:text-brand-700 cursor-pointer"
                >
                  View Full Portfolio <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </FadeIn>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {services.map((service, index) => {
              const isEco = service.theme === "eco";

              return (
                <Link href={service.href} key={index} className="block h-full">
                  <FadeIn
                    key={index}
                    delay={index * 0.1}
                    className="group relative bg-slate-50 rounded-3xl p-8 hover:bg-slate-100 border border-slate-100 flex flex-col h-full"
                  >
                    {/* Arrow Icon */}
                    <div className="absolute top-8 right-8 p-2 bg-white rounded-full shadow-sm group-hover:scale-110 transition-transform opacity-0 group-hover:opacity-100">
                      <ArrowRight
                        className={`h-5 w-5 ${
                          isEco ? "text-eco-600" : "text-brand-600"
                        }`}
                      />
                    </div>

                    {/* Icon Box */}
                    <div
                      className={`h-14 w-14 rounded-2xl flex items-center justify-center mb-8 transition-colors ${
                        isEco
                          ? "bg-emerald-100 text-eco-600"
                          : "bg-brand-50 text-brand-600"
                      }`}
                    >
                      <service.icon className="h-7 w-7" />
                    </div>

                    <h3 className="text-xl font-bold mb-4 text-slate-900">
                      {service.title}
                    </h3>

                    <p className="text-slate-600 mb-8 leading-relaxed flex-grow">
                      {service.description}
                    </p>

                    <div
                      className={`text-sm font-bold flex items-center gap-2 mt-auto ${
                        isEco ? "text-eco-600" : "text-brand-600"
                      }`}
                    >
                      {service.linkText}
                      <ArrowRight className="h-4 w-4" />
                    </div>

                    {isEco && (
                      <span className="absolute bottom-4 right-4 text-[10px] font-bold bg-white border border-emerald-100 px-2 py-1 rounded text-eco-600 uppercase tracking-wider">
                        Flagship
                      </span>
                    )}
                  </FadeIn>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. TEASER: ECOBUST COMPARISON */}
      <section className="py-32 bg-slate-950 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-emerald-900/20 to-transparent pointer-events-none" />

        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-semibold mb-6">
                Why choose NEDA?
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Stop Blasting. <br /> Start{" "}
                <span className="text-emerald-400">Expansive Breaking.</span>
              </h2>
              <p className="text-slate-400 text-lg mb-8">
                Traditional explosives cause vibration, flyrock, and regulatory
                headaches.{" "}
                <span className="text-white">
                  NEDA (Non-Explosive Demolition Agent)
                </span>{" "}
                provides a silent, safe, and controlled alternative.
              </p>

              <div className="flex flex-col gap-4 mb-8">
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-red-500/10 rounded-full">
                    <XCircle className="text-red-500 h-6 w-6" />
                  </div>
                  <span className="text-slate-300">
                    No Site Evacuation Needed
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-emerald-500/10 rounded-full">
                    <CheckCircle2 className="text-emerald-500 h-6 w-6" />
                  </div>
                  <span className="text-slate-300">Zero Ground Vibration</span>
                </div>
              </div>

              <Link href={"/neda"}>
                <Button className="bg-emerald-600 hover:bg-emerald-700 text-white h-12 px-8 cursor-pointer">
                  See Technical Comparison
                </Button>
              </Link>
            </FadeIn>

            <FadeIn direction="left" delay={0.2}>
              <TechComparison />
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
}
