import Layout from "@/components/Layout";
import Icon from "@/components/ui/icon";

const PARTICIPANTS = [
  { name: "Алексей и Мария Кузнецовы", category: "Мастера спорта России", club: "Динамика", rank: "1 место ЧР 2025", city: "Москва" },
  { name: "Дмитрий и Анна Соколовы", category: "Мастера спорта России", club: "Ритм", rank: "2 место ЧЕ 2025", city: "Екатеринбург" },
  { name: "Павел и Екатерина Яковлевы", category: "МСМК", club: "Северная звезда", rank: "Чемпионы России 2024", city: "Санкт-Петербург" },
  { name: "Иван и Наталья Громовы", category: "Мастера спорта", club: "Динамика", rank: "3 место ЧЕ 2025", city: "Москва" },
  { name: "Артём и Виктория Смирновы", category: "Мастера спорта России", club: "Академия", rank: "Кубок России 2025", city: "Казань" },
  { name: "Сергей и Ольга Петровы", category: "Кандидаты в МС", club: "Экспресс", rank: "1 место СЗФО 2025", city: "Нижний Новгород" },
  { name: "Никита и Анастасия Фроловы", category: "Мастера спорта", club: "Виктория", rank: "2 место КР 2025", city: "Краснодар" },
  { name: "Роман и Юлия Степановы", category: "Кандидаты в МС", club: "Ритм", rank: "3 место ПР 2025", city: "Екатеринбург" },
];

export default function Participants() {
  return (
    <Layout>
      <div className="bg-navy py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-3 mb-3">
            <div className="h-px w-8 bg-gold" />
            <span className="text-gold font-body text-xs tracking-widest uppercase">Сборная России</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl text-white font-bold tracking-wide">УЧАСТНИКИ</h1>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="overflow-x-auto mb-10">
            <table className="w-full">
              <thead>
                <tr className="bg-navy text-left">
                  <th className="font-display text-gold text-xs tracking-widest uppercase px-5 py-3.5 font-medium">Спортсмен / Пара</th>
                  <th className="font-display text-gold text-xs tracking-widest uppercase px-5 py-3.5 font-medium hidden sm:table-cell">Звание</th>
                  <th className="font-display text-gold text-xs tracking-widest uppercase px-5 py-3.5 font-medium hidden md:table-cell">Клуб</th>
                  <th className="font-display text-gold text-xs tracking-widest uppercase px-5 py-3.5 font-medium">Достижение</th>
                </tr>
              </thead>
              <tbody>
                {PARTICIPANTS.map((p, i) => (
                  <tr key={i} className={`border-b border-border hover:bg-secondary/40 transition-colors ${i % 2 === 0 ? "bg-white" : "bg-background/50"}`}>
                    <td className="px-5 py-4">
                      <div className="font-display text-navy text-sm font-semibold tracking-wide">{p.name}</div>
                      <div className="font-body text-muted-foreground text-xs mt-0.5 flex items-center gap-1">
                        <Icon name="MapPin" size={10} />
                        {p.city}
                      </div>
                    </td>
                    <td className="px-5 py-4 font-body text-muted-foreground text-sm hidden sm:table-cell">{p.category}</td>
                    <td className="px-5 py-4 font-body text-muted-foreground text-sm hidden md:table-cell">{p.club}</td>
                    <td className="px-5 py-4">
                      <span className="font-body text-gold text-sm font-medium">{p.rank}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: "Star", label: "МСМК", count: "3 спортсмена" },
              { icon: "Award", label: "МС России", count: "12 спортсменов" },
              { icon: "Medal", label: "КМС", count: "24 спортсмена" },
              { icon: "Users", label: "Всего в реестре", count: "250+ человек" },
            ].map((s) => (
              <div key={s.label} className="border border-border p-4 flex items-center gap-3">
                <div className="w-10 h-10 bg-navy flex items-center justify-center flex-shrink-0">
                  <Icon name={s.icon} size={16} className="text-gold" />
                </div>
                <div>
                  <div className="font-display text-navy text-sm font-semibold tracking-wide">{s.label}</div>
                  <div className="font-body text-muted-foreground text-xs">{s.count}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
