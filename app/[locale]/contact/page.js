import {
  FaWhatsapp,
  FaEnvelope,
  FaMapMarkerAlt,
  FaUser,
  FaPhoneAlt,
  FaHome,
} from "react-icons/fa";

export default async function ContactPage({ params }) {
  const { locale } = await params;
  const isAr = locale === "ar";

  const content = {
    ar: {
      badge: "تواصل معنا",
      title: "لنجد عقارك القادم معًا",
      desc: "سواء كنت تبحث عن شراء، إيجار، تسويق، أو استثمار عقاري — فريق Nexvia جاهز لمساعدتك في كل خطوة.",
      whatsapp: "تواصل عبر واتساب",
      inquiry: "أرسل استفسارك",
      formTitle: "أخبرنا بما تبحث عنه",
      formDesc: "شاركنا احتياجك وسيتواصل معك فريقنا بأفضل الفرص المناسبة لك.",
      name: "الاسم الكامل",
      phone: "رقم الهاتف",
      property: "نوع العقار",
      message: "اكتب تفاصيل طلبك",
      send: "إرسال الطلب",
      fastTitle: "تفضل تواصل أسرع؟",
      fastDesc:
        "تواصل معنا مباشرة عبر واتساب وسيقوم فريقنا بالرد عليك بأسرع وقت ممكن.",
      locationTitle: "موقعنا",
      locationDesc:
        "يمكنك زيارتنا أو التواصل معنا لمعرفة أفضل الفرص العقارية المناسبة لك.",
      cards: [
        {
          title: "واتساب",
          text: "تحدث مباشرة مع فريقنا للحصول على رد سريع ومساعدة عقارية مناسبة.",
        },
        {
          title: "البريد الإلكتروني",
          text: "أرسل لنا استفسارك وسنعاود التواصل معك في أقرب وقت.",
        },
        {
          title: "الموقع",
          text: "نخدم عملاءنا في القاهرة ومختلف مناطق مصر.",
        },
      ],
    },
    en: {
      badge: "Contact Us",
      title: "Let’s Find Your Next Property Together",
      desc: "Whether you're looking to rent, buy, market, or invest — the Nexvia team is ready to help you every step of the way.",
      whatsapp: "Contact via WhatsApp",
      inquiry: "Send Inquiry",
      formTitle: "Tell Us What You’re Looking For",
      formDesc:
        "Share your requirements and our team will connect you with the best opportunities that match your needs.",
      name: "Full Name",
      phone: "Phone Number",
      property: "Property Type",
      message: "Tell us more about your request",
      send: "Send Inquiry",
      fastTitle: "Prefer a Faster Response?",
      fastDesc:
        "Reach out to us directly on WhatsApp and our team will assist you as soon as possible.",
      locationTitle: "Our Location",
      locationDesc:
        "Visit us or contact our team to discover the best property opportunities for your needs.",
      cards: [
        {
          title: "WhatsApp",
          text: "Talk directly with our team for fast responses and property assistance.",
        },
        {
          title: "Email",
          text: "Send us your inquiry and we’ll get back to you shortly.",
        },
        {
          title: "Location",
          text: "Based in Cairo, serving clients across Egypt.",
        },
      ],
    },
  };

  const t = content[locale] || content.en;

  const address =
    "101 Abdulaziz Al Saud, Al Manyal Al Gharbi, Old Cairo, Cairo Governorate 4240220";

  const contactCards = [
    {
      icon: FaPhoneAlt,
      title: isAr ? "اتصل بنا" : "Call Us",
      text: isAr
        ? "تواصل معنا هاتفيًا للحصول على استشارة عقارية ومساعدة مباشرة."
        : "Call our team directly for property assistance and quick consultation.",
      value: "+201108099414",
    },
    {
      icon: FaEnvelope,
      title: t.cards[1].title,
      text: t.cards[1].text,
      value: "info@nexvia.com.eg",
    },
    {
      icon: FaMapMarkerAlt,
      title: isAr ? "زورنا" : "Visit Us",
      text: isAr
        ? "يسعدنا استقبالكم في مقر Nexvia لمناقشة أفضل الفرص العقارية المناسبة لكم."
        : "Visit the Nexvia office and meet our team to explore the best property opportunities.",
      value: isAr
        ? "101 شارع عبدالعزيز آل سعود، المنيل الغربي، القاهرة"
        : "101 Abdulaziz Al Saud St, Al Manyal, Cairo",
    },
  ];

  return (
    <main
      dir={isAr ? "rtl" : "ltr"}
      className="min-h-screen overflow-hidden bg-[#070B14] text-white"
    >
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-500/20 blur-[140px]" />
        <div className="absolute bottom-0 right-0 h-[420px] w-[420px] rounded-full bg-cyan-500/10 blur-[130px]" />
      </div>

      <section className="px-4 pb-12 pt-32 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl text-center">
          <span className="inline-flex rounded-full border border-white/10 bg-white/[0.04] px-5 py-2 text-sm text-blue-300 backdrop-blur-xl">
            {t.badge}
          </span>

          <h1 className="mx-auto mt-6 max-w-4xl text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
            {t.title}
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/65 sm:text-lg">
            {t.desc}
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="https://wa.me/201108099414"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-full bg-white px-7 py-4 text-sm font-semibold text-[#07111f] transition-all duration-300 hover:-translate-y-1 hover:bg-green-500 hover:text-white"
            >
              <FaWhatsapp />
              {t.whatsapp}
            </a>

            <a
              href="#contact-form"
              className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-7 py-4 text-sm font-semibold text-white backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/50 hover:bg-white/[0.07]"
            >
              {t.inquiry}
            </a>
          </div>
        </div>
      </section>

      <section className="px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
          {contactCards.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="group rounded-3xl border border-white/10 bg-white/[0.04] p-8 shadow-2xl shadow-black/30 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/50 hover:bg-white/[0.07] hover:shadow-[0_0_25px_rgba(59,130,246,0.15)]"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-300 transition duration-300 group-hover:bg-blue-500 group-hover:text-white">
                  <Icon size={22} />
                </div>

                <h3 className="text-xl font-semibold">{item.title}</h3>

                <p className="mt-4 min-h-[72px] text-sm leading-7 text-white/60">
                  {item.text}
                </p>

                <p
                  dir="ltr"
                  className={`mt-5 text-sm font-medium text-blue-300 ${
                    isAr ? "text-right" : "text-left"
                  }`}
                >
                  {item.value}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      <section id="contact-form" className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Info Card */}
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 shadow-2xl shadow-black/30 backdrop-blur-xl lg:p-10">
            <h2 className="text-3xl font-semibold">{t.formTitle}</h2>

            <p className="mt-5 text-sm leading-8 text-white/60">{t.formDesc}</p>

            {/* WhatsApp Card */}
            <div className="mt-10 rounded-3xl border border-green-500/20 bg-green-500/10 p-6">
              <h3 className="text-xl font-semibold">{t.fastTitle}</h3>

              <p className="mt-3 text-sm leading-7 text-white/60">
                {t.fastDesc}
              </p>

              <a
                href="https://wa.me/201108099414"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-3 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#07111f] transition-all duration-300 hover:-translate-y-1 hover:bg-green-500 hover:text-white"
              >
                <FaWhatsapp />
                {t.whatsapp}
              </a>
            </div>
          </div>

          {/* Form */}

          <form className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-2xl shadow-black/30 backdrop-blur-xl sm:p-8 lg:p-10">
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="relative">
                <FaUser className="absolute top-1/2 -translate-y-1/2 text-white/35 ltr:left-5 rtl:right-5" />

                <input
                  type="text"
                  placeholder={t.name}
                  className="w-full rounded-2xl border border-white/10 bg-white/[0.05] px-12 py-4 text-sm text-white outline-none transition placeholder:text-white/35 focus:border-blue-500/60 focus:bg-white/[0.08]"
                />
              </div>

              <div className="relative">
                <FaPhoneAlt className="absolute top-1/2 -translate-y-1/2 text-white/35 ltr:left-5 rtl:right-5" />

                <input
                  type="tel"
                  placeholder={t.phone}
                  className="w-full rounded-2xl border border-white/10 bg-white/[0.05] px-12 py-4 text-sm text-white outline-none transition placeholder:text-white/35 focus:border-blue-500/60 focus:bg-white/[0.08]"
                />
              </div>
            </div>

            <div className="relative mt-5">
              <FaHome className="absolute top-1/2 -translate-y-1/2 text-white/35 ltr:left-5 rtl:right-5" />

              <input
                type="text"
                placeholder={t.property}
                className="w-full rounded-2xl border border-white/10 bg-white/[0.05] px-12 py-4 text-sm text-white outline-none transition placeholder:text-white/35 focus:border-blue-500/60 focus:bg-white/[0.08]"
              />
            </div>

            <textarea
              rows="6"
              placeholder={t.message}
              className="mt-5 w-full resize-none rounded-2xl border border-white/10 bg-white/[0.05] p-5 text-sm text-white outline-none transition placeholder:text-white/35 focus:border-blue-500/60 focus:bg-white/[0.08]"
            />

            <button
              type="button"
              className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-white px-7 py-4 text-sm font-semibold text-[#07111f] transition-all duration-300 hover:-translate-y-1 hover:bg-blue-500 hover:text-white"
            >
              {t.send}
            </button>
          </form>
        </div>
      </section>

      <section className="px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.04] shadow-2xl shadow-black/30 backdrop-blur-xl">
          {/* Top Content */}
          <div className="flex flex-col gap-6 border-b border-white/10 p-8 lg:flex-row lg:items-center lg:justify-between lg:p-10">
            <div>
              <h2 className="text-3xl font-semibold">{t.locationTitle}</h2>

              <p className="mt-4 max-w-2xl text-sm leading-8 text-white/60">
                {t.locationDesc}
              </p>
            </div>

            <div
              dir="ltr"
              className={`text-sm font-medium text-blue-300 ${
                isAr ? "text-right" : "text-left"
              }`}
            >
              101 Abdulaziz Al Saud, Al Manyal Al Gharbi,
              <br />
              Old Cairo, Cairo Governorate 4240220
            </div>
          </div>

          {/* Map */}
          <iframe
            title="Nexvia Location"
            src="https://www.google.com/maps?q=101%20Abdulaziz%20Al%20Saud%2C%20Al%20Manyal%20Al%20Gharbi%2C%20Old%20Cairo%2C%20Cairo%20Governorate%204240220&output=embed"
            className="h-[420px] w-full border-0 brightness-90 contrast-110"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </main>
  );
}
