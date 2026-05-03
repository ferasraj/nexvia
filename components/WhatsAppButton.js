"use client";

import { FaWhatsapp } from "react-icons/fa";
import { usePathname } from "next/navigation";

export default function WhatsAppButton() {
  const pathname = usePathname();

  const locale = pathname.startsWith("/ar") ? "ar" : "en";

  const phoneNumber = "201108099414"; // رقم Nexvia على واتساب

  const message =
    locale === "ar"
      ? "مرحبًا Nexvia، أريد الاستفسار عن خدماتكم العقارية."
      : "Hello Nexvia, I would like to inquire about your real estate services.";

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message,
  )}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contact Nexvia on WhatsApp"
      className={`animate-bounce fixed z-50 flex items-center justify-center rounded-full bg-green-500 text-white shadow-lg shadow-green-500/30 transition duration-300 hover:scale-110 hover:bg-green-400

      // Position
      bottom-4 sm:bottom-6 lg:bottom-8
      ${locale === "ar" ? "left-4 sm:left-6 lg:left-8" : "right-4 sm:right-6 lg:right-8"}

      // Size
      h-12 w-12 sm:h-14 sm:w-14 lg:h-16 lg:w-16
      `}
    >
      <FaWhatsapp className="text-xl sm:text-2xl lg:text-3xl" />
    </a>
  );
}
