"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/animations/FadeIn";
import {
  HardHat,
  ArrowLeft,
  Construction,
  FlaskConical,
  Check,
} from "lucide-react";
import { motion } from "framer-motion";

/**
 * A custom 404 Not Found page component.
 *
 * Features:
 * - Displays a standard "Page Not Found" message with mining-themed copy.
 * - Provides a primary call-to-action to return to the homepage.
 * - Includes an interactive "Rock Breaker" mini-game to demonstrate the NEDA technology concept.
 * - Uses Framer Motion for state transitions and visual effects.
 *
 * @returns {JSX.Element} The rendered 404 page.
 */
export default function NotFound() {
  const [rockState, setRockState] = useState<"intact" | "injecting" | "broken">(
    "intact"
  );

  /**
   * Handles the interaction logic for the rock breaking simulation.
   * 1. Sets state to 'injecting' to show the progress bar.
   * 2. Sets a timeout to transition to 'broken' state after 2 seconds.
   */
  const handleBreakRock = () => {
    if (rockState !== "intact") return;

    setRockState("injecting");

    setTimeout(() => {
      setRockState("broken");
    }, 2000);
  };

  return (
    <div className="h-screen w-full bg-slate-950 flex items-center justify-center relative overflow-hidden text-white">
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-brand-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container relative z-10 text-center">
        <FadeIn>
          <div className="mx-auto h-24 w-24 bg-slate-900 rounded-3xl border border-slate-800 flex items-center justify-center mb-8 relative group">
            <div className="absolute inset-0 bg-brand-600/20 blur-xl group-hover:bg-brand-600/30 transition-all duration-500" />
            <Construction className="h-10 w-10 text-brand-500 relative z-10" />
          </div>

          <h1 className="text-7xl md:text-9xl font-bold text-white mb-4 tracking-tighter opacity-90">
            404
          </h1>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-200 mb-6">
            We've hit bedrock.
          </h2>
          <p className="text-slate-400 max-w-md mx-auto mb-10 text-lg leading-relaxed">
            The page you are looking for doesn't exist or has been moved during
            our latest site excavation.
          </p>

          <div className="flex justify-center gap-4 mb-16">
            <Link href="/">
              <Button
                size="lg"
                className="bg-brand-600 hover:bg-brand-700 text-white border-0 px-8 shadow-xl shadow-brand-900/50"
              >
                <ArrowLeft className="mr-2 h-5 w-5" /> Return to Surface
              </Button>
            </Link>
          </div>

          <div className="border-t border-slate-800 pt-10 max-w-sm mx-auto">
            <p className="text-slate-500 text-sm font-mono mb-6 uppercase tracking-widest">
              Or clear the path yourself
            </p>

            <div
              onClick={handleBreakRock}
              className={`
                    relative h-40 w-full bg-slate-900/50 rounded-2xl border-2 border-dashed border-slate-800 
                    flex flex-col items-center justify-center cursor-pointer overflow-hidden transition-all duration-300
                    ${
                      rockState === "intact"
                        ? "hover:border-emerald-500/50 hover:bg-emerald-900/10"
                        : ""
                    }
                    ${
                      rockState === "broken"
                        ? "border-emerald-500/20 bg-emerald-900/10"
                        : ""
                    }
                `}
            >
              {rockState === "intact" && (
                <motion.div
                  initial={{ scale: 0.9 }}
                  whileHover={{ scale: 1 }}
                  className="text-center"
                >
                  <div className="h-12 w-12 mx-auto bg-slate-800 rounded-xl flex items-center justify-center mb-2 shadow-lg">
                    <FlaskConical className="h-6 w-6 text-emerald-500" />
                  </div>
                  <p className="text-emerald-400 font-bold text-sm">
                    Inject NEDA Agent
                  </p>
                  <p className="text-slate-600 text-xs mt-1">
                    Click to break rock
                  </p>
                </motion.div>
              )}

              {rockState === "injecting" && (
                <div className="w-full px-8 text-center">
                  <div className="mb-2 flex justify-between text-xs font-bold text-emerald-500 uppercase">
                    <span>Expanding...</span>
                    <span>18,000 PSI</span>
                  </div>
                  <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: "0%" }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 2 }}
                      className="h-full bg-emerald-500"
                    />
                  </div>
                  <motion.p
                    animate={{ x: [-1, 1, -1, 1, 0] }}
                    transition={{ repeat: Infinity, duration: 0.2 }}
                    className="text-slate-500 text-xs mt-3"
                  >
                    Generating micro-cracks...
                  </motion.p>
                </div>
              )}

              {rockState === "broken" && (
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="text-center"
                >
                  <div className="h-12 w-12 mx-auto bg-emerald-500/20 rounded-full flex items-center justify-center mb-2">
                    <Check className="h-6 w-6 text-emerald-500" />
                  </div>
                  <p className="text-emerald-400 font-bold">Path Cleared!</p>
                  <Link
                    href="/neda"
                    className="text-xs text-slate-400 hover:text-white underline mt-1 block"
                  >
                    View NEDA Tech Specs
                  </Link>
                </motion.div>
              )}

              {rockState === "broken" && (
                <>
                  <div className="absolute top-0 left-1/4 w-0.5 h-full bg-slate-950/50 -rotate-12" />
                  <div className="absolute top-1/3 left-0 w-full h-0.5 bg-slate-950/50 rotate-12" />
                </>
              )}
            </div>
          </div>
        </FadeIn>
      </div>

      <div className="absolute bottom-8 left-0 w-full text-center">
        <p className="text-slate-600 text-xs font-mono flex items-center justify-center gap-2">
          <HardHat className="h-3 w-3" /> Menara Merah Putih Mining Services
          System
        </p>
      </div>
    </div>
  );
}
