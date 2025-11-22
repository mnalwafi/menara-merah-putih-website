"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Loader2, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

/**
 * Renders a custom SVG icon for WhatsApp.
 *
 * @param {Object} props - The component props.
 * @param {string} [props.className] - Optional CSS class names for styling the SVG.
 * @returns {JSX.Element} The SVG icon component.
 */
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

/**
 * A contact form component that captures user inquiry details and redirects
 * them to WhatsApp with a pre-formatted message.
 *
 * Features:
 * - Captures Name, Email, Company, Phone, and Project Details.
 * - Allows selection between multiple service types (NEDA, Chemicals, General).
 * - Handles form submission state (loading vs. idle).
 * - Redirects to the specific WhatsApp API URL upon successful submission.
 * - Displays a success message/instruction after the redirect triggers.
 *
 * @returns {JSX.Element} The rendered contact form.
 */
export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success">(
    "idle"
  );
  const [service, setService] = useState("NEDA");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    details: "",
  });

  /**
   * Updates the form data state when input fields change.
   * @param {React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>} e - The change event.
   */
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  /**
   * Handles the form submission.
   * Simulates a network request, formats the data into a WhatsApp message string,
   * opens the WhatsApp API in a new tab, and updates the UI state.
   *
   * @param {React.FormEvent} e - The form submission event.
   */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    await new Promise((resolve) => setTimeout(resolve, 1000));

    const phoneNumber = "62882005779991";
    const message =
      `*New Quotation Request - Menara Merah Putih Website*%0a%0a` +
      `*Service:* ${service}%0a` +
      `*Name:* ${formData.name}%0a` +
      `*Company:* ${formData.company}%0a` +
      `*Email:* ${formData.email}%0a` +
      `*Phone:* ${formData.phone}%0a` +
      `---------------------------%0a` +
      `*Details:*%0a${formData.details}`;

    const waURL = `https://wa.me/${phoneNumber}?text=${message}`;

    window.open(waURL, "_blank");

    setStatus("success");
  };

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-emerald-50 border border-emerald-100 rounded-3xl p-12 text-center h-full flex flex-col items-center justify-center min-h-[500px]"
      >
        <div className="h-16 w-16 bg-emerald-100 rounded-full flex items-center justify-center mb-6">
          <WhatsAppIcon className="h-8 w-8 text-emerald-600" />
        </div>
        <h3 className="text-2xl font-bold text-emerald-900 mb-2">
          Redirecting to WhatsApp...
        </h3>
        <p className="text-emerald-700 max-w-xs mx-auto mb-8">
          Please click "Send" in your WhatsApp app to complete the request. Our
          dispatch team will reply shortly.
        </p>
        <Button
          variant="outline"
          className="border-emerald-200 text-emerald-700 hover:bg-emerald-100"
          onClick={() => setStatus("idle")}
        >
          New Request
        </Button>
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-3xl p-8 border border-slate-200 shadow-2xl shadow-slate-200/50 relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-2 bg-brand-600" />

      <div className="mb-8">
        <h3 className="text-2xl font-bold text-slate-900 mb-2">
          Request a Quotation
        </h3>
        <p className="text-slate-500 text-sm">
          Please provide project volume (BCM) or road length (km) for accurate
          estimation.
        </p>
      </div>

      <div className="space-y-5">
        <div className="grid grid-cols-3 gap-2 p-1 bg-slate-100 rounded-lg mb-6">
          {["NEDA", "Chemicals", "General"].map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => setService(s)}
              className={`text-sm font-bold py-2.5 rounded-md transition-all ${
                service === s
                  ? "bg-white text-brand-600 shadow-sm ring-1 ring-slate-200"
                  : "text-slate-500 hover:text-slate-900"
              }`}
            >
              {s}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">
              Full Name
            </label>
            <Input
              id="name"
              onChange={handleChange}
              placeholder="John Doe"
              required
              className="bg-slate-50 border-slate-200 h-12 focus:border-brand-500 focus:ring-brand-500/20"
            />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">
              Company Email
            </label>
            <Input
              id="email"
              type="email"
              onChange={handleChange}
              placeholder="john@mining-corp.com"
              required
              className="bg-slate-50 border-slate-200 h-12 focus:border-brand-500 focus:ring-brand-500/20"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">
              Company Name
            </label>
            <Input
              id="company"
              onChange={handleChange}
              placeholder="PT. Mining Sejahtera"
              className="bg-slate-50 border-slate-200 h-12 focus:border-brand-500 focus:ring-brand-500/20"
            />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">
              WhatsApp / Phone
            </label>
            <Input
              id="phone"
              onChange={handleChange}
              placeholder="+62..."
              className="bg-slate-50 border-slate-200 h-12 focus:border-brand-500 focus:ring-brand-500/20"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">
            Project Details
          </label>
          <Textarea
            id="details"
            onChange={handleChange}
            placeholder={
              service === "NEDA"
                ? "Est. Rock Volume (BCM), Rock Hardness, Location..."
                : service === "Chemicals"
                ? "Road Length (km), Coal Tonnage, Dust Issue..."
                : "How can we help you?"
            }
            className="bg-slate-50 border-slate-200 min-h-[120px] resize-none p-4 focus:border-brand-500 focus:ring-brand-500/20"
          />
        </div>

        <Button
          type="submit"
          disabled={status === "submitting"}
          className="w-full h-14 text-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold shadow-lg shadow-emerald-600/20 mt-2"
        >
          {status === "submitting" ? (
            <Loader2 className="h-5 w-5 animate-spin" />
          ) : (
            <span className="flex items-center gap-2">
              Continue to WhatsApp <WhatsAppIcon className="size-6" />
            </span>
          )}
        </Button>

        <div className="flex items-center justify-center gap-2 text-xs text-slate-400 mt-4">
          <AlertCircle className="h-3 w-3" />
          <span>Fastest response via WhatsApp (Avg 10 mins).</span>
        </div>
      </div>
    </form>
  );
}
