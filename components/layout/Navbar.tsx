"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const pathname = usePathname();
  const isHome = pathname === "/";
  const isNeda = pathname === "/neda";
  // 1. Handle Scroll Logic
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 2. Handle Mobile Scroll Locking
  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileOpen]);

  const navLinks = [
    { name: "Services", href: "/services" },
    { name: "NEDA Tech", href: "/neda" },
    // { name: "Fleet", href: "/fleet" },
    { name: "Projects", href: "/projects" },
  ];

  const getTextColor = () => {
    if (isScrolled) return "text-slate-900"; // Always dark when scrolled (Pill mode)
    if (isHome || isNeda) return "text-white"; // White on Home Hero
    return "text-slate-900"; // Dark on White Pages (Fleet, Services)
  };
  const textColorClass = getTextColor();

  return (
    <>
      {/* WRAPPER: Used to center the navbar when it becomes a floating pill */}
      <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pointer-events-none">
        <header
          className={cn(
            "pointer-events-auto transition-all duration-500 ease-in-out flex items-center justify-between",
            // --- DYNAMIC SHAPE LOGIC ---
            isScrolled
              ? "mt-4 py-3 px-6 w-[92%] md:w-auto md:min-w-[800px] rounded-full bg-white/70 backdrop-blur-xl shadow-xl border border-white/40" // ROUNDED PILL MODE
              : "w-full py-6 px-6 md:px-12 bg-transparent border-transparent" // FULL WIDTH MODE
          )}
        >
          {/* LOGO */}
          <Link href="/" className="flex items-center gap-2 z-50 group">
            <div
              className={cn(
                "h-9 w-9 rounded-full flex items-center justify-center shadow-lg group-hover:scale-105 transition-all duration-300",
                isScrolled
                  ? "bg-brand-600 text-white"
                  : "bg-white text-brand-600"
              )}
            >
              <span className="font-bold text-lg">E</span>
            </div>
            <span
              className={cn(
                "font-bold text-xl tracking-tight transition-colors duration-300",
                isScrolled ? "text-slate-900" : "text-white"
              )}
            >
              EcoBuild
              <span className={isScrolled ? "text-brand-600" : "text-white"}>
                .
              </span>
            </span>
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300",
                  textColorClass,
                  // Hover states need to handle the context too
                  isScrolled
                    ? "hover:text-brand-600 hover:bg-slate-100/50"
                    : isHome
                    ? "hover:text-white hover:bg-white/10"
                    : "hover:text-brand-600 hover:bg-slate-100"
                )}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* ACTIONS */}
          <div className="hidden md:flex items-center gap-4">
            <div
              className={cn(
                "flex flex-col items-end text-xs font-semibold mr-2 transition-all duration-300",
                isScrolled
                  ? "size-0 opacity-0 overflow-hidden"
                  : `w-auto opacity-100 ${textColorClass}`
              )}
            >
              <span>WhatsApp Support</span>
              <span className="opacity-70">+62 882 005 779 991</span>
            </div>

            <Button
              className={cn(
                "rounded-full transition-all shadow-lg",
                // If transparent & Home -> White Button. Else -> Brand Button
                !isScrolled && isHome
                  ? "bg-white hover:bg-slate-200 text-brand-900"
                  : "bg-brand-600 hover:bg-brand-700 text-white"
              )}
            >
              Get Quote
            </Button>
          </div>

          {/* MOBILE TOGGLE */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="md:hidden z-50 p-2 focus:outline-none"
          >
            {isMobileOpen ? (
              <X className="text-slate-900 h-6 w-6" />
            ) : (
              <Menu
                className={cn(
                  "h-6 w-6 transition-colors",
                  isScrolled ? "text-slate-900" : "text-white"
                )}
              />
            )}
          </button>
        </header>
      </div>

      {/* MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-white/95 backdrop-blur-2xl flex flex-col justify-center items-center gap-8 md:hidden"
          >
            {navLinks.map((link, i) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.1 }}
              >
                <Link
                  href={link.href}
                  onClick={() => setIsMobileOpen(false)}
                  className="text-3xl font-bold text-slate-900 hover:text-brand-600 transition-colors"
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="w-full max-w-xs px-6 mt-8"
            >
              <Button
                size="lg"
                className="w-full rounded-full bg-brand-600 hover:bg-brand-700 text-white h-14 text-lg shadow-xl shadow-brand-600/20"
              >
                <Phone className="mr-2 h-5 w-5" /> Call Dispatch
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
