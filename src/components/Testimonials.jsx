const TESTIMONIALS = [
  {
    name: "Dilnoza Karimova",
    role: "Yunusobod, villa xaridori",
    text: "Hujjatlarni tekshirishdan tortib notariusgacha — har bir bosqichni tushuntirib bordilar. Hech qanday yashirin to'lov bo'lmadi.",
  },
  {
    name: "Javlon Tursunov",
    role: "Mirobod, kvartira xaridori",
    text: "8 ta obyektni bir kun ichida ko'rsatdilar, har birining kamchiligini ham ochiq aytdilar. Bu ishonchni his qildim.",
  },
  {
    name: "Madina Yusupova",
    role: "Chilonzor, taunhaus xaridori",
    text: "Ipoteka kalkulyatori real bank shartlariga juda yaqin chiqdi. Rejalashtirish ancha osonlashdi.",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-paper py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-brass mb-4">
          Mijozlar
        </p>
        <h2 className="font-display text-4xl lg:text-5xl tracking-tight text-ink mb-14 max-w-xl">
          120 dan ortiq oilaga uy topdik
        </h2>

        <div className="grid lg:grid-cols-3 gap-px bg-line border border-line">
          {TESTIMONIALS.map((t) => (
            <figure key={t.name} className="bg-paper p-8 flex flex-col">
              <span className="font-display text-4xl text-brass-light mb-4 leading-none">
                "
              </span>
              <blockquote className="text-ink leading-relaxed flex-1">
                {t.text}
              </blockquote>
              <figcaption className="mt-6 pt-5 border-t border-line">
                <p className="font-display text-base text-ink">{t.name}</p>
                <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-slate mt-1">
                  {t.role}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
