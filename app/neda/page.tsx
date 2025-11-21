import { FadeIn } from "@/components/animations/FadeIn";
import { TechComparison } from "@/components/sections/TechComparison";
import { Button } from "@/components/ui/button";
import {
  Drill,
  FlaskConical,
  PaintBucket,
  Scaling,
  Thermometer,
  Timer,
  ArrowDown,
  FileText,
} from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "NEDA Technology (Non-Explosive Demolition Agent)",
  description:
    "Technical specifications for NEDA rock breaking. Silent, vibration-free demolition for sensitive mining zones. 18,000 PSI expansive pressure.",
  keywords: [
    "Chemical Rock Breaking",
    "Silent Demolition",
    "NEDA vs Explosives",
    "Concrete Demolition Agent",
  ],
};

// --- DATA: THE 4-STEP PROCESS ---
const processSteps = [
  {
    step: "01",
    title: "Drill Pattern",
    desc: "Drill holes of 38mm-50mm diameter. Spacing is calculated based on rock hardness and free face availability.",
    icon: Drill,
  },
  {
    step: "02",
    title: "Mix Agent",
    // CHANGED: Removed water ratio. Emphasized "smooth consistency".
    desc: "Mix the NEDA powder with clean water until a smooth, lump-free slurry is achieved. Follow the specific mixing guide provided.",
    icon: FlaskConical,
  },
  {
    step: "03",
    title: "Pour & Fill",
    desc: "Pour the mixture into holes immediately after mixing. Fill to the top; no stemming or plugging is required.",
    icon: PaintBucket,
  },
  {
    step: "04",
    title: "Expansion",
    desc: "The agent expands with 18,000 PSI force. Cracks initiate within 4-24 hours depending on ambient temperature.",
    icon: Scaling,
  },
];

// --- DATA: TECHNICAL SPECS ---
const specs = [
  { label: "Expansive Pressure", value: "> 120 MPa (18,000 PSI)" },
  { label: "Hole Diameter", value: "38mm - 50mm" },
  { label: "Reaction Time", value: "4 - 24 Hours" },
  { label: "Shelf Life", value: "2 Years (Dry Storage)" },
  { label: "HS Code", value: "3824.99.99" },
  { label: "pH Value", value: "12.5 (Alkaline)" },
];

const tempGrades = [
  { type: "SCA-1", temp: "25°C - 40°C", note: "Tropical / Summer Grade" },
  { type: "SCA-2", temp: "10°C - 25°C", note: "Standard Grade" },
  { type: "SCA-3", temp: "-5°C - 10°C", note: "High Altitude / Winter" },
];

export default function NedaPage() {
  return (
    <div className="bg-white min-h-screen pb-20">
      {/* 1. HERO SECTION (Green Theme) */}
      <section className="relative overflow-hidden h-[880px] bg-emerald-950 py-20 md:py-32 text-white">
        {/* Abstract Background */}
        <div className="absolute top-0 right-0 w-2/3 h-full bg-emerald-900/20 skew-x-12 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none" />

        <div className="container relative z-10 translate-y-24">
          <div className="max-w-3xl">
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-semibold mb-6">
                Non-Explosive Demolition Agent
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Silent Force. <br />
                <span className="text-emerald-400">Precision Breaking.</span>
              </h1>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="text-lg text-emerald-100/80 max-w-2xl mb-8 leading-relaxed">
                NEDA is a highly expansive mortar that breaks rock and concrete
                safely and silently. It generates 18,000 PSI of expansive power
                when mixed with water, cracking rocks without vibration, noise,
                or flyrock.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link href={"/contact"}>
                  <Button
                    size="lg"
                    className="bg-emerald-500 hover:bg-emerald-600 text-white border-0 cursor-pointer"
                  >
                    Download TDS (PDF) <ArrowDown className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href={"/contact"}>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-emerald-500/30 bg-transparent text-emerald-100 hover:bg-emerald-500/10 hover:text-white cursor-pointer"
                  >
                    Calculate Usage
                  </Button>
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 2. HOW IT WORKS (Process) */}
      <section className="container py-24">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <FadeIn className="max-w-xl">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              The Application Process
            </h2>
            <p className="text-slate-600">
              Simple 4-step application requires no heavy machinery or licensed
              blasters.
            </p>
          </FadeIn>
        </div>

        <div className="grid md:grid-cols-4 gap-8 relative">
          {/* Connecting Line (Desktop only) */}
          <div className="hidden md:block absolute top-8 left-0 w-full h-0.5 bg-emerald-100 z-0" />

          {processSteps.map((step, i) => (
            <FadeIn key={i} delay={i * 0.2} className="relative z-10 bg-white">
              <div className="w-16 h-16 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center mb-6 text-emerald-600 shadow-sm">
                <step.icon className="h-8 w-8" />
              </div>
              <span className="text-6xl font-bold text-slate-100 absolute -top-4 right-4 -z-10 font-mono select-none">
                {step.step}
              </span>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {step.title}
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                {step.desc}
              </p>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* 3. TECHNICAL SPECS (Grid) */}
      <section className="bg-slate-50 py-24 border-y border-slate-200">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left: The Numbers */}
            <FadeIn>
              <h2 className="text-3xl font-bold text-slate-900 mb-8">
                Technical Specifications
              </h2>
              <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
                {specs.map((spec, i) => (
                  <div
                    key={i}
                    className="flex justify-between items-center p-5 border-b border-slate-100 last:border-0 hover:bg-slate-50 transition-colors"
                  >
                    <span className="font-semibold text-slate-600">
                      {spec.label}
                    </span>
                    <span className="font-bold text-slate-900">
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Safety Warning */}
              <div className="mt-8 p-6 bg-amber-50 rounded-2xl border border-amber-100 flex gap-4">
                <div className="p-2 bg-amber-100 rounded-lg h-fit text-amber-700">
                  <Thermometer className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-amber-900 mb-1">
                    Reaction Temperature Warning
                  </h4>
                  <p className="text-sm text-amber-800 leading-relaxed">
                    NEDA generates heat during hydration. Do not look directly
                    into filled holes. Use safety goggles. Select the correct
                    temperature grade below to prevent "blowouts".
                  </p>
                </div>
              </div>
            </FadeIn>

            {/* Right: Temperature Grades */}
            <FadeIn delay={0.2}>
              <h2 className="text-3xl font-bold text-slate-900 mb-8">
                Product Grades
              </h2>
              <div className="grid gap-4">
                {tempGrades.map((grade, i) => (
                  <div
                    key={i}
                    className="bg-white p-6 rounded-2xl border border-slate-200 hover:border-emerald-400 transition-all group cursor-default"
                  >
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="text-xl font-bold text-emerald-700 group-hover:text-emerald-600">
                        {grade.type}
                      </h3>
                      <span className="bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
                        {grade.note}
                      </span>
                    </div>
                    <div className="text-3xl font-bold text-slate-900">
                      {grade.temp}
                    </div>
                    <p className="text-xs text-slate-400 mt-2">
                      Recommended Ambient Rock Temperature
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex items-center gap-4 text-sm text-slate-500">
                <FileText className="h-5 w-5" />
                <span>Available in 5kg bags (4 bags per box)</span>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 4. REUSED COMPARISON COMPONENT */}
      <section className="bg-slate-900 py-24">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Switch to NEDA?
              </h2>
              <p className="text-slate-400">
                Compare the operational impact of chemical breaking versus
                traditional blasting methods.
              </p>
            </FadeIn>
          </div>

          <FadeIn delay={0.2}>
            <TechComparison />
          </FadeIn>
        </div>
      </section>

      {/* 5. CTA */}
      <section className="container py-24 text-center">
        <FadeIn>
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Plan your demolition
          </h2>
          <p className="text-lg text-slate-600 mb-8 max-w-xl mx-auto">
            Not sure how much NEDA you need? Our technical team can calculate
            the exact usage requirement based on your rock hardness and total
            volume (BCM).
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href={"/contact"}>
              <Button
                size="lg"
                className="bg-brand-600 hover:bg-brand-700 text-white px-10 cursor-pointer h-12"
              >
                Request Cost Estimation
              </Button>
            </Link>

            <Link href={"/contact"}>
              <Button
                size="lg"
                variant="outline"
                className="border-slate-300 text-slate-700 hover:border-brand-600 hover:text-brand-600 px-10 cursor-pointer h-12"
              >
                Contact Sales
              </Button>
            </Link>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
