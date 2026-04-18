import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import Icon from "@/components/ui/icon";

const ACHIEVEMENTS = [
  { year: "2025", title: "Чемпионат Европы", result: "3 золотых медали", location: "Берлин, Германия" },
  { year: "2024", title: "Чемпионат Мира", result: "2 серебряных медали", location: "Прага, Чехия" },
  { year: "2024", title: "Кубок России", result: "Командная победа", location: "Москва, Россия" },
];

const CALENDAR_EVENTS = [
  { date: "15 мая", month: "МАЙ", title: "Кубок Федерации — Весна 2026", city: "Москва", type: "Всероссийские" },
  { date: "6–8 июня", month: "ИЮНЬ", title: "Чемпионат России 2026", city: "Санкт-Петербург", type: "Чемпионат" },
  { date: "20 июня", month: "ИЮНЬ", title: "Открытый турнир Москвы", city: "Москва", type: "Открытый турнир" },
];

const NEWS = [
  {
    date: "12 апреля 2026",
    title: "Сборная России завоевала три медали на международном турнире",
    excerpt: "Российские спортсмены продемонстрировали высокий уровень подготовки на соревнованиях в Варшаве.",
  },
  {
    date: "5 апреля 2026",
    title: "Утверждён календарь соревнований на 2026 год",
    excerpt: "Федерация утвердила расписание официальных соревнований. Всего запланировано 8 крупных турниров.",
  },
  {
    date: "28 марта 2026",
    title: "Открыта регистрация на Чемпионат России 2026",
    excerpt: "Приём заявок на участие в Чемпионате России открыт. Соревнования пройдут в июне в Санкт-Петербурге.",
  },
];

const SECTIONS = [
  { path: "/about", icon: "Info", label: "О федерации" },
  { path: "/calendar", icon: "CalendarDays", label: "Календарь" },
  { path: "/achievements", icon: "Trophy", label: "Достижения" },
  { path: "/participants", icon: "Users", label: "Участники" },
  { path: "/clubs", icon: "Building2", label: "Клубы" },
  { path: "/coaches", icon: "User", label: "Тренеры" },
  { path: "/judges", icon: "Scale", label: "Судьи" },
  { path: "/news", icon: "Newspaper", label: "Новости" },
  { path: "/articles", icon: "BookOpen", label: "Статьи" },
  { path: "/documents", icon: "FileText", label: "Документы" },
  { path: "/register", icon: "UserPlus", label: "Регистрация" },
  { path: "/contacts", icon: "Phone", label: "Контакты" },
];

export default function Index() {
  return (
    <Layout>
      {/* HERO */}
      <section className="relative min-h-[90vh] flex items-end">
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
              <Link
                to="/register"
                className="bg-gold text-navy font-display font-semibold px-8 py-3 text-sm tracking-widest uppercase hover:bg-gold/90 transition-all hover:scale-105"
              >
                Зарегистрироваться
              </Link>
              <Link
                to="/calendar"
                className="border border-white/40 text-white font-display px-8 py-3 text-sm tracking-widest uppercase hover:border-gold hover:text-gold transition-all"
              >
                Календарь
              </Link>
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

      {/* QUICK NAV */}
      <section className="py-12 bg-secondary border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-3">
            {SECTIONS.map((s) => (
              <Link
                key={s.path}
                to={s.path}
                className="flex flex-col items-center gap-2 p-4 border border-border bg-white hover:border-gold/50 hover:bg-white card-hover transition-all group text-center"
              >
                <div className="w-9 h-9 bg-navy group-hover:bg-gold transition-colors flex items-center justify-center">
                  <Icon name={s.icon} size={16} className="text-gold group-hover:text-navy transition-colors" />
                </div>
                <span className="font-display text-navy text-xs font-semibold tracking-wide uppercase leading-tight">{s.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ACHIEVEMENTS */}
      <section className="py-16 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-end justify-between mb-8">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="h-px w-8 bg-gold" />
                <span className="text-gold font-body text-xs tracking-widest uppercase">Гордость федерации</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl text-white font-bold tracking-wide">ДОСТИЖЕНИЯ</h2>
            </div>
            <Link to="/achievements" className="font-body text-gold/70 hover:text-gold text-xs flex items-center gap-1 transition-colors">
              Все <Icon name="ArrowRight" size={12} />
            </Link>
          </div>
          <div className="grid sm:grid-cols-3 gap-4">
            {ACHIEVEMENTS.map((item, i) => (
              <div key={i} className="border border-white/10 bg-white/5 p-6 card-hover group">
                <div className="flex items-start justify-between mb-4">
                  <span className="font-display text-gold text-3xl font-bold">{item.year}</span>
                  <Icon name="Trophy" size={20} className="text-gold/40 group-hover:text-gold transition-colors" />
                </div>
                <div className="font-display text-white font-semibold text-sm tracking-wide mb-2 uppercase">{item.title}</div>
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
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-end justify-between mb-8">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="h-px w-8 bg-gold" />
                <span className="text-gold font-body text-xs tracking-widest uppercase">Сезон 2026</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl text-navy font-bold tracking-wide">БЛИЖАЙШИЕ СОРЕВНОВАНИЯ</h2>
            </div>
            <Link to="/calendar" className="font-body text-navy/50 hover:text-gold text-xs flex items-center gap-1 transition-colors">
              Все <Icon name="ArrowRight" size={12} />
            </Link>
          </div>
          <div className="space-y-3 mb-6">
            {CALENDAR_EVENTS.map((ev, i) => (
              <div key={i} className="border border-border bg-background hover:border-gold/50 transition-all p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center gap-4 group card-hover">
                <div className="flex-shrink-0 w-16 text-center border-r border-border pr-4 hidden sm:block">
                  <div className="font-display text-navy text-xl font-bold leading-none">{ev.date.split(" ")[0]}</div>
                  <div className="font-body text-gold text-xs mt-1 tracking-widest">{ev.month}</div>
                </div>
                <div className="flex-1">
                  <div className="font-display text-navy text-base font-semibold tracking-wide">{ev.title}</div>
                  <div className="flex items-center gap-1.5 mt-1.5 text-muted-foreground text-xs font-body">
                    <Icon name="MapPin" size={11} />
                    {ev.city}
                  </div>
                </div>
                <span className="text-xs font-body bg-secondary text-muted-foreground px-3 py-1 self-start sm:self-auto border border-border">
                  {ev.type}
                </span>
              </div>
            ))}
          </div>
          <Link
            to="/register"
            className="inline-flex items-center gap-2 bg-navy text-gold font-display text-xs px-6 py-2.5 tracking-widest uppercase hover:bg-navy/80 transition-colors"
          >
            <Icon name="UserPlus" size={14} />
            Зарегистрироваться на турнир
          </Link>
        </div>
      </section>

      {/* NEWS */}
      <section className="py-16 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-end justify-between mb-8">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="h-px w-8 bg-gold" />
                <span className="text-gold font-body text-xs tracking-widest uppercase">Актуально</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl text-navy font-bold tracking-wide">НОВОСТИ</h2>
            </div>
            <Link to="/news" className="font-body text-navy/50 hover:text-gold text-xs flex items-center gap-1 transition-colors">
              Все <Icon name="ArrowRight" size={12} />
            </Link>
          </div>
          <div className="grid sm:grid-cols-3 gap-5">
            {NEWS.map((n, i) => (
              <article key={i} className="bg-white border border-border p-6 card-hover cursor-pointer group hover:border-gold/40 transition-all">
                <div className="font-body text-xs text-gold tracking-wide uppercase mb-3 font-medium">{n.date}</div>
                <h3 className="font-display text-navy text-base font-semibold tracking-wide mb-3 leading-snug group-hover:text-navy/70 transition-colors">{n.title}</h3>
                <p className="font-body text-muted-foreground text-sm leading-relaxed mb-4">{n.excerpt}</p>
                <Link to="/news" className="flex items-center gap-1.5 text-navy text-xs font-body font-medium group-hover:gap-2.5 transition-all">
                  Читать далее <Icon name="ArrowRight" size={12} />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
