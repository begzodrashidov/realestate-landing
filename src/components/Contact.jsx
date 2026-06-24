import { useState } from "react";

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" className="bg-ink text-paper py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-brass-light mb-4">
            Bog'lanish
          </p>
          <h2 className="font-display text-4xl lg:text-5xl tracking-tight mb-6">
            Birinchi ko'rikni
            <br />
            bugun rejalashtiraylik
          </h2>
          <p className="text-paper/65 max-w-md leading-relaxed mb-8">
            Telefon raqamingizni qoldiring — 24 soat ichida sizga mos
            obyektlar ro'yxati bilan bog'lanamiz.
          </p>

          <div className="font-mono text-sm text-paper/70 space-y-2">
            <p>+998 90 123 45 67</p>
            <p>info@meridianestates.uz</p>
            <p>Amir Temur shoh ko'chasi 45, Toshkent</p>
          </div>
        </div>

        <div className="bg-paper/5 border border-paper/15 p-8 lg:p-10">
          {sent ? (
            <div className="py-12 text-center">
              <p className="font-display text-2xl text-brass-light mb-2">
                Qabul qilindi
              </p>
              <p className="text-paper/60 text-sm">
                24 soat ichida siz bilan bog'lanamiz.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <Field label="Ismingiz" type="text" placeholder="Ism Familiya" />
              <Field
                label="Telefon raqam"
                type="tel"
                placeholder="+998 90 123 45 67"
              />
              <div>
                <label className="font-mono text-[10px] uppercase tracking-[0.2em] text-paper/50 block mb-2">
                  Qiziqtirgan tur
                </label>
                <select className="w-full bg-transparent border border-paper/25 px-4 py-3 text-paper focus:border-brass-light outline-none">
                  <option className="bg-ink">Villa</option>
                  <option className="bg-ink">Kvartira</option>
                  <option className="bg-ink">Taunhaus</option>
                </select>
              </div>
              <button
                type="submit"
                className="w-full bg-brass-light text-ink font-mono text-xs uppercase tracking-[0.2em] py-4 hover:bg-paper transition-colors"
              >
                Yuborish
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function Field({ label, type, placeholder }) {
  return (
    <div>
      <label className="font-mono text-[10px] uppercase tracking-[0.2em] text-paper/50 block mb-2">
        {label}
      </label>
      <input
        type={type}
        required
        placeholder={placeholder}
        className="w-full bg-transparent border border-paper/25 px-4 py-3 text-paper placeholder:text-paper/30 focus:border-brass-light outline-none"
      />
    </div>
  );
}
