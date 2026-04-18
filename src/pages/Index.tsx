import { useState } from "react";
import Icon from "@/components/ui/icon";

const NAV_ITEMS = [
  { id: "about", label: "О федерации" },
  { id: "calendar", label: "Календарь" },
  { id: "achievements", label: "Достижения" },
  { id: "participants", label: "Участники" },
  { id: "clubs", label: "Клубы" },
  { id: "coaches", label: "Тренеры" },
  { id: "judges", label: "Судьи" },
  { id: "news", label: "Новости" },
  { id: "articles", label: "Статьи" },
  { id: "documents", label: "Документы" },
  { id: "register", label: "Регистрация" },
  { id: "contacts", label: "Контакты" },
];

const TOURNAMENTS = [
  "Чемпионат России 2026",
  "Кубок Федерации — Весна 2026",
  "Открытый турнир Москвы",
  "Первенство СЗФО 2026",
  "Межрегиональные соревнования",
];

const ACHIEVEMENTS = [
  { year: "2025", title: "Чемпионат Европы", result: "3 золотых медали", location: "Берлин, Германия" },
  { year: "2024", title: "Чемпионат Мира", result: "2 серебряных медали", location: "Прага, Чехия" },
  { year: "2024", title: "Кубок России", result: "Командная победа", location: "Москва, Россия" },
  { year: "2023", title: "Чемпионат Европы", result: "5 медалей сборной", location: "Вена, Австрия" },
  { year: "2023", title: "Первенство России", result: "12 призовых мест", location: "Казань, Россия" },
  { year: "2022", title: "Чемпионат Мира", result: "4 медали", location: "Лозанна, Швейцария" },
];

const CALENDAR_EVENTS = [
  { date: "15 мая", month: "МАЙ", title: "Кубок Федерации — Весна 2026", city: "Москва", type: "Всероссийские" },
  { date: "6–8 июня", month: "ИЮНЬ", title: "Чемпионат России 2026", city: "Санкт-Петербург", type: "Чемпионат" },
  { date: "20 июня", month: "ИЮНЬ", title: "Открытый турнир Москвы", city: "Москва", type: "Открытый турнир" },
  { date: "12–14 сент.", month: "СЕНТ", title: "Первенство СЗФО 2026", city: "Новгород", type: "Региональные" },
  { date: "18 окт.", month: "ОКТ", title: "Межрегиональные соревнования", city: "Казань", type: "Межрегиональные" },
];

const NEWS = [
  {
    date: "12 апреля 2026",
    title: "Сборная России завоевала три медали на международном турнире",
    excerpt: "Российские спортсмены продемонстрировали высокий уровень подготовки на соревнованиях в Варшаве, завоевав 1 золото, 1 серебро и 1 бронзу.",
  },
  {
    date: "5 апреля 2026",
    title: "Утверждён календарь соревнований на 2026 год",
    excerpt: "Федерация утвердила расписание официальных соревнований на предстоящий сезон. Всего запланировано 8 крупных турниров.",
  },
  {
    date: "28 марта 2026",
    title: "Открыта регистрация на Чемпионат России 2026",
    excerpt: "Приём заявок на участие в Чемпионате России по акробатическому рок-н-роллу открыт. Соревнования пройдут в июне в Санкт-Петербурге.",
  },
];

const CLUBS = [
  { name: "Динамика", city: "Москва", founded: 1998, athletes: 120 },
  { name: "Северная звезда", city: "Санкт-Петербург", founded: 2001, athletes: 85 },
  { name: "Академия рок-н-ролла", city: "Казань", founded: 2005, athletes: 67 },
  { name: "Ритм", city: "Екатеринбург", founded: 2003, athletes: 94 },
  { name: "Экспресс", city: "Нижний Новгород", founded: 2007, athletes: 52 },
  { name: "Виктория", city: "Краснодар", founded: 2010, athletes: 43 },
];

const COACHES = [
  { name: "Александра Воронова", title: "Заслуженный тренер России", club: "Динамика", experience: "28 лет" },
  { name: "Игорь Семёнов", title: "Тренер высшей категории", club: "Северная звезда", experience: "19 лет" },
  { name: "Наталья Кириллова", title: "Мастер спорта, тренер", club: "Академия рок-н-ролла", experience: "15 лет" },
  { name: "Дмитрий Орлов", title: "Заслуженный тренер России", club: "Ритм", experience: "24 года" },
];

const JUDGES = [
  { name: "Валентина Морозова", category: "Судья международной категории", region: "Москва" },
  { name: "Павел Жуков", category: "Судья всероссийской категории", region: "Санкт-Петербург" },
  { name: "Елена Тихонова", category: "Судья республиканской категории", region: "Казань" },
  { name: "Сергей Белов", category: "Судья международной категории", region: "Москва" },
  { name: "Ольга Мартынова", category: "Судья всероссийской категории", region: "Екатеринбург" },
];

const DOCUMENTS = [
  { title: "Устав Федерации акробатического рок-н-ролла", type: "PDF", year: "2023" },
  { title: "Правила соревнований ФАРР — редакция 2025", type: "PDF", year: "2025" },
  { title: "Квалификационные требования и разряды", type: "PDF", year: "2024" },
  { title: "Положение о судейском корпусе", type: "PDF", year: "2024" },
  { title: "Антидопинговые правила", type: "PDF", year: "2025" },
  { title: "Форма заявки на соревнования", type: "DOC", year: "2026" },
];

const ARTICLES = [
  { date: "Март 2026", title: "История акробатического рок-н-ролла в России", author: "Редакция ФАРР" },
  { date: "Февраль 2026", title: "Методика подготовки акробатических пар высшего мастерства", author: "А. Воронова" },
  { date: "Январь 2026", title: "Новые правила судейства: что изменилось в 2026 году", author: "В. Морозова" },
  { date: "Декабрь 2025", title: "Итоги сезона 2025: достижения и перспективы", author: "Редакция ФАРР" },
];

export default function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [form, setForm] = useState({
    name: "", club: "", category: "", tournament: "", contacts: "", comment: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setMenuOpen(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-background font-body">
      {/* HEADER */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-navy shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3 cursor-pointer" onClick={() => scrollTo("home")}>
              <div className="w-10 h-10 bg-gold flex items-center justify-center flex-shrink-0">
                <span className="font-display text-navy font-bold text-sm leading-none">ФАРР</span>
              </div>
              <div className="hidden sm:block">
                <div className="font-display text-white text-sm font-semibold leading-tight tracking-wide">
                  ФЕДЕРАЦИЯ
                </div>
                <div className="font-body text-gold text-xs leading-tight tracking-wider uppercase">
                  Акробатический рок-н-ролл
                </div>
              </div>
            </div>

            <nav className="hidden xl:flex items-center gap-6">
              {NAV_ITEMS.slice(0, 8).map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className="nav-link font-body text-white/80 hover:text-gold text-xs tracking-wide uppercase transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <button
                onClick={() => scrollTo("register")}
                className="hidden sm:flex items-center gap-2 bg-gold text-navy font-display font-semibold text-xs px-4 py-2 tracking-wider uppercase hover:bg-gold/90 transition-colors"
              >
                <Icon name="UserPlus" size={14} />
                Регистрация
              </button>
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="xl:hidden text-white p-1"
              >
                <Icon name={menuOpen ? "X" : "Menu"} size={22} />
              </button>
            </div>
          </div>
        </div>

        {menuOpen && (
          <div className="xl:hidden bg-navy border-t border-white/10">
            <div className="max-w-7xl mx-auto px-4 py-3 grid grid-cols-2 gap-1">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className="text-left text-white/80 hover:text-gold text-sm py-2 px-2 transition-colors font-body"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="home" className="relative min-h-screen flex items-end pt-16">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(https://cdn.poehali.dev/projects/132e010f-1c04-4e0b-b422-6ff7e60a7726/files/9f421013-0541-48db-acf4-9e1345b2a794.jpg)` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/80 via-navy/30 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pb-16 sm:pb-24 w-full">
          <div className="max-w-2xl animate-fade-in">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-10 bg-gold" />
              <span className="text-gold font-body text-xs tracking-widest uppercase font-medium">
                Официальный сайт
              </span>
            </div>
            <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl text-white font-bold leading-none mb-4 tracking-wide">
              ФЕДЕРАЦИЯ<br />
              <span className="text-gold">АКРОБАТИЧЕСКОГО</span><br />
              РОК-Н-РОЛЛА
            </h1>
            <p className="font-body text-white/75 text-base sm:text-lg mb-10 max-w-xl leading-relaxed">
              Развиваем акробатический рок-н-ролл в России. Объединяем спортсменов, тренеров и клубы для достижения высочайших результатов.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => scrollTo("register")}
                className="bg-gold text-navy font-display font-semibold px-8 py-3 text-sm tracking-widest uppercase hover:bg-gold/90 transition-all hover:scale-105"
              >
                Зарегистрироваться
              </button>
              <button
                onClick={() => scrollTo("calendar")}
                className="border border-white/40 text-white font-display px-8 py-3 text-sm tracking-widest uppercase hover:border-gold hover:text-gold transition-all"
              >
                Календарь
              </button>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl">
            {[
              { num: "250+", label: "Спортсменов" },
              { num: "18", label: "Клубов" },
              { num: "35+", label: "Медалей ЧЕ" },
              { num: "12", label: "Чемпионов России" },
            ].map((stat) => (
              <div key={stat.label} className="border border-white/15 bg-white/5 backdrop-blur-sm px-4 py-3">
                <div className="font-display text-2xl sm:text-3xl text-gold font-bold">{stat.num}</div>
                <div className="font-body text-white/60 text-xs mt-0.5 uppercase tracking-wide">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-8 bg-gold" />
                <span className="text-gold font-body text-xs tracking-widest uppercase">О нас</span>
              </div>
              <h2 className="font-display text-4xl sm:text-5xl text-navy font-bold mb-6 leading-tight">
                О ФЕДЕРАЦИИ
              </h2>
              <p className="font-body text-muted-foreground leading-relaxed mb-6">
                Федерация акробатического рок-н-ролла России (ФАРР) — общественная организация, объединяющая спортивные клубы, тренеров и спортсменов по всей стране. Мы развиваем акробатический рок-н-ролл как вид спорта с 1991 года.
              </p>
              <p className="font-body text-muted-foreground leading-relaxed mb-8">
                Наша миссия — повышение уровня российского спорта на мировой арене, создание условий для подготовки спортсменов высшего мастерства и популяризация акробатического рок-н-ролла в регионах России.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: "Award", text: "Член WRRC" },
                  { icon: "Shield", text: "Аккредитация Минспорта РФ" },
                  { icon: "Users", text: "35 регионов России" },
                  { icon: "Trophy", text: "С 1991 года" },
                ].map((item) => (
                  <div key={item.text} className="flex items-center gap-2.5 text-sm text-foreground font-body">
                    <Icon name={item.icon} size={16} className="text-gold flex-shrink-0" />
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: "Target", title: "Спорт высших достижений", text: "Подготовка спортсменов сборной России" },
                { icon: "Star", title: "Массовый спорт", text: "Развитие дисциплины по всей стране" },
                { icon: "BookOpen", title: "Методическая работа", text: "Повышение квалификации тренеров" },
                { icon: "Globe", title: "Международные связи", text: "Участие в мировых соревнованиях" },
              ].map((card) => (
                <div key={card.title} className="bg-background border border-border p-5 card-hover">
                  <div className="w-10 h-10 bg-navy flex items-center justify-center mb-3">
                    <Icon name={card.icon} size={18} className="text-gold" />
                  </div>
                  <div className="font-display text-sm text-navy font-semibold mb-1.5 leading-tight tracking-wide">{card.title}</div>
                  <div className="font-body text-xs text-muted-foreground leading-relaxed">{card.text}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ACHIEVEMENTS */}
      <section id="achievements" className="py-20 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-8 bg-gold" />
              <span className="text-gold font-body text-xs tracking-widest uppercase">Гордость федерации</span>
              <div className="h-px w-8 bg-gold" />
            </div>
            <h2 className="font-display text-4xl sm:text-5xl text-white font-bold tracking-wide">ДОСТИЖЕНИЯ</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {ACHIEVEMENTS.map((item, i) => (
              <div key={i} className="border border-white/10 bg-white/5 p-6 card-hover group">
                <div className="flex items-start justify-between mb-4">
                  <span className="font-display text-gold text-3xl font-bold">{item.year}</span>
                  <Icon name="Trophy" size={20} className="text-gold/50 group-hover:text-gold transition-colors" />
                </div>
                <div className="font-display text-white font-semibold text-sm tracking-wide mb-2 leading-tight uppercase">{item.title}</div>
                <div className="font-body text-gold text-sm font-medium mb-2">{item.result}</div>
                <div className="flex items-center gap-1.5 text-white/50 text-xs font-body">
                  <Icon name="MapPin" size={12} />
                  {item.location}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CALENDAR */}
      <section id="calendar" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-8 bg-gold" />
                <span className="text-gold font-body text-xs tracking-widest uppercase">Сезон 2026</span>
              </div>
              <h2 className="font-display text-4xl sm:text-5xl text-navy font-bold tracking-wide">КАЛЕНДАРЬ</h2>
            </div>
            <button
              onClick={() => scrollTo("register")}
              className="bg-navy text-gold font-display text-xs px-6 py-2.5 tracking-widest uppercase hover:bg-navy/80 transition-colors self-start sm:self-auto"
            >
              Зарегистрироваться
            </button>
          </div>

          <div className="space-y-3">
            {CALENDAR_EVENTS.map((ev, i) => (
              <div key={i} className="border border-border bg-background hover:border-gold/50 transition-all p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center gap-4 group card-hover">
                <div className="flex-shrink-0 w-16 text-center border-r border-border pr-4 hidden sm:block">
                  <div className="font-display text-navy text-xl font-bold leading-none">{ev.date.split(" ")[0]}</div>
                  <div className="font-body text-gold text-xs mt-1 tracking-widest">{ev.month}</div>
                </div>
                <div className="flex-1">
                  <div className="font-display text-navy text-base font-semibold tracking-wide group-hover:text-navy/80 transition-colors">{ev.title}</div>
                  <div className="flex items-center gap-3 mt-1.5">
                    <span className="flex items-center gap-1 text-muted-foreground text-xs font-body">
                      <Icon name="MapPin" size={11} />
                      {ev.city}
                    </span>
                    <span className="sm:hidden text-muted-foreground text-xs font-body">{ev.date}</span>
                  </div>
                </div>
                <span className="text-xs font-body bg-secondary text-muted-foreground px-3 py-1 self-start sm:self-auto border border-border">
                  {ev.type}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PARTICIPANTS */}
      <section id="participants" className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-gold" />
              <span className="text-gold font-body text-xs tracking-widest uppercase">Сборная России</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl text-navy font-bold tracking-wide">УЧАСТНИКИ</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { name: "Алексей и Мария Кузнецовы", category: "Мастера спорта России", club: "Динамика", rank: "1 место ЧР 2025" },
              { name: "Дмитрий и Анна Соколовы", category: "Мастера спорта России", club: "Ритм", rank: "2 место ЧЕ 2025" },
              { name: "Павел и Екатерина Яковлевы", category: "МСМК", club: "Северная звезда", rank: "Чемпионы России 2024" },
              { name: "Иван и Наталья Громовы", category: "Мастера спорта", club: "Динамика", rank: "3 место ЧЕ 2025" },
              { name: "Артём и Виктория Смирновы", category: "Мастера спорта России", club: "Академия", rank: "Кубок России 2025" },
              { name: "Сергей и Ольга Петровы", category: "Кандидаты в МС", club: "Экспресс", rank: "1 место СЗФО 2025" },
            ].map((p, i) => (
              <div key={i} className="bg-white border border-border p-5 card-hover">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-navy rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Users" size={16} className="text-gold" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-display text-navy text-sm font-semibold tracking-wide leading-tight">{p.name}</div>
                    <div className="font-body text-xs text-muted-foreground mt-0.5">{p.category}</div>
                    <div className="font-body text-xs text-gold mt-1 font-medium">{p.rank}</div>
                  </div>
                </div>
                <div className="mt-3 pt-3 border-t border-border flex items-center gap-1.5 text-xs text-muted-foreground font-body">
                  <Icon name="MapPin" size={11} />
                  {p.club}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLUBS */}
      <section id="clubs" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-gold" />
              <span className="text-gold font-body text-xs tracking-widest uppercase">По всей России</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl text-navy font-bold tracking-wide">КЛУБЫ</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {CLUBS.map((club, i) => (
              <div key={i} className="border border-border p-5 card-hover group cursor-pointer">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 bg-navy group-hover:bg-gold transition-colors flex items-center justify-center">
                    <Icon name="Building2" size={16} className="text-gold group-hover:text-navy transition-colors" />
                  </div>
                  <span className="font-body text-xs text-muted-foreground">с {club.founded} г.</span>
                </div>
                <div className="font-display text-navy text-base font-semibold tracking-wide mb-1">{club.name}</div>
                <div className="flex items-center gap-1.5 text-muted-foreground text-sm mb-3 font-body">
                  <Icon name="MapPin" size={12} />
                  {club.city}
                </div>
                <div className="flex items-center gap-1.5 text-xs font-body">
                  <Icon name="Users" size={12} className="text-gold" />
                  <span className="text-muted-foreground">{club.athletes} спортсменов</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COACHES */}
      <section id="coaches" className="py-20 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-gold" />
              <span className="text-gold font-body text-xs tracking-widest uppercase">Профессионалы</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl text-white font-bold tracking-wide">ТРЕНЕРЫ</h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {COACHES.map((c, i) => (
              <div key={i} className="border border-white/10 bg-white/5 p-6 flex items-start gap-4 card-hover group">
                <div className="w-12 h-12 bg-gold/15 border border-gold/30 flex items-center justify-center flex-shrink-0">
                  <Icon name="User" size={20} className="text-gold" />
                </div>
                <div>
                  <div className="font-display text-white font-semibold tracking-wide text-base">{c.name}</div>
                  <div className="font-body text-gold text-sm mt-0.5">{c.title}</div>
                  <div className="flex items-center gap-4 mt-2">
                    <span className="font-body text-white/50 text-xs flex items-center gap-1">
                      <Icon name="Building2" size={11} />
                      {c.club}
                    </span>
                    <span className="font-body text-white/50 text-xs flex items-center gap-1">
                      <Icon name="Clock" size={11} />
                      {c.experience}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* JUDGES */}
      <section id="judges" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-gold" />
              <span className="text-gold font-body text-xs tracking-widest uppercase">Аттестованные специалисты</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl text-navy font-bold tracking-wide">СУДЕЙСКИЙ КОРПУС</h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-navy text-left">
                  <th className="font-display text-gold text-xs tracking-widest uppercase px-5 py-3.5 font-medium">ФИО</th>
                  <th className="font-display text-gold text-xs tracking-widest uppercase px-5 py-3.5 font-medium">Категория</th>
                  <th className="font-display text-gold text-xs tracking-widest uppercase px-5 py-3.5 font-medium hidden sm:table-cell">Регион</th>
                </tr>
              </thead>
              <tbody>
                {JUDGES.map((j, i) => (
                  <tr key={i} className={`border-b border-border hover:bg-secondary/50 transition-colors ${i % 2 === 0 ? 'bg-white' : 'bg-background/50'}`}>
                    <td className="px-5 py-3.5 font-display text-navy text-sm font-medium tracking-wide">{j.name}</td>
                    <td className="px-5 py-3.5 font-body text-muted-foreground text-sm">{j.category}</td>
                    <td className="px-5 py-3.5 font-body text-muted-foreground text-sm hidden sm:table-cell">{j.region}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* NEWS */}
      <section id="news" className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-gold" />
              <span className="text-gold font-body text-xs tracking-widest uppercase">Актуально</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl text-navy font-bold tracking-wide">НОВОСТИ</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {NEWS.map((n, i) => (
              <article key={i} className="bg-white border border-border p-6 card-hover cursor-pointer group">
                <div className="font-body text-xs text-gold tracking-wide uppercase mb-3 font-medium">{n.date}</div>
                <h3 className="font-display text-navy text-base font-semibold tracking-wide mb-3 leading-snug group-hover:text-navy/70 transition-colors">{n.title}</h3>
                <p className="font-body text-muted-foreground text-sm leading-relaxed mb-4">{n.excerpt}</p>
                <div className="flex items-center gap-1.5 text-navy text-xs font-body font-medium group-hover:gap-2.5 transition-all">
                  Читать далее
                  <Icon name="ArrowRight" size={12} />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ARTICLES */}
      <section id="articles" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-gold" />
              <span className="text-gold font-body text-xs tracking-widest uppercase">Материалы</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl text-navy font-bold tracking-wide">СТАТЬИ</h2>
          </div>

          <div className="space-y-3">
            {ARTICLES.map((a, i) => (
              <div key={i} className="border border-border p-5 flex flex-col sm:flex-row sm:items-center gap-4 card-hover group cursor-pointer hover:border-gold/40 transition-all">
                <div className="flex-shrink-0 w-24">
                  <span className="font-body text-xs text-muted-foreground">{a.date}</span>
                </div>
                <div className="flex-1">
                  <div className="font-display text-navy text-sm font-semibold tracking-wide group-hover:text-navy/70 transition-colors">{a.title}</div>
                </div>
                <div className="font-body text-xs text-muted-foreground">{a.author}</div>
                <Icon name="ChevronRight" size={14} className="text-gold flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DOCUMENTS */}
      <section id="documents" className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-gold" />
              <span className="text-gold font-body text-xs tracking-widest uppercase">Официальные материалы</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl text-navy font-bold tracking-wide">ДОКУМЕНТЫ</h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-3">
            {DOCUMENTS.map((d, i) => (
              <div key={i} className="bg-white border border-border p-4 flex items-center gap-4 card-hover group cursor-pointer hover:border-gold/40 transition-all">
                <div className="w-10 h-12 bg-navy flex items-center justify-center flex-shrink-0">
                  <span className="font-display text-gold text-xs font-bold">{d.type}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-body text-navy text-sm font-medium leading-snug">{d.title}</div>
                  <div className="font-body text-xs text-muted-foreground mt-0.5">{d.year}</div>
                </div>
                <Icon name="Download" size={15} className="text-gold flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REGISTRATION */}
      <section id="register" className="py-20 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-8 bg-gold" />
                <span className="text-gold font-body text-xs tracking-widest uppercase">Участие</span>
              </div>
              <h2 className="font-display text-4xl sm:text-5xl text-white font-bold tracking-wide mb-6">
                РЕГИСТРАЦИЯ<br />НА СОРЕВНОВАНИЯ
              </h2>
              <p className="font-body text-white/60 leading-relaxed mb-8">
                Заполните форму для подачи заявки на участие в соревнованиях. После получения заявки с вами свяжется организационный комитет для подтверждения участия.
              </p>
              <div className="space-y-4">
                {[
                  { icon: "FileText", text: "Заявка рассматривается в течение 3 рабочих дней" },
                  { icon: "Mail", text: "Подтверждение приходит на указанный email или телефон" },
                  { icon: "CheckCircle", text: "После подтверждения оплатите взнос участника" },
                ].map((item) => (
                  <div key={item.text} className="flex items-start gap-3">
                    <Icon name={item.icon} size={16} className="text-gold mt-0.5 flex-shrink-0" />
                    <span className="font-body text-white/60 text-sm">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-6 sm:p-8">
              {submitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-navy flex items-center justify-center mx-auto mb-4">
                    <Icon name="CheckCircle" size={28} className="text-gold" />
                  </div>
                  <h3 className="font-display text-navy text-xl font-bold tracking-wide mb-2">ЗАЯВКА ОТПРАВЛЕНА</h3>
                  <p className="font-body text-muted-foreground text-sm">Мы свяжемся с вами в течение 3 рабочих дней</p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 font-body text-xs text-navy/50 hover:text-navy underline"
                  >
                    Подать ещё одну заявку
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="font-display text-navy text-xs tracking-widest uppercase block mb-1.5">
                      ФИО спортсмена / пары *
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={e => setForm({ ...form, name: e.target.value })}
                      placeholder="Иванов Иван Иванович"
                      className="w-full border border-border px-4 py-2.5 font-body text-sm text-navy placeholder:text-muted-foreground/60 focus:outline-none focus:border-navy transition-colors"
                    />
                  </div>
                  <div>
                    <label className="font-display text-navy text-xs tracking-widest uppercase block mb-1.5">
                      Клуб *
                    </label>
                    <input
                      type="text"
                      required
                      value={form.club}
                      onChange={e => setForm({ ...form, club: e.target.value })}
                      placeholder="Название клуба"
                      className="w-full border border-border px-4 py-2.5 font-body text-sm text-navy placeholder:text-muted-foreground/60 focus:outline-none focus:border-navy transition-colors"
                    />
                  </div>
                  <div>
                    <label className="font-display text-navy text-xs tracking-widest uppercase block mb-1.5">
                      Категория *
                    </label>
                    <select
                      required
                      value={form.category}
                      onChange={e => setForm({ ...form, category: e.target.value })}
                      className="w-full border border-border px-4 py-2.5 font-body text-sm text-navy focus:outline-none focus:border-navy transition-colors bg-white"
                    >
                      <option value="">Выберите категорию</option>
                      <option>Взрослые — Класс A</option>
                      <option>Взрослые — Класс B</option>
                      <option>Юниоры</option>
                      <option>Дети</option>
                      <option>Мастера</option>
                    </select>
                  </div>
                  <div>
                    <label className="font-display text-navy text-xs tracking-widest uppercase block mb-1.5">
                      Соревнование *
                    </label>
                    <select
                      required
                      value={form.tournament}
                      onChange={e => setForm({ ...form, tournament: e.target.value })}
                      className="w-full border border-border px-4 py-2.5 font-body text-sm text-navy focus:outline-none focus:border-navy transition-colors bg-white"
                    >
                      <option value="">Выберите соревнование</option>
                      {TOURNAMENTS.map((t) => (
                        <option key={t}>{t}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="font-display text-navy text-xs tracking-widest uppercase block mb-1.5">
                      Телефон или Email *
                    </label>
                    <input
                      type="text"
                      required
                      value={form.contacts}
                      onChange={e => setForm({ ...form, contacts: e.target.value })}
                      placeholder="+7 (___) ___-__-__"
                      className="w-full border border-border px-4 py-2.5 font-body text-sm text-navy placeholder:text-muted-foreground/60 focus:outline-none focus:border-navy transition-colors"
                    />
                  </div>
                  <div>
                    <label className="font-display text-navy text-xs tracking-widest uppercase block mb-1.5">
                      Комментарий
                    </label>
                    <textarea
                      value={form.comment}
                      onChange={e => setForm({ ...form, comment: e.target.value })}
                      placeholder="Дополнительная информация"
                      rows={3}
                      className="w-full border border-border px-4 py-2.5 font-body text-sm text-navy placeholder:text-muted-foreground/60 focus:outline-none focus:border-navy transition-colors resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-navy text-gold font-display text-sm tracking-widest uppercase py-3.5 hover:bg-navy/80 transition-colors"
                  >
                    Подать заявку
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contacts" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-gold" />
              <span className="text-gold font-body text-xs tracking-widest uppercase">Связаться с нами</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl text-navy font-bold tracking-wide">КОНТАКТЫ</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: "MapPin", title: "Адрес", lines: ["125009, г. Москва,", "ул. Тверская, д. 1"] },
              { icon: "Phone", title: "Телефон", lines: ["+7 (495) 123-45-67", "+7 (495) 765-43-21"] },
              { icon: "Mail", title: "Email", lines: ["info@farr.ru", "president@farr.ru"] },
              { icon: "Clock", title: "Режим работы", lines: ["Пн–Пт: 10:00–18:00", "Сб–Вс: выходной"] },
            ].map((c) => (
              <div key={c.title} className="border border-border p-5">
                <div className="w-10 h-10 bg-navy flex items-center justify-center mb-4">
                  <Icon name={c.icon} size={16} className="text-gold" />
                </div>
                <div className="font-display text-navy text-xs font-semibold tracking-widest uppercase mb-2">{c.title}</div>
                {c.lines.map((line, i) => (
                  <div key={i} className="font-body text-muted-foreground text-sm">{line}</div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-navy border-t border-white/10 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gold flex items-center justify-center">
                <span className="font-display text-navy font-bold text-xs">ФАРР</span>
              </div>
              <span className="font-body text-white/50 text-xs">
                © 2026 Федерация акробатического рок-н-ролла России
              </span>
            </div>
            <div className="flex flex-wrap justify-center gap-5">
              {NAV_ITEMS.slice(0, 6).map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className="font-body text-white/40 hover:text-gold text-xs uppercase tracking-wide transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}