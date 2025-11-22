"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  AlertTriangle,
  CheckCircle2,
  XCircle,
  ShieldAlert,
  Clock,
  Volume2,
} from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Represents a single comparison metric data point.
 *
 * @typedef {Object} MetricItem
 * @property {string} label - The title of the comparison category.
 * @property {string} traditional - The value/result for the traditional method.
 * @property {string} neda - The value/result for the NEDA method.
 * @property {LucideIcon} icon - The Lucide React icon component associated with the metric.
 */

/**
 * A static configuration array defining the comparison points between
 * Traditional Blasting and NEDA (Non-Explosive Demolition Agent) technology.
 *
 * @type {MetricItem[]}
 */
const metrics = [
  {
    label: "Safety Radius",
    traditional: "500m Evacuation",
    neda: "50m Safe Zone",
    icon: ShieldAlert,
  },
  {
    label: "Operational Downtime",
    traditional: "2-4 Hours",
    neda: "Zero Downtime",
    icon: Clock,
  },
  {
    label: "Ground Vibration",
    traditional: "High Risk",
    neda: "None (Silent)",
    icon: Volume2,
  },
  {
    label: "Permit Complexity",
    traditional: "High (Police/Gov)",
    neda: "Low (Non-Explosive)",
    icon: AlertTriangle,
  },
];

/**
 * Renders a side-by-side comparison interface highlighting the differences
 * between Traditional Blasting and NEDA Technology.
 *
 * Features:
 * - Responsive layout (stacks on mobile, side-by-side on desktop).
 * - Interactive row highlighting using local state.
 * - Framer Motion animations for entry effects.
 * - Visual styling using Tailwind CSS to distinguish between "danger" (Traditional) and "safe" (NEDA) states.
 *
 * @returns {JSX.Element} The rendered comparison component.
 */
export function TechComparison() {
  const [hoveredRow, setHoveredRow] = useState<number | null>(null);

  return (
    <div className="w-full bg-slate-900 rounded-3xl border border-slate-800 overflow-hidden flex flex-col md:flex-row">
      <div className="flex-1 p-8 border-b md:border-b-0 md:border-r border-slate-800 bg-slate-900/50">
        <div className="flex items-center gap-3 mb-8 opacity-70">
          <div className="p-2 bg-red-500/10 rounded-lg">
            <AlertTriangle className="text-red-500 h-6 w-6" />
          </div>
          <h3 className="text-xl font-bold text-red-500">
            Traditional Blasting
          </h3>
        </div>

        <div className="space-y-6">
          {metrics.map((metric, i) => (
            <div
              key={i}
              onMouseEnter={() => setHoveredRow(i)}
              onMouseLeave={() => setHoveredRow(null)}
              className={cn(
                "flex items-center justify-between p-4 rounded-xl border border-transparent transition-all duration-300",
                hoveredRow === i ? "bg-red-500/5 border-red-500/20" : ""
              )}
            >
              <div className="flex flex-col">
                <span className="text-xs text-slate-500 uppercase tracking-wider font-semibold mb-1">
                  {metric.label}
                </span>
                <span className="text-slate-300 font-medium flex items-center gap-2">
                  <XCircle className="h-4 w-4 text-red-500" />
                  {metric.traditional}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex-1 p-8 bg-gradient-to-b from-emerald-950/30 to-transparent relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 blur-[100px] rounded-full pointer-events-none" />

        <div className="flex items-center gap-3 mb-8">
          <div className="p-2 bg-emerald-500/10 rounded-lg">
            <CheckCircle2 className="text-emerald-500 h-6 w-6" />
          </div>
          <div className="flex flex-col">
            <h3 className="text-xl font-bold text-white leading-none">
              NEDA Technology
            </h3>
            <span className="text-xs text-emerald-500 mt-1 font-medium">
              Non-Explosive Demolition Agent
            </span>
          </div>
        </div>

        <div className="space-y-6 relative z-10">
          {metrics.map((metric, i) => (
            <motion.div
              key={i}
              onMouseEnter={() => setHoveredRow(i)}
              onMouseLeave={() => setHoveredRow(null)}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className={cn(
                "flex items-center justify-between p-4 rounded-xl border transition-all duration-300",
                hoveredRow === i
                  ? "bg-emerald-500/10 border-emerald-500/30 shadow-lg shadow-emerald-500/5"
                  : "bg-emerald-900/20 border-emerald-500/10"
              )}
            >
              <div className="flex flex-col">
                <span className="text-xs text-emerald-400/70 uppercase tracking-wider font-semibold mb-1">
                  {metric.label}
                </span>
                <span className="text-white font-bold flex items-center gap-2 text-lg">
                  <CheckCircle2 className="h-5 w-5 text-emerald-400" />
                  {metric.neda}
                </span>
              </div>

              <div
                className={cn(
                  "p-2 rounded-full transition-colors",
                  hoveredRow === i
                    ? "bg-emerald-500 text-white"
                    : "bg-emerald-500/20 text-emerald-500"
                )}
              >
                <metric.icon className="h-5 w-5" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
