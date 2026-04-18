import Layout from "@/components/Layout";
import Icon from "@/components/ui/icon";

const DOCUMENTS = [
  { title: "Устав Федерации акробатического рок-н-ролла", type: "PDF", year: "2023", size: "1.2 МБ", category: "Учредительные" },
  { title: "Правила соревнований ФАРР — редакция 2025", type: "PDF", year: "2025", size: "3.8 МБ", category: "Правила" },
  { title: "Квалификационные требования и разряды", type: "PDF", year: "2024", size: "0.9 МБ", category: "Квалификация" },
  { title: "Положение о судейском корпусе", type: "PDF", year: "2024", size: "1.1 МБ", category: "Судейство" },
  { title: "Антидопинговые правила", type: "PDF", year: "2025", size: "2.4 МБ", category: "Правила" },
  { title: "Форма заявки на соревнования", type: "DOC", year: "2026", size: "0.2 МБ", category: "Формы" },
  { title: "Положение о рейтинге спортсменов", type: "PDF", year: "2025", size: "0.7 МБ", category: "Квалификация" },
  { title: "Регламент проведения Чемпионата России 2026", type: "PDF", year: "2026", size: "1.5 МБ", category: "Соревнования" },
];

const CATEGORIES = ["Все", "Учредительные", "Правила", "Квалификация", "Судейство", "Формы", "Соревнования"];

export default function Documents() {
  return (
    <Layout>
      <div className="bg-navy py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-3 mb-3">
            <div className="h-px w-8 bg-gold" />
            <span className="text-gold font-body text-xs tracking-widest uppercase">Официальные материалы</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl text-white font-bold tracking-wide">ДОКУМЕНТЫ</h1>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap gap-2 mb-8">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                className="font-body text-xs px-4 py-1.5 border border-border text-muted-foreground hover:border-navy hover:text-navy transition-colors first:bg-navy first:text-gold first:border-navy"
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 gap-3">
            {DOCUMENTS.map((d, i) => (
              <div key={i} className="border border-border p-4 flex items-center gap-4 card-hover group cursor-pointer hover:border-gold/40 transition-all">
                <div className="w-10 h-12 bg-navy group-hover:bg-gold transition-colors flex items-center justify-center flex-shrink-0">
                  <span className="font-display text-gold group-hover:text-navy text-xs font-bold transition-colors">{d.type}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-body text-navy text-sm font-medium leading-snug">{d.title}</div>
                  <div className="flex items-center gap-3 mt-1">
                    <span className="font-body text-xs text-muted-foreground">{d.year}</span>
                    <span className="font-body text-xs text-muted-foreground">{d.size}</span>
                    <span className="font-body text-xs text-gold">{d.category}</span>
                  </div>
                </div>
                <Icon name="Download" size={16} className="text-gold flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
