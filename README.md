# Meridian Estates 🏛️

Toshkentdagi boutique ko'chmas mulk agentligi uchun zamonaviy landing page. Arxitektura chizmasi (blueprint) uslubidagi qora-bronza dizayn, interaktiv ipoteka kalkulyatori va filtrlanadigan mulk ro'yxati bilan.

🔗 **Live Demo:** [shu yerga deploy linkini qo'shing](#)

![Meridian Estates preview](./preview.png)

---

## ✨ Asosiy xususiyatlar

- 🏠 **Mulk ro'yxati** — turi bo'yicha filtrlash (Villa / Kvartira / Taunhaus)
- 🧮 **Interaktiv ipoteka kalkulyatori** — narx, boshlang'ich to'lov va muddatga qarab oylik to'lovni real vaqtda hisoblaydi
- 📱 **To'liq responsive** — mobil, tablet va desktop uchun moslashgan
- 🎨 **Maxsus dizayn tizimi** — blueprint grid fon, Fraunces + Manrope + JetBrains Mono shrift kombinatsiyasi
- 📝 **Bog'lanish formasi** — validatsiya bilan

## 🛠️ Texnologiyalar

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

## 📂 Loyiha tuzilishi

```
src/
├── components/
│   ├── Navbar.jsx        # Scroll bilan o'zgaruvchi navigatsiya
│   ├── Hero.jsx          # Blueprint fon + statistika
│   ├── Listings.jsx      # Filtrlanadigan mulk kartalari
│   ├── Process.jsx       # 4 bosqichli xarid jarayoni
│   ├── Calculator.jsx    # Interaktiv ipoteka kalkulyatori
│   ├── Testimonials.jsx  # Mijozlar fikrlari
│   ├── Contact.jsx       # Bog'lanish formasi
│   └── Footer.jsx
├── App.jsx
└── main.jsx
```

## 🚀 O'rnatish va ishga tushirish

```bash
# Repozitoriyani yuklab olish
git clone https://github.com/SIZNING-USERNAME/realestate-landing.git
cd realestate-landing

# Paketlarni o'rnatish
npm install

# Lokal serverda ishga tushirish
npm run dev
```

Brauzerda ochiladi: `http://localhost:5173`

### Production build

```bash
npm run build
npm run preview
```

## 📦 Deploy

Loyiha [Vercel](https://vercel.com) yoki [Netlify](https://netlify.com) orqali bir necha daqiqada deploy qilinadi:

1. GitHub repo'ni Vercel'ga ulang
2. Framework: **Vite** avtomatik aniqlanadi
3. Deploy tugmasini bosing

## 📄 Litsenziya

Bu loyiha portfolio/o'quv maqsadida yaratilgan.

---

<p align="center">Begzod Rashidov tomonidan ishlab chiqilgan</p>
