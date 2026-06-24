const STEPS = [
  {
    n: "01",
    title: "Konsultatsiya",
    text: "Byudjet, hudud va talablaringizni aniqlaymiz — 30 daqiqalik suhbat orqali.",
  },
  {
    n: "02",
    title: "Tanlov ro'yxati",
    text: "Mezonlaringizga mos 5-8 obyektni shaxsan tekshirib, sizga taqdim etamiz.",
  },
  {
    n: "03",
    title: "Ko'rik",
    text: "Yoqgan uy-joylarga birga boramiz, hujjatlari va texnik holatini tahlil qilamiz.",
  },
  {
    n: "04",
    title: "Bitim",
    text: "Narx kelishuvi, shartnoma va notarial rasmiylashtirishda to'liq yordam beramiz.",
  },
];

export default function Process() {
  return (
    <section id="process" className="bg-ink text-paper py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-brass-light mb-4">
          Qanday ishlaymiz
        </p>
        <h2 className="font-display text-4xl lg:text-5xl tracking-tight max-w-xl mb-16">
          To'rt bosqichda — kalitdan uygacha
        </h2>

        <div className="grid lg:grid-cols-4 gap-px bg-paper/10 border-t border-b border-paper/10">
          {STEPS.map((s, i) => (
            <div key={s.n} className="bg-ink p-7 relative">
              <span className="font-display text-5xl text-paper/15">
                {s.n}
              </span>
              <h3 className="font-display text-xl mt-6 mb-3">{s.title}</h3>
              <p className="text-sm text-paper/60 leading-relaxed">
                {s.text}
              </p>
              {i < STEPS.length - 1 && (
                <span className="hidden lg:block absolute top-1/2 -right-px w-px h-10 bg-brass-light/40" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
