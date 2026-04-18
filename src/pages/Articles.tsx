import Layout from "@/components/Layout";
import Icon from "@/components/ui/icon";

const ARTICLES = [
  { date: "Март 2026", title: "История акробатического рок-н-ролла в России", author: "Редакция ФАРР", readTime: "8 мин", category: "История" },
  { date: "Февраль 2026", title: "Методика подготовки акробатических пар высшего мастерства", author: "А. Воронова", readTime: "12 мин", category: "Методика" },
  { date: "Январь 2026", title: "Новые правила судейства: что изменилось в 2026 году", author: "В. Морозова", readTime: "6 мин", category: "Правила" },
  { date: "Декабрь 2025", title: "Итоги сезона 2025: достижения и перспективы", author: "Редакция ФАРР", readTime: "10 мин", category: "Аналитика" },
  { date: "Ноябрь 2025", title: "Физическая подготовка в акробатическом рок-н-ролле", author: "Д. Орлов", readTime: "9 мин", category: "Методика" },
  { date: "Октябрь 2025", title: "Выбор партнёра: профессиональный взгляд тренера", author: "И. Семёнов", readTime: "7 мин", category: "Тренерам" },
];

export default function Articles() {
  return (
    <Layout>
      <div className="bg-navy py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-3 mb-3">
            <div className="h-px w-8 bg-gold" />
            <span className="text-gold font-body text-xs tracking-widest uppercase">Материалы</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl text-white font-bold tracking-wide">СТАТЬИ</h1>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="space-y-4">
            {ARTICLES.map((a, i) => (
              <div key={i} className="border border-border p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center gap-4 card-hover group cursor-pointer hover:border-gold/40 transition-all">
                <div className="flex-shrink-0 sm:w-28">
                  <div className="font-body text-xs text-muted-foreground">{a.date}</div>
                  <div className="font-body text-xs text-gold mt-0.5">{a.category}</div>
                </div>
                <div className="flex-1">
                  <div className="font-display text-navy text-base font-semibold tracking-wide group-hover:text-navy/70 transition-colors">{a.title}</div>
                  <div className="flex items-center gap-3 mt-1.5">
                    <span className="font-body text-muted-foreground text-xs">{a.author}</span>
                    <span className="flex items-center gap-1 font-body text-muted-foreground text-xs">
                      <Icon name="Clock" size={10} />
                      {a.readTime}
                    </span>
                  </div>
                </div>
                <Icon name="ChevronRight" size={16} className="text-gold flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
