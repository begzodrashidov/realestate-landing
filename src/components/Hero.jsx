export default function Hero() {
  return (
    <section
      id="top"
      className="relative bg-ink text-paper pt-36 pb-28 lg:pt-44 lg:pb-36 overflow-hidden"
    >
      {/* Blueprint grid texture - signature element */}
      <div className="absolute inset-0 bg-blueprint bg-grid opacity-60 pointer-events-none" />
      <div className="absolute -top-32 -right-32 w-[480px] h-[480px] rounded-full bg-brass/10 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-7">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-brass-light mb-6">
              Toshkent &middot; Boutique ko'chmas mulk agentligi
            </p>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl leading-[1.05] tracking-tight">
              Har bir uy —
              <br />
              <span className="italic text-brass-light">o'lchab</span>{" "}
              chizilgan
              <br />
              hayot rejasi.
            </h1>
            <p className="mt-8 max-w-md text-paper/70 text-lg leading-relaxed">
              Biz ko'chmas mulkni rieltor sifatida emas, arxitektor nigohi
              bilan tanlaymiz. Har bir uy — joylashuvi, yorug'ligi va
              qurilishi tasdiqlangan obyekt.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-5">
              <a
                href="#listings"
                className="inline-flex items-center gap-3 bg-brass-light text-ink font-mono text-xs uppercase tracking-[0.2em] px-7 py-4 hover:bg-paper transition-colors"
              >
                Uy-joylarni ko'rish
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-paper/80 text-sm border-b border-paper/30 pb-1 hover:border-brass-light hover:text-brass-light transition-colors"
              >
                Bepul konsultatsiya
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 grid grid-cols-2 gap-px bg-paper/10 border border-paper/10">
            {[
              ["120+", "Yopilgan bitimlar"],
              ["18", "Faol obyektlar"],
              ["9 yil", "Bozor tajribasi"],
              ["4.9", "O'rtacha baho"],
            ].map(([num, label]) => (
              <div key={label} className="bg-ink p-6">
                <div className="font-display text-3xl text-brass-light">
                  {num}
                </div>
                <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.15em] text-paper/50">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
