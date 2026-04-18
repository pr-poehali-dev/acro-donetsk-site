import Layout from "@/components/Layout";
import Icon from "@/components/ui/icon";

const ACHIEVEMENTS = [
  { year: "2025", title: "Чемпионат Европы", result: "3 золотых медали", location: "Берлин, Германия", athletes: "Кузнецовы, Соколовы, Яковлевы" },
  { year: "2024", title: "Чемпионат Мира", result: "2 серебряных медали", location: "Прага, Чехия", athletes: "Яковлевы, Громовы" },
  { year: "2024", title: "Кубок России", result: "Командная победа", location: "Москва, Россия", athletes: "Сборная России" },
  { year: "2023", title: "Чемпионат Европы", result: "5 медалей сборной", location: "Вена, Австрия", athletes: "Сборная России" },
  { year: "2023", title: "Первенство России", result: "12 призовых мест", location: "Казань, Россия", athletes: "Спортсмены ФАРР" },
  { year: "2022", title: "Чемпионат Мира", result: "4 медали", location: "Лозанна, Швейцария", athletes: "Сборная России" },
  { year: "2022", title: "Чемпионат Европы", result: "2 золота, 1 серебро", location: "Амстердам, Нидерланды", athletes: "Яковлевы, Смирновы, Громовы" },
  { year: "2021", title: "Кубок Федерации", result: "5 золотых медалей", location: "Москва, Россия", athletes: "Спортсмены ФАРР" },
];

export default function Achievements() {
  return (
    <Layout>
      <div className="bg-navy py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-3 mb-3">
            <div className="h-px w-8 bg-gold" />
            <span className="text-gold font-body text-xs tracking-widest uppercase">Гордость федерации</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl text-white font-bold tracking-wide">ДОСТИЖЕНИЯ</h1>
        </div>
      </div>

      {/* STATS */}
      <section className="bg-white py-10 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { num: "35+", label: "Медалей ЧЕ" },
              { num: "18", label: "Медалей ЧМ" },
              { num: "12", label: "Чемпионов России" },
              { num: "6", label: "Лет в топ-5 Европы" },
            ].map((stat) => (
              <div key={stat.label} className="text-center py-4 border border-border">
                <div className="font-display text-3xl text-navy font-bold">{stat.num}</div>
                <div className="font-body text-muted-foreground text-xs mt-1 uppercase tracking-wide">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ACHIEVEMENTS LIST */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {ACHIEVEMENTS.map((item, i) => (
              <div key={i} className="border border-border p-6 card-hover group hover:border-gold/40 transition-all">
                <div className="flex items-start justify-between mb-4">
                  <span className="font-display text-gold text-3xl font-bold">{item.year}</span>
                  <Icon name="Trophy" size={20} className="text-gold/40 group-hover:text-gold transition-colors" />
                </div>
                <div className="font-display text-navy font-semibold text-sm tracking-wide mb-2 uppercase">{item.title}</div>
                <div className="font-body text-gold text-sm font-medium mb-2">{item.result}</div>
                <div className="flex items-center gap-1.5 text-muted-foreground text-xs font-body mb-2">
                  <Icon name="MapPin" size={11} />
                  {item.location}
                </div>
                <div className="flex items-center gap-1.5 text-muted-foreground text-xs font-body pt-3 border-t border-border">
                  <Icon name="Users" size={11} />
                  {item.athletes}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
