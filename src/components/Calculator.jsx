import { useMemo, useState } from "react";

export default function Calculator() {
  const [price, setPrice] = useState(150000);
  const [down, setDown] = useState(30);
  const [years, setYears] = useState(15);
  const rate = 0.18; // yillik foiz, taqribiy O'zbekiston ipoteka stavkasi

  const { monthly, principal, totalInterest } = useMemo(() => {
    const downAmount = price * (down / 100);
    const principal = price - downAmount;
    const monthlyRate = rate / 12;
    const n = years * 12;
    const monthly =
      n === 0 || principal <= 0
        ? 0
        : (principal * monthlyRate * Math.pow(1 + monthlyRate, n)) /
          (Math.pow(1 + monthlyRate, n) - 1);
    const totalInterest = monthly * n - principal;
    return { monthly, principal, totalInterest };
  }, [price, down, years]);

  const fmt = (n) =>
    n.toLocaleString("en-US", { maximumFractionDigits: 0 });

  return (
    <section id="calculator" className="bg-paper py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-brass mb-4">
              Moliyaviy reja
            </p>
            <h2 className="font-display text-4xl tracking-tight text-ink mb-5">
              Ipoteka kalkulyatori
            </h2>
            <p className="text-slate leading-relaxed">
              Oylik to'lovni taxminiy hisoblang. Ko'rsatkichlar taxminiy
              bo'lib, yakuniy shartlar bankning rasmiy taklifiga bog'liq.
            </p>
          </div>

          <div className="lg:col-span-8 bg-ink p-8 lg:p-12 grid lg:grid-cols-2 gap-10">
            <div className="space-y-9">
              <Slider
                label="Uy narxi"
                value={price}
                onChange={setPrice}
                min={30000}
                max={500000}
                step={5000}
                display={`$${fmt(price)}`}
              />
              <Slider
                label="Boshlang'ich to'lov"
                value={down}
                onChange={setDown}
                min={10}
                max={70}
                step={5}
                display={`${down}%`}
              />
              <Slider
                label="Muddat"
                value={years}
                onChange={setYears}
                min={5}
                max={25}
                step={1}
                display={`${years} yil`}
              />
            </div>

            <div className="border-t lg:border-t-0 lg:border-l border-paper/15 pt-8 lg:pt-0 lg:pl-10 flex flex-col justify-center">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-paper/50 mb-2">
                Taxminiy oylik to'lov
              </p>
              <p className="font-display text-5xl text-brass-light mb-8">
                ${fmt(monthly)}
              </p>

              <dl className="space-y-3 font-mono text-xs uppercase tracking-wide">
                <Row label="Kredit summasi" value={`$${fmt(principal)}`} />
                <Row
                  label="Jami foiz (taxminiy)"
                  value={`$${fmt(totalInterest)}`}
                />
                <Row label="Yillik stavka" value="18%" />
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Row({ label, value }) {
  return (
    <div className="flex justify-between border-b border-paper/10 pb-3 text-paper/70">
      <span>{label}</span>
      <span className="text-paper">{value}</span>
    </div>
  );
}

function Slider({ label, value, onChange, min, max, step, display }) {
  return (
    <div>
      <div className="flex justify-between items-baseline mb-3">
        <label className="font-mono text-[10px] uppercase tracking-[0.2em] text-paper/60">
          {label}
        </label>
        <span className="font-display text-lg text-paper">{display}</span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full h-px appearance-none bg-paper/20 accent-[#C9A668] cursor-pointer"
      />
    </div>
  );
}
