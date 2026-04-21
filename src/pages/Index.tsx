import { useState, useEffect } from "react";
import Icon from "@/components/ui/icon";

const LOGO_IMAGE = "https://cdn.poehali.dev/projects/b71652aa-9f9a-4d81-91bf-f1456916da94/files/4afd85fa-ee0c-4349-a1b2-d4dacc7a728f.jpg";

const NAV_LINKS = ["Каталог", "Бренды", "Акции", "Доставка", "О нас"];

const CATEGORIES = [
  { icon: "Smartphone", label: "Смартфоны" },
  { icon: "Laptop", label: "Ноутбуки" },
  { icon: "Headphones", label: "Наушники" },
  { icon: "Watch", label: "Умные часы" },
  { icon: "Camera", label: "Фотоаппараты" },
  { icon: "Cpu", label: "Комплектующие" },
];

const FEATURES = [
  { icon: "ShieldCheck", title: "Гарантия качества", desc: "Только оригинальная техника от официальных дистрибьюторов" },
  { icon: "Truck", title: "Быстрая доставка", desc: "Доставка по всей России от 1 дня" },
  { icon: "RotateCcw", title: "Возврат 30 дней", desc: "Простой возврат без лишних вопросов" },
  { icon: "Headset", title: "Поддержка 24/7", desc: "Эксперты всегда готовы помочь с выбором" },
];

const PRODUCTS = [
  { name: "iPhone 16 Pro", price: "119 990 ₽", badge: "Хит", tag: "Смартфоны" },
  { name: "MacBook Air M3", price: "134 990 ₽", badge: "Новинка", tag: "Ноутбуки" },
  { name: "Sony WH-1000XM5", price: "29 990 ₽", badge: "", tag: "Наушники" },
  { name: "Samsung Galaxy S25", price: "89 990 ₽", badge: "Скидка", tag: "Смартфоны" },
];

export default function Index() {
  const [visible, setVisible] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 50);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="min-h-screen bg-[hsl(var(--background))] text-[hsl(var(--foreground))] font-golos overflow-x-hidden">

      {/* Grid background pattern */}
      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,212,255,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,212,255,0.05) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Top bar */}
      <div className="relative z-10 bg-[hsl(220,35%,8%)] text-[hsl(195,100%,70%)] text-xs font-mono py-2 px-6 text-center tracking-widest">
        БЕСПЛАТНАЯ ДОСТАВКА ОТ 10 000 ₽&nbsp;·&nbsp;РАССРОЧКА 0%&nbsp;·&nbsp;ГАРАНТИЯ 2 ГОДА
      </div>

      {/* Header */}
      <header className="relative z-10 bg-white/80 backdrop-blur-sm border-b border-[hsl(var(--border))] sticky top-0">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center gap-8">
          <div className={`flex items-center gap-3 transition-all duration-700 ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"}`}>
            <div className="w-10 h-10 rounded-xl overflow-hidden border border-[hsl(var(--border))] shadow-sm flex-shrink-0">
              <img src={LOGO_IMAGE} alt="TechCore Logo" className="w-full h-full object-cover" />
            </div>
            <div>
              <span className="text-xl font-black tracking-tight text-[hsl(220,35%,10%)]">TECH</span>
              <span className="text-xl font-black tracking-tight text-[hsl(195,100%,35%)]">CORE</span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6 flex-1 ml-4">
            {NAV_LINKS.map((link) => (
              <button
                key={link}
                className="text-sm font-medium text-[hsl(var(--muted-foreground))] hover:text-[hsl(195,100%,35%)] transition-colors"
              >
                {link}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-3 ml-auto">
            <div className="relative hidden md:flex items-center bg-[hsl(var(--muted))] rounded-xl px-4 py-2 gap-2 w-64">
              <Icon name="Search" size={16} className="text-[hsl(var(--muted-foreground))]" />
              <input
                type="text"
                placeholder="Поиск товаров..."
                className="bg-transparent text-sm outline-none w-full placeholder:text-[hsl(var(--muted-foreground))]"
              />
            </div>
            <button
              onClick={() => setCartCount(c => c + 1)}
              className="relative p-2.5 rounded-xl bg-[hsl(var(--muted))] hover:bg-[hsl(195,100%,35%)] hover:text-white transition-all group"
            >
              <Icon name="ShoppingCart" size={20} className="group-hover:scale-110 transition-transform" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-[hsl(195,100%,35%)] text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
            <button className="p-2.5 rounded-xl bg-[hsl(var(--muted))] hover:bg-[hsl(var(--muted-foreground))]/20 transition-all">
              <Icon name="User" size={20} />
            </button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 pt-20 pb-24">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 max-w-xl">
            <div className={`inline-flex items-center gap-2 bg-[hsl(195,100%,35%)]/10 border border-[hsl(195,100%,35%)]/30 rounded-full px-4 py-1.5 mb-6 ${visible ? "animate-fade-in" : "opacity-0"}`}>
              <div className="w-2 h-2 rounded-full bg-[hsl(195,100%,45%)] animate-pulse" />
              <span className="text-xs font-mono font-medium text-[hsl(195,100%,35%)] tracking-wider">НОВИНКИ ВЕСНЫ 2026</span>
            </div>

            <h1 className={`text-5xl lg:text-6xl font-black leading-[1.05] tracking-tight mb-6 ${visible ? "animate-fade-in animate-delay-100" : "opacity-0"}`}>
              Технологии,<br />
              <span className="text-[hsl(195,100%,35%)]">которые</span><br />
              работают
            </h1>

            <p className={`text-lg text-[hsl(var(--muted-foreground))] leading-relaxed mb-10 max-w-md ${visible ? "animate-fade-in animate-delay-200" : "opacity-0"}`}>
              Лучшие гаджеты и электроника с гарантией. Более 50 000 товаров в наличии — смартфоны, ноутбуки, умные устройства.
            </p>

            <div className={`flex gap-4 ${visible ? "animate-fade-in animate-delay-300" : "opacity-0"}`}>
              <button className="px-8 py-3.5 bg-[hsl(220,35%,10%)] text-white font-semibold rounded-xl hover:bg-[hsl(195,100%,35%)] transition-all hover:scale-105 shadow-lg">
                Перейти в каталог
              </button>
              <button className="px-8 py-3.5 border-2 border-[hsl(var(--border))] font-semibold rounded-xl hover:border-[hsl(195,100%,35%)] hover:text-[hsl(195,100%,35%)] transition-all">
                Акции
              </button>
            </div>

            <div className={`flex gap-8 mt-12 pt-8 border-t border-[hsl(var(--border))] ${visible ? "animate-fade-in animate-delay-400" : "opacity-0"}`}>
              {[
                { val: "50K+", label: "Товаров" },
                { val: "200K+", label: "Клиентов" },
                { val: "4.9★", label: "Рейтинг" },
              ].map(({ val, label }) => (
                <div key={label}>
                  <div className="text-2xl font-black text-[hsl(220,35%,10%)]">{val}</div>
                  <div className="text-sm text-[hsl(var(--muted-foreground))] font-medium">{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Logo showcase */}
          <div className={`flex-1 flex justify-center items-center ${visible ? "animate-scale-in animate-delay-200" : "opacity-0"}`}>
            <div className="relative">
              <div className="absolute inset-0 blur-3xl bg-[hsl(195,100%,50%)]/15 rounded-full scale-150" />
              <div className="relative w-72 h-72 rounded-3xl bg-white border border-[hsl(var(--border))] shadow-2xl overflow-hidden flex items-center justify-center p-6 animate-glow-pulse">
                <img src={LOGO_IMAGE} alt="TechCore" className="w-full h-full object-contain" />
              </div>
              <div className="absolute -top-4 -right-4 bg-[hsl(195,100%,35%)] text-white text-xs font-mono font-bold px-3 py-1.5 rounded-full shadow-lg">
                v 1.0
              </div>
              <div className="absolute -bottom-4 -left-4 bg-[hsl(220,35%,10%)] text-[hsl(195,100%,70%)] text-xs font-mono px-3 py-1.5 rounded-full shadow-lg">
                MINIMAL · TECH
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="relative z-10 bg-[hsl(220,35%,8%)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-sm font-mono font-medium tracking-[0.2em] text-[hsl(195,100%,60%)] mb-8 uppercase">
            // Категории
          </h2>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
            {CATEGORIES.map(({ icon, label }) => (
              <button
                key={label}
                className="group flex flex-col items-center gap-3 p-5 rounded-2xl border border-[hsl(220,25%,16%)] bg-[hsl(220,30%,10%)] hover:border-[hsl(195,100%,40%)] hover:bg-[hsl(195,100%,35%)]/10 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-[hsl(220,25%,16%)] group-hover:bg-[hsl(195,100%,35%)]/20 flex items-center justify-center transition-all">
                  <Icon name={icon} size={20} className="text-[hsl(195,100%,60%)]" />
                </div>
                <span className="text-xs font-medium text-[hsl(210,20%,70%)] group-hover:text-white transition-colors text-center">
                  {label}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="flex items-end justify-between mb-12">
          <div>
            <h2 className="text-sm font-mono font-medium tracking-[0.2em] text-[hsl(195,100%,35%)] mb-2 uppercase">
              // Популярное
            </h2>
            <h3 className="text-3xl font-black text-[hsl(220,35%,10%)]">Хиты продаж</h3>
          </div>
          <button className="text-sm font-semibold text-[hsl(195,100%,35%)] hover:underline flex items-center gap-1">
            Все товары <Icon name="ArrowRight" size={16} />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {PRODUCTS.map(({ name, price, badge, tag }) => (
            <div
              key={name}
              className="group bg-white border border-[hsl(var(--border))] rounded-2xl p-5 hover:border-[hsl(195,100%,40%)] hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              <div className="aspect-square bg-[hsl(var(--muted))] rounded-xl mb-4 flex items-center justify-center relative overflow-hidden">
                <Icon name="Package" size={48} className="text-[hsl(var(--muted-foreground))]/30" />
                {badge && (
                  <span className={`absolute top-3 left-3 text-xs font-bold px-2.5 py-1 rounded-full ${
                    badge === "Хит" ? "bg-[hsl(25,100%,55%)] text-white" :
                    badge === "Новинка" ? "bg-[hsl(195,100%,35%)] text-white" :
                    "bg-[hsl(0,80%,55%)] text-white"
                  }`}>
                    {badge}
                  </span>
                )}
              </div>
              <div className="text-xs font-mono text-[hsl(var(--muted-foreground))] mb-1">{tag}</div>
              <h4 className="font-bold text-[hsl(220,35%,10%)] mb-3 group-hover:text-[hsl(195,100%,35%)] transition-colors">
                {name}
              </h4>
              <div className="flex items-center justify-between">
                <span className="text-lg font-black text-[hsl(220,35%,10%)]">{price}</span>
                <button
                  onClick={() => setCartCount(c => c + 1)}
                  className="w-9 h-9 bg-[hsl(220,35%,10%)] text-white rounded-xl flex items-center justify-center hover:bg-[hsl(195,100%,35%)] transition-all hover:scale-110"
                >
                  <Icon name="Plus" size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="relative z-10 bg-[hsl(var(--muted))]/50 py-16 border-t border-[hsl(var(--border))]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {FEATURES.map(({ icon, title, desc }) => (
              <div key={title} className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-2xl bg-[hsl(195,100%,35%)]/10 border border-[hsl(195,100%,35%)]/20 flex items-center justify-center flex-shrink-0">
                  <Icon name={icon} size={22} className="text-[hsl(195,100%,35%)]" />
                </div>
                <div>
                  <div className="font-bold text-[hsl(220,35%,10%)] mb-1">{title}</div>
                  <div className="text-sm text-[hsl(var(--muted-foreground))] leading-snug">{desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="relative z-10 bg-[hsl(220,35%,8%)] py-16">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <div className="text-[hsl(195,100%,60%)] font-mono text-sm tracking-widest mb-4">// ПОДПИСКА</div>
          <h3 className="text-3xl font-black text-white mb-3">Первым узнавай об акциях</h3>
          <p className="text-[hsl(210,15%,60%)] mb-8">Скидки, новинки и эксклюзивные предложения — прямо в почту</p>
          <div className="flex gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="ваш@email.ru"
              className="flex-1 px-4 py-3 bg-[hsl(220,30%,12%)] border border-[hsl(220,25%,20%)] text-white rounded-xl outline-none focus:border-[hsl(195,100%,40%)] transition-colors placeholder:text-[hsl(215,15%,40%)] font-mono text-sm"
            />
            <button className="px-6 py-3 bg-[hsl(195,100%,35%)] text-white font-semibold rounded-xl hover:bg-[hsl(195,100%,42%)] transition-all hover:scale-105 whitespace-nowrap">
              Подписаться
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-[hsl(var(--border))] py-8 bg-white">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg overflow-hidden border border-[hsl(var(--border))]">
              <img src={LOGO_IMAGE} alt="TechCore" className="w-full h-full object-cover" />
            </div>
            <div>
              <span className="text-sm font-black text-[hsl(220,35%,10%)]">TECH</span>
              <span className="text-sm font-black text-[hsl(195,100%,35%)]">CORE</span>
            </div>
          </div>
          <div className="text-sm text-[hsl(var(--muted-foreground))] font-mono">
            © 2026 TechCore. Все права защищены.
          </div>
          <div className="flex gap-3">
            {["T", "VK", "IG"].map((s) => (
              <button key={s} className="w-9 h-9 rounded-xl bg-[hsl(var(--muted))] flex items-center justify-center hover:bg-[hsl(195,100%,35%)] hover:text-white transition-all text-xs font-bold text-[hsl(var(--muted-foreground))]">
                {s}
              </button>
            ))}
          </div>
        </div>
      </footer>

    </div>
  );
}