import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import Icon from "@/components/ui/icon";

const CALENDAR_EVENTS = [
  { date: "15 мая", month: "МАЙ", title: "Кубок Федерации — Весна 2026", city: "Москва", type: "Всероссийские", description: "Традиционный весенний турнир Федерации. Принимают участие спортсмены всех возрастных групп." },
  { date: "6–8 июня", month: "ИЮНЬ", title: "Чемпионат России 2026", city: "Санкт-Петербург", type: "Чемпионат", description: "Главное соревнование сезона. Определяются чемпионы страны во всех классах и возрастных категориях." },
  { date: "20 июня", month: "ИЮНЬ", title: "Открытый турнир Москвы", city: "Москва", type: "Открытый турнир", description: "Открытые соревнования для спортсменов всех регионов. Отличная возможность для набора рейтинговых очков." },
  { date: "12–14 сент.", month: "СЕНТ", title: "Первенство СЗФО 2026", city: "Новгород", type: "Региональные", description: "Первенство Северо-Западного федерального округа. Соревнования проводятся по всем возрастным категориям." },
  { date: "18 окт.", month: "ОКТ", title: "Межрегиональные соревнования", city: "Казань", type: "Межрегиональные", description: "Соревнования, объединяющие спортсменов из нескольких регионов Поволжья." },
  { date: "22–23 нояб.", month: "НОЯ", title: "Кубок России — Осень 2026", city: "Екатеринбург", type: "Всероссийские", description: "Финальный этап Кубка России. По результатам соревнований формируется итоговый рейтинг сезона." },
];

export default function Calendar() {
  return (
    <Layout>
      <div className="bg-navy py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-3 mb-3">
            <div className="h-px w-8 bg-gold" />
            <span className="text-gold font-body text-xs tracking-widest uppercase">Сезон 2026</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl text-white font-bold tracking-wide">КАЛЕНДАРЬ</h1>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex justify-end mb-6">
            <Link
              to="/register"
              className="bg-navy text-gold font-display text-xs px-6 py-2.5 tracking-widest uppercase hover:bg-navy/80 transition-colors"
            >
              Зарегистрироваться на турнир
            </Link>
          </div>

          <div className="space-y-4">
            {CALENDAR_EVENTS.map((ev, i) => (
              <div key={i} className="border border-border bg-background hover:border-gold/50 transition-all p-5 sm:p-6 flex flex-col sm:flex-row gap-5 group">
                <div className="flex-shrink-0 w-20 text-center hidden sm:block">
                  <div className="font-display text-navy text-2xl font-bold leading-none">{ev.date.split("–")[0].split(" ")[0]}</div>
                  <div className="font-body text-gold text-xs mt-1 tracking-widest">{ev.month}</div>
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                    <div className="font-display text-navy text-base font-semibold tracking-wide">{ev.title}</div>
                    <span className="text-xs font-body bg-secondary text-muted-foreground px-3 py-1 border border-border flex-shrink-0">
                      {ev.type}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 mb-3">
                    <Icon name="MapPin" size={12} className="text-gold" />
                    <span className="font-body text-muted-foreground text-sm">{ev.city}</span>
                    <span className="sm:hidden font-body text-muted-foreground text-sm">· {ev.date}</span>
                  </div>
                  <p className="font-body text-muted-foreground text-sm leading-relaxed">{ev.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-display text-2xl text-white font-bold tracking-wide mb-3">ПОДАТЬ ЗАЯВКУ НА УЧАСТИЕ</h2>
          <p className="font-body text-white/60 mb-6 max-w-lg mx-auto text-sm">
            Заполните форму регистрации для участия в любом из соревнований сезона 2026 года.
          </p>
          <Link
            to="/register"
            className="inline-flex items-center gap-2 bg-gold text-navy font-display font-semibold px-8 py-3 text-sm tracking-widest uppercase hover:bg-gold/90 transition-all"
          >
            <Icon name="UserPlus" size={16} />
            Регистрация участников
          </Link>
        </div>
      </section>
    </Layout>
  );
}
