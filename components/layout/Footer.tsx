import Link from "next/link";
import Image from "next/image";
import { Linkedin, MapPin, Mail, Phone } from "lucide-react";

/**
 * Renders the site-wide footer component.
 *
 * Features:
 * - Displays the brand logo (filtered to white via CSS) and mission statement.
 * - Provides quick navigation links to solution categories.
 * - Lists specific contact details including physical address, email, and phone.
 * - Auto-generates the current year for the copyright notice.
 * - Responsive grid layout (stacks on mobile, columns on desktop).
 *
 * @returns {JSX.Element} The rendered footer section.
 */
export default function Footer() {
  return (
    <footer className="bg-brand-950 text-white pt-24 pb-12">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-12 mb-16 border-b border-brand-900 pb-12">
          <div className="col-span-1 md:col-span-2 pr-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="relative h-10 w-8">
                <Image
                  src="/logo.svg"
                  alt="Menara Merah Putih Logo"
                  fill
                  className="object-contain brightness-0 invert"
                />
              </div>

              <span className="font-black text-2xl tracking-tight">
                Menara Merah Putih.
              </span>
            </div>

            <p className="text-brand-200 mb-8 max-w-md leading-relaxed">
              Indonesia's leading mining infrastructure partner. Specialized in
              NEDA (Non-Explosive Demolition), Dust Control, and Soil
              Stabilization.
            </p>

            <div className="flex gap-4">
              {[Linkedin].map((Icon, i) => (
                <Link
                  key={i}
                  href="https://www.linkedin.com/company/menaramerahputih"
                  className="h-10 w-10 rounded-full bg-brand-900 flex items-center justify-center hover:bg-brand-800 transition-colors"
                >
                  <Icon className="h-5 w-5 text-white" />
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Solutions</h4>
            <ul className="space-y-4">
              {[
                "NEDA Rock Breaking",
                "Dust Control",
                "Road Hardness",
                "Coal Quality Control",
                "Product Catalog",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="/services"
                    className="text-brand-200 hover:text-white transition-colors text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Head Office</h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-brand-500 shrink-0 mt-1" />
                <span className="text-brand-200 text-sm leading-relaxed">
                  Jl. Pandansaren, RT.01/RW.11
                  <br />
                  Jurugan, Bangun Kerto, Turi
                  <br />
                  Sleman, DIY 55551
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-brand-500 shrink-0" />
                <span className="text-brand-200 text-sm">
                  menaramerahputih@gmail.com
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-brand-500 shrink-0" />
                <span className="text-brand-200 text-sm">+62 27 4210 3099</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-brand-300">
          <p>
            &copy; {new Date().getFullYear()} Menara Merah Putih Mining
            Services. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
