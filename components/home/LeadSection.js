"use client";

import { useState } from "react";
import Link from "next/link";

export default function LeadSection({ locale }) {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    interest: "",
  });

  const isAr = locale === "ar";

  const whatsappText = encodeURIComponent(
    isAr
      ? `مرحبًا، اسمي ${form.name || "عميل جديد"}، رقمي ${form.phone || ""}، وأريد الاستفسار عن ${form.interest || "خدمات Nexvia العقارية"}.`
      : `Hello, my name is ${form.name || "New client"}, my phone is ${form.phone || ""}, and I want to ask about ${form.interest || "Nexvia real estate services"}.`,
  );

  return (
    <section className="bg-[#050814] px-4 py-20 text-white">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_0.85fr] lg:items-center">
        <div>
          <span className="mb-3 inline-flex rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-300">
            {isAr ? "ابدأ الآن" : "Start Your Journey"}
          </span>

          <h2 className="max-w-3xl text-3xl font-bold md:text-5xl">
            {isAr
              ? "جاهز للخطوة العقارية القادمة؟"
              : "Ready for your next real estate move?"}
          </h2>

          <p className="mt-4 max-w-2xl text-base leading-7 text-white/60">
            {isAr
              ? "اترك بياناتك أو تواصل معنا مباشرة عبر واتساب، وسنساعدك في اختيار العقار المناسب سواء للإيجار، الشراء، أو الاستثمار."
              : "Leave your details or contact us directly on WhatsApp, and we’ll help you find the right property for rent, purchase, or investment."}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href={`https://wa.me/201108099414?text=${whatsappText}`}
              target="_blank"
              className="inline-flex rounded-full bg-blue-600 px-7 py-4 text-sm font-bold text-white transition hover:bg-blue-500"
            >
              {isAr ? "تواصل عبر واتساب" : "Chat on WhatsApp"}
            </Link>

            <Link
              href={`/${locale}/contact`}
              className="inline-flex rounded-full border border-white/15 px-7 py-4 text-sm font-bold text-white transition hover:border-blue-400 hover:text-blue-300"
            >
              {isAr ? "صفحة التواصل" : "Contact Page"}
            </Link>
          </div>
        </div>

        <form className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 shadow-2xl shadow-black/20">
          <div className="grid gap-4">
            <div>
              <label className="mb-2 block text-sm text-white/60">
                {isAr ? "الاسم" : "Name"}
              </label>
              <input
                type="text"
                value={form.name}
                onChange={(e) =>
                  setForm((prev) => ({ ...prev, name: e.target.value }))
                }
                placeholder={isAr ? "اكتب اسمك" : "Enter your name"}
                className="w-full rounded-2xl border border-white/10 bg-[#050814] px-4 py-4 text-white outline-none transition placeholder:text-white/30 focus:border-blue-500"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm text-white/60">
                {isAr ? "رقم الهاتف" : "Phone number"}
              </label>
              <input
                type="tel"
                value={form.phone}
                onChange={(e) =>
                  setForm((prev) => ({ ...prev, phone: e.target.value }))
                }
                placeholder={isAr ? "مثال: 010..." : "Example: +20..."}
                className="w-full rounded-2xl border border-white/10 bg-[#050814] px-4 py-4 text-white outline-none transition placeholder:text-white/30 focus:border-blue-500"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm text-white/60">
                {isAr ? "ما الذي تبحث عنه؟" : "What are you looking for?"}
              </label>
              <select
                value={form.interest}
                onChange={(e) =>
                  setForm((prev) => ({ ...prev, interest: e.target.value }))
                }
                className="w-full rounded-2xl border border-white/10 bg-[#050814] px-4 py-4 text-white outline-none transition focus:border-blue-500"
              >
                <option value="">
                  {isAr ? "اختر نوع الخدمة" : "Choose a service"}
                </option>
                <option value={isAr ? "إيجار" : "Rent"}>
                  {isAr ? "إيجار" : "Rent"}
                </option>
                <option value={isAr ? "شراء" : "Buy"}>
                  {isAr ? "شراء" : "Buy"}
                </option>
                <option value={isAr ? "مشاريع المطورين" : "Developer Projects"}>
                  {isAr ? "مشاريع المطورين" : "Developer Projects"}
                </option>
                <option value={isAr ? "عرض عقار" : "List Property"}>
                  {isAr ? "عرض عقار" : "List Property"}
                </option>
              </select>
            </div>

            <Link
              href={`https://wa.me/201108099414?text=${whatsappText}`}
              target="_blank"
              className="mt-2 inline-flex w-full justify-center rounded-full bg-white px-6 py-4 text-sm font-bold text-[#050814] transition hover:bg-blue-500 hover:text-white"
            >
              {isAr ? "إرسال عبر واتساب" : "Send via WhatsApp"}
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
}
