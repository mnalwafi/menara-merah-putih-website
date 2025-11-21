import { FadeIn } from "@/components/animations/FadeIn";
import { Button } from "@/components/ui/button";
import {
  Tractor,
  Truck,
  ArrowRight,
  CheckCircle2,
  Settings2,
  BarChart3,
  Globe2,
} from "lucide-react";

// 1. Categories of Equipment you can source
const categories = [
  {
    title: "Excavation & Loading",
    specs: "20t - 200t Capacity",
    items: ["Hydraulic Excavators", "Wheel Loaders", "Face Shovels"],
    image: "/placeholder-excavator.jpg", // You'll need generic images
  },
  {
    title: "Hauling Units",
    specs: "Articulated & Rigid",
    items: ["Dump Trucks (40t-100t)", "Water Trucks", "Fuel Trucks"],
    image: "/placeholder-truck.jpg",
  },
  {
    title: "Road & Infrastructure",
    specs: "Precision Grading",
    items: ["Motor Graders", "Compactors", "Dozers (D8/D10 equivalent)"],
    image: "/placeholder-grader.jpg",
  },
  {
    title: "Support & Lifting",
    specs: "Site Logistics",
    items: ["Mobile Cranes", "Lighting Towers", "Gensets"],
    image: "/placeholder-crane.jpg",
  },
];

// 2. The "Why Rent With Us" Process
const processSteps = [
  {
    title: "Requirement Analysis",
    desc: "We analyze your mine plan to determine the exact mix of heavy equipment needed.",
    icon: BarChart3,
  },
  {
    title: "Global Sourcing",
    desc: "We tap into our vendor network to procure low-hour units matching your specs.",
    icon: Globe2,
  },
  {
    title: "Maintenance & Ops",
    desc: "We deploy our own mechanics and parts supply. You just drive; we fix.",
    icon: Settings2,
  },
];

export default function FleetPage() {
  return (
    <div className="bg-white min-h-screen pt-24 pb-20">
      {/* HERO SECTION */}
      <section className="container py-12 md:py-24">
        <FadeIn>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-100 text-brand-600 text-sm font-semibold mb-6">
            On-Demand Fleet Management
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
            The Right Iron. <br />
            <span className="text-brand-600">Exactly When You Need It.</span>
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mb-8">
            Stop tying up capital in depreciating assets. We provide scalable
            fleet rental solutions customized to your project phase—fully
            maintained and ready to work.
          </p>
        </FadeIn>
      </section>

      {/* THE "ASSET LIGHT" VALUE PROP */}
      <section className="bg-slate-950 text-white py-20 overflow-hidden">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Zero CapEx. <br />
                <span className="text-brand-500">Maximum Availability.</span>
              </h2>
              <p className="text-slate-400 mb-8 leading-relaxed">
                We operate on a flexible procurement model. Whether you need a
                single dozer for a month or a full fleet for a 5-year contract,
                we handle the sourcing, logistics, and maintenance.
              </p>

              <ul className="space-y-4">
                {[
                  "Access to 500+ Units via Vendor Network",
                  "Full Maintenance Service Included",
                  "Unit Replacement Guarantee (Low Downtime)",
                  "Flexible Short & Long Term Contracts",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="text-brand-500 h-5 w-5 flex-shrink-0" />
                    <span className="text-slate-200">{item}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>

            {/* Visualizing the Process */}
            <div className="grid gap-6">
              {processSteps.map((step, i) => (
                <FadeIn key={i} delay={i * 0.2} direction="left">
                  <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 flex items-start gap-4 hover:border-brand-500/50 transition-colors">
                    <div className="p-3 bg-slate-800 rounded-lg text-brand-500">
                      <step.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-white mb-1">
                        {step.title}
                      </h3>
                      <p className="text-slate-400 text-sm">{step.desc}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORY GRID */}
      <section className="container py-24">
        <FadeIn className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900">
            Sourcing Capabilities
          </h2>
          <p className="text-slate-500">
            We supply equipment across four main operational categories.
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-8">
          {categories.map((cat, i) => (
            <FadeIn
              key={i}
              delay={i * 0.1}
              className="group relative overflow-hidden rounded-3xl bg-slate-100 border border-slate-200"
            >
              <div className="grid md:grid-cols-2 h-full">
                {/* Text Side */}
                <div className="p-8 flex flex-col h-full">
                  <div className="mb-auto">
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">
                      {cat.title}
                    </h3>
                    <p className="text-brand-600 font-medium text-sm mb-6 bg-brand-50 inline-block px-2 py-1 rounded">
                      {cat.specs}
                    </p>
                    <ul className="space-y-2">
                      {cat.items.map((item, idx) => (
                        <li
                          key={idx}
                          className="flex items-center gap-2 text-slate-600 text-sm"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button
                    variant="link"
                    className="w-fit p-0 h-auto mt-6 text-slate-900 font-bold group-hover:text-brand-600 transition-colors"
                  >
                    Request Specs <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>

                {/* Image Side (Abstract Representation) */}
                <div className="bg-slate-300 relative min-h-[200px] md:min-h-full">
                  {/* In production, use Next/Image here */}
                  <div className="absolute inset-0 flex items-center justify-center text-slate-500 font-mono text-xs uppercase tracking-widest bg-slate-200 group-hover:scale-105 transition-transform duration-700">
                    [Img: {cat.title}]
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-slate-100/50 to-transparent md:hidden" />
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container pb-24">
        <FadeIn className="bg-brand-600 rounded-3xl p-12 text-center text-white relative overflow-hidden">
          {/* Decorative circles */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-black/20 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl" />

          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Can't find specific equipment?
            </h2>
            <p className="text-brand-100 text-lg mb-8">
              Our sourcing team has access to inventory across Indonesia,
              Australia, and China. Tell us what you need.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button
                size="lg"
                className="bg-white text-brand-600 hover:bg-brand-50 border-0"
              >
                Submit Equipment Request
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-brand-400 bg-transparent text-white hover:bg-brand-700 hover:text-white"
              >
                Contact Fleet Manager
              </Button>
            </div>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
