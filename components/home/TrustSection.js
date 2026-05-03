"use client";

function StatBox({ number, suffix, label }) {
  return (
    <div className="group rounded-3xl border border-white/10 bg-white/[0.04] p-8 shadow-2xl shadow-black/30 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:bg-white/[0.07] hover:border-blue-500/50 hover:shadow-[0_0_25px_rgba(59,130,246,0.15)]">
      <p className="text-4xl font-bold text-blue-400 transition group-hover:text-blue-300">
        {" "}
        {number}
        {suffix}
      </p>

      <p className="mt-2 text-sm text-white/60 transition group-hover:text-white/80">
        {label}
      </p>
    </div>
  );
}

export default function TrustSection({ locale }) {
  const stats = [
    { number: 500, suffix: "+", en: "Properties Available", ar: "عقار متاح" },
    { number: 150, suffix: "+", en: "Happy Clients", ar: "عميل راضٍ" },
    { number: 20, suffix: "+", en: "Projects", ar: "مشروع" },
    { number: 5, suffix: "+", en: "Years Experience", ar: "سنوات خبرة" },
  ];

  return (
    <section className="bg-[#050814] px-4 py-20 text-white">
      <div className="mx-auto max-w-7xl text-center">
        <h2 className="text-3xl font-bold md:text-5xl">
          {locale === "ar" ? "نكسفيا بالأرقام" : "Nexvia in Numbers"}
        </h2>

        <p className="mt-4 text-white/60">
          {locale === "ar"
            ? "أرقام تعكس خبرتنا وثقة عملائنا"
            : "Numbers that reflect our experience and client trust"}
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <StatBox
              key={stat.en}
              number={stat.number}
              suffix={stat.suffix}
              label={locale === "ar" ? stat.ar : stat.en}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
