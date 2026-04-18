import Layout from "@/components/Layout";
import Icon from "@/components/ui/icon";

const NEWS = [
  {
    date: "12 апреля 2026",
    tag: "Соревнования",
    title: "Сборная России завоевала три медали на международном турнире",
    excerpt: "Российские спортсмены продемонстрировали высокий уровень подготовки на соревнованиях в Варшаве, завоевав 1 золото, 1 серебро и 1 бронзу. Особо отличились пары Яковлевы и Кузнецовы.",
  },
  {
    date: "5 апреля 2026",
    tag: "Федерация",
    title: "Утверждён календарь соревнований на 2026 год",
    excerpt: "Федерация утвердила расписание официальных соревнований на предстоящий сезон. Всего запланировано 8 крупных турниров, включая Чемпионат и Первенство России.",
  },
  {
    date: "28 марта 2026",
    tag: "Регистрация",
    title: "Открыта регистрация на Чемпионат России 2026",
    excerpt: "Приём заявок на участие в Чемпионате России по акробатическому рок-н-роллу открыт. Соревнования пройдут в июне в Санкт-Петербурге.",
  },
  {
    date: "15 марта 2026",
    tag: "Образование",
    title: "Семинар для тренеров: новые методики подготовки",
    excerpt: "В Москве прошёл двухдневный семинар для тренеров федерации. Участники познакомились с современными методиками подготовки спортивных пар.",
  },
  {
    date: "2 марта 2026",
    tag: "Соревнования",
    title: "Итоги Кубка Федерации — Зима 2026",
    excerpt: "Завершился зимний этап Кубка Федерации. В турнире приняли участие более 150 спортсменов из 12 регионов России.",
  },
  {
    date: "18 февраля 2026",
    tag: "Федерация",
    title: "ФАРР вошла в рабочую группу WRRC по развитию",
    excerpt: "Федерация акробатического рок-н-ролла России получила место в международной рабочей группе по развитию вида спорта в странах БРИКС.",
  },
];

export default function News() {
  return (
    <Layout>
      <div className="bg-navy py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-3 mb-3">
            <div className="h-px w-8 bg-gold" />
            <span className="text-gold font-body text-xs tracking-widest uppercase">Актуально</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl text-white font-bold tracking-wide">НОВОСТИ</h1>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {NEWS.map((n, i) => (
              <article key={i} className="border border-border p-6 card-hover cursor-pointer group hover:border-gold/40 transition-all">
                <div className="flex items-center gap-3 mb-3">
                  <span className="font-body text-xs text-gold tracking-wide uppercase font-medium">{n.date}</span>
                  <span className="font-body text-xs bg-secondary text-muted-foreground px-2 py-0.5 border border-border">{n.tag}</span>
                </div>
                <h2 className="font-display text-navy text-base font-semibold tracking-wide mb-3 leading-snug group-hover:text-navy/70 transition-colors">{n.title}</h2>
                <p className="font-body text-muted-foreground text-sm leading-relaxed mb-5">{n.excerpt}</p>
                <div className="flex items-center gap-1.5 text-navy text-xs font-body font-medium group-hover:gap-2.5 transition-all">
                  Читать далее
                  <Icon name="ArrowRight" size={12} />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
