import { FadeIn } from "@/components/animations/FadeIn";
import { ContactForm } from "@/components/sections/ContactForm";
import { Mail, MapPin, Phone, Clock, MessageSquare } from "lucide-react";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_1003_7)">
        <path
          d="M17.472 14.382C17.175 14.233 15.714 13.515 15.442 13.415C15.169 13.316 14.971 13.267 14.772 13.565C14.575 13.862 14.005 14.531 13.832 14.729C13.659 14.928 13.485 14.952 13.188 14.804C12.891 14.654 11.933 14.341 10.798 13.329C9.91501 12.541 9.31801 11.568 9.14501 11.27C8.97201 10.973 9.12701 10.812 9.27501 10.664C9.40901 10.531 9.57301 10.317 9.72101 10.144C9.87001 9.97 9.91901 9.846 10.019 9.647C10.118 9.449 10.069 9.276 9.99401 9.127C9.91901 8.978 9.32501 7.515 9.07801 6.92C8.83601 6.341 8.59101 6.42 8.40901 6.41C8.23601 6.402 8.03801 6.4 7.83901 6.4C7.64101 6.4 7.31901 6.474 7.04701 6.772C6.77501 7.069 6.00701 7.788 6.00701 9.251C6.00701 10.713 7.07201 12.126 7.22001 12.325C7.36901 12.523 9.31601 15.525 12.297 16.812C13.006 17.118 13.559 17.301 13.991 17.437C14.703 17.664 15.351 17.632 15.862 17.555C16.433 17.47 17.62 16.836 17.868 16.142C18.116 15.448 18.116 14.853 18.041 14.729C17.967 14.605 17.77 14.531 17.472 14.382ZM12.05 21.785H12.046C10.2758 21.7851 8.53809 21.3092 7.01501 20.407L6.65401 20.193L2.91301 21.175L3.91101 17.527L3.67601 17.153C2.68645 15.5773 2.16295 13.7537 2.16601 11.893C2.16701 6.443 6.60201 2.009 12.054 2.009C14.694 2.009 17.176 3.039 19.042 4.907C19.9627 5.82361 20.6924 6.91372 21.189 8.11424C21.6856 9.31475 21.9392 10.6018 21.935 11.901C21.932 17.351 17.498 21.785 12.05 21.785ZM20.463 3.488C19.3612 2.37892 18.0502 1.49953 16.6061 0.900796C15.162 0.302059 13.6133 -0.00412202 12.05 -4.79882e-06C5.49501 -4.79882e-06 0.160007 5.335 0.157007 11.892C0.157007 13.988 0.704007 16.034 1.74501 17.837L0.0570068 24L6.36201 22.346C8.1056 23.2959 10.0594 23.7937 12.045 23.794H12.05C18.604 23.794 23.94 18.459 23.943 11.901C23.9478 10.3383 23.6428 8.7901 23.0454 7.34603C22.4481 5.90196 21.5704 4.59067 20.463 3.488Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_1003_7">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

// Placeholder office data (Standard Indonesian Mining Hubs)
const offices = [
  {
    city: "Yogyakarta (Head Office)",
    address:
      "Jl. Pandansaren, RT.01/RW.11, Jurugan, Bangun Kerto, Kec. Turi, Kab. Sleman, DIY 55551",
    type: "Headquarters",
    image: "bg-brand-900", // Using Brand Red/Dark for HQ
    phone: "+62 27 4210 3099",
  },
];

export default function ContactPage() {
  return (
    <div className="bg-white min-h-screen pt-24 pb-20">
      {/* 1. HERO SECTION */}
      <section className="container py-12 md:py-20">
        <div className="max-w-4xl">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-100 text-brand-600 text-sm font-semibold mb-6">
              Contact Us
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              Start Your Project <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-brand-400">
                With Confidence.
              </span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="text-lg text-slate-600 max-w-2xl mb-8 leading-relaxed">
              Our engineers are ready to provide technical consultations for
              NEDA applications, road stabilization, and dust control solutions.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* 2. MAIN CONTENT */}
      <section className="container pb-24">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-24">
          {/* LEFT COLUMN: INFO & OFFICES */}
          <div className="lg:col-span-5 space-y-12 order-2 lg:order-1">
            {/* Direct Contacts */}
            <FadeIn delay={0.3} className="space-y-6">
              <h3 className="text-xl font-bold text-slate-900">Direct Lines</h3>
              <div className="space-y-4">
                {/* Email */}
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                  <div className="p-2 bg-white rounded-lg border border-slate-200 shadow-sm">
                    <Mail className="h-5 w-5 text-brand-600" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wide mb-1">
                      General Inquiries
                    </p>
                    <p className="font-bold text-slate-900 break-all">
                      menaramerahputih@gmail.com
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                  <div className="p-2 bg-white rounded-lg border border-slate-200 shadow-sm">
                    <Phone className="h-5 w-5 text-brand-600" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wide mb-1">
                      Office Phone
                    </p>
                    <p className="font-bold text-slate-900">+62 27 4210 3099</p>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                  <div className="p-2 bg-white rounded-lg border border-slate-200 shadow-sm">
                    <WhatsAppIcon className="h-5 w-5 text-emerald-600" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wide mb-1">
                      WhatsApp Support
                    </p>
                    <p className="font-bold text-slate-900">
                      +62 882 005 779 991
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Office Locations */}
            <FadeIn delay={0.4} className="space-y-6">
              <h3 className="text-xl font-bold text-slate-900">Our Presence</h3>
              <div className="grid gap-6">
                {offices.map((office, i) => (
                  <div
                    key={i}
                    className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white hover:shadow-lg transition-all duration-300 hover:border-brand-200"
                  >
                    <div className="flex h-auto min-h-[140px]">
                      {/* Image Placeholder Section */}
                      <div
                        className={`w-24 shrink-0 ${office.image} flex items-center justify-center`}
                      >
                        <MapPin className="text-white/50 h-8 w-8 group-hover:scale-110 transition-transform duration-500" />
                      </div>

                      {/* Text Section */}
                      <div className="p-5 flex flex-col justify-center">
                        <span className="text-[10px] font-bold text-brand-600 uppercase tracking-wide mb-2 bg-brand-50 w-fit px-2 py-0.5 rounded-full">
                          {office.type}
                        </span>
                        <h4 className="font-bold text-slate-900 text-lg mb-2 leading-tight">
                          {office.city}
                        </h4>
                        <p className="text-sm text-slate-500 leading-relaxed mb-3">
                          {office.address}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>

          {/* RIGHT COLUMN: THE FORM */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="sticky top-32">
              <FadeIn delay={0.2}>
                <ContactForm />
              </FadeIn>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
