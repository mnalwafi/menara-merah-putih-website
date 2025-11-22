import type { Metadata } from "next";
import Link from "next/link";
import { FadeIn } from "@/components/animations/FadeIn";
import { ProjectGallery } from "@/components/sections/ProjectGallery";
import { Button } from "@/components/ui/button";

/**
 * Metadata configuration for the Projects/Portfolio page.
 * Defines the page title, description, and Open Graph (social share) settings.
 *
 * @type {Metadata}
 */
export const metadata: Metadata = {
  title: "Project Portfolio",
  description:
    "Explore our track record of successful mining infrastructure projects, including NEDA rock breaking, dust suppression, and road stabilization across Indonesia.",
  openGraph: {
    title: "Menara Merah Putih Project Portfolio",
    description:
      "Case studies from PT Vale, Semen Indonesia, and other major mining sites.",
  },
};

/**
 * The main Projects Portfolio page component.
 *
 * Structure:
 * 1. **Hero Section**: Sets the context with a headline and introductory text.
 * 2. **Interactive Gallery**: Renders the `ProjectGallery` client component which handles filtering and masonry layout.
 * 3. **Call to Action (CTA)**: A closing section encouraging users to request a site visit or view products.
 *
 * @returns {JSX.Element} The rendered Projects page.
 */
export default function ProjectsPage() {
  return (
    <div className="bg-white min-h-screen pt-24 pb-20">
      <section className="container py-12 md:py-24">
        <div className="max-w-4xl">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-100 text-brand-600 text-sm font-semibold mb-6">
              Our Portfolio
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              Engineering Challenges, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-brand-400">
                Solved Safely.
              </span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="text-lg text-slate-600 max-w-2xl mb-8 leading-relaxed">
              From sensitive demolition in residential zones to massive
              earthmoving projects in remote jungles. See how we deliver value
              through NEDA technology and precision infrastructure work.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="container pb-24">
        <ProjectGallery />
      </section>

      <section className="container pb-12">
        <FadeIn className="bg-slate-950 rounded-3xl p-12 md:p-24 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-600/20 blur-[120px] rounded-full pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to optimize your site?
            </h2>
            <p className="text-slate-400 text-lg mb-8">
              Join industry leaders like{" "}
              <span className="text-white font-semibold">PT Vale</span> and{" "}
              <span className="text-white font-semibold">Semen Indonesia</span>{" "}
              in achieving operational efficiency. Our engineers are available
              for site visits to determine the right chemical application for
              your needs.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-brand-600 hover:bg-brand-700 text-white h-12 px-8 w-full sm:w-auto cursor-pointer"
                >
                  Request Site Visit
                </Button>
              </Link>
              <Link href="/services">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-slate-700 bg-transparent text-white hover:bg-white/10 hover:text-white h-12 px-8 w-full sm:w-auto cursor-pointer"
                >
                  View Product Catalog
                </Button>
              </Link>
            </div>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
