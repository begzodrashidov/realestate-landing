import { useState } from "react";

const LISTINGS = [
  {
    id: "01",
    title: "Yashil Hovli villasi",
    district: "Yunusobod, Toshkent",
    price: "$284,000",
    beds: 4,
    baths: 3,
    area: "320 m²",
    type: "Villa",
    img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "02",
    title: "Mirobod penthaus",
    district: "Mirobod, Toshkent",
    price: "$196,500",
    beds: 3,
    baths: 2,
    area: "145 m²",
    type: "Kvartira",
    img: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "03",
    title: "Chilonzor taunhausi",
    district: "Chilonzor, Toshkent",
    price: "$152,000",
    beds: 3,
    baths: 2,
    area: "180 m²",
    type: "Taunhaus",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "04",
    title: "Sergeli oilaviy uy",
    district: "Sergeli, Toshkent",
    price: "$98,000",
    beds: 4,
    baths: 2,
    area: "210 m²",
    type: "Villa",
    img: "https://images.unsplash.com/photo-1505873242700-f289a29e1e0f?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "05",
    title: "Yakkasaroy studiyasi",
    district: "Yakkasaroy, Toshkent",
    price: "$74,500",
    beds: 1,
    baths: 1,
    area: "52 m²",
    type: "Kvartira",
    img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "06",
    title: "Qibray bog' villasi",
    district: "Qibray, Toshkent viloyati",
    price: "$211,000",
    beds: 5,
    baths: 4,
    area: "410 m²",
    type: "Villa",
    img: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=1200&auto=format&fit=crop",
  },
];

const FILTERS = ["Barchasi", "Villa", "Kvartira", "Taunhaus"];

export default function Listings() {
  const [active, setActive] = useState("Barchasi");

  const filtered =
    active === "Barchasi"
      ? LISTINGS
      : LISTINGS.filter((l) => l.type === active);

  return (
    <section id="listings" className="bg-paper py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-brass mb-4">
              Faol obyektlar
            </p>
            <h2 className="font-display text-4xl lg:text-5xl tracking-tight text-ink">
              Tanlangan uy-joylar
            </h2>
          </div>

          <div className="flex gap-2 flex-wrap">
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`font-mono text-xs uppercase tracking-[0.15em] px-4 py-2.5 border transition-colors ${
                  active === f
                    ? "bg-ink text-paper border-ink"
                    : "border-line text-slate hover:border-ink"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-line">
          {filtered.map((l) => (
            <article key={l.id} className="bg-paper group">
              <div className="relative overflow-hidden">
                <img
                  src={l.img}
                  alt={l.title}
                  loading="lazy"
                  className="w-full h-64 object-cover grayscale-[15%] group-hover:scale-105 group-hover:grayscale-0 transition-all duration-500"
                />
                <span className="absolute top-4 left-4 font-mono text-[10px] uppercase tracking-[0.2em] bg-ink/85 text-paper px-3 py-1.5">
                  Plot / {l.id}
                </span>
                <span className="absolute top-4 right-4 font-mono text-[10px] uppercase tracking-[0.2em] bg-brass-light text-ink px-3 py-1.5">
                  {l.type}
                </span>
              </div>

              <div className="p-6 border-t border-line">
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="font-display text-xl text-ink">{l.title}</h3>
                  <span className="font-mono text-sm text-brass shrink-0">
                    {l.price}
                  </span>
                </div>
                <p className="mt-1 text-sm text-slate">{l.district}</p>

                <dl className="mt-5 flex items-center gap-5 font-mono text-[11px] uppercase tracking-wide text-slate border-t border-line pt-4">
                  <div className="flex items-center gap-1.5">
                    <dt className="text-slate/60">Xona</dt>
                    <dd className="text-ink">{l.beds}</dd>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <dt className="text-slate/60">Hammom</dt>
                    <dd className="text-ink">{l.baths}</dd>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <dt className="text-slate/60">Maydon</dt>
                    <dd className="text-ink">{l.area}</dd>
                  </div>
                </dl>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
