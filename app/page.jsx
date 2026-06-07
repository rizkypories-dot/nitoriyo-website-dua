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
  hero: "/background-home.jpg",
  heroTexture: "",
  about: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1600&q=80",
  led: "/street-light.png",
  warehouse: "/warehouse-rack-hero.png",
  it: "/Laptop.png",
  supply: "/general-supply.jpg",
  factory: "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&w=1400&q=80",
  office: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=80",
  meeting: "https://images.unsplash.com/photo-1517502884422-41eaead166d4?auto=format&fit=crop&w=1400&q=80",
  outdoor: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1400&q=80",
  parking: "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?auto=format&fit=crop&w=1400&q=80",
  pallet: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=800&q=80",
  handling: "https://images.unsplash.com/photo-1586528116311-ad8ed7450942?auto=format&fit=crop&w=800&q=80",
};

const pages = [
  { id: "home", label: "Home", path: "/" },
  { id: "led", label: "LED Products", path: "/led-products" },
  { id: "warehouse", label: "Warehouse", path: "/warehouse-solutions" },
  { id: "it", label: "IT Solutions", path: "/it-solutions" },
  { id: "supply", label: "General Supply", path: "/general-supply" },
];

const navItems = [
  { label: "Home", page: "home" },
  { label: "Products and Solutions", page: "home", target: "solutions-section" },
  { label: "About Us", page: "home", target: "about-section" },
  { label: "Contact", page: "home", target: "contact-section" },
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
      <img src="/logo-nitoriyo.png" alt="Nitoriyo Logo" className="h-14 w-auto" />
      <div className="leading-tight"></div>
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
          <nav className="flex items-center gap-2 xl:gap-3">
            {navItems.map((item) => {
              const isActive = currentPage === item.page && !item.target;
              return (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item)}
                  className={`px-5 py-2 rounded-full border text-sm transition-all duration-300 ${
                    isActive 
                      ? "border-white/60 text-white bg-white/10" 
                      : "border-white/30 text-zinc-300 hover:text-white hover:border-white/60 hover:bg-white/10"
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>
          <div className="flex items-center gap-2 ml-2">
            <a href="https://api.whatsapp.com/send?phone=6281233330550" target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center text-zinc-400 transition hover:text-green-500" aria-label="WhatsApp"><WhatsAppIcon className="h-5 w-5" /></a>
            <a href="mailto:admin@nitoriyo.com" className="flex h-10 w-10 items-center justify-center text-zinc-400 transition hover:text-blue-500" aria-label="Email"><Mail className="h-5 w-5" /></a>
          </div>
        </div>
      </div>
    </header>
  );
}

function Hero({ eyebrow, title, english, description, image, children, rightContent, setPage, isHome = false }) {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden border-b border-white/10 bg-black pt-32 pb-20">
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${image})` }}
      />
      
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/95 via-black/70 to-transparent" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
      
      <div className={`relative z-10 mx-auto w-full max-w-7xl px-5 lg:px-8 grid items-center gap-10 lg:grid-cols-2 lg:gap-12`}>
        
        <div className="flex w-full flex-col max-w-xl pt-10 lg:pt-0">
          {isHome ? (
            <>
              <div className="mb-6 flex flex-col gap-3">
                <p className="text-xs tracking-[0.36em] text-red-500/90 font-semibold md:text-sm">
                  産業ソリューションパートナー
                </p>
                <p className="text-white text-lg md:text-xl font-medium tracking-[0.02em]">
                  PT Nitoriyo Fuku Hana
                </p>
              </div>

              <h1 className="text-5xl font-semibold leading-[1.05] tracking-tight text-white md:text-6xl lg:text-[68px]">
                Industrial Supplier
              </h1>
              
              <h2 className="mt-3 text-2xl font-light leading-tight tracking-wide text-zinc-300 md:text-3xl">
                dengan Pendekatan Engineering
              </h2>

              <div className="mt-8 space-y-3">
                <p className="text-lg text-zinc-200 font-medium">Mendukung operasional industri melalui :</p>
                <ul className="list-disc pl-6 text-zinc-300 space-y-1 text-base md:text-lg">
                  <li>LED Products</li>
                  <li>Warehouse Solutions</li>
                  <li>IT Solutions</li>
                  <li>General Supply</li>
                </ul>
              </div>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a 
                  href="https://api.whatsapp.com/send?phone=6281233330550"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-3 bg-red-800 px-8 py-4 text-sm font-semibold tracking-[0.16em] text-white transition hover:bg-red-700 rounded-md"
                >
                  WhatsApp <WhatsAppIcon className="h-4 w-4" />
                </a>
                <a 
                  href="mailto:admin@nitoriyo.com"
                  className="inline-flex items-center justify-center border border-white/20 px-8 py-4 text-sm font-semibold tracking-[0.16em] text-white transition hover:border-white/50 hover:bg-white/5 rounded-md"
                >
                  Email
                </a>
              </div>
            </>
          ) : (
            <>
              <h1 className="text-4xl font-semibold leading-tight tracking-tight text-white md:text-6xl">{title}</h1>
              <div className="mt-8 space-y-3">
                {english && <p className="text-xl font-light tracking-[0.08em] text-zinc-400 md:text-2xl">{english}</p>}
                {eyebrow && <p className="text-xs tracking-[0.36em] text-red-500/90 md:text-sm">{eyebrow}</p>}
              </div>
              <div className="mt-7 h-px w-24 bg-red-700" />
              <p className="mt-8 text-lg leading-8 text-zinc-300 md:text-xl">{description}</p>
              {children}
            </>
          )}
        </div>

        <div id={isHome ? "solutions-section" : ""} className="w-full flex flex-col mt-10 lg:mt-0 pb-10 lg:pb-0">
          {isHome ? (
            <>
              <div className="mb-6 lg:mb-8 text-left border-l-4 border-red-700 pl-4">
                <h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-white">SOLUSI UTAMA KAMI</h3>
                <p className="mt-1 text-[10px] md:text-xs tracking-[0.25em] text-zinc-400 uppercase">Our Core Solutions 主要ソリューション</p>
              </div>

              <div className="grid grid-cols-2 gap-4 lg:gap-6 w-full">
                <button onClick={() => setPage("led")} className="group relative flex flex-col items-center justify-center h-[200px] sm:h-[240px] lg:h-[260px] w-full p-4 lg:p-5 rounded-[16px] border border-white/10 bg-gradient-to-b from-[#6b0808]/30 via-[#1a0202]/30 to-[#050505]/30 backdrop-blur-lg transition-all duration-300 hover:border-red-500 hover:-translate-y-2 shadow-[0_15px_40px_rgba(0,0,0,0.8)] hover:shadow-[0_20px_60px_rgba(220,38,38,0.2)]">
                  <h3 className="text-sm sm:text-base lg:text-lg font-medium text-zinc-200 text-center tracking-wide leading-snug group-hover:text-white transition-colors absolute top-4 sm:top-5 lg:top-6">LED Products</h3>
                  <img src="/icon-lamp.png" alt="LED Products" className="h-[80px] w-[80px] sm:h-[100px] sm:w-[100px] lg:h-[130px] lg:w-[130px] object-contain opacity-90 transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute bottom-4 sm:bottom-5 left-4 sm:left-5 flex items-center text-red-600 font-bold italic text-[10px] sm:text-xs lg:text-sm transition-colors duration-300 group-hover:text-red-500">View Details <span className="tracking-[-0.1em] ml-1 lg:ml-2">-----&gt;</span></div>
                </button>

                <button onClick={() => setPage("warehouse")} className="group relative flex flex-col items-center justify-center h-[200px] sm:h-[240px] lg:h-[260px] w-full p-4 lg:p-5 rounded-[16px] border border-white/10 bg-gradient-to-b from-[#6b0808]/30 via-[#1a0202]/30 to-[#050505]/30 backdrop-blur-lg transition-all duration-300 hover:border-red-500 hover:-translate-y-2 shadow-[0_15px_40px_rgba(0,0,0,0.8)] hover:shadow-[0_20px_60px_rgba(220,38,38,0.2)]">
                  <h3 className="text-sm sm:text-base lg:text-lg font-medium text-zinc-200 text-center tracking-wide leading-snug group-hover:text-white transition-colors absolute top-4 sm:top-5 lg:top-6">Warehouse<br className="hidden lg:block"/> Solutions</h3>
                  <img src="/icon-racking.png" alt="Warehouse Solutions" className="h-[75px] w-[75px] sm:h-[95px] sm:w-[95px] lg:h-[120px] lg:w-[120px] object-contain opacity-90 transition-transform duration-500 group-hover:scale-110 mt-2 lg:mt-3" />
                  <div className="absolute bottom-4 sm:bottom-5 left-4 sm:left-5 flex items-center text-red-600 font-bold italic text-[10px] sm:text-xs lg:text-sm transition-colors duration-300 group-hover:text-red-500">View Details <span className="tracking-[-0.1em] ml-1 lg:ml-2">-----&gt;</span></div>
                </button>

                <button onClick={() => setPage("it")} className="group relative flex flex-col items-center justify-center h-[200px] sm:h-[240px] lg:h-[260px] w-full p-4 lg:p-5 rounded-[16px] border border-white/10 bg-gradient-to-b from-[#6b0808]/30 via-[#1a0202]/30 to-[#050505]/30 backdrop-blur-lg transition-all duration-300 hover:border-red-500 hover:-translate-y-2 shadow-[0_15px_40px_rgba(0,0,0,0.8)] hover:shadow-[0_20px_60px_rgba(220,38,38,0.2)]">
                  <h3 className="text-sm sm:text-base lg:text-lg font-medium text-zinc-200 text-center tracking-wide leading-snug group-hover:text-white transition-colors absolute top-4 sm:top-5 lg:top-6">IT Solutions</h3>
                  <img src="/icon-it.png" alt="IT Solutions" className="h-[85px] w-[85px] sm:h-[110px] sm:w-[110px] lg:h-[135px] lg:w-[135px] object-contain opacity-90 transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute bottom-4 sm:bottom-5 left-4 sm:left-5 flex items-center text-red-600 font-bold italic text-[10px] sm:text-xs lg:text-sm transition-colors duration-300 group-hover:text-red-500">View Details <span className="tracking-[-0.1em] ml-1 lg:ml-2">-----&gt;</span></div>
                </button>

                <button onClick={() => setPage("supply")} className="group relative flex flex-col items-center justify-center h-[200px] sm:h-[240px] lg:h-[260px] w-full p-4 lg:p-5 rounded-[16px] border border-white/10 bg-gradient-to-b from-[#6b0808]/30 via-[#1a0202]/30 to-[#050505]/30 backdrop-blur-lg transition-all duration-300 hover:border-red-500 hover:-translate-y-2 shadow-[0_15px_40px_rgba(0,0,0,0.8)] hover:shadow-[0_20px_60px_rgba(220,38,38,0.2)]">
                  <h3 className="text-sm sm:text-base lg:text-lg font-medium text-zinc-200 text-center tracking-wide leading-snug group-hover:text-white transition-colors absolute top-4 sm:top-5 lg:top-6">General<br className="hidden lg:block"/> Supply</h3>
                  <img src="/icon-general.png" alt="General Supply" className="h-[75px] w-[75px] sm:h-[100px] sm:w-[100px] lg:h-[125px] lg:w-[125px] object-contain opacity-90 transition-transform duration-500 group-hover:scale-110 mt-2 lg:mt-3" />
                  <div className="absolute bottom-4 sm:bottom-5 left-4 sm:left-5 flex items-center text-red-600 font-bold italic text-[10px] sm:text-xs lg:text-sm transition-colors duration-300 group-hover:text-red-500">View Details <span className="tracking-[-0.1em] ml-1 lg:ml-2">-----&gt;</span></div>
                </button>
              </div>
            </>
          ) : rightContent ? (
            <div className="w-full flex justify-end">
              {rightContent}
            </div>
          ) : null}
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
    <section id="contact-section" className="bg-[#0a0a0a] py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeader title="HUBUNGI KAMI" jp="CONTACT & OFFICE お問い合わせ・所在地" />
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="border border-white/10 bg-[#111111] p-8 md:p-10 rounded-2xl">
            <div className="mb-6 flex items-center gap-3 text-red-500"><MapPin className="h-5 w-5" /><p className="text-xs font-semibold tracking-[0.28em]">OFFICE</p></div>
            <div className="grid gap-8 md:grid-cols-2">
              <div><h3 className="text-xl font-semibold text-white">Tangerang Office</h3><p className="mt-4 text-sm leading-7 text-zinc-400">Gading Serpong – Carrillo 2 No. 11<br />Paramount Land</p></div>
              <div><h3 className="text-xl font-semibold text-white">Bekasi Office</h3><p className="mt-4 text-sm leading-7 text-zinc-400">Lippo Cikarang – Le Freya<br />Jl. Gunung Jayawijaya No. 10, Bekasi</p></div>
            </div>
          </div>
          <div className="border border-white/10 bg-[#111111] p-8 md:p-10 rounded-2xl">
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
  return (
    <main className="min-h-screen bg-[#080808] text-zinc-200">
      <Hero image={images.hero} setPage={setPage} isHome={true} />

      <section id="about-section" className="border-y border-white/10 bg-[#0c0c0c] py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[1fr_0.9fr] lg:px-8">
          <div><SectionHeader title="TENTANG KAMI" jp="ABOUT US 会社概要" /><div className="space-y-6 text-base leading-8 text-zinc-300 md:text-lg"><p>PT Nitoriyo Fuku Hana adalah perusahaan industrial supplier dan solution partner yang berfokus mendukung kebutuhan operasional industri melalui pendekatan engineering, dukungan teknis, dan solusi produk yang reliable.</p><p>Kami mendukung lingkungan industri melalui produk LED, solusi warehouse, dan layanan general industrial supply yang dirancang untuk meningkatkan efisiensi operasional, keandalan, dan performa jangka panjang.</p></div></div>
          <div className="relative min-h-[420px] overflow-hidden border border-white/10 bg-zinc-950 rounded-2xl"><div className="absolute inset-0 bg-cover bg-center opacity-65" style={{ backgroundImage: `url(${images.about})` }} /><div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" /><div className="absolute bottom-0 left-0 right-0 p-8"><div className="mb-5 h-px w-16 bg-red-700" /><p className="max-w-sm text-sm leading-7 tracking-wide text-zinc-300">Technical product supply, practical engineering support, and reliable execution for industrial customers.</p></div></div>
        </div>
      </section>
      <ContactOffice />
    </main>
  );
}

function LEDProductsPage({ setPage }) {
  const [expandedIssue, setExpandedIssue] = useState(null);
  const [expandedApproach, setExpandedApproach] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [modalTab, setModalTab] = useState("overview");

  const highBaySpecs = [
    { brand: "NFH", series: "High Bay Light (UFO Series)", type: "NF-LY-UFO65-Y", power: "65", volt: "90-305V", temp: "5700K", flux: "12,675", features: "IP65, Efficacy ~195 lm/W, CRI >70, Aluminum body" },
    { brand: "NFH", series: "High Bay Light (GL-02 Series)", type: "NF-HBL-02-G7-60W", power: "60", volt: "100-277V", temp: "5700K", flux: "10,800", features: "IP65, Efficacy 180 lm/W, CRI 80, Aluminum & PC" },
    { brand: "NFH", series: "High Bay Light (GL-08 Series)", type: "NF-GL08-75-90", power: "75", volt: "90-277V", temp: "5700K", flux: "12,375", features: "IP65, IK08, Efficacy 165 lm/W, CRI 80, Alum Die-Cast" },
    { brand: "NFH", series: "High Bay Light (UFO Series)", type: "NF-LY-UFO150-Y", power: "150", volt: "90-305V", temp: "5700K", flux: "28,500", features: "IP65, Efficacy ~190 lm/W, CRI >70, Aluminum body" },
    { brand: "NFH", series: "High Bay Light (GL-08 Series)", type: "NF-GL08-240-90", power: "240", volt: "100-277V", temp: "5700K", flux: "39,600", features: "IP65, IK08, Efficacy 165 lm/W, CRI 80, Alum Die-Cast" },
    { brand: "Philips", series: "High Bay Light (SmartBright)", type: "BY239P LED100/NW", power: "70", volt: "220-240V", temp: "4000K", flux: "10,000", features: "IP65, IK06, Efficacy 142 lm/W, CRI 80, SmartBright Compact" },
    { brand: "Philips", series: "High Bay Light (SmartBright)", type: "BY239P LED200/CW", power: "145", volt: "220-240V", temp: "6500K", flux: "20,000", features: "IP65, IK06, Efficacy 138 lm/W, CRI 80, SmartBright Heavy" },
    { brand: "Philips", series: "High Bay Light (CoreLine)", type: "BY120P LED100S/840", power: "67", volt: "220-240V", temp: "4000K", flux: "10,000", features: "IP65, IK07, Efficacy 149 lm/W, CRI 80, CoreLine Reliable" },
    { brand: "Philips", series: "High Bay Light (GreenPerform)", type: "BY698P G5 LED105/CW", power: "63", volt: "220-240V", temp: "6500K", flux: "10,500", features: "IP65, IK08, Efficacy 166 lm/W, CRI 80, GreenPerform G5 WB" },
    { brand: "Philips", series: "High Bay Light (GentleSpace)", type: "BY481P LED170S/840", power: "103", volt: "220-240V", temp: "4000K", flux: "17,000", features: "IP65, IK08, Efficacy 165 lm/W, CRI 80, DALI Dimming" },
  ];

  const floodLightSpecs = [
    { brand: "NFH", series: "LED Flood Light Series", type: "NF-LY-ST23050", power: "50", volt: "100-240V", temp: "5000K", flux: "8,000", features: "IP66, Efficacy 160 lm/W, CRI >70, Condenser Lens PC" },
    { brand: "NFH", series: "LED Flood Light Series", type: "NF-LY-ST23100", power: "100", volt: "100-240V", temp: "5000K", flux: "16,000", features: "IP66, Efficacy 160 lm/W, CRI >70, Condenser Lens PC" },
    { brand: "NFH", series: "LED Flood Light Series", type: "NF-LY-ST23150", power: "150", volt: "100-240V", temp: "5000K", flux: "24,000", features: "IP66, Efficacy 160 lm/W, CRI >70, Condenser Lens PC" },
    { brand: "NFH", series: "LED Flood Light Series", type: "NF-LY-ST23200", power: "200", volt: "100-240V", temp: "5000K", flux: "32,000", features: "IP66, Efficacy 160 lm/W, CRI >70, Condenser Lens PC" },
    { brand: "Philips", series: "PHILIPS - LED Floodlight (SmartBright)", type: "BVP151 LED50/NW", power: "50", volt: "220-240V", temp: "4000K", flux: "4,750", features: "IP65, IK07, Compact Essential Floodlight, Die-cast Alum" },
    { brand: "Philips", series: "PHILIPS - LED Floodlight (SmartBright)", type: "BVP151 LED100/CW", power: "100", volt: "220-240V", temp: "6500K", flux: "9,500", features: "IP65, IK07, Compact Essential Floodlight, Die-cast Alum" },
    { brand: "Philips", series: "PHILIPS - LED Floodlight (Tango G4)", type: "BVP431 LED154/NW", power: "110", volt: "220-240V", temp: "4000K", flux: "15,400", features: "IP66, IK08, Tango G4 High Efficiency, 140 lm/W" },
    { brand: "Philips", series: "PHILIPS - LED Floodlight (Tango G4)", type: "BVP432 LED280/NW", power: "200", volt: "220-240V", temp: "4000K", flux: "28,000", features: "IP66, IK08, Tango G4 Mid Power, 140 lm/W, 10kV Surge" },
    { brand: "Philips", series: "PHILIPS - LED Floodlight (Tango G4)", type: "BVP433 LED580/CW", power: "410", volt: "220-240V", temp: "6500K", flux: "58,000", features: "IP66, IK08, Tango G4 Extreme Output, 141 lm/W" },
  ];

  const streetLightSpecs = [
    { brand: "NFH", series: "LED Street Light Series", type: "NF-LY-ST10060", power: "60", volt: "100-240V", temp: "4000K", flux: "9,600", features: "IP66, Efficacy 160 lm/W, CRI >70, Aluminum casing" },
    { brand: "NFH", series: "LED Street Light Series", type: "NF-LY-ST10080", power: "80", volt: "100-240V", temp: "4000K", flux: "12,800", features: "IP66, Efficacy 160 lm/W, CRI >70, Aluminum casing" },
    { brand: "NFH", series: "LED Street Light Series", type: "NF-LY-ST10100", power: "100", volt: "100-240V", temp: "4000K", flux: "16,000", features: "IP66, Efficacy 160 lm/W, CRI >70, Aluminum casing" },
    { brand: "Philips", series: "PHILIPS - LED Street Light (SmartBright)", type: "BRP130 LED70/NW", power: "50", volt: "220-240V", temp: "4000K", flux: "7,000", features: "IP66, IK08, Efficacy 140 lm/W, CRI 70, Compact street luminaire" },
    { brand: "Philips", series: "PHILIPS - LED Street Light (SmartBright)", type: "BRP131 LED100/NW", power: "70", volt: "220-240V", temp: "4000K", flux: "10,000", features: "IP66, IK08, Efficacy 142 lm/W, CRI 70, Slim profile" },
    { brand: "Philips", series: "PHILIPS - LED Street Light (SmartBright)", type: "BRP132 LED140/NW", power: "100", volt: "220-240V", temp: "4000K", flux: "14,000", features: "IP66, IK08, Efficacy 140 lm/W, CRI 70, Integrated surge protection" },
    { brand: "Philips", series: "PHILIPS - LED Street Light (RoadFlair)", type: "BRP491 LED102/NW", power: "70", volt: "220-240V", temp: "4000K", flux: "10,200", features: "IP66, Efficacy 140 lm/W, CRI 70, RoadFlair Gen2 Economy" },
    { brand: "Philips", series: "PHILIPS - LED Street Light (RoadFlair)", type: "BRP491 LED115/NW", power: "80", volt: "220-240V", temp: "4000K", flux: "11,500", features: "IP66, Efficacy 140 lm/W, CRI 70, RoadFlair Gen2 Medium" },
    { brand: "Philips", series: "PHILIPS - LED Street Light (RoadFlair)", type: "BRP491 LED130/NW", power: "90", volt: "220-240V", temp: "4000K", flux: "13,000", features: "IP66, Efficacy 140 lm/W, CRI 70, RoadFlair Gen2 Standard" },
    { brand: "Philips", series: "PHILIPS - LED Street Light (RoadFlair)", type: "BRP491 LED142/NW", power: "100", volt: "220-240V", temp: "4000K", flux: "14,200", features: "IP66, Efficacy 140 lm/W, CRI 70, RoadFlair Gen2 Heavy" },
    { brand: "Philips", series: "PHILIPS - LED Street Light (RoadFlair)", type: "BRP492 LED215/NW", power: "150", volt: "220-240V", temp: "4000K", flux: "21,500", features: "IP66, Efficacy 140 lm/W, CRI 70, RoadFlair Gen2 Max" },
    { brand: "Philips", series: "PHILIPS - LED Street Light (RoadLume)", type: "BRP393 LED240/NW", power: "165", volt: "220-240V", temp: "4000K", flux: "24,000", features: "IP66, IK08, Efficacy 145 lm/W, CRI 70, High power street infrastructure" },
    { brand: "Philips", series: "PHILIPS - LED Street Light (RoadFlair)", type: "BRP594 LED301/NW", power: "180", volt: "220-240V", temp: "4000K", flux: "30,100", features: "IP66, IK08, Efficacy 160 lm/W, CRI 70, RoadFlair Pro Infrastructure" },
  ];

  const linearLightSpecs = [
    { brand: "NFH", series: "LED Tube Light Series", type: "NF-EH665-L10D", power: "11", volt: "85-265V", temp: "6500K", flux: "2,000", features: "CRI 80, Beam 300 deg, Milky White, PC/Glass Cover" },
    { brand: "NFH", series: "LED Tube Light Series", type: "NF-EH665-L12D", power: "12", volt: "85-265V", temp: "6500K", flux: "2,160", features: "CRI 80, Beam 300 deg, Milky White, PC/Glass Cover" },
    { brand: "NFH", series: "LED Tube Light Series", type: "NF-EH665-L14", power: "14", volt: "200-240V", temp: "6500K", flux: "2,000", features: "CRI 80, Beam 300 deg, Milky White, PC/Glass Cover" },
    { brand: "NFH", series: "LED Tube Light Series", type: "NF-EH665-L18", power: "18", volt: "85-265V", temp: "6500K", flux: "2,520", features: "CRI 80, Beam 300 deg, Milky White, PC/Glass Cover" },
    { brand: "NFH", series: "LED Tube Light Series", type: "NF-EH665-L21", power: "21", volt: "85-265V", temp: "6500K", flux: "3,400", features: "CRI 80, Beam 300 deg, Milky White, PC/Glass Cover" },
    { brand: "NFH", series: "LED Tube Light Series", type: "NF-EH665-L7D PC", power: "7", volt: "85-265V", temp: "6500K", flux: "1,080", features: "CRI 80, Beam 300 deg, Milky White, PC/Glass Cover" },
    { brand: "NFH", series: "LED Tube Light Series", type: "NF-EH665-L9D PC", power: "9", volt: "85-265V", temp: "6500K", flux: "1,170", features: "CRI 80, Beam 300 deg, Milky White, PC/Glass Cover" },
  ];

  const officeLightSpecs = [
    { brand: "Philips", series: "GreenPerform Panel RC099V G3", type: "RC099X G3 LED56/840 L1W W60L120", power: "43", volt: "220-240V", temp: "4000K", flux: "5,600", features: "Efficacy 130 lm/W, CRI 80, DALI, IK02" },
    { brand: "Philips", series: "GreenPerform Panel RC099V G3", type: "RC099X G3 LED52/940 L1W W60L120 OC", power: "45.5", volt: "220-240V", temp: "4000K", flux: "5,200", features: "Efficacy 115 lm/W, CRI 90, DALI, IK03" },
    { brand: "Philips", series: "GreenPerform Panel RC099V G3", type: "RC099V G3 LED49/865 PSU W30L120", power: "40", volt: "220-240V", temp: "6500K", flux: "4,800", features: "Efficacy 120 lm/W, CRI >80, Non-Dimm, IK03" },
    { brand: "Philips", series: "GreenPerform Panel RC099V G3", type: "RC099X G3 LED40/840 L1W W60L60", power: "31.5", volt: "220-240V", temp: "4000K", flux: "4,000", features: "Efficacy 126 lm/W, CRI 80, DALI, IK02" },
    { brand: "Philips", series: "GreenPerform Panel RC099V G3", type: "RC099V G3 LED69/865 PSU W60L120", power: "50.4", volt: "220-240V", temp: "6500K", flux: "6,800", features: "Efficacy 135 lm/W, CRI >80, Non-Dimm, IK03" },
    { brand: "Philips", series: "GreenPerform Panel RC099V G3", type: "RC099V G3 LED38/840 PSU W60L60 HE", power: "27.1", volt: "220-240V", temp: "4000K", flux: "3,800", features: "Efficacy 140 lm/W, CRI >80, Non-Dimm, IK03" },
  ];

  const currentSpecsData = 
    selectedProduct === "LED High Bay" ? highBaySpecs : 
    selectedProduct === "LED Flood Light" ? floodLightSpecs : 
    selectedProduct === "LED Street Light" ? streetLightSpecs : 
    selectedProduct === "LED Linear Light" ? linearLightSpecs : 
    selectedProduct === "Office Lighting" ? officeLightSpecs : [];
    
  const hasSpecData = currentSpecsData.length > 0;

  const issueCards = [
    { title: "Area Terlalu Gelap", enTitle: "Insufficient Lighting Distribution", desc: "Distribusi pencahayaan yang tidak merata dapat mengurangi visibilitas area kerja dan meningkatkan potensi kesalahan operasional.", enDesc: "Uneven lighting distribution may reduce workplace visibility and increase operational risks.", icon: Lightbulb },
    { title: "Konsumsi Listrik Tinggi", enTitle: "High Energy Consumption", desc: "Penggunaan lampu konvensional atau spesifikasi yang tidak efisien dapat meningkatkan biaya energi operasional secara signifikan.", enDesc: "Conventional lighting systems and inefficient specifications may significantly increase operational energy costs.", icon: Zap },
    { title: "Silau & Tidak Nyaman", enTitle: "Excessive Glare & Visual Discomfort", desc: "Tingkat glare berlebih dapat mengurangi kenyamanan visual operator dan mempengaruhi fokus kerja di area produksi maupun warehouse.", enDesc: "Excessive glare may reduce operator visual comfort and affect focus in production or warehouse areas.", icon: Eye },
    { title: "Pemilihan Lampu Tidak Tepat", enTitle: "Improper Lighting Specification", desc: "Kesalahan dalam memilih tipe lampu, lumen output, atau beam angle dapat menyebabkan performa pencahayaan tidak optimal.", enDesc: "Incorrect selection of lighting type, lumen output, or beam angle may result in poor lighting performance.", icon: AlertTriangle },
    { title: "Area QC Kurang Detail", enTitle: "Insufficient QC Visibility", desc: "Pencahayaan yang kurang optimal pada area inspeksi dapat mempengaruhi akurasi visual dalam proses quality control.", enDesc: "Insufficient lighting in inspection areas may affect visual accuracy during quality control processes.", icon: Search },
    { title: "Layout Tidak Efisien", enTitle: "Inefficient Lighting Layout", desc: "Posisi dan distribusi lampu yang tidak sesuai dapat menyebabkan pemborosan energi sekaligus area kerja yang kurang terang.", enDesc: "Improper lighting positioning and distribution may cause energy waste while leaving areas underlit.", icon: LayoutGrid },
  ];

  const workflow = [
    { title: "Review Existing", enTitle: "Existing Lighting Review", desc: "Meninjau kondisi pencahayaan saat ini berdasarkan distribusi cahaya dan kebutuhan operasional aktual.", enDesc: "Reviewing existing lighting conditions based on light distribution and operational requirements.", icon: Search },
    { title: "Assessment Lux & Area", enTitle: "Lux & Area Assessment", desc: "Melakukan analisa tingkat lux, distribusi pencahayaan, dan karakteristik area untuk menentukan kebutuhan pencahayaan.", enDesc: "Analyzing lux levels, lighting distribution, and area characteristics.", icon: Eye },
    { title: "Rekomendasi Produk", enTitle: "Product Recommendation", desc: "Menentukan spesifikasi produk LED yang sesuai berdasarkan efisiensi energi, lumen output, dan IP rating.", enDesc: "Selecting suitable LED specifications based on energy efficiency, lumen output, and IP rating.", icon: LayoutGrid },
    { title: "Optimasi & ROI", enTitle: "Optimization & ROI Consideration", desc: "Mempertimbangkan potensi penghematan energi, efisiensi operasional, dan estimasi ROI.", enDesc: "Helping evaluate potential energy savings, operational efficiency, and estimated ROI.", icon: Zap },
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

  const categories = [
    { title: "LED High Bay", image: "/high-bay.png" },
    { title: "LED Flood Light", image: "/flood-light.png" },
    { title: "LED Street Light", image: "/street-light.png" },
    { title: "LED Linear Light", image: "/linear-light.png" },
    { title: "Office Lighting", image: "/office-lighting-card.png" },
    { title: "Customized Lighting", image: "/customized-lighting-card.png" },
  ];

  return (
    <main className="min-h-screen bg-[#080808] text-zinc-200">
      <Hero eyebrow="LED製品" title="Produk LED Industrial" english="Industrial LED Products" description="Solusi pencahayaan LED untuk kebutuhan industri modern dengan pendekatan pemilihan produk berbasis engineering." image={images.led} setPage={setPage}>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a 
            href="https://api.whatsapp.com/send?phone=6281233330550" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-red-800 px-[34px] py-4 text-sm font-semibold tracking-[0.16em] text-white transition hover:bg-red-700 rounded-md"
          >
            WhatsApp <WhatsAppIcon className="h-4 w-4" />
          </a>
          <a 
            href="mailto:admin@nitoriyo.com" 
            className="inline-flex items-center justify-center border border-white/20 px-8 py-4 text-sm font-semibold tracking-[0.16em] text-white transition hover:border-white/50 hover:bg-white/5 rounded-md"
          >
            Email
          </a>
        </div>
      </Hero>

      <section id="product-categories" className="bg-[#0c0c0c] py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeader title="KATEGORI PRODUK" jp="PRODUCT CATEGORIES 製品カテゴリー" />
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {categories.map((c) => (
              <div
                key={c.title}
                onClick={() => {
                  setSelectedProduct(c.title);
                  setModalTab("overview");
                }}
                className="group relative min-h-[260px] overflow-hidden border border-white/10 bg-gradient-to-br from-[#6b0808]/30 via-[#1a0202]/50 to-[#050505]/80 backdrop-blur-md cursor-pointer rounded-2xl transition-all duration-300 hover:border-red-500 hover:-translate-y-1 shadow-2xl"
              >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-red-600/10 blur-2xl rounded-full group-hover:bg-red-600/30 transition-all duration-500" />
                
                <div className="absolute inset-x-0 top-6 bottom-20 flex items-center justify-center pointer-events-none z-10">
                  <img src={c.image} alt={c.title} className="max-h-[85%] max-w-[70%] object-contain opacity-80 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110 drop-shadow-2xl" />
                </div>
                
                <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
                  <div className="mb-5 h-[2px] w-14 bg-red-700 transition-all group-hover:w-24" />
                  <h3 className="text-xl font-semibold text-white">{c.title}</h3>
                </div>
              </div>
            ))}
          </div>

          {selectedProduct && (
            <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 md:p-6 backdrop-blur-sm" onClick={() => setSelectedProduct(null)}>
              <div 
                className="bg-[#111111] border border-white/10 max-w-6xl w-full max-h-[90vh] rounded-lg overflow-hidden flex flex-col relative shadow-2xl animate-in fade-in zoom-in-95 duration-200" 
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex justify-between items-center p-6 border-b border-white/10 bg-[#0a0a0a]">
                  <h3 className="text-2xl font-semibold text-white">{selectedProduct}</h3>
                  <button className="text-zinc-400 hover:text-white text-3xl transition" onClick={() => setSelectedProduct(null)}>&times;</button>
                </div>

                {hasSpecData && (
                  <div className="flex border-b border-white/10 bg-[#0f0f0f] px-6">
                    <button 
                      onClick={() => setModalTab("overview")}
                      className={`py-4 px-6 text-sm font-semibold tracking-wider transition-colors ${modalTab === "overview" ? "text-red-500 border-b-2 border-red-500" : "text-zinc-500 hover:text-zinc-300"}`}
                    >
                      OVERVIEW
                    </button>
                    <button 
                      onClick={() => setModalTab("specs")}
                      className={`py-4 px-6 text-sm font-semibold tracking-wider transition-colors ${modalTab === "specs" ? "text-red-500 border-b-2 border-red-500" : "text-zinc-500 hover:text-zinc-300"}`}
                    >
                      MODEL & SPESIFIKASI
                    </button>
                  </div>
                )}

                <div className="overflow-y-auto flex-1 p-6 md:p-8">
                  {modalTab === "overview" && (
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                      <div className="bg-black/50 p-8 flex items-center justify-center border border-white/5 rounded-lg">
                        <img
                          src={
                            selectedProduct === "LED High Bay" ? "/high-bay.png" :
                            selectedProduct === "LED Flood Light" ? "/flood-light.png" :
                            selectedProduct === "LED Street Light" ? "/street-light.png" : 
                            selectedProduct === "Office Lighting" ? "/office-lighting-card.png" : "/linear-light.png"
                          }
                          alt={selectedProduct}
                          className="max-h-[300px] object-contain"
                        />
                      </div>
                      <div>
                        <p className="text-xs tracking-[0.25em] text-red-500 font-semibold mb-3">INDUSTRIAL LIGHTING</p>
                        <p className="text-zinc-300 leading-relaxed mb-6">
                          {selectedProduct === "LED High Bay" 
                            ? "Solusi pencahayaan berkinerja tinggi yang dirancang khusus untuk area industri, pabrik, dan gudang. Menawarkan efisiensi energi maksimal dan durabilitas tinggi di lingkungan ekstrem."
                            : selectedProduct === "LED Flood Light"
                            ? "Solusi pencahayaan sorot yang ideal untuk area luar ruangan, fasad bangunan, lapangan olahraga, hingga area parkir. Tahan cuaca, tangguh, dengan cakupan distribusi cahaya yang lebar."
                            : selectedProduct === "LED Street Light"
                            ? "Solusi penerangan jalan umum (PJU) dan jalan kawasan industri. Optik presisi tinggi memastikan distribusi cahaya merata, visibilitas maksimal, dan ketahanan terhadap cuaca ekstrem."
                            : selectedProduct === "LED Linear Light"
                            ? "Solusi pencahayaan memanjang (Tube/Linear) yang hemat ruang dan efisien. Sangat ideal untuk area produksi berderet, koridor, ruang perakitan, dan area operasional umum."
                            : selectedProduct === "Office Lighting"
                            ? "Panel LED terjangkau yang menghadirkan cahaya nyaman dengan keseragaman luar biasa, UGR19 untuk kenyamanan visual ekstra, dan mendukung koneksi ke sistem kontrol (DALI, Interact, EcoSet)."
                            : "Solusi pencahayaan andal yang dirancang untuk kebutuhan operasional dengan standar efisiensi yang optimal."}
                        </p>
                        
                        <div className="space-y-3 text-sm text-zinc-400 mb-8">
                          <div className="flex justify-between border-b border-white/5 pb-2">
                            <span>Application</span>
                            <span className="text-white font-medium">
                              {selectedProduct === "LED High Bay" ? "Warehouse, Factory, Gym" : 
                               selectedProduct === "LED Flood Light" ? "Outdoor Area, Parking, Facade" : 
                               selectedProduct === "LED Street Light" ? "Street, Highway, Industrial Road" : 
                               selectedProduct === "LED Linear Light" ? "Assembly Line, Production, Corridor" : 
                               selectedProduct === "Office Lighting" ? "Kantor terbuka, area publik, ruang rapat" : "Commercial, Industrial"}
                            </span>
                          </div>
                          <div className="flex justify-between border-b border-white/5 pb-2">
                            <span>Efficacy</span>
                            <span className="text-white font-medium">
                              {selectedProduct === "LED High Bay" ? "Up to 195 Lm/W" : 
                               selectedProduct === "LED Flood Light" ? "Up to 160 Lm/W" : 
                               selectedProduct === "LED Street Light" ? "Up to 160 Lm/W" : 
                               selectedProduct === "LED Linear Light" ? "High Output, CRI 80" : 
                               selectedProduct === "Office Lighting" ? "Up to 140 lm/W" : "High Efficiency"}
                            </span>
                          </div>
                          <div className="flex justify-between border-b border-white/5 pb-2">
                            <span>IP Rating</span>
                            <span className="text-white font-medium">
                              {selectedProduct === "LED High Bay" ? "IP65 Water & Dust Proof" : 
                               selectedProduct === "LED Flood Light" ? "IP65 / IP66 Weatherproof" : 
                               selectedProduct === "LED Street Light" ? "IP66 Weatherproof, IK08" : 
                               selectedProduct === "LED Linear Light" ? "Indoor Industrial Standard" : 
                               selectedProduct === "Office Lighting" ? "IP20 Indoor Standard" : "Standard Rating"}
                            </span>
                          </div>
                        </div>

                        <div className="flex gap-4">
                          <a href="https://api.whatsapp.com/send?phone=6281233330550" target="_blank" rel="noopener noreferrer" className="bg-red-800 text-white font-semibold text-xs tracking-wider uppercase px-6 py-4 transition hover:bg-red-700">Minta Penawaran</a>
                          {hasSpecData && (
                            <button onClick={() => setModalTab("specs")} className="border border-white/20 text-white font-semibold text-xs tracking-wider uppercase px-6 py-4 transition hover:bg-white/10">Lihat Varian</button>
                          )}
                        </div>
                      </div>
                    </div>
                  )}

                  {modalTab === "specs" && hasSpecData && (
                    <div className="animate-in fade-in duration-300">
                      <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <div>
                          <h4 className="text-lg font-semibold text-white">Technical Matrix</h4>
                          <p className="text-sm text-zinc-500 mt-1">Daftar model dan spesifikasi teknis untuk lini {selectedProduct}.</p>
                        </div>
                        <button className="flex items-center gap-2 border border-white/10 bg-zinc-900 px-4 py-2 text-xs font-semibold text-zinc-300 hover:bg-zinc-800 hover:text-white transition w-fit">
                          Download Matrix PDF
                        </button>
                      </div>

                      <div className="overflow-x-auto border border-white/10 rounded bg-[#0a0a0a]">
                        <table className="w-full text-left text-sm text-zinc-300 whitespace-nowrap">
                          <thead className="bg-[#1a1a1a] text-xs uppercase tracking-wider text-zinc-400">
                            <tr>
                              <th className="px-4 py-4 border-b border-white/10 font-semibold">Brand</th>
                              <th className="px-4 py-4 border-b border-white/10 font-semibold">Type / Model</th>
                              <th className="px-4 py-4 border-b border-white/10 font-semibold text-right">Power (W)</th>
                              <th className="px-4 py-4 border-b border-white/10 font-semibold">Luminous (lm)</th>
                              <th className="px-4 py-4 border-b border-white/10 font-semibold">Color Temp</th>
                              <th className="px-4 py-4 border-b border-white/10 font-semibold">Spesifikasi & Fitur</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-white/5">
                            {currentSpecsData.map((spec, idx) => (
                              <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                                <td className="px-4 py-3 font-medium text-white">{spec.brand}</td>
                                <td className="px-4 py-3">
                                  <div className="text-white">{spec.type}</div>
                                  <div className="text-xs text-zinc-500 mt-0.5">{spec.series}</div>
                                </td>
                                <td className="px-4 py-3 text-right font-medium text-red-400">{spec.power}W</td>
                                <td className="px-4 py-3 font-medium text-emerald-400">{spec.flux}</td>
                                <td className="px-4 py-3">{spec.temp}</td>
                                <td className="px-4 py-3 text-xs leading-relaxed text-zinc-400">{spec.features}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="bg-[#0b0b0b] py-24"><div className="mx-auto max-w-7xl px-5 lg:px-8"><SectionHeader title="MASALAH UMUM PENCAHAYAAN INDUSTRI" jp="COMMON INDUSTRIAL LIGHTING ISSUES 一般的な照明問題" /><div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">{issueCards.map((card, i) => { const Icon = card.icon; const isOpen = expandedIssue === i; return <button key={card.title} onClick={() => setExpandedIssue(isOpen ? null : i)} className={`group min-h-[250px] border bg-[#111111] p-8 text-left transition-all duration-300 rounded-2xl hover:bg-[#181818] ${isOpen ? "border-red-700/70" : "border-white/10 hover:border-red-700/40"}`}><div className="mb-8 flex items-start justify-between"><div className="flex h-20 w-20 items-center justify-center border border-white/10 bg-black/40 text-red-500 transition-colors group-hover:border-red-700/50 group-hover:bg-red-950/20 rounded-xl"><Icon className="h-10 w-10" /></div><span className="pt-2 text-xs tracking-[0.28em] text-zinc-600">0{i + 1}</span></div><div className="mb-7 h-px w-14 bg-red-700" /><h3 className="max-w-sm text-[25px] font-semibold leading-tight text-white">{card.title}</h3><p className="mt-3 text-sm italic tracking-wide text-zinc-400">{card.enTitle}</p><div className={`overflow-hidden transition-all duration-500 ${isOpen ? "mt-6 max-h-80 opacity-100" : "max-h-0 opacity-0"}`}><p className="text-sm leading-7 text-zinc-400">{card.desc}</p><p className="mt-4 text-sm italic leading-7 text-zinc-500">{card.enDesc}</p></div><div className="mt-7 flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-red-500/80 transition-colors group-hover:text-red-500"><span>{isOpen ? "CLOSE DETAIL" : "VIEW DETAIL"}</span><ChevronDown className={`h-4 w-4 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} /></div></button>; })}</div></div></section>
      <section className="border-y border-white/10 bg-[#090909] py-24"><div className="mx-auto max-w-7xl px-5 lg:px-8"><SectionHeader title="PENDEKATAN ANALISA KAMI" jp="OUR ANALYSIS APPROACH 解析アプローチ" /><div className="grid gap-6 lg:grid-cols-4">{workflow.map((item, i) => { const Icon = item.icon; const isOpen = expandedApproach === i; return <button key={item.title} onClick={() => setExpandedApproach(isOpen ? null : i)} className={`group min-h-[260px] border bg-[#111111] p-8 text-left transition-all duration-300 rounded-2xl hover:bg-[#181818] ${isOpen ? "border-emerald-600/70" : "border-white/10 hover:border-emerald-600/40"}`}><div className="mb-8 flex items-start justify-between"><div className="flex h-20 w-20 items-center justify-center border border-white/10 bg-black/40 text-emerald-500 transition-colors group-hover:border-emerald-600/50 group-hover:bg-emerald-950/20 rounded-xl"><Icon className="h-10 w-10" /></div><span className="pt-2 text-xs tracking-[0.28em] text-zinc-600">0{i + 1}</span></div><div className="mb-7 h-px w-14 bg-emerald-600" /><h3 className="max-w-sm text-2xl font-semibold leading-tight text-white">{item.title}</h3><p className="mt-3 text-sm italic tracking-wide text-zinc-400">{item.enTitle}</p><div className={`overflow-hidden transition-all duration-500 ${isOpen ? "mt-6 max-h-96 opacity-100" : "max-h-0 opacity-0"}`}><p className="text-sm leading-7 text-zinc-400">{item.desc}</p><p className="mt-4 text-sm italic leading-7 text-zinc-500">{item.enDesc}</p></div><div className="mt-7 flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-emerald-500/80 transition-colors group-hover:text-emerald-500"><span>{isOpen ? "CLOSE DETAIL" : "VIEW DETAIL"}</span><ChevronDown className={`h-4 w-4 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} /></div></button>; })}</div></div></section>
      <section className="bg-[#0c0c0c] py-24"><div className="mx-auto max-w-7xl px-5 lg:px-8"><SectionHeader title="PERTIMBANGAN PENCAHAYAAN" jp="LIGHTING CONSIDERATION 照明基準" /><p className="mb-8 max-w-4xl text-base leading-8 text-zinc-300">Kebutuhan tingkat pencahayaan dapat berbeda tergantung aktivitas, standar operasional, dan kondisi lingkungan kerja.</p><div className="grid gap-4 md:grid-cols-2">{lux.map((row) => <div key={row[0]} className="grid gap-4 border border-white/10 bg-[#111111] p-6 rounded-xl md:grid-cols-[1fr_120px]"><div><h3 className="font-semibold text-white">{row[0]}</h3><p className="mt-2 text-sm leading-6 text-zinc-500">{row[2]}</p></div><div className="text-xl font-semibold text-red-500">{row[1]}</div></div>)}</div><p className="mt-6 text-sm leading-7 text-zinc-500">Nilai acuan dapat berbeda tergantung standar internal perusahaan, jenis pekerjaan, dan kondisi lapangan.</p></div></section>
      <section className="bg-[#090909] py-24"><div className="mx-auto max-w-6xl px-5 lg:px-8"><SectionHeader title="MANFAAT OPTIMASI" jp="OPTIMIZATION BENEFITS 最適化メリット" /><div className="mb-8"><h3 className="text-3xl font-semibold text-white">Potensi Pengurangan Energi hingga 60-70%*</h3><p className="mt-3 text-zinc-500">Up to 60-70% Energy Reduction*</p><p className="mt-3 text-sm text-zinc-500">Tergantung kondisi pencahayaan existing, spesifikasi lampu, dan lingkungan operasional.</p></div><div className="grid overflow-hidden border border-white/10 bg-[#101010] lg:grid-cols-4 rounded-2xl"><div className="border-b border-white/10 p-10 lg:border-b-0 lg:border-r"><p className="text-xs tracking-[0.3em] text-zinc-500">SISTEM LAMA</p><h3 className="mt-4 text-3xl font-semibold text-white">400W</h3><p className="mt-2 text-zinc-400">Metal Halide</p></div><div className="border-b border-white/10 p-10 lg:border-b-0 lg:border-r"><p className="text-xs tracking-[0.3em] text-zinc-500">SISTEM BARU</p><h3 className="mt-4 text-3xl font-semibold text-white">150W</h3><p className="mt-2 text-zinc-400">LED High Bay</p></div><div className="border-b border-white/10 bg-black p-10 lg:border-b-0 lg:border-r"><p className="text-xs tracking-[0.3em] text-zinc-500">POTENSI PENGURANGAN ENERGI</p><h3 className="mt-4 text-5xl font-semibold text-white">62.5%</h3><p className="mt-3 text-sm text-zinc-500">Energy Reduction</p></div><div className="bg-[#0d0d0d] p-10"><p className="text-xs tracking-[0.3em] text-zinc-500">CARBON EMISSION IMPACT</p><h3 className="mt-4 text-3xl font-semibold text-white">Lower Carbon Emission</h3><p className="mt-4 text-sm leading-7 text-zinc-500">Pengurangan konsumsi energi juga membantu menurunkan emisi karbon dan mendukung efisiensi operasional jangka panjang.</p></div></div></div></section>
      <CTA title="Butuh Replacement Lampu atau Optimasi Pencahayaan?" english="Need LED Replacement or Lighting Optimization?" text="Dari kebutuhan replacement hingga project optimasi pencahayaan, Nitoriyo siap mendukung kebutuhan LED industrial Anda." />
    </main>
  );
}

function WarehouseSolutionsPage({ setPage }) {
  const [expandedWarehouseProblem, setExpandedWarehouseProblem] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [modalTab, setModalTab] = useState("overview");

  const rackingSpecs = [
    { brand: "NFH / Custom", type: "Selective Pallet Rack", load: "1000 - 3000 kg / level", size: "Customized Height", material: "Q235 Steel", features: "Powder Coated, Adjustable Beam, Safety Pins" },
    { brand: "NFH / Custom", type: "Drive-In Rack", load: "Up to 1500 kg / pallet", size: "Customized Depth", material: "Q235 Steel", features: "High Density Storage, FILO System" },
    { brand: "NFH / Custom", type: "Cantilever Rack", load: "500 - 1500 kg / arm", size: "Customized Arm Length", material: "Heavy Duty Steel", features: "Single/Double Sided, Ideal for Long Materials" },
    { brand: "NFH / Custom", type: "Mezzanine Rack", load: "300 - 500 kg / sqm", size: "Multi-tier Custom", material: "Steel Structure + Plywood/Steel Floor", features: "Space Maximization, Stairs & Handrail Included" },
  ];

  const palletSpecs = [
    { brand: "NFH", type: "Heavy Duty Plastic Pallet", load: "Static 6T, Dynamic 1.5T", size: "1200 x 1000 x 150 mm", material: "HDPE", features: "Rackable, Reversible, Anti-Slip Surface" },
    { brand: "NFH", type: "Medium Duty Plastic Pallet", load: "Static 4T, Dynamic 1T", size: "1200 x 1000 x 120 mm", material: "HDPE / PP", features: "Nestable, Export Standard, Lightweight" },
    { brand: "NFH", type: "Hygiene / Food Grade Pallet", load: "Static 5T, Dynamic 1.2T", size: "1200 x 1000 x 150 mm", material: "Virgin HDPE", features: "Flat Top, Easy to Clean, FDA Approved" },
  ];

  const handlingSpecs = [
    { brand: "NFH / OEM", type: "Hand Pallet Truck", load: "2.5 - 3.0 Ton", size: "Width 550 / 685 mm", material: "PU / Nylon Wheels", features: "Hydraulic Pump, Ergonomic Handle, Durable" },
    { brand: "NFH / OEM", type: "Manual Stacker", load: "1.0 - 2.0 Ton", size: "Lift Height 1.6 - 3.0 m", material: "Heavy Duty Steel", features: "Adjustable Fork, Foot Pedal Pump" },
    { brand: "NFH / OEM", type: "Semi-Electric Stacker", load: "1.0 - 1.5 Ton", size: "Lift Height up to 3.5 m", material: "Steel & Battery Powered Lift", features: "Electric Lift, Manual Push, Easy Maintenance" },
  ];

  const supportingSpecs = [
    { brand: "NFH", type: "Stretch Film / Wrapping", load: "High Elongation", size: "50cm x 250m (17-20 Mic)", material: "LLDPE", features: "Transparent / Black, Excellent Puncture Resistance" },
    { brand: "NFH", type: "PP Strapping Band", load: "Breaking Strength >100kg", size: "Width 12mm - 15mm", material: "Polypropylene", features: "Machine / Manual Grade, Embossed Surface" },
    { brand: "NFH", type: "Warehouse Safety Barrier", load: "High Impact Resistance", size: "Customized Length", material: "Steel / Flexible Polymer", features: "High Visibility Yellow/Black, Floor Mounted" },
  ];

  const currentWarehouseSpecs =
    selectedProduct === "Racking Systems" ? rackingSpecs :
    selectedProduct === "Pallet Plastik" ? palletSpecs :
    selectedProduct === "Material Handling" ? handlingSpecs :
    selectedProduct === "Supporting Gudang" ? supportingSpecs : [];

  const hasWarehouseSpecData = currentWarehouseSpecs.length > 0;

  const warehouseCategories = [
    { title: "Racking Systems", image: images.warehouse },
    { title: "Pallet Plastik", image: "/icon-pallet-plastic.png" },
    { title: "Material Handling", image: images.handling },
    { title: "Supporting Gudang", image: "/general-supply.jpg" },
  ];

  const warehouseProblems = [
    { shortTitle: "Kapasitas", title: "Kapasitas Gudang Tidak Optimal", enTitle: "Inefficient Storage Capacity", desc: "Penggunaan area storage yang belum maksimal dapat membuat kapasitas gudang terasa cepat penuh, meskipun luas area sebenarnya masih dapat dioptimalkan. Sistem racking, pallet position, dan pengaturan layout memiliki pengaruh besar terhadap kapasitas penyimpanan.", enDesc: "Inefficient storage utilization may cause the warehouse to feel full even when the available space can still be optimized. Racking systems, pallet positions, and layout arrangements strongly affect storage capacity.", icon: LayoutGrid },
    { shortTitle: "Handling", title: "Alur Handling Tidak Efisien", enTitle: "Inefficient Handling Flow", desc: "Alur pergerakan barang yang kurang efisien dapat memperlambat proses loading, unloading, picking, dan replenishment. Perencanaan area handling yang tepat membantu mempercepat workflow dan mengurangi bottleneck operasional.", enDesc: "Inefficient material movement may slow down loading, unloading, picking, and replenishment processes. Proper handling area planning helps improve workflow and reduce operational bottlenecks.", icon: ArrowRight },
    { shortTitle: "Akses", title: "Kesulitan Akses Barang", enTitle: "Difficult Product Accessibility", desc: "Sistem penyimpanan yang tidak sesuai dapat menyulitkan akses barang, terutama untuk item dengan perputaran tinggi. Pemilihan sistem rack dan layout aisle yang tepat dapat membantu mempercepat pencarian, pengambilan, dan pengeluaran barang.", enDesc: "Improper storage systems may make product access difficult, especially for high-turnover items. Proper rack selection and aisle layout can improve product searching, picking, and retrieval processes.", icon: Search },
    { shortTitle: "Layout", title: "Area Gudang Berantakan", enTitle: "Unstructured Warehouse Layout", desc: "Layout penyimpanan yang tidak terstruktur dapat mempengaruhi efisiensi operasional, keamanan kerja, dan kerapihan area gudang. Penataan warehouse yang baik membantu menciptakan area kerja yang lebih aman, rapi, dan mudah dikontrol.", enDesc: "An unstructured warehouse layout may affect operational efficiency, workplace safety, and overall warehouse organization. Proper warehouse arrangement helps create a safer, cleaner, and easier-to-control working area.", icon: AlertTriangle },
  ];

  return (
    <main className="min-h-screen bg-[#080808] text-zinc-200">
      <Hero eyebrow="倉庫ソリューション" title="Solusi Warehouse Industrial" english="Warehouse Solutions with Practical Engineering Approach" description="Mendukung kebutuhan warehouse melalui solusi storage, handling, racking system, dan pendekatan operasional yang practical dan efisien." image={images.warehouse} setPage={setPage}>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a 
            href="https://api.whatsapp.com/send?phone=6281233330550" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-red-800 px-[34px] py-4 text-sm font-semibold tracking-[0.16em] text-white transition hover:bg-red-700 rounded-md"
          >
            WhatsApp <WhatsAppIcon className="h-4 w-4" />
          </a>
          <a 
            href="mailto:admin@nitoriyo.com" 
            className="inline-flex items-center justify-center border border-white/20 px-8 py-4 text-sm font-semibold tracking-[0.16em] text-white transition hover:border-white/50 hover:bg-white/5 rounded-md"
          >
            Email
          </a>
        </div>
      </Hero>

      <section id="warehouse-categories" className="bg-[#0c0c0c] py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeader title="KATEGORI PRODUK" jp="PRODUCT CATEGORIES 製品カテゴリー" />
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {warehouseCategories.map((c) => (
              <div
                key={c.title}
                onClick={() => {
                  if (c.title === "Racking Systems") {
                    setPage("racking-systems");
                    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                  } else {
                    setSelectedProduct(c.title);
                    setModalTab("overview");
                  }
                }}
                className="group relative min-h-[260px] overflow-hidden border border-white/10 bg-gradient-to-br from-[#6b0808]/30 via-[#1a0202]/50 to-[#050505]/80 backdrop-blur-md cursor-pointer rounded-2xl transition-all duration-300 hover:border-red-500 hover:-translate-y-1 shadow-2xl"
              >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-red-600/10 blur-2xl rounded-full group-hover:bg-red-600/30 transition-all duration-500" />
                
                <div className="absolute inset-x-0 top-6 bottom-20 flex items-center justify-center pointer-events-none z-10">
                  <img src={c.image} alt={c.title} className="max-h-[85%] max-w-[70%] object-contain opacity-80 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110 drop-shadow-2xl" />
                </div>
                
                <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
                  <div className="mb-5 h-[2px] w-14 bg-red-700 transition-all group-hover:w-24" />
                  <h3 className="text-xl font-semibold text-white">{c.title}</h3>
                </div>
              </div>
            ))}
          </div>

          {selectedProduct && (
            <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 md:p-6 backdrop-blur-sm" onClick={() => setSelectedProduct(null)}>
              <div 
                className="bg-[#111111] border border-white/10 max-w-6xl w-full max-h-[90vh] rounded-lg overflow-hidden flex flex-col relative shadow-2xl animate-in fade-in zoom-in-95 duration-200" 
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex justify-between items-center p-6 border-b border-white/10 bg-[#0a0a0a]">
                  <h3 className="text-2xl font-semibold text-white">{selectedProduct}</h3>
                  <button className="text-zinc-400 hover:text-white text-3xl transition" onClick={() => setSelectedProduct(null)}>&times;</button>
                </div>

                {hasWarehouseSpecData && (
                  <div className="flex border-b border-white/10 bg-[#0f0f0f] px-6">
                    <button 
                      onClick={() => setModalTab("overview")}
                      className={`py-4 px-6 text-sm font-semibold tracking-wider transition-colors ${modalTab === "overview" ? "text-red-500 border-b-2 border-red-500" : "text-zinc-500 hover:text-zinc-300"}`}
                    >
                      OVERVIEW
                    </button>
                    <button 
                      onClick={() => setModalTab("specs")}
                      className={`py-4 px-6 text-sm font-semibold tracking-wider transition-colors ${modalTab === "specs" ? "text-red-500 border-b-2 border-red-500" : "text-zinc-500 hover:text-zinc-300"}`}
                    >
                      MODEL & SPESIFIKASI
                    </button>
                  </div>
                )}

                <div className="overflow-y-auto flex-1 p-6 md:p-8">
                  {modalTab === "overview" && (
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                      <div className="bg-black/50 p-8 flex items-center justify-center border border-white/5 rounded-lg overflow-hidden min-h-[300px] relative">
                        <div className="absolute inset-0 bg-cover bg-center opacity-70" style={{ backgroundImage: `url(${warehouseCategories.find(c => c.title === selectedProduct)?.image})` }} />
                        <div className="absolute inset-0 bg-black/40" />
                      </div>
                      <div>
                        <p className="text-xs tracking-[0.25em] text-red-500 font-semibold mb-3">WAREHOUSE SOLUTIONS</p>
                        <p className="text-zinc-300 leading-relaxed mb-6">
                          {selectedProduct === "Racking Systems" 
                            ? "Sistem penyimpanan rak tugas berat (Heavy Duty) yang dirancang khusus untuk memaksimalkan kapasitas gudang Anda. Disesuaikan dengan layout operasional dan karakteristik material handling."
                            : selectedProduct === "Pallet Plastik"
                            ? "Pallet industri dengan durabilitas tinggi, anti-rayap, dan tahan lama. Tersedia dalam berbagai tipe mulai dari Heavy Duty untuk racking, hingga Hygiene tipe untuk industri makanan dan farmasi."
                            : selectedProduct === "Material Handling"
                            ? "Peralatan mekanis yang dirancang untuk memudahkan pemindahan, pengangkatan, dan penempatan barang di area gudang secara aman dan efisien."
                            : "Perlengkapan pendukung operasional pergudangan sehari-hari untuk memastikan keamanan pengemasan dan kelancaran distribusi logistik."}
                        </p>
                        
                        <div className="space-y-3 text-sm text-zinc-400 mb-8">
                          <div className="flex justify-between border-b border-white/5 pb-2">
                            <span>Key Focus</span>
                            <span className="text-white font-medium">
                              {selectedProduct === "Racking Systems" ? "Space Maximization, Safety" : 
                               selectedProduct === "Pallet Plastik" ? "Durability, Hygiene, Reusable" : 
                               selectedProduct === "Material Handling" ? "Efficiency, Ergonomics" : "Packaging Security"}
                            </span>
                          </div>
                          <div className="flex justify-between border-b border-white/5 pb-2">
                            <span>Application</span>
                            <span className="text-white font-medium">Logistics, Manufacturing, Distribution</span>
                          </div>
                        </div>

                        <div className="flex gap-4">
                          <a href="https://api.whatsapp.com/send?phone=6281233330550" target="_blank" rel="noopener noreferrer" className="bg-red-800 text-white font-semibold text-xs tracking-wider uppercase px-6 py-4 transition hover:bg-red-700">Minta Penawaran</a>
                          {hasWarehouseSpecData && (
                            <button onClick={() => setModalTab("specs")} className="border border-white/20 text-white font-semibold text-xs tracking-wider uppercase px-6 py-4 transition hover:bg-white/10">Lihat Varian</button>
                          )}
                        </div>
                      </div>
                    </div>
                  )}

                  {modalTab === "specs" && hasWarehouseSpecData && (
                    <div className="animate-in fade-in duration-300">
                      <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <div>
                          <h4 className="text-lg font-semibold text-white">Technical Matrix</h4>
                          <p className="text-sm text-zinc-500 mt-1">Daftar tipe dan spesifikasi teknis untuk {selectedProduct}.</p>
                        </div>
                        <button className="flex items-center gap-2 border border-white/10 bg-zinc-900 px-4 py-2 text-xs font-semibold text-zinc-300 hover:bg-zinc-800 hover:text-white transition w-fit">
                          Download Catalog PDF
                        </button>
                      </div>

                      <div className="overflow-x-auto border border-white/10 rounded bg-[#0a0a0a]">
                        <table className="w-full text-left text-sm text-zinc-300 whitespace-nowrap">
                          <thead className="bg-[#1a1a1a] text-xs uppercase tracking-wider text-zinc-400">
                            <tr>
                              <th className="px-4 py-4 border-b border-white/10 font-semibold">Brand</th>
                              <th className="px-4 py-4 border-b border-white/10 font-semibold">Type / Category</th>
                              <th className="px-4 py-4 border-b border-white/10 font-semibold text-right">Capacity / Load</th>
                              <th className="px-4 py-4 border-b border-white/10 font-semibold">Dimension / Size</th>
                              <th className="px-4 py-4 border-b border-white/10 font-semibold">Material</th>
                              <th className="px-4 py-4 border-b border-white/10 font-semibold">Fitur Tambahan</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-white/5">
                            {currentWarehouseSpecs.map((spec, idx) => (
                              <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                                <td className="px-4 py-3 font-medium text-white">{spec.brand}</td>
                                <td className="px-4 py-3 font-medium text-red-400">{spec.type}</td>
                                <td className="px-4 py-3 text-right">{spec.load}</td>
                                <td className="px-4 py-3 text-emerald-400">{spec.size}</td>
                                <td className="px-4 py-3">{spec.material}</td>
                                <td className="px-4 py-3 text-xs leading-relaxed text-zinc-400">{spec.features}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="bg-[#0b0b0b] py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeader title="MASALAH UMUM WAREHOUSE" jp="COMMON WAREHOUSE ISSUES 一般的な倉庫問題" />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {warehouseProblems.map((item, i) => {
              const Icon = item.icon;
              const isOpen = expandedWarehouseProblem === i;
              return (
                <button key={item.title} onClick={() => setExpandedWarehouseProblem(isOpen ? null : i)} className={`group min-h-[320px] border bg-[#111111] p-8 text-left transition-all duration-300 rounded-2xl hover:bg-[#181818] ${isOpen ? "border-red-700/70" : "border-white/10 hover:border-red-700/40"}`}>
                  <div className="mb-8 flex items-start justify-between">
                    <div className="flex h-20 w-20 items-center justify-center border border-white/10 bg-black/40 text-red-500 transition-colors group-hover:border-red-700/50 group-hover:bg-red-950/20 rounded-xl"><Icon className="h-10 w-10" /></div>
                    <span className="pt-2 text-xs tracking-[0.28em] text-zinc-600">0{i + 1}</span>
                  </div>
                  <div className="mb-7 h-px w-14 bg-red-700" />
                  <h3 className="max-w-sm text-3xl font-semibold leading-tight text-white">{item.shortTitle}</h3>
                  <p className="mt-3 text-sm italic tracking-wide text-zinc-400">{item.enTitle}</p>
                  <div className={`overflow-hidden transition-all duration-500 ${isOpen ? "mt-6 max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
                    <h4 className="text-lg font-semibold text-white">{item.title}</h4>
                    <p className="mt-4 text-sm leading-7 text-zinc-400">{item.desc}</p>
                    <p className="mt-4 text-sm italic leading-7 text-zinc-500">{item.enDesc}</p>
                  </div>
                  <div className="mt-7 flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-red-500/80 transition-colors group-hover:text-red-500"><span>{isOpen ? "CLOSE DETAIL" : "VIEW DETAIL"}</span><ChevronDown className={`h-4 w-4 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} /></div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#090909] py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeader title="PENDEKATAN SOLUSI KAMI" jp="OUR WAREHOUSE APPROACH 倉庫ソリューションアプローチ" />
          <div className="grid gap-6 lg:grid-cols-4">
            {["Analisa Kebutuhan Storage", "Pertimbangan Layout Gudang", "Pemilihan Sistem Rack", "Efisiensi Operasional"].map((item, i) => (
              <div key={item} className="border border-white/10 bg-[#111111] p-8 rounded-2xl">
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
      <CTA title="Diskusikan Kebutuhan Warehouse Anda" english="Let’s Discuss Your Warehouse Requirements" text="Nitoriyo siap mendukung kebutuhan warehouse melalui solusi storage, handling, dan warehouse support yang practical dan professional." />
    </main>
  );
}

function RackingSystemsPage({ setPage }) {
  const [openIndex, setOpenIndex] = useState(null);

  const selectiveRackingSpecs = [
    {
      component: "Panjang Beam (Clear Entry)",
      specs: [
        { size: "2300 mm - 2500 mm", desc: "Untuk 2 palet ukuran kecil/sedang" },
        { size: "2700 mm (Paling Umum)", desc: "Untuk 2 palet ukuran standar (1200 x 1000 mm)", highlight: true },
        { size: "3300 mm - 3600 mm", desc: "Untuk menampung 3 palet sekaligus dalam satu level" }
      ]
    },
    {
      component: "Kedalaman Rangka (Frame Depth)",
      specs: [
        { size: "800 mm - 900 mm", desc: "Digunakan untuk palet dengan kedalaman 1000 mm" },
        { size: "1000 mm - 1100 mm", desc: "Digunakan untuk palet dengan kedalaman 1200 mm" }
      ]
    },
    {
      component: "Tinggi Tiang (Upright Height)",
      specs: [
        { size: "3000 mm - 6000 mm", desc: "Ukuran standar, sangat bergantung pada daya jangkau forklift" },
        { size: "> 6000 mm (hingga 10 meter+)", desc: "Untuk gudang High-bay, butuh reach truck atau sistem ASRS" }
      ]
    },
    {
      component: "Kapasitas Beban (Load Capacity)",
      specs: [
        { size: "1000 kg - 2000 kg / level", desc: "Kategori Heavy Duty beban ringan hingga sedang" },
        { size: "3000 kg - 4500 kg / level", desc: "Kategori Heavy Duty beban berat" }
      ]
    },
    {
      component: "Lebar Lorong (Aisle Width)",
      specs: [
        { size: "2500 mm - 3000 mm", desc: "Jarak ideal jika menggunakan armada Reach Truck" },
        { size: "3500 mm - 4000 mm", desc: "Jarak ideal jika menggunakan armada Forklift Counterbalance standar" }
      ]
    }
  ];

  const driveInRackingSpecs = [
    {
      component: "Kedalaman Lorong (Lane Depth)",
      specs: [
        { size: "2 - 5 Palet ke dalam", desc: "Konfigurasi kedalaman standar, memudahkan perputaran barang." },
        { size: "6 - 10 Palet ke dalam", desc: "Konfigurasi Deep Lane untuk memaksimalkan kuantitas penyimpanan ekstrem.", highlight: true }
      ]
    },
    {
      component: "Lebar Ruang Masuk (Internal Clearance)",
      specs: [
        { size: "1350 mm - 1500 mm", desc: "Jarak aman bagi forklift untuk masuk ke dalam lorong rak (menyesuaikan lebar standar palet 1000/1200 mm dan bodi forklift)." }
      ]
    },
    {
      component: "Tinggi Tiang (Upright Height)",
      specs: [
        { size: "4000 mm - 8000 mm", desc: "Ketinggian standar, biasanya dikonfigurasi untuk menyusun 3 hingga 5 level tinggi palet ke atas." }
      ]
    },
    {
      component: "Kapasitas Beban (Load per Pallet)",
      specs: [
        { size: "1000 kg - 1500 kg / palet", desc: "Beban ditopang dengan aman oleh rel palet (pallet rail / corbel) di sepanjang sisi lorong rak." }
      ]
    },
    {
      component: "Sistem Alur Barang",
      specs: [
        { size: "LIFO (Last In, First Out)", desc: "Barang yang masuk paling akhir ke dalam lorong akan menjadi barang yang diambil pertama kali.", highlight: true }
      ]
    },
    {
      component: "Lebar Lorong Manuver Utama (Operating Aisle)",
      specs: [
        { size: "3500 mm - 4000 mm", desc: "Jarak lorong di luar sistem rak (di depan pintu masuk rak) untuk manuver aman Forklift saat mengambil haluan." }
      ]
    }
  ];

  const doubleDeepRackingSpecs = [
    {
      component: "Panjang Beam (Clear Entry)",
      specs: [
        { size: "2700 mm (Paling Umum)", desc: "Ukuran standar untuk menampung 2 palet di baris depan dan 2 palet di baris belakang (total 4 palet per level).", highlight: true }
      ]
    },
    {
      component: "Kedalaman Sistem (Total Frame Depth)",
      specs: [
        { size: "1800 mm - 2200 mm", desc: "Konfigurasi kedalaman ganda untuk menampung 2 palet ke belakang (biasanya menggunakan guide rail di atas beam atas)." }
      ]
    },
    {
      component: "Tinggi Tiang (Upright Height)",
      specs: [
        { size: "4000 mm - 9000 mm", desc: "Ketinggian bervariasi menyesuaikan tinggi bangunan gudang dan jangkauan tiang angkat armada Reach Truck." }
      ]
    },
    {
      component: "Kapasitas Beban (Load Capacity)",
      specs: [
        { size: "1000 kg - 3000 kg / level", desc: "Kategori Heavy Duty yang mampu menopang beban kombinasi dari palet baris depan dan belakang." }
      ]
    },
    {
      component: "Sistem Alur Barang",
      specs: [
        { size: "FILO (First In, Last Out) / Slot", desc: "Palet di baris belakang (palet pertama masuk) hanya bisa diambil setelah palet di baris depan dikeluarkan (Tingkat aksesibilitas 50%).", highlight: true }
      ]
    },
    {
      component: "Lebar Lorong (Aisle Width)",
      specs: [
        { size: "2800 mm - 3200 mm", desc: "Jarak ideal untuk manuver, lebih sempit dari lorong forklift counterbalance biasa." }
      ]
    }
  ];

  const cantileverRackingSpecs = [
    {
      component: "Panjang Lengan (Arm Length)",
      specs: [
        { size: "600 mm - 1500 mm", desc: "Disesuaikan dengan lebar atau kedalaman material yang akan disimpan di atas lengan rak." }
      ]
    },
    {
      component: "Jarak Antar Tiang (Column Spacing)",
      specs: [
        { size: "1000 mm - 1500 mm", desc: "Jarak bentangan antar penyangga. Sangat ditentukan oleh tingkat kelenturan (deflection) barang agar material tidak melengkung saat disimpan." }
      ]
    },
    {
      component: "Tinggi Tiang (Column Height)",
      specs: [
        { size: "3000 mm - 6000 mm", desc: "Ketinggian vertikal tiang utama, disesuaikan dengan kapasitas tinggi bangunan dan armada lifting Anda." }
      ]
    },
    {
      component: "Kapasitas Beban (Load per Arm)",
      specs: [
        { size: "500 kg - 1500 kg / lengan", desc: "Tersedia opsi Medium Duty untuk barang ringan (seperti pipa PVC/kayu) hingga Heavy Duty (seperti besi beton/baja profil)." }
      ]
    },
    {
      component: "Tipe Konfigurasi",
      specs: [
        { size: "Single-Sided & Double-Sided", desc: <><strong className="text-white">Single-Sided:</strong> Lengan hanya di satu sisi, dipasang merapat ke dinding.<br/><br/><strong className="text-white">Double-Sided:</strong> Lengan di kedua belah sisi, diposisikan di tengah area gudang.</> }
      ]
    },
    {
      component: "Kebutuhan Lorong (Aisle Width)",
      specs: [
        { size: "Sangat Bervariasi", desc: "Lebar lorong sepenuhnya bergantung pada panjang barang yang diangkut dan jenis armada yang digunakan." }
      ]
    }
  ];

  const mezzanineRackingSpecs = [
    {
      component: "Tinggi Antar Lantai (Clearance Height)",
      specs: [
        { size: "2500 mm - 3000 mm", desc: "Ketinggian ideal per level untuk memberikan jarak aman dan nyaman bagi staf saat berjalan dan beraktivitas." }
      ]
    },
    {
      component: "Kapasitas Beban Lantai (Floor Load Capacity)",
      specs: [
        { size: "300 kg - 1000 kg / m²", desc: "Kapasitas beban dihitung per meter persegi; disesuaikan dari beban personel berjalan hingga penempatan rak/barang padat." }
      ]
    },
    {
      component: "Tipe Konstruksi",
      specs: [
        { size: "Rack-Supported & Structural", desc: <><strong className="text-white">Rack-Supported:</strong> Tiang rak palet berfungsi ganda sebagai penyangga lantai atas (sangat ekonomis).<br/><br/><strong className="text-white">Structural:</strong> Menggunakan baja profil H/I untuk area bawah yang lebih lapang tanpa banyak tiang.</> }
      ]
    },
    {
      component: "Material Lantai (Decking Material)",
      specs: [
        { size: "Steel Grating, Plat Baja, atau Plywood", desc: <><em className="text-white font-medium not-italic">Steel Grating</em> paling direkomendasikan karena memungkinkan sirkulasi udara dan air <em className="text-zinc-400">sprinkler</em> pemadam kebakaran menembus ke lantai bawah.</> }
      ]
    },
    {
      component: "Komponen Keselamatan & Akses",
      specs: [
        { size: "Tangga, Handrail, & Loading Gate", desc: "Dilengkapi tangga personel yang aman, pagar pelindung (handrail), dan pintu masuk barang (loading gate) untuk akses forklift atau lift barang (hoist)." }
      ]
    }
  ];

  const systems = [
    { title: "SELECTIVE RACKING", descriptionId: "Sistem racking dengan akses langsung ke setiap pallet. Cocok untuk gudang umum, alur distribusi cepat, dan penyimpanan berbagai jenis barang dengan kebutuhan akses yang fleksibel.", descriptionEn: "A racking system with direct access to every pallet. Suitable for general warehouses, fast distribution flow, and various product categories with flexible accessibility requirements." },
    { title: "DRIVE-IN RACKING", descriptionId: "Sistem penyimpanan high-density yang memaksimalkan kapasitas gudang dengan mengurangi jumlah aisle. Cocok untuk penyimpanan barang sejenis dalam volume besar dan area gudang yang terbatas.", descriptionEn: "A high-density storage system designed to maximize warehouse capacity by reducing aisle space. Suitable for similar products, large-volume storage, and limited warehouse areas." },
    { title: "DOUBLE DEEP RACKING", descriptionId: "Sistem Double Deep Racking adalah solusi pertengahan yang sempurna antara Selective dan Drive In Racking. Dengan mengonfigurasi penyimpanan palet menjadi dua baris ke belakang (kedalaman ganda), Anda dapat mengeliminasi ruang lorong secara signifikan dan meningkatkan kepadatan gudang. Sistem ini sangat cocok untuk produk dengan perputaran menengah dan SKU yang memiliki stok beberapa palet identik.", descriptionEn: "A double-depth pallet racking system designed to increase storage capacity while maintaining better accessibility compared to full high-density systems." },
    { title: "CANTILEVER RACKING", descriptionId: "Sistem Cantilever Racking dirancang secara khusus tanpa adanya tiang penyangga di bagian depan. Desain terbuka ini memberikan kemudahan akses visual dan operasional yang maksimal, menjadikannya pilihan paling sempurna untuk menyimpan material dengan dimensi panjang atau tidak beraturan, seperti pipa besi, profil baja, kayu, papan gipsum, hingga produk furnitur.", descriptionEn: "A specialized racking system for long, bulky, or irregular materials such as pipes, steel bars, wood panels, aluminum profiles, and other construction materials." },
    { title: "MEZZANINE RACK", descriptionId: "Manfaatkan ruang vertikal (ketinggian) gudang Anda secara maksimal dengan sistem Mezzanine Racking. Sistem ini secara efektif mengubah area atas yang kosong menjadi lantai kerja atau ruang penyimpanan tambahan hingga dua atau tiga tingkat. Sangat ideal untuk penyimpanan barang berukuran kecil hingga sedang, suku cadang (spare parts), arsip, e-commerce, dan operasional order picking manual.", descriptionEn: "A multi-level racking structure designed to maximize vertical warehouse space, creating additional storage, working, or operational areas without expanding the building footprint." },
    { title: "MOLDING RACK", descriptionId: "Sistem racking heavy-duty yang dirancang khusus untuk penyimpanan mold, dies, tooling, dan komponen industri berbobot tinggi agar lebih tertata, aman, dan mudah diakses.", descriptionEn: "A heavy-duty racking system specially designed for molds, dies, tooling, and high-weight industrial components to keep them organized, safe, and easily accessible." },
  ];

  return (
    <main className="min-h-screen bg-black text-zinc-200">
      
      {/* 1. BAGIAN HERO BACKGROUND UNTUK RACKING SYSTEMS */}
      <section className="relative flex min-h-[70vh] items-center overflow-hidden border-b border-white/10 bg-black pt-32 pb-20">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed opacity-70"
          style={{ backgroundImage: `url(${images.warehouse})` }}
        />
        
        {/* Efek gradasi agar teks tetap terbaca dengan jelas (Sama dengan halaman Warehouse) */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/95 via-black/80 to-transparent" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
        
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-12">
          <button 
            onClick={() => {
              setPage("warehouse");
              window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
            }} 
            className="mb-10 inline-flex items-center gap-2 text-sm font-semibold tracking-wider text-red-500 hover:text-red-400 transition-colors uppercase"
          >
            <ArrowRight className="h-4 w-4 rotate-180" /> Kembali ke Solusi Warehouse
          </button>

          <div className="max-w-4xl">
            <p className="mb-4 text-sm uppercase tracking-[0.35em] text-red-500">Warehouse Systems</p>
            <h1 className="mb-6 text-5xl font-light leading-[1.05] tracking-tight text-white lg:text-7xl">Racking<br />Systems</h1>
            <p className="max-w-2xl text-lg leading-relaxed text-zinc-300">Sistem racking industri yang disesuaikan berdasarkan alur operasional, kapasitas penyimpanan, kebutuhan akses barang, dan strategi material handling.</p>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-zinc-500">Industrial racking systems engineered based on operational flow, storage capacity, accessibility requirements, and material handling strategy.</p>
          </div>
        </div>
      </section>

      {/* 2. BAGIAN KONTEN ACCORDION (LIST SISTEM RAK) */}
      <section className="bg-black py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="border-t border-white/10">
            {systems.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <div key={item.title} className="border-b border-white/10 py-6">
                  
                  {/* UKURAN FONT SUDAH DIPERKECIL (text-xl lg:text-2xl) DAN TRACKING DITAMBAH (tracking-widest) */}
                  <button onClick={() => setOpenIndex(isOpen ? null : index)} className="group flex w-full items-center gap-4 text-left">
                    <ChevronDown className={`h-6 w-6 shrink-0 text-zinc-500 transition-all duration-300 ${isOpen ? "rotate-0 text-red-500" : "-rotate-90 group-hover:text-red-400"}`} />
                    <h2 className="text-xl font-light tracking-widest text-white transition-colors duration-300 group-hover:text-red-500 lg:text-2xl">{item.title}</h2>
                  </button>

                  <div className={`overflow-hidden transition-all duration-700 ${isOpen ? "max-h-[1500px] pt-8 opacity-100" : "max-h-0 opacity-0"}`}>
                    <div className="max-w-3xl space-y-4 border-l border-red-500/40 pl-6">
                      <p className="text-lg leading-relaxed text-zinc-300">{item.descriptionId}</p>
                      <p className="text-sm leading-relaxed text-zinc-600">{item.descriptionEn}</p>
                    </div>

                    {item.title === "SELECTIVE RACKING" && (
                      <div className="mt-10 animate-in fade-in duration-500">
                        <div className="mb-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                          <div>
                            <h4 className="text-lg font-semibold text-white">Panduan Ukuran Standar (Indonesia)</h4>
                            <p className="text-sm text-zinc-500 mt-1">Estimasi ukuran yang paling umum digunakan pada instalasi Selective Racking.</p>
                          </div>
                        </div>

                        <div className="overflow-x-auto border border-white/10 rounded-lg bg-[#0a0a0a]">
                          <table className="w-full text-left text-sm text-zinc-300 whitespace-nowrap">
                            <thead className="bg-[#1a1a1a] text-xs uppercase tracking-wider text-zinc-400">
                              <tr>
                                <th className="px-5 py-4 border-b border-white/10 font-semibold w-1/4">Komponen & Spesifikasi</th>
                                <th className="px-5 py-4 border-b border-white/10 font-semibold w-1/3">Ukuran Umum / Tipe</th>
                                <th className="px-5 py-4 border-b border-white/10 font-semibold">Keterangan / Penggunaan</th>
                              </tr>
                            </thead>
                            <tbody>
                              {selectiveRackingSpecs.map((group, groupIdx) => (
                                <React.Fragment key={groupIdx}>
                                  {group.specs.map((spec, specIdx) => (
                                    <tr key={specIdx} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                                      {specIdx === 0 && (
                                        <td 
                                          rowSpan={group.specs.length} 
                                          className="px-5 py-4 font-medium text-white border-r border-white/5 align-top bg-white/[0.01]"
                                        >
                                          {group.component}
                                        </td>
                                      )}
                                      <td className={`px-5 py-3 font-medium ${spec.highlight ? 'text-red-400' : 'text-emerald-400'}`}>
                                        {spec.size}
                                      </td>
                                      <td className="px-5 py-3 text-zinc-400 whitespace-normal min-w-[300px]">
                                        {spec.desc}
                                      </td>
                                    </tr>
                                  ))}
                                </React.Fragment>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    )}

                    {item.title === "DRIVE-IN RACKING" && (
                      <div className="mt-10 animate-in fade-in duration-500">
                        <div className="mb-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                          <div>
                            <h4 className="text-lg font-semibold text-white">Panduan Konfigurasi Drive-In</h4>
                            <p className="text-sm text-zinc-500 mt-1">Estimasi spesifikasi dan karakteristik sistem penyimpanan High-Density.</p>
                          </div>
                        </div>

                        <div className="overflow-x-auto border border-white/10 rounded-lg bg-[#0a0a0a]">
                          <table className="w-full text-left text-sm text-zinc-300 whitespace-nowrap">
                            <thead className="bg-[#1a1a1a] text-xs uppercase tracking-wider text-zinc-400">
                              <tr>
                                <th className="px-5 py-4 border-b border-white/10 font-semibold w-1/4">Komponen & Spesifikasi</th>
                                <th className="px-5 py-4 border-b border-white/10 font-semibold w-1/3">Ukuran Umum / Tipe</th>
                                <th className="px-5 py-4 border-b border-white/10 font-semibold">Keterangan / Penggunaan</th>
                              </tr>
                            </thead>
                            <tbody>
                              {driveInRackingSpecs.map((group, groupIdx) => (
                                <React.Fragment key={groupIdx}>
                                  {group.specs.map((spec, specIdx) => (
                                    <tr key={specIdx} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                                      {specIdx === 0 && (
                                        <td 
                                          rowSpan={group.specs.length} 
                                          className="px-5 py-4 font-medium text-white border-r border-white/5 align-top bg-white/[0.01]"
                                        >
                                          {group.component}
                                        </td>
                                      )}
                                      <td className={`px-5 py-3 font-medium ${spec.highlight ? 'text-red-400' : 'text-emerald-400'}`}>
                                        {spec.size}
                                      </td>
                                      <td className="px-5 py-3 text-zinc-400 whitespace-normal min-w-[300px]">
                                        {spec.desc}
                                      </td>
                                    </tr>
                                  ))}
                                </React.Fragment>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    )}

                    {item.title === "DOUBLE DEEP RACKING" && (
                      <div className="mt-10 animate-in fade-in duration-500">
                        <div className="mb-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                          <div>
                            <h4 className="text-lg font-semibold text-white">Spesifikasi Standar Double Deep Racking</h4>
                            <p className="text-sm text-zinc-500 mt-1">Tingkatkan Kapasitas Penyimpanan Hingga 30% Tanpa Menghilangkan Akses Cepat</p>
                          </div>
                        </div>

                        <div className="overflow-x-auto border border-white/10 rounded-lg bg-[#0a0a0a]">
                          <table className="w-full text-left text-sm text-zinc-300 whitespace-nowrap">
                            <thead className="bg-[#1a1a1a] text-xs uppercase tracking-wider text-zinc-400">
                              <tr>
                                <th className="px-5 py-4 border-b border-white/10 font-semibold w-1/4">Komponen & Spesifikasi</th>
                                <th className="px-5 py-4 border-b border-white/10 font-semibold w-1/3">Ukuran Umum di Indonesia</th>
                                <th className="px-5 py-4 border-b border-white/10 font-semibold">Keterangan / Penggunaan</th>
                              </tr>
                            </thead>
                            <tbody>
                              {doubleDeepRackingSpecs.map((group, groupIdx) => (
                                <React.Fragment key={groupIdx}>
                                  {group.specs.map((spec, specIdx) => (
                                    <tr key={specIdx} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                                      {specIdx === 0 && (
                                        <td 
                                          rowSpan={group.specs.length} 
                                          className="px-5 py-4 font-medium text-white border-r border-white/5 align-top bg-white/[0.01]"
                                        >
                                          {group.component}
                                        </td>
                                      )}
                                      <td className={`px-5 py-3 font-medium ${spec.highlight ? 'text-red-400' : 'text-emerald-400'}`}>
                                        {spec.size}
                                      </td>
                                      <td className="px-5 py-3 text-zinc-400 whitespace-normal min-w-[300px]">
                                        {spec.desc}
                                      </td>
                                    </tr>
                                  ))}
                                </React.Fragment>
                              ))}
                            </tbody>
                          </table>
                        </div>

                        <div className="mt-6 mb-2 rounded-lg border border-yellow-500/30 bg-yellow-500/10 p-5">
                          <div className="flex gap-4">
                            <span className="text-yellow-500 text-xl">⚠️</span>
                            <div>
                              <h5 className="font-semibold text-yellow-500 mb-2">Syarat Armada Khusus (Crucial Note):</h5>
                              <p className="text-sm text-zinc-300 leading-relaxed">
                                Untuk mengoperasikan sistem ini, gudang Anda <strong className="text-white font-medium">diwajibkan</strong> memiliki armada <em className="text-white font-medium not-italic">Reach Truck</em> khusus yang dilengkapi dengan garpu teleskopik ganda (<em className="text-zinc-400">pantograph</em> atau <em className="text-zinc-400">telescopic forks</em>) agar garpu dapat memanjang dan menjangkau palet yang berada di kedalaman baris kedua.
                              </p>
                            </div>
                          </div>
                        </div>
                        
                      </div>
                    )}

                    {item.title === "CANTILEVER RACKING" && (
                      <div className="mt-10 animate-in fade-in duration-500">
                        <div className="mb-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                          <div>
                            <h4 className="text-lg font-semibold text-white">Spesifikasi Standar Cantilever Racking</h4>
                            <p className="text-sm text-zinc-500 mt-1">Solusi Bebas Hambatan untuk Barang Panjang, Bervolume Besar, dan Berbentuk Khusus</p>
                          </div>
                        </div>

                        <div className="overflow-x-auto border border-white/10 rounded-lg bg-[#0a0a0a]">
                          <table className="w-full text-left text-sm text-zinc-300 whitespace-nowrap">
                            <thead className="bg-[#1a1a1a] text-xs uppercase tracking-wider text-zinc-400">
                              <tr>
                                <th className="px-5 py-4 border-b border-white/10 font-semibold w-1/4">Komponen & Spesifikasi</th>
                                <th className="px-5 py-4 border-b border-white/10 font-semibold w-1/3">Ukuran Umum di Indonesia</th>
                                <th className="px-5 py-4 border-b border-white/10 font-semibold">Keterangan / Penggunaan</th>
                              </tr>
                            </thead>
                            <tbody>
                              {cantileverRackingSpecs.map((group, groupIdx) => (
                                <React.Fragment key={groupIdx}>
                                  {group.specs.map((spec, specIdx) => (
                                    <tr key={specIdx} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                                      {specIdx === 0 && (
                                        <td 
                                          rowSpan={group.specs.length} 
                                          className="px-5 py-4 font-medium text-white border-r border-white/5 align-top bg-white/[0.01]"
                                        >
                                          {group.component}
                                        </td>
                                      )}
                                      <td className={`px-5 py-3 font-medium ${spec.highlight ? 'text-red-400' : 'text-emerald-400'}`}>
                                        {spec.size}
                                      </td>
                                      <td className="px-5 py-3 text-zinc-400 whitespace-normal min-w-[300px]">
                                        {spec.desc}
                                      </td>
                                    </tr>
                                  ))}
                                </React.Fragment>
                              ))}
                            </tbody>
                          </table>
                        </div>

                        <div className="mt-6 mb-2 rounded-lg border border-yellow-500/30 bg-yellow-500/10 p-5">
                          <div className="flex gap-4">
                            <span className="text-yellow-500 text-xl">⚠️</span>
                            <div>
                              <h5 className="font-semibold text-yellow-500 mb-2">Rekomendasi Armada Logistik (Crucial Note):</h5>
                              <p className="text-sm text-zinc-300 leading-relaxed">
                                Mengangkut barang berdimensi panjang di lorong gudang membutuhkan kehati-hatian ekstra. Meskipun <em className="text-white font-medium not-italic">forklift counterbalance</em> standar bisa digunakan jika lorong sangat lebar, kami sangat merekomendasikan penggunaan <strong className="text-white font-medium">Side-Loader Forklift</strong> atau <strong className="text-white font-medium">Multi-Directional Reach Truck</strong> agar manuver di lorong yang lebih sempit tetap aman dan efisien.
                              </p>
                            </div>
                          </div>
                        </div>
                        
                      </div>
                    )}

                    {item.title === "MEZZANINE RACK" && (
                      <div className="mt-10 animate-in fade-in duration-500">
                        <div className="mb-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                          <div>
                            <h4 className="text-lg font-semibold text-white">Spesifikasi Standar Mezzanine Racking</h4>
                            <p className="text-sm text-zinc-500 mt-1">Gandakan Luas Area Gudang Anda Tanpa Perlu Perluasan Bangunan</p>
                          </div>
                        </div>

                        <div className="overflow-x-auto border border-white/10 rounded-lg bg-[#0a0a0a]">
                          <table className="w-full text-left text-sm text-zinc-300 whitespace-nowrap">
                            <thead className="bg-[#1a1a1a] text-xs uppercase tracking-wider text-zinc-400">
                              <tr>
                                <th className="px-5 py-4 border-b border-white/10 font-semibold w-1/4">Komponen & Spesifikasi</th>
                                <th className="px-5 py-4 border-b border-white/10 font-semibold w-1/3">Ukuran Umum / Tipe</th>
                                <th className="px-5 py-4 border-b border-white/10 font-semibold">Keterangan / Penggunaan</th>
                              </tr>
                            </thead>
                            <tbody>
                              {mezzanineRackingSpecs.map((group, groupIdx) => (
                                <React.Fragment key={groupIdx}>
                                  {group.specs.map((spec, specIdx) => (
                                    <tr key={specIdx} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                                      {specIdx === 0 && (
                                        <td 
                                          rowSpan={group.specs.length} 
                                          className="px-5 py-4 font-medium text-white border-r border-white/5 align-top bg-white/[0.01]"
                                        >
                                          {group.component}
                                        </td>
                                      )}
                                      <td className={`px-5 py-3 font-medium ${spec.highlight ? 'text-red-400' : 'text-emerald-400'}`}>
                                        {spec.size}
                                      </td>
                                      <td className="px-5 py-3 text-zinc-400 whitespace-normal min-w-[300px]">
                                        {spec.desc}
                                      </td>
                                    </tr>
                                  ))}
                                </React.Fragment>
                              ))}
                            </tbody>
                          </table>
                        </div>

                        <div className="mt-6 mb-2 rounded-lg border border-yellow-500/30 bg-yellow-500/10 p-5">
                          <div className="flex gap-4">
                            <span className="text-yellow-500 text-xl">⚠️</span>
                            <div>
                              <h5 className="font-semibold text-yellow-500 mb-2">Aspek Keselamatan Gudang (Crucial Note):</h5>
                              <p className="text-sm text-zinc-300 leading-relaxed">
                                Pemasangan sistem <em className="text-white font-medium not-italic">Mezzanine</em> membutuhkan perhatian khusus pada infrastruktur gudang yang ada. Anda harus memastikan sistem pencahayaan (lampu) memadai untuk area di bawah lantai <em className="text-white font-medium not-italic">mezzanine</em>, sirkulasi udara yang baik, serta integrasi dengan sistem pemadam kebakaran bangunan (<em className="text-zinc-400">fire sprinklers</em>).
                              </p>
                            </div>
                          </div>
                        </div>
                        
                      </div>
                    )}

                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <div className="mt-12 border-t border-white/10">
        <CTA title="Diskusikan Kebutuhan Racking Anda" english="Let’s Discuss Your Racking System Requirements" text="Nitoriyo siap mendukung kebutuhan storage warehouse Anda dengan pendekatan engineering yang solid dan aman." />
      </div>
    </main>
  );
}

function PlaceholderPage({ type, setPage }) {
  const isSupply = type === "supply";
  
  const config = {
    image: isSupply ? images.supply : images.it,
    eyebrow: isSupply ? "産業資材供給" : "ITソリューション",
    title: isSupply ? "General Industrial Supply" : "IT Solutions",
    english: isSupply ? "Flexible Industrial Supply Support" : "Industrial IT Infrastructure Solutions",
    desc: isSupply
      ? "Dukungan pengadaan fleksibel untuk berbagai kebutuhan operasional industri, mulai dari electrical, tools, technical equipment, hingga kebutuhan project-based."
      : "Dukungan perangkat IT untuk kebutuhan operasional kantor, industri, dan sistem kerja modern dengan keandalan tinggi.",
    sections: isSupply
      ? ["Electrical Components", "Industrial Tools", "Technical Equipment", "Project-Based Supply"]
      : ["Hardware Procurement", "Network Infrastructure", "Industrial Computing", "IT Support Services"],
  };

  return (
    <main className="min-h-screen bg-[#080808] text-zinc-200">
      <Hero eyebrow={config.eyebrow} title={config.title} english={config.english} description={config.desc} image={config.image} setPage={setPage}>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a 
            href="https://api.whatsapp.com/send?phone=6281233330550" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-red-800 px-[34px] py-4 text-sm font-semibold tracking-[0.16em] text-white transition hover:bg-red-700 rounded-md"
          >
            WhatsApp <WhatsAppIcon className="h-4 w-4" />
          </a>
          <a 
            href="mailto:admin@nitoriyo.com" 
            className="inline-flex items-center justify-center border border-white/20 px-8 py-4 text-sm font-semibold tracking-[0.16em] text-white transition hover:border-white/50 hover:bg-white/5 rounded-md"
          >
            Email
          </a>
        </div>
      </Hero>
      <section className="bg-[#0b0b0b] py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeader title="AREA SOLUSI" jp="SOLUTION AREAS 対応分野" />
          <p className="mb-10 max-w-4xl text-lg leading-8 text-zinc-300">Nitoriyo mendukung operasional industri melalui solusi LED, warehouse systems, IT infrastructure, dan industrial supply.</p>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {config.sections.map((s, i) => (
              <div key={s} className="border border-white/10 bg-[#111111] p-8 rounded-2xl">
                <div className="mb-5 flex items-center justify-between">
                  <div className="h-px w-12 bg-red-700" />
                  <span className="text-xs tracking-[0.28em] text-zinc-600">0{i + 1}</span>
                </div>
                <h3 className="text-xl font-semibold text-white">{s}</h3>
                <p className="mt-4 text-sm leading-7 text-zinc-500">Dukungan supply dan solusi industrial yang practical, reliable, dan sesuai kebutuhan operasional.</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTA title="Diskusikan Kebutuhan Industri Anda" english="Let’s Discuss Your Industrial Needs" text="Nitoriyo siap mendukung kebutuhan operasional industri Anda melalui pendekatan supply yang reliable, practical, dan professional." />
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
      <LEDProductsPage setPage={setPage} />
    ) : page === "warehouse" ? (
      <WarehouseSolutionsPage setPage={setPage} />
    ) : page === "racking-systems" ? (
      <RackingSystemsPage setPage={setPage} />
    ) : (
      <PlaceholderPage type={page} setPage={setPage} />
    );

  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap');
        body {
          font-family: 'Plus Jakarta Sans', sans-serif;
        }
      `}} />
      <div className="min-h-screen bg-black text-white" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
        <Navbar currentPage={page} setPage={setPage} />
        
        <div className="fixed bottom-6 left-1/2 z-[100] flex -translate-x-1/2 overflow-hidden border border-white/10 bg-black/80 backdrop-blur-xl shadow-2xl shadow-black/50 rounded-[8px]">
          {pages.map((p) => {
            const isActive = page === p.id || (page === "racking-systems" && p.id === "warehouse");
            return (
              <button
                key={p.id}
                onClick={() => setPage(p.id)}
                className={`px-4 py-3 text-[11px] font-semibold tracking-[0.14em] transition ${isActive ? "bg-red-800 text-white" : "text-zinc-400 hover:text-white"}`}
              >
                {p.label}
              </button>
            )
          })}
        </div>

        <div key={page}>{currentPage}</div>
        <Footer setPage={setPage} />
      </div>
    </>
  );
}

export default PreviewApp;