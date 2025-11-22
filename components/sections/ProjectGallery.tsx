"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FadeIn } from "@/components/animations/FadeIn";
import { MapPin, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Represents the structure of a project case study.
 *
 * @typedef {Object} Project
 * @property {number} id - Unique identifier for the project.
 * @property {string} client - Name of the client organization.
 * @property {string} location - Geographical location of the project.
 * @property {string} category - The type of service provided (e.g., NEDA, Dust Control).
 * @property {string} image - URL path to the project's representative image.
 */

/**
 * Static dataset of client projects used to populate the gallery.
 * @type {Project[]}
 */
const projects = [
  {
    id: 1,
    client: "PT Adijaya Karya Nusantara",
    location: "Indonesia",
    category: "NEDA",
    image: "/pt-akm-1.jpg",
  },
  {
    id: 2,
    client: "PT Vale Soroako",
    location: "South Sulawesi",
    category: "NEDA",
    image: "/pt-vale-1.jpg",
  },
  {
    id: 3,
    client: "Tirta Bara Laksana",
    location: "Yogyakarta",
    category: "NEDA",
    image: "/tirta-bara-laksana-1.jpg",
  },
  {
    id: 4,
    client: "PT Semen Baturaja",
    location: "South Sumatra",
    category: "NEDA",
    image: "/semen-baturaja-1.jpg",
  },
  {
    id: 5,
    client: "PT Semen Tuban",
    location: "East Java",
    category: "NEDA",
    image: "/semen-tuban-1.jpg",
  },
  {
    id: 6,
    client: "PT Unichem Indonesia",
    location: "Nusa Tenggara",
    category: "NEDA",
    image: "/pt-unichem-1.jpg",
  },
  {
    id: 7,
    client: "PT Semen Tuban",
    location: "East Java",
    category: "Dust Control",
    image: "/semen-tuban-2.jpg",
  },
  {
    id: 8,
    client: "PT Semen Tonasa",
    location: "South Sulawesi",
    category: "Dust Control",
    image: "/pt-tonasa-1.jpg",
  },
  {
    id: 9,
    client: "Festival Dragon Boat",
    location: "Riau",
    category: "Dust Control",
    image: "/dragon-fly-boat-1.jpg",
  },
  {
    id: 10,
    client: "Festival Dragon Boat",
    location: "Riau",
    category: "Road Hardness",
    image: "/dragon-fly-boat-2.jpg",
  },
];

/**
 * Available filter categories for the project gallery.
 * @type {string[]}
 */
const categories = ["All", "NEDA", "Dust Control", "Road Hardness"];

/**
 * Renders an interactive project gallery with category filtering and animations.
 *
 * Behavior:
 * - Displays a list of filter buttons based on the `categories` constant.
 * - Filters the `projects` data based on the currently selected category state.
 * - Renders project cards in a responsive grid layout.
 * - Uses Framer Motion's `AnimatePresence` to animate items in and out during filtering.
 *
 * @returns {JSX.Element} The ProjectGallery component.
 */
export function ProjectGallery() {
  const [filter, setFilter] = useState("All");

  const filteredProjects = projects.filter(
    (p) => filter === "All" || p.category === filter
  );

  return (
    <div className="space-y-12">
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
                <div className="h-56 w-full relative overflow-hidden bg-slate-100">
                  <Image
                    src={project.image}
                    alt={project.client}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <span
                    className={cn(
                      "absolute top-4 left-4 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm backdrop-blur-md z-10",
                      project.category === "NEDA"
                        ? "bg-emerald-100/90 text-emerald-700"
                        : "bg-white/90 text-slate-700"
                    )}
                  >
                    {project.category}
                  </span>
                </div>

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

                  <div className="h-10 w-10 bg-slate-50 rounded-full flex items-center justify-center group-hover:bg-brand-600 group-hover:text-white transition-all shrink-0 ml-4 border border-slate-100 group-hover:border-brand-600">
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
