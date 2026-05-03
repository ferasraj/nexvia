import Image from "next/image";

const testimonials = [
  {
    name: {
      en: "Abdullah Al-Harbi",
      ar: "عبدالله الحربي",
    },
    role: {
      en: "Saudi client — rented then purchased",
      ar: "عميل سعودي — استأجر ثم اشترى",
    },
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop",
    quote: {
      en: "I first contacted Nexvia to rent a furnished apartment in Cairo. The experience was smooth, and later they helped me find a strong property investment opportunity.",
      ar: "تواصلت مع نكسفيا في البداية لاستئجار شقة مفروشة في القاهرة، وكانت التجربة سهلة ومنظمة، وبعدها ساعدوني أختار فرصة شراء مناسبة للاستثمار",
    },
  },
  {
    name: {
      en: "Ahmed Mostafa",
      ar: "أحمد مصطفى",
    },
    role: {
      en: "Egyptian buyer",
      ar: "مشتري مصري",
    },
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop",
    quote: {
      en: "Nexvia helped me compare resale options clearly and guided me through the decision without pressure. The process felt professional from the first call.",
      ar: "نكسفيا ساعدوني أقارن بين فرص الريسيل بوضوح، ووجهوني للاختيار المناسب بدون ضغط. التجربة كانت احترافية من أول مكالمة",
    },
  },
  {
    name: {
      en: "Michael Anderson",
      ar: "مايكل أندرسون",
    },
    role: {
      en: "American tenant",
      ar: "مستأجر أمريكي",
    },
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400&auto=format&fit=crop",
    quote: {
      en: "Finding a furnished apartment in Cairo was much easier with Nexvia. They understood what I needed and arranged options quickly.",
      ar: "كان إيجاد شقة مفروشة في القاهرة أسهل بكثير مع نكسفيا. فهموا احتياجي بسرعة ورتبوا لي خيارات مناسبة",
    },
  },
];

export default function TestimonialsSection({ locale }) {
  return (
    <section className="bg-[#050814] px-4 py-20 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-3xl">
          <span className="mb-3 inline-flex rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-300">
            {locale === "ar" ? "آراء العملاء" : "Client Testimonials"}
          </span>

          <h2 className="text-3xl font-bold md:text-5xl">
            {locale === "ar"
              ? "ثقة تبدأ من تجربة حقيقية"
              : "Trust built through real experiences"}
          </h2>

          <p className="mt-4 text-base leading-7 text-white/60">
            {locale === "ar"
              ? "نماذج من تجارب عملاء تعاملوا مع نكسفيا في الإيجار والشراء."
              : "Stories from clients who worked with Nexvia across rentals and purchases."}
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <article
              key={index}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition hover:-translate-y-1 hover:border-blue-500/40"
            >
              <div className="mb-6 flex items-center gap-4">
                <div className="relative h-14 w-14 overflow-hidden rounded-full border border-blue-500/30">
                  <Image
                    src={item.image}
                    alt={item.name[locale]}
                    fill
                    className="object-cover"
                    sizes="56px"
                  />
                </div>

                <div>
                  <h3 className="font-bold text-white">{item.name[locale]}</h3>
                  <p className="mt-1 text-sm text-white/50">
                    {item.role[locale]}
                  </p>
                </div>
              </div>

              <div className="mb-4 flex gap-1 text-blue-400">{"★★★★★"}</div>

              <p className="text-sm leading-7 text-white/65">
                “{item.quote[locale]}”
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
