"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

/**
 * Navigation configuration links.
 */
const navLinks = [
  { name: "Services", href: "/services" },
  { name: "NEDA Tech", href: "/neda" },
  { name: "Projects", href: "/projects" },
];

/**
 * A responsive, dynamic navigation bar component.
 *
 * Features:
 * - **Adaptive Styling:** Starts as a full-width transparent header on specific "Hero" pages (Home, NEDA).
 * - **Scroll Transformation:** Morphs into a floating, blurred "pill" shape with a white background upon scrolling.
 * - **Route Awareness:** Automatically detects the current path to toggle text colors (light for dark backgrounds, dark for light backgrounds).
 * - **Mobile Optimization:** Includes a full-screen animated overlay menu and locks body scroll when open.
 *
 * @returns {JSX.Element} The Navbar component.
 */
export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const pathname = usePathname();

  const isHome = pathname === "/";
  const isNeda = pathname === "/neda";
  const isProjects = pathname === "/projects";
  const isContact = pathname === "/contact";
    const isServices = pathname === "/services";
  const isFleet = pathname === "/fleet";

  /**
   * Determines if the navbar should be transparent based on the current route
   * and scroll position.
   * Transparency is only applied at the top of the page (not scrolled)
   * and only on specific pages (Home, NEDA) or pages that are not explicitly light-themed.
   */
  const isTransparentNav =
    !isScrolled && (isHome || isNeda || !(isProjects || isContact || isServices));

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileOpen]);

  /**
   * Helper to determine text color classes based on scroll state and page context.
   * @returns {string} Tailwind text color class.
   */
  const getTextColor = () => {
    if (isScrolled) return "text-slate-900";
    if (isHome || isNeda || !(isProjects || isContact || isServices))
      return "text-white";
    return "text-slate-900";
  };

  const textColorClass = getTextColor();

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pointer-events-none">
        <header
          className={cn(
            "pointer-events-auto transition-all duration-500 ease-in-out flex items-center justify-between",
            isScrolled
              ? "mt-4 py-3 px-6 w-[92%] md:w-auto md:min-w-[800px] rounded-full bg-white/70 backdrop-blur-xl shadow-xl border border-white/40"
              : "w-full py-6 px-6 md:px-12 bg-transparent border-transparent"
          )}
        >
          <Link href="/" className="flex items-center gap-3 z-50 group">
            <div className="relative h-10 w-8 group-hover:scale-105 transition-transform duration-300">
              <Image
                src="/logo.svg"
                alt="Menara Merah Putih Logo"
                fill
                className={cn(
                  "object-contain transition-all duration-300",
                  isTransparentNav && "brightness-0 invert"
                )}
                priority
              />
            </div>
            <span
              className={cn(
                "font-black text-xl tracking-tight transition-colors duration-300",
                isTransparentNav ? "text-white" : "text-brand-600"
              )}
            >
              Menara Merah Putih
              <span
                className={isTransparentNav ? "text-white" : "text-brand-600"}
              >
                .
              </span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300",
                  textColorClass,
                  isScrolled
                    ? "hover:text-brand-600 hover:bg-slate-100/50"
                    : isHome || isNeda
                    ? "hover:text-white hover:bg-white/10"
                    : "hover:text-brand-600 hover:bg-slate-100"
                )}
              >
                {link.name}
              </Link>
            ))}
          </nav>

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

            <Link href={"/contact"}>
              <Button
                className={cn(
                  "rounded-full transition-all shadow-lg cursor-pointer",
                  isTransparentNav
                    ? "bg-white hover:bg-slate-200 text-brand-900"
                    : "bg-brand-600 hover:bg-brand-700 text-white"
                )}
              >
                Get Quote
              </Button>
            </Link>
          </div>

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
                  isHome || isNeda ? "text-white" : "text-slate-900"
                )}
              />
            )}
          </button>
        </header>
      </div>

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
              <Link href={"/contact"} onClick={() => setIsMobileOpen(false)}>
                <Button
                  size="lg"
                  className="w-full rounded-full bg-brand-600 hover:bg-brand-700 text-white h-14 text-lg shadow-xl shadow-brand-600/20"
                >
                  <Phone className="mr-2 h-5 w-5" /> Call Dispatch
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
