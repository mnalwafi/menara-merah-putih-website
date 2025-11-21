"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeIn } from "@/components/animations/FadeIn";
import { MapPin, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

// --- 1. THE DATA (Real Clients) ---
const projects = [
  // --- NEDA PROJECTS ---
  {
    id: 1,
    client: "PT Adijaya Karya Nusantara",
    location: "Indonesia",
    category: "NEDA",
    image: "bg-slate-200", // Placeholder
  },
  {
    id: 2,
    client: "PT Vale Soroako",
    location: "South Sulawesi",
    category: "NEDA",
    image: "bg-emerald-900", // Vale is usually green/nickel context
  },
  {
    id: 3,
    client: "Tirta Bara Laksana",
    location: "Yogyakarta",
    category: "NEDA",
    image: "bg-slate-300",
  },
  {
    id: 4,
    client: "PT Semen Baturaja",
    location: "South Sumatra",
    category: "NEDA",
    image: "bg-slate-400",
  },
  {
    id: 5,
    client: "PT Semen Tuban",
    location: "East Java",
    category: "NEDA",
    image: "bg-slate-500",
  },
  {
    id: 6,
    client: "PT Univherv Indonesia (Newmont)",
    location: "Nusa Tenggara",
    category: "NEDA",
    image: "bg-amber-100", // Gold/Copper context
  },

  // --- DUST CONTROL PROJECTS ---
  {
    id: 7,
    client: "PT Semen Tuban",
    location: "East Java",
    category: "Dust Control",
    image: "bg-blue-100",
  },
  {
    id: 8,
    client: "PT Semen Tonasa",
    location: "South Sulawesi",
    category: "Dust Control",
    image: "bg-slate-300",
  },
  {
    id: 9,
    client: "Festival Dragon Boat",
    location: "Riau",
    category: "Dust Control",
    image: "bg-cyan-100", // Water/Event context
  },

  // --- ROAD HARDNESS PROJECTS ---
  {
    id: 10,
    client: "Festival Dragon Boat",
    location: "Riau",
    category: "Road Hardness",
    image: "bg-amber-50", // Soil context
  },
];

const categories = ["All", "NEDA", "Dust Control", "Road Hardness"];

export function ProjectGallery() {
  const [filter, setFilter] = useState("All");

  // Filter Logic
  const filteredProjects = projects.filter(
    (p) => filter === "All" || p.category === filter
  );

  return (
    <div className="space-y-12">
      {/* --- FILTER BUTTONS --- */}
      <FadeIn className="flex flex-wrap justify-center gap-4">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={cn(
              "px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 border",
              filter === cat
                ? "bg-brand-600 text-white border-brand-600 shadow-lg shadow-brand-600/20"
                : "bg-white text-slate-600 border-slate-200 hover:border-brand-600 hover:text-brand-600"
            )}
          >
            {cat}
          </button>
        ))}
      </FadeIn>

      {/* --- GALLERY GRID --- */}
      <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              layout
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="group h-full"
            >
              <div className="h-full bg-white rounded-3xl border border-slate-100 overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col">
                {/* IMAGE SECTION */}
                <div
                  className={cn(
                    "h-56 w-full relative overflow-hidden",
                    project.image
                  )}
                >
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                  {/* Category Tag */}
                  <span
                    className={cn(
                      "absolute top-4 left-4 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm backdrop-blur-md",
                      project.category === "NEDA"
                        ? "bg-emerald-100/90 text-emerald-700"
                        : "bg-white/90 text-slate-700"
                    )}
                  >
                    {project.category}
                  </span>
                </div>

                {/* CONTENT SECTION (Simplified) */}
                <div className="p-6 flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 leading-tight mb-1 group-hover:text-brand-600 transition-colors">
                      {project.client}
                    </h3>
                    <div className="flex items-center gap-1 text-slate-500 text-xs font-medium">
                      <MapPin className="h-3 w-3" />
                      {project.location}
                    </div>
                  </div>

                  <div className="h-10 w-10 bg-slate-50 rounded-full flex items-center justify-center group-hover:bg-brand-600 group-hover:text-white transition-all shrink-0 ml-4">
                    <ArrowUpRight className="h-5 w-5" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
