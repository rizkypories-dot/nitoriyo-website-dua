"use client";

import React, { useEffect, useState } from "react";
import {
  ArrowRight,
  Mail,
  MapPin,
  Phone,
  Globe2,
  Lightbulb,
  Zap,
  Eye,
  AlertTriangle,
  Search,
  LayoutGrid,
  ChevronDown,
} from "lucide-react";

const images = {
  hero: "",
  heroTexture: "",
  about: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1600&q=80",
  led: "/led-product.jpg",
  warehouse: "/warehouse-system.jpg",
  supply: "/general-supply.jpg",
  factory: "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&w=1400&q=80",
  office: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=80",
  meeting: "https://images.unsplash.com/photo-1517502884422-41eaead166d4?auto=format&fit=crop&w=1400&q=80",
  outdoor: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1400&q=80",
  parking: "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?auto=format&fit=crop&w=1400&q=80",
};

const pages = [
  { id: "home", label: "Home", path: "/" },
  { id: "led", label: "LED Products", path: "/led-products" },
  { id: "warehouse", label: "Warehouse", path: "/warehouse-solutions" },
  { id: "supply", label: "General Supply", path: "/general-supply" },
];

const navItems = [
  { label: "Home", page: "home" },
  { label: "Products & Solutions", page: "home", target: "solutions-section" },
  { label: "Industries", page: "home" },
  { label: "Projects", page: "home" },
  { label: "About Us", page: "home" },
  { label: "Contact", page: "home" },
];

function WhatsAppIcon({ className = "h-4 w-4" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M20.4 11.7a8.4 8.4 0 0 1-12.3 7.4L4 20l1-4a8.4 8.4 0 1 1 15.4-4.3Z" />
      <path d="M9.2 8.8c.2-.5.4-.5.7-.5h.5c.2 0 .4 0 .5.4l.7 1.6c.1.3.1.5-.1.7l-.4.5c-.1.2-.2.3 0 .6.4.8 1.2 1.6 2.1 2 .3.2.4.1.6-.1l.6-.7c.2-.2.4-.2.7-.1l1.5.7c.3.1.4.3.4.5 0 .6-.4 1.4-1 1.7-.6.3-1.8.4-3.4-.4-2.9-1.3-4.8-3.9-5-5.3-.1-.7.2-1.3.5-1.6Z" />
    </svg>
  );
}

function Logo({ setPage }) {
  return (
    <button onClick={() => setPage("home")} className="flex items-center gap-3 text-left">
<img
  src="/logo-nitoriyo.png"
  alt="Nitoriyo Logo"
  className="h-14 w-auto"
/>
      <div className="leading-tight">

      </div>
    </button>
  );
}

function SectionHeader({ title, jp }) {
  return (
    <div className="mb-10">
      <h2 className="text-3xl font-semibold leading-none tracking-tight text-white md:text-5xl">{title}</h2>
      <p className="mt-5 text-sm tracking-[0.28em] text-zinc-400 md:text-lg">{jp}</p>
      <div className="mt-5 h-px w-20 bg-red-700/80" />
    </div>
  );
}

function Navbar({ currentPage, setPage }) {
  const handleNavClick = (item) => {
    setPage(item.page);
    setTimeout(() => {
      if (item.target) {
        document.getElementById(item.target)?.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      }
    }, 80);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <Logo setPage={setPage} />
        <div className="hidden items-center gap-5 lg:flex">
          <nav className="flex items-center gap-7 xl:gap-8">
            {navItems.map((item) => {
              const isActive = currentPage === item.page && !item.target;
              return (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item)}
                  className={`text-xs font-semibold tracking-[0.22em] transition ${
                    isActive ? "text-white" : "text-zinc-400 hover:text-white"
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>
          <div className="flex items-center gap-3">
            <a href="https://api.whatsapp.com/send?phone=6281233330550" target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center border border-white/10 text-zinc-400 transition hover:border-red-700/70 hover:text-red-500" aria-label="WhatsApp"><WhatsAppIcon /></a>
            <a href="mailto:admin@nitoriyo.com" className="flex h-10 w-10 items-center justify-center border border-white/10 text-zinc-400 transition hover:border-red-700/70 hover:text-red-500" aria-label="Email"><Mail className="h-4 w-4" /></a>
          </div>
        </div>
      </div>
    </header>
  );
}

function Hero({ eyebrow, title, english, description, image, children }) {
  const isHomeHero = title.includes("Pendekatan Engineering");
  return (
    <section className="relative flex min-h-[86vh] items-center overflow-hidden border-b border-white/10 bg-black">
      <div className="absolute inset-0 opacity-[0.10] mix-blend-soft-light [background-image:linear-gradient(rgba(255,255,255,0.20)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.20)_1px,transparent_1px)] [background-size:64px_64px]" />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/88 to-black/54" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_74%_42%,rgba(127,29,29,0.24),transparent_36%)]" />
      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pt-28 lg:px-8">
        <div className="max-w-5xl">
          {isHomeHero ? (
            <><p className="text-red-500 tracking-[0.25em] text-sm md:text-base mb-4">
  PT Nitoriyo Fuku Hana
</p>
              <h1 className="text-5xl font-semibold leading-[0.95] tracking-tight text-white md:text-8xl">Industrial Supplier</h1>
              <h2 className="mt-4 text-3xl font-light leading-tight tracking-tight text-zinc-300 md:text-5xl">dengan Pendekatan Engineering</h2>
            </>
          ) : (
            <h1 className="text-5xl font-semibold leading-tight tracking-tight text-white md:text-7xl">{title}</h1>
          )}
          <div className="mt-8 space-y-3">
            {english && <p className="text-xl font-light tracking-[0.08em] text-zinc-400 md:text-2xl">{english}</p>}
            {eyebrow && <p className="text-xs tracking-[0.36em] text-red-500/90 md:text-sm">{eyebrow}</p>}
          </div>
          <div className="mt-7 h-px w-24 bg-red-700" />
          <p className="mt-8 max-w-4xl text-lg leading-8 text-zinc-300 md:text-xl">{description}</p>
          {children}
        </div>
      </div>
    </section>
  );
}

function CTA({ title, english, text }) {
  return (
    <section className="relative overflow-hidden bg-[#101010] py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_40%,rgba(127,29,29,0.16),transparent_34%)]" />
      <div className="relative mx-auto max-w-5xl px-5 text-center lg:px-8">
        <p className="mb-4 text-sm tracking-[0.32em] text-red-500">お問い合わせ</p>
        <h2 className="text-4xl font-semibold tracking-tight text-white md:text-5xl">{title}</h2>
        <p className="mt-4 text-zinc-500">{english}</p>
        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-zinc-300">{text}</p>
        <div className="mt-12 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-zinc-500">HUBUNGI KAMI</p>
          <p className="mt-3 text-sm italic text-zinc-600">Ready to discuss your industrial requirements.</p>
        </div>
        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <a href="https://api.whatsapp.com/send?phone=6281233330550" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-3 bg-red-800 px-10 py-4 text-sm font-semibold tracking-[0.18em] text-white transition hover:bg-red-700">WhatsApp <WhatsAppIcon /></a>
          <a href="mailto:admin@nitoriyo.com" className="inline-flex items-center justify-center gap-3 border border-white/15 px-10 py-4 text-sm font-semibold tracking-[0.18em] text-white transition hover:border-red-700/70 hover:text-red-500">Email <Mail className="h-4 w-4" /></a>
        </div>
      </div>
    </section>
  );
}

function ContactOffice() {
  return (
    <section className="bg-[#0a0a0a] py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeader title="HUBUNGI KAMI" jp="CONTACT & OFFICE　お問い合わせ・所在地" />
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="border border-white/10 bg-[#111111] p-8 md:p-10">
            <div className="mb-6 flex items-center gap-3 text-red-500"><MapPin className="h-5 w-5" /><p className="text-xs font-semibold tracking-[0.28em]">OFFICE</p></div>
            <div className="grid gap-8 md:grid-cols-2">
              <div><h3 className="text-xl font-semibold text-white">Tangerang Office</h3><p className="mt-4 text-sm leading-7 text-zinc-400">Gading Serpong – Carrillo 2 No. 11<br />Paramount Land</p></div>
              <div><h3 className="text-xl font-semibold text-white">Bekasi Office</h3><p className="mt-4 text-sm leading-7 text-zinc-400">Lippo Cikarang – Le Freya<br />Jl. Gunung Jayawijaya No. 10, Bekasi</p></div>
            </div>
          </div>
          <div className="border border-white/10 bg-[#111111] p-8 md:p-10">
            <div className="mb-6 flex items-center gap-3 text-red-500"><Phone className="h-5 w-5" /><p className="text-xs font-semibold tracking-[0.28em]">CONTACT INFORMATION</p></div>
            <div className="space-y-5 text-sm text-zinc-400">
              <div className="grid gap-3 sm:grid-cols-2">
                <a href="https://api.whatsapp.com/send?phone=6281233330550" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 transition hover:text-red-500"><WhatsAppIcon /> +62 812 3333 0550</a>
                <a href="https://api.whatsapp.com/send?phone=6287824881000" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 transition hover:text-red-500"><WhatsAppIcon /> +62 878 2488 1000</a>
              </div>
              <div className="h-px bg-white/10" />
              <a href="mailto:admin@nitoriyo.com" className="flex items-center gap-3 transition hover:text-red-500"><Mail className="h-4 w-4" /> admin@nitoriyo.com</a>
              <a href="mailto:office.jp@nitoriyo.com" className="flex items-center gap-3 transition hover:text-red-500"><Mail className="h-4 w-4" /> office.jp@nitoriyo.com</a>
              <a href="https://www.nitoriyo.com" className="flex items-center gap-3 transition hover:text-red-500"><Globe2 className="h-4 w-4" /> www.nitoriyo.com</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer({ setPage }) {
  return (
    <footer className="bg-black py-14">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 md:grid-cols-[1.1fr_1fr_1fr] lg:px-8">
        <div><Logo setPage={setPage} /><p className="mt-6 max-w-sm text-sm leading-7 text-zinc-500">Industrial supplier with engineering approach.</p></div>
        <div><h4 className="mb-5 text-xs font-semibold tracking-[0.25em] text-white">MENU</h4><div className="grid grid-cols-2 gap-3 text-sm text-zinc-500">{pages.map((item) => <button key={item.id} onClick={() => setPage(item.id)} className="text-left hover:text-white">{item.label}</button>)}</div></div>
        <div><h4 className="mb-5 text-xs font-semibold tracking-[0.25em] text-white">CONTACT</h4><div className="space-y-3 text-sm text-zinc-500"><a href="mailto:admin@nitoriyo.com" className="block hover:text-red-500">admin@nitoriyo.com</a><a href="https://www.nitoriyo.com" className="block hover:text-red-500">www.nitoriyo.com</a></div></div>
      </div>
    </footer>
  );
}

function HomePage({ setPage }) {
  const solutions = [
    { title: "Produk LED", jp: "LED Products　LED製品", description: "Solusi pencahayaan industrial yang efisien, reliable, dan sesuai kebutuhan area kerja.", image: images.led, page: "led" },
    { title: "Solusi Warehouse", jp: "Warehouse Solutions　倉庫ソリューション", description: "Mendukung efisiensi penyimpanan, handling, dan operasional warehouse.", image: images.warehouse, page: "warehouse" },
    { title: "General Industrial Supply", jp: "General Supply　産業資材供給", description: "Dukungan supply fleksibel untuk berbagai kebutuhan operasional industri.", image: images.supply, page: "supply" },
  ];

  return (
    <main className="min-h-screen bg-[#080808] text-zinc-200">
      <Hero eyebrow="産業ソリューションパートナー" title="Solusi Industrial dengan Pendekatan Engineering" english="Industrial Supplier with Engineering Approach" description="Mendukung kebutuhan industri melalui produk LED, solusi warehouse, dan general industrial supply." image={images.hero}>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <button onClick={() => setPage("led")} className="group inline-flex items-center justify-center gap-3 bg-red-800 px-7 py-4 text-sm font-semibold tracking-[0.16em] text-white transition hover:bg-red-700">Lihat Solusi <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" /></button>
          <a href="mailto:admin@nitoriyo.com" className="inline-flex items-center justify-center border border-white/20 px-7 py-4 text-sm font-semibold tracking-[0.16em] text-white transition hover:border-white/50 hover:bg-white/5">Hubungi Kami</a>
        </div>
      </Hero>
      <section className="border-y border-white/10 bg-[#0c0c0c] py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[1fr_0.9fr] lg:px-8">
          <div><SectionHeader title="TENTANG KAMI" jp="ABOUT US　会社概要" /><div className="space-y-6 text-base leading-8 text-zinc-300 md:text-lg"><p>PT Nitoriyo Fuku Hana adalah perusahaan industrial supplier dan solution partner yang berfokus mendukung kebutuhan operasional industri melalui pendekatan engineering, dukungan teknis, dan solusi produk yang reliable.</p><p>Kami mendukung lingkungan industri melalui produk LED, solusi warehouse, dan layanan general industrial supply yang dirancang untuk meningkatkan efisiensi operasional, keandalan, dan performa jangka panjang.</p></div></div>
          <div className="relative min-h-[420px] overflow-hidden border border-white/10 bg-zinc-950"><div className="absolute inset-0 bg-cover bg-center opacity-65" style={{ backgroundImage: `url(${images.about})` }} /><div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" /><div className="absolute bottom-0 left-0 right-0 p-8"><div className="mb-5 h-px w-16 bg-red-700" /><p className="max-w-sm text-sm leading-7 tracking-wide text-zinc-300">Technical product supply, practical engineering support, and reliable execution for industrial customers.</p></div></div>
        </div>
      </section>
      <section id="solutions-section" className="bg-[#090909] py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8"><SectionHeader title="SOLUSI UTAMA KAMI" jp="OUR CORE SOLUTIONS　主要ソリューション" /><div className="grid gap-6 lg:grid-cols-3">{solutions.map((solution) => <button key={solution.title} onClick={() => setPage(solution.page)} className="group relative min-h-[390px] overflow-hidden border border-white/10 bg-zinc-950 text-left shadow-2xl shadow-black/40"><div className="absolute inset-0 bg-cover bg-center transition duration-700 group-hover:scale-105" style={{ backgroundImage: `url(${solution.image})` }} /><div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/20 transition group-hover:from-black group-hover:via-black/80" /><div className="absolute inset-x-0 bottom-0 p-8"><div className="mb-5 h-px w-14 bg-red-700 transition group-hover:w-24" /><p className="mb-3 text-xs tracking-[0.25em] text-zinc-500">{solution.jp}</p><h3 className="text-2xl font-semibold text-white">{solution.title}</h3><p className="mt-4 min-h-[56px] text-sm leading-7 text-zinc-300">{solution.description}</p><div className="mt-7 inline-flex items-center gap-3 text-xs font-semibold tracking-[0.2em] text-red-500">VIEW PAGE <ArrowRight className="h-4 w-4 transition group-hover:translate-x-2" /></div></div></button>)}</div></div>
      </section>
      <ContactOffice />
    </main>
  );
}

function LEDProductsPage() {
  const [expandedIssue, setExpandedIssue] = useState(null);
  const [expandedApproach, setExpandedApproach] = useState(null);

  const issueCards = [
    { title: "Area Terlalu Gelap", enTitle: "Insufficient Lighting Distribution", desc: "Distribusi pencahayaan yang tidak merata dapat mengurangi visibilitas area kerja dan meningkatkan potensi kesalahan operasional. Area tertentu sering mengalami shadow, lux rendah, atau pencahayaan tidak konsisten akibat layout lampu yang kurang optimal.", enDesc: "Uneven lighting distribution may reduce workplace visibility and increase operational risks. Certain areas often experience shadows, low lux levels, or inconsistent illumination due to improper lighting layouts.", icon: Lightbulb },
    { title: "Konsumsi Listrik Tinggi", enTitle: "High Energy Consumption", desc: "Penggunaan lampu konvensional atau spesifikasi yang tidak efisien dapat meningkatkan biaya energi operasional secara signifikan. Banyak sistem pencahayaan industri masih menggunakan watt besar tanpa mempertimbangkan efisiensi lumen dan kebutuhan area aktual.", enDesc: "Conventional lighting systems and inefficient specifications may significantly increase operational energy costs. Many industrial facilities still use excessive wattage without considering lumen efficiency and actual area requirements.", icon: Zap },
    { title: "Silau & Tidak Nyaman", enTitle: "Excessive Glare & Visual Discomfort", desc: "Tingkat glare berlebih dapat mengurangi kenyamanan visual operator dan mempengaruhi fokus kerja di area produksi maupun warehouse. Pemilihan beam angle, posisi lampu, dan intensitas cahaya yang tidak tepat sering menjadi penyebab utama.", enDesc: "Excessive glare may reduce operator visual comfort and affect focus in production or warehouse areas. Improper beam angle, fixture positioning, and lighting intensity are often the main causes.", icon: Eye },
    { title: "Pemilihan Lampu Tidak Tepat", enTitle: "Improper Lighting Specification", desc: "Kesalahan dalam memilih tipe lampu, lumen output, beam angle, atau spesifikasi housing dapat menyebabkan performa pencahayaan tidak optimal. Setiap area industri memiliki kebutuhan pencahayaan yang berbeda sesuai fungsi operasional dan kondisi lingkungan.", enDesc: "Incorrect selection of lighting type, lumen output, beam angle, or housing specifications may result in poor lighting performance. Each industrial area requires different lighting specifications depending on operational functions and environmental conditions.", icon: AlertTriangle },
    { title: "Area QC Kurang Detail", enTitle: "Insufficient QC Visibility", desc: "Pencahayaan yang kurang optimal pada area inspeksi dapat mempengaruhi akurasi visual dalam proses quality control. CRI, tingkat lux, dan distribusi cahaya memiliki peran penting dalam membantu proses inspeksi produk secara detail.", enDesc: "Insufficient lighting in inspection areas may affect visual accuracy during quality control processes. CRI, lux level, and light distribution play important roles in supporting detailed product inspection.", icon: Search },
    { title: "Layout Pencahayaan Tidak Efisien", enTitle: "Inefficient Lighting Layout", desc: "Posisi dan distribusi lampu yang tidak sesuai dapat menyebabkan pemborosan energi sekaligus area kerja yang tetap kurang terang. Optimalisasi layout pencahayaan membantu menciptakan distribusi cahaya yang lebih merata dan efisien.", enDesc: "Improper lighting positioning and distribution may cause energy waste while still leaving work areas underlit. Lighting layout optimization helps create more efficient and evenly distributed illumination.", icon: LayoutGrid },
  ];

  const workflow = [
    { title: "Review Existing", enTitle: "Existing Lighting Review", desc: "Meninjau kondisi pencahayaan saat ini berdasarkan distribusi cahaya, kondisi area kerja, jenis lampu existing, serta kebutuhan operasional aktual.", enDesc: "Reviewing existing lighting conditions based on light distribution, work area conditions, current lighting type, and actual operational requirements.", icon: Search },
    { title: "Assessment Lux & Area", enTitle: "Lux & Area Assessment", desc: "Melakukan analisa tingkat lux, distribusi pencahayaan, jarak antar lampu, tinggi pemasangan, dan karakteristik area untuk membantu menentukan kebutuhan pencahayaan yang sesuai.", enDesc: "Analyzing lux levels, lighting distribution, fixture spacing, mounting height, and area characteristics to support proper lighting requirements.", icon: Eye },
    { title: "Rekomendasi Produk", enTitle: "Product Recommendation", desc: "Menentukan spesifikasi produk LED yang sesuai berdasarkan efisiensi energi, fungsi area, beam angle, lumen output, CRI, IP rating, dan kondisi lingkungan industri.", enDesc: "Selecting suitable LED specifications based on energy efficiency, area function, beam angle, lumen output, CRI, IP rating, and industrial environmental conditions.", icon: LayoutGrid },
    { title: "Optimasi & ROI", enTitle: "Optimization & ROI Consideration", desc: "Membantu mempertimbangkan potensi penghematan energi, efisiensi operasional, maintenance, serta estimasi ROI atau payback period dari sistem pencahayaan yang lebih optimal.", enDesc: "Helping evaluate potential energy savings, operational efficiency, maintenance aspects, and estimated ROI or payback period from optimized lighting systems.", icon: Zap },
  ];

  const lux = [
    ["Area Umum / Public Area", "50-100 Lux", "Koridor, area akses, area umum."],
    ["Warehouse & Handling Area", "100-200 Lux", "Gudang, loading area, handling area."],
    ["Ruang Meeting / Meeting Room", "300-500 Lux", "Ruang rapat dan area diskusi kerja."],
    ["Office Workspace", "300-500 Lux", "Area kerja kantor dan administrasi."],
    ["Production Area", "200-500 Lux", "Area produksi dan perakitan umum."],
    ["QC / Inspection Area", "500-1000 Lux", "Area quality control, inspeksi visual, dan pengecekan detail."],
    ["Precision Work Area", ">1000 Lux", "Pekerjaan sangat detail atau pemeriksaan presisi tinggi."],
  ];

  const categories = ["LED High Bay", "LED Flood Light", "LED Street Light", "LED Tube / Linear Light", "LED Panel Light", "Customized Industrial Lighting"];
  const applications = [["Warehouse", images.warehouse], ["Factory", images.factory], ["Production Area", images.supply], ["Office Area", images.office], ["Meeting Room", images.meeting], ["QC / Inspection Area", images.factory], ["Outdoor Area", images.outdoor], ["Parking Area", images.parking], ["Supporting Facilities", images.about]];

  return (
    <main className="min-h-screen bg-[#080808] text-zinc-200">
      <Hero eyebrow="LED製品" title="Produk LED Industrial" english="Industrial LED Products" description="Solusi pencahayaan LED untuk kebutuhan industri modern dengan pendekatan pemilihan produk berbasis engineering." image={images.led}>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row"><a href="#product-categories" className="inline-flex items-center justify-center bg-red-800 px-7 py-4 text-sm font-semibold tracking-[0.16em] text-white transition hover:bg-red-700">Explore Products</a><a href="mailto:admin@nitoriyo.com" className="inline-flex items-center justify-center border border-white/15 px-7 py-4 text-sm font-semibold tracking-[0.16em] text-white transition hover:border-red-700/70 hover:text-red-500">Hubungi Kami</a></div>
      </Hero>

      <section className="bg-[#0b0b0b] py-24"><div className="mx-auto max-w-7xl px-5 lg:px-8"><SectionHeader title="MASALAH UMUM PENCAHAYAAN INDUSTRI" jp="COMMON INDUSTRIAL LIGHTING ISSUES　一般的な照明問題" /><div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">{issueCards.map((card, i) => { const Icon = card.icon; const isOpen = expandedIssue === i; return <button key={card.title} onClick={() => setExpandedIssue(isOpen ? null : i)} className={`group min-h-[300px] border bg-[#111111] p-8 text-left transition hover:bg-[#141414] ${isOpen ? "border-red-700/70" : "border-white/10 hover:border-red-700/40"}`}><div className="mb-8 flex items-start justify-between"><div className="flex h-20 w-20 items-center justify-center border border-white/10 bg-black/40 text-red-500 transition group-hover:border-red-700/50 group-hover:bg-red-950/20"><Icon className="h-10 w-10" /></div><span className="pt-2 text-xs tracking-[0.28em] text-zinc-600">0{i + 1}</span></div><div className="mb-7 h-px w-14 bg-red-700" /><h3 className="max-w-sm text-3xl font-semibold leading-tight text-white">{card.title}</h3><p className="mt-3 text-sm italic tracking-wide text-zinc-500">{card.enTitle}</p><div className={`overflow-hidden transition-all duration-500 ${isOpen ? "mt-6 max-h-80 opacity-100" : "max-h-0 opacity-0"}`}><p className="text-sm leading-7 text-zinc-400">{card.desc}</p><p className="mt-4 text-sm italic leading-7 text-zinc-600">{card.enDesc}</p></div><p className="mt-7 text-xs font-semibold tracking-[0.2em] text-red-500/80">{isOpen ? "CLOSE DETAIL" : "VIEW DETAIL"}</p></button>; })}</div></div></section>

      <section className="border-y border-white/10 bg-[#090909] py-24"><div className="mx-auto max-w-7xl px-5 lg:px-8"><SectionHeader title="PENDEKATAN ANALISA KAMI" jp="OUR ANALYSIS APPROACH　解析アプローチ" /><div className="grid gap-6 lg:grid-cols-4">{workflow.map((item, i) => { const Icon = item.icon; const isOpen = expandedApproach === i; return <button key={item.title} onClick={() => setExpandedApproach(isOpen ? null : i)} className={`group min-h-[320px] border bg-[#111111] p-8 text-left transition hover:bg-[#141414] ${isOpen ? "border-emerald-600/70" : "border-white/10 hover:border-emerald-600/40"}`}><div className="mb-8 flex items-start justify-between"><div className="flex h-20 w-20 items-center justify-center border border-white/10 bg-black/40 text-emerald-500 transition group-hover:border-emerald-600/50 group-hover:bg-emerald-950/20"><Icon className="h-10 w-10" /></div><span className="pt-2 text-xs tracking-[0.28em] text-zinc-600">0{i + 1}</span></div><div className="mb-7 h-px w-14 bg-emerald-600" /><h3 className="max-w-sm text-2xl font-semibold leading-tight text-white">{item.title}</h3><p className="mt-3 text-sm italic tracking-wide text-zinc-500">{item.enTitle}</p><div className={`overflow-hidden transition-all duration-500 ${isOpen ? "mt-6 max-h-96 opacity-100" : "max-h-0 opacity-0"}`}><p className="text-sm leading-7 text-zinc-400">{item.desc}</p><p className="mt-4 text-sm italic leading-7 text-zinc-600">{item.enDesc}</p></div><p className="mt-7 text-xs font-semibold tracking-[0.2em] text-emerald-500/80">{isOpen ? "CLOSE DETAIL" : "VIEW DETAIL"}</p></button>; })}</div></div></section>

      <section className="bg-[#0c0c0c] py-24"><div className="mx-auto max-w-7xl px-5 lg:px-8"><SectionHeader title="PERTIMBANGAN PENCAHAYAAN" jp="LIGHTING CONSIDERATION　照明基準" /><p className="mb-8 max-w-4xl text-base leading-8 text-zinc-300">Kebutuhan tingkat pencahayaan dapat berbeda tergantung aktivitas, standar operasional, dan kondisi lingkungan kerja.</p><div className="grid gap-4 md:grid-cols-2">{lux.map((row) => <div key={row[0]} className="grid gap-4 border border-white/10 bg-[#111111] p-6 md:grid-cols-[1fr_120px]"><div><h3 className="font-semibold text-white">{row[0]}</h3><p className="mt-2 text-sm leading-6 text-zinc-500">{row[2]}</p></div><div className="text-xl font-semibold text-red-500">{row[1]}</div></div>)}</div><p className="mt-6 text-sm leading-7 text-zinc-500">Nilai acuan dapat berbeda tergantung standar internal perusahaan, jenis pekerjaan, dan kondisi lapangan.</p></div></section>

      <section className="bg-[#090909] py-24"><div className="mx-auto max-w-6xl px-5 lg:px-8"><SectionHeader title="MANFAAT OPTIMASI" jp="OPTIMIZATION BENEFITS　最適化メリット" /><div className="mb-8"><h3 className="text-3xl font-semibold text-white">Potensi Pengurangan Energi hingga 60-70%*</h3><p className="mt-3 text-zinc-500">Up to 60-70% Energy Reduction*</p><p className="mt-3 text-sm text-zinc-500">Tergantung kondisi pencahayaan existing, spesifikasi lampu, dan lingkungan operasional.</p></div><div className="grid overflow-hidden border border-white/10 bg-[#101010] lg:grid-cols-4"><div className="border-b border-white/10 p-10 lg:border-b-0 lg:border-r"><p className="text-xs tracking-[0.3em] text-zinc-500">SISTEM LAMA</p><h3 className="mt-4 text-3xl font-semibold text-white">400W</h3><p className="mt-2 text-zinc-400">Metal Halide</p></div><div className="border-b border-white/10 p-10 lg:border-b-0 lg:border-r"><p className="text-xs tracking-[0.3em] text-zinc-500">SISTEM BARU</p><h3 className="mt-4 text-3xl font-semibold text-white">150W</h3><p className="mt-2 text-zinc-400">LED High Bay</p></div><div className="border-b border-white/10 bg-black p-10 lg:border-b-0 lg:border-r"><p className="text-xs tracking-[0.3em] text-zinc-500">POTENSI PENGURANGAN ENERGI</p><h3 className="mt-4 text-5xl font-semibold text-white">62.5%</h3><p className="mt-3 text-sm text-zinc-500">Energy Reduction</p></div><div className="bg-[#0d0d0d] p-10"><p className="text-xs tracking-[0.3em] text-zinc-500">CARBON EMISSION IMPACT</p><h3 className="mt-4 text-3xl font-semibold text-white">Lower Carbon Emission</h3><p className="mt-4 text-sm leading-7 text-zinc-500">Pengurangan konsumsi energi juga membantu menurunkan emisi karbon dan mendukung efisiensi operasional jangka panjang.</p></div></div></div></section>

      <section id="product-categories" className="bg-[#0c0c0c] py-24"><div className="mx-auto max-w-7xl px-5 lg:px-8"><SectionHeader title="KATEGORI PRODUK" jp="PRODUCT CATEGORIES　製品カテゴリー" /><div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">{categories.map((c) => <div key={c} className="group relative min-h-[260px] overflow-hidden border border-white/10 bg-[#111111]"><div className="absolute inset-0 bg-cover bg-center transition duration-700 group-hover:scale-105" style={{ backgroundImage: `url(${images.led})` }} /><div className="absolute inset-0 bg-gradient-to-t from-black via-black/75 to-black/30" /><div className="absolute bottom-0 left-0 right-0 p-8"><div className="mb-5 h-px w-14 bg-red-700" /><h3 className="text-2xl font-semibold text-white">{c}</h3></div></div>)}</div></div></section>
      <section className="border-y border-white/10 bg-[#0d0d0d] py-24"><div className="mx-auto max-w-7xl px-5 lg:px-8"><SectionHeader title="AREA APLIKASI" jp="APPLICATION AREAS　対応エリア" /><div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{applications.map(([title, image]) => <div key={title} className="group relative min-h-[260px] overflow-hidden border border-white/10 bg-[#111111]"><div className="absolute inset-0 bg-cover bg-center transition duration-700 group-hover:scale-105" style={{ backgroundImage: `url(${image})` }} /><div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/30" /><div className="absolute inset-x-0 bottom-0 p-8"><div className="mb-5 h-px w-16 bg-red-700 transition group-hover:w-24" /><h3 className="text-3xl font-semibold tracking-tight text-white">{title}</h3></div></div>)}</div></div></section>
      <CTA title="Butuh Replacement Lampu atau Optimasi Pencahayaan?" english="Need LED Replacement or Lighting Optimization?" text="Dari kebutuhan replacement hingga project optimasi pencahayaan, Nitoriyo siap mendukung kebutuhan LED industrial Anda." />
    </main>
  );
}

function WarehouseSolutionsPage() {
  const [expandedWarehouseProblem, setExpandedWarehouseProblem] = useState(null);
  const [openIndex, setOpenIndex] = useState(0);

  const warehouseProblems = [
    {
      shortTitle: "Kapasitas",
      title: "Kapasitas Gudang Tidak Optimal",
      enTitle: "Inefficient Storage Capacity",
      desc: "Penggunaan area storage yang belum maksimal dapat membuat kapasitas gudang terasa cepat penuh, meskipun luas area sebenarnya masih dapat dioptimalkan. Sistem racking, pallet position, dan pengaturan layout memiliki pengaruh besar terhadap kapasitas penyimpanan.",
      enDesc: "Inefficient storage utilization may cause the warehouse to feel full even when the available space can still be optimized. Racking systems, pallet positions, and layout arrangements strongly affect storage capacity.",
      icon: LayoutGrid,
    },
    {
      shortTitle: "Handling",
      title: "Alur Handling Tidak Efisien",
      enTitle: "Inefficient Handling Flow",
      desc: "Alur pergerakan barang yang kurang efisien dapat memperlambat proses loading, unloading, picking, dan replenishment. Perencanaan area handling yang tepat membantu mempercepat workflow dan mengurangi bottleneck operasional.",
      enDesc: "Inefficient material movement may slow down loading, unloading, picking, and replenishment processes. Proper handling area planning helps improve workflow and reduce operational bottlenecks.",
      icon: ArrowRight,
    },
    {
      shortTitle: "Akses",
      title: "Kesulitan Akses Barang",
      enTitle: "Difficult Product Accessibility",
      desc: "Sistem penyimpanan yang tidak sesuai dapat menyulitkan akses barang, terutama untuk item dengan perputaran tinggi. Pemilihan sistem rack dan layout aisle yang tepat dapat membantu mempercepat pencarian, pengambilan, dan pengeluaran barang.",
      enDesc: "Improper storage systems may make product access difficult, especially for high-turnover items. Proper rack selection and aisle layout can improve product searching, picking, and retrieval processes.",
      icon: Search,
    },
    {
      shortTitle: "Layout",
      title: "Area Gudang Berantakan",
      enTitle: "Unstructured Warehouse Layout",
      desc: "Layout penyimpanan yang tidak terstruktur dapat mempengaruhi efisiensi operasional, keamanan kerja, dan kerapihan area gudang. Penataan warehouse yang baik membantu menciptakan area kerja yang lebih aman, rapi, dan mudah dikontrol.",
      enDesc: "An unstructured warehouse layout may affect operational efficiency, workplace safety, and overall warehouse organization. Proper warehouse arrangement helps create a safer, cleaner, and easier-to-control working area.",
      icon: AlertTriangle,
    },
  ];

  const systems = [
    {
      title: "SELECTIVE RACKING",
      descriptionId:
        "Sistem racking dengan akses langsung ke setiap pallet. Cocok untuk gudang umum, alur distribusi cepat, dan penyimpanan berbagai jenis barang dengan kebutuhan akses yang fleksibel.",
      descriptionEn:
        "A racking system with direct access to every pallet. Suitable for general warehouses, fast distribution flow, and various product categories with flexible accessibility requirements.",
    },
    {
      title: "DRIVE-IN RACKING",
      descriptionId:
        "Sistem penyimpanan high-density yang memaksimalkan kapasitas gudang dengan mengurangi jumlah aisle. Cocok untuk penyimpanan barang sejenis dalam volume besar dan area gudang yang terbatas.",
      descriptionEn:
        "A high-density storage system designed to maximize warehouse capacity by reducing aisle space. Suitable for similar products, large-volume storage, and limited warehouse areas.",
    },
    {
      title: "DOUBLE DEEP RACKING",
      descriptionId:
        "Sistem racking dengan susunan pallet dua kedalaman untuk meningkatkan kapasitas penyimpanan, namun tetap mempertahankan aksesibilitas yang lebih baik dibanding sistem high-density penuh.",
      descriptionEn:
        "A double-depth pallet racking system designed to increase storage capacity while maintaining better accessibility compared to full high-density systems.",
    },
    {
      title: "CANTILEVER RACKING",
      descriptionId:
        "Sistem racking khusus untuk menyimpan material panjang, besar, atau tidak beraturan seperti pipa, besi, panel kayu, aluminium profile, dan material konstruksi lainnya.",
      descriptionEn:
        "A specialized racking system for long, bulky, or irregular materials such as pipes, steel bars, wood panels, aluminum profiles, and other construction materials.",
    },
    {
      title: "MEZZANINE RACK",
      descriptionId:
        "Struktur racking bertingkat yang dirancang untuk memaksimalkan ruang vertikal gudang, sehingga dapat menambah area penyimpanan, area kerja, atau area operasional tanpa perlu memperluas bangunan.",
      descriptionEn:
        "A multi-level racking structure designed to maximize vertical warehouse space, creating additional storage, working, or operational areas without expanding the building footprint.",
    },
    {
      title: "MOLDING RACK",
      descriptionId:
        "Sistem racking heavy-duty yang dirancang khusus untuk penyimpanan mold, dies, tooling, dan komponen industri berbobot tinggi agar lebih tertata, aman, dan mudah diakses.",
      descriptionEn:
        "A heavy-duty racking system specially designed for molds, dies, tooling, and high-weight industrial components to keep them organized, safe, and easily accessible.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#080808] text-zinc-200">
      <Hero
        eyebrow="倉庫ソリューション"
        title="Solusi Warehouse Industrial"
        english="Warehouse Solutions with Practical Engineering Approach"
        description="Mendukung kebutuhan warehouse melalui solusi storage, handling, racking system, dan pendekatan operasional yang practical dan efisien."
        image={images.warehouse}
      >
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a href="#warehouse-categories" className="inline-flex items-center justify-center bg-red-800 px-7 py-4 text-sm font-semibold tracking-[0.16em] text-white transition hover:bg-red-700">
            Explore Solutions
          </a>
          <a href="mailto:admin@nitoriyo.com" className="inline-flex items-center justify-center border border-white/15 px-7 py-4 text-sm font-semibold tracking-[0.16em] text-white transition hover:border-red-700/70 hover:text-red-500">
            Hubungi Kami
          </a>
        </div>
      </Hero>

      <section id="warehouse-categories" className="bg-black px-6 py-24 text-white lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-20 max-w-4xl">
            <p className="mb-6 text-sm uppercase tracking-[0.35em] text-red-500">
              Warehouse Systems
            </p>

            <h1 className="mb-8 text-5xl font-light leading-[1.05] tracking-tight lg:text-7xl">
              Racking
              <br />
              Systems
            </h1>

            <p className="max-w-2xl text-lg leading-relaxed text-zinc-400">
              Sistem racking industri yang disesuaikan berdasarkan alur operasional,
              kapasitas penyimpanan, kebutuhan akses barang, dan strategi material handling.
            </p>

            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-zinc-600">
              Industrial racking systems engineered based on operational flow,
              storage capacity, accessibility requirements, and material handling strategy.
            </p>
          </div>

          <div className="border-t border-white/10">
            {systems.map((item, index) => {
              const isOpen = openIndex === index;

              return (
                <div key={item.title} className="border-b border-white/10 py-8">
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="group flex w-full items-center justify-between gap-6 text-left"
                  >
                    <h2 className="text-3xl font-light tracking-wide text-white transition-colors duration-300 group-hover:text-red-500 lg:text-5xl">
                      {item.title}
                    </h2>

                    <ChevronDown
                      className={`h-7 w-7 shrink-0 text-zinc-500 transition-all duration-300 ${
                        isOpen ? "rotate-180 text-red-500" : ""
                      }`}
                    />
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-500 ${
                      isOpen ? "max-h-96 pt-8 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="max-w-3xl space-y-4 border-l border-red-500/40 pl-6">
                      <p className="text-lg leading-relaxed text-zinc-300">
                        {item.descriptionId}
                      </p>

                      <p className="text-sm leading-relaxed text-zinc-600">
                        {item.descriptionEn}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#0b0b0b] py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeader title="MASALAH UMUM WAREHOUSE" jp="COMMON WAREHOUSE ISSUES　一般的な倉庫問題" />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {warehouseProblems.map((item, i) => {
              const Icon = item.icon;
              const isOpen = expandedWarehouseProblem === i;
              return (
                <button
                  key={item.title}
                  onClick={() => setExpandedWarehouseProblem(isOpen ? null : i)}
                  className={`group min-h-[320px] border bg-[#111111] p-8 text-left transition hover:bg-[#141414] ${isOpen ? "border-red-700/70" : "border-white/10 hover:border-red-700/40"}`}
                >
                  <div className="mb-8 flex items-start justify-between">
                    <div className="flex h-20 w-20 items-center justify-center border border-white/10 bg-black/40 text-red-500 transition group-hover:border-red-700/50 group-hover:bg-red-950/20">
                      <Icon className="h-10 w-10" />
                    </div>
                    <span className="pt-2 text-xs tracking-[0.28em] text-zinc-600">0{i + 1}</span>
                  </div>
                  <div className="mb-7 h-px w-14 bg-red-700" />
                  <h3 className="max-w-sm text-3xl font-semibold leading-tight text-white">{item.shortTitle}</h3>
                  <p className="mt-3 text-sm italic tracking-wide text-zinc-500">{item.enTitle}</p>
                  <div className={`overflow-hidden transition-all duration-500 ${isOpen ? "mt-6 max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
                    <h4 className="text-lg font-semibold text-white">{item.title}</h4>
                    <p className="mt-4 text-sm leading-7 text-zinc-400">{item.desc}</p>
                    <p className="mt-4 text-sm italic leading-7 text-zinc-600">{item.enDesc}</p>
                  </div>
                  <p className="mt-7 text-xs font-semibold tracking-[0.2em] text-red-500/80">
                    {isOpen ? "CLOSE DETAIL" : "VIEW DETAIL"}
                  </p>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#090909] py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeader title="PENDEKATAN SOLUSI KAMI" jp="OUR WAREHOUSE APPROACH　倉庫ソリューションアプローチ" />
          <div className="grid gap-6 lg:grid-cols-4">
            {["Analisa Kebutuhan Storage", "Pertimbangan Layout Gudang", "Pemilihan Sistem Rack", "Efisiensi Operasional"].map((item, i) => (
              <div key={item} className="border border-white/10 bg-[#111111] p-8">
                <div className="mb-6 flex items-center justify-between">
                  <div className="h-px w-12 bg-emerald-600" />
                  <span className="text-xs tracking-[0.28em] text-zinc-600">0{i + 1}</span>
                </div>
                <h3 className="text-xl font-semibold text-white">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA
        title="Diskusikan Kebutuhan Warehouse Anda"
        english="Let’s Discuss Your Warehouse Requirements"
        text="Nitoriyo siap mendukung kebutuhan warehouse melalui solusi storage, handling, dan warehouse support yang practical dan professional."
      />
    </main>
  );
}

function PlaceholderPage({ type }) {
  const isSupply = type === "supply";
  const config = {
    image: isSupply ? images.supply : images.warehouse,
    eyebrow: isSupply ? "産業資材供給" : "倉庫ソリューション",
    title: isSupply ? "General Industrial Supply" : "Solusi Warehouse Industrial",
    english: isSupply ? "Flexible Industrial Supply Support" : "Warehouse Solutions",
    desc: isSupply
      ? "Dukungan pengadaan fleksibel untuk berbagai kebutuhan operasional industri, mulai dari electrical, tools, technical equipment, hingga kebutuhan project-based."
      : "Dukungan solusi warehouse untuk kebutuhan storage, handling, racking, pallet, dan efisiensi operasional gudang.",
    sections: isSupply
      ? ["Electrical Components", "Industrial Tools", "Technical Equipment", "Project-Based Supply"]
      : ["Racking System", "Material Handling", "Pallet & Storage Support", "Warehouse Operational Support"],
  };

  return (
    <main className="min-h-screen bg-[#080808] text-zinc-200">
      <Hero eyebrow={config.eyebrow} title={config.title} english={config.english} description={config.desc} image={config.image}>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a href="mailto:admin@nitoriyo.com" className="inline-flex items-center justify-center bg-red-800 px-7 py-4 text-sm font-semibold tracking-[0.16em] text-white transition hover:bg-red-700">
            Hubungi Kami
          </a>
          <a href="https://api.whatsapp.com/send?phone=6281233330550" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-3 border border-white/15 px-7 py-4 text-sm font-semibold tracking-[0.16em] text-white transition hover:border-red-700/70 hover:text-red-500">
            WhatsApp <WhatsAppIcon />
          </a>
        </div>
      </Hero>
      <section className="bg-[#0b0b0b] py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeader title="AREA SOLUSI" jp="SOLUTION AREAS　対応分野" />
          <p className="mb-10 max-w-4xl text-lg leading-8 text-zinc-300">
            Nitoriyo mendukung kebutuhan industri melalui pilihan produk dan solusi yang disesuaikan dengan kebutuhan operasional, kondisi lapangan, dan target efisiensi customer.
          </p>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {config.sections.map((s, i) => (
              <div key={s} className="border border-white/10 bg-[#111111] p-8">
                <div className="mb-5 flex items-center justify-between">
                  <div className="h-px w-12 bg-red-700" />
                  <span className="text-xs tracking-[0.28em] text-zinc-600">0{i + 1}</span>
                </div>
                <h3 className="text-xl font-semibold text-white">{s}</h3>
                <p className="mt-4 text-sm leading-7 text-zinc-500">
                  Dukungan supply dan solusi industrial yang practical, reliable, dan sesuai kebutuhan operasional.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTA
        title="Diskusikan Kebutuhan Industri Anda"
        english="Let’s Discuss Your Industrial Needs"
        text="Nitoriyo siap mendukung kebutuhan operasional industri Anda melalui pendekatan supply yang reliable, practical, dan professional."
      />
    </main>
  );
}

function PreviewApp() {
  const [page, setPage] = useState("home");

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [page]);

  const currentPage =
    page === "home" ? (
      <HomePage setPage={setPage} />
    ) : page === "led" ? (
      <LEDProductsPage />
    ) : page === "warehouse" ? (
      <WarehouseSolutionsPage />
    ) : (
      <PlaceholderPage type={page} />
    );

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar currentPage={page} setPage={setPage} />
      <div className="fixed bottom-6 left-1/2 z-[100] flex -translate-x-1/2 overflow-hidden border border-white/10 bg-black/80 backdrop-blur-xl shadow-2xl shadow-black/50">
        {pages.map((p) => (
          <button
            key={p.id}
            onClick={() => setPage(p.id)}
            className={`px-4 py-3 text-[11px] font-semibold tracking-[0.14em] transition ${page === p.id ? "bg-red-800 text-white" : "text-zinc-400 hover:text-white"}`}
          >
            {p.path}
          </button>
        ))}
      </div>
      <div key={page}>{currentPage}</div>
      <Footer setPage={setPage} />
    </div>
  );
}

export default PreviewApp;

