import Layout from "@/components/Layout";
import Icon from "@/components/ui/icon";

const JUDGES = [
  { name: "Валентина Морозова", category: "Судья международной категории", region: "Москва", since: "2008", panel: "Главная судейская коллегия" },
  { name: "Павел Жуков", category: "Судья всероссийской категории", region: "Санкт-Петербург", since: "2012", panel: "Судейская коллегия СЗФО" },
  { name: "Елена Тихонова", category: "Судья республиканской категории", region: "Казань", since: "2015", panel: "Судейская коллегия ПФО" },
  { name: "Сергей Белов", category: "Судья международной категории", region: "Москва", since: "2006", panel: "Главная судейская коллегия" },
  { name: "Ольга Мартынова", category: "Судья всероссийской категории", region: "Екатеринбург", since: "2013", panel: "Судейская коллегия УФО" },
  { name: "Николай Соловьёв", category: "Судья первой категории", region: "Краснодар", since: "2017", panel: "Судейская коллегия ЮФО" },
  { name: "Ирина Волкова", category: "Судья всероссийской категории", region: "Нижний Новгород", since: "2014", panel: "Судейская коллегия ПФО" },
  { name: "Андрей Козлов", category: "Судья первой категории", region: "Новосибирск", since: "2019", panel: "Судейская коллегия СФО" },
];

export default function Judges() {
  return (
    <Layout>
      <div className="bg-navy py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-3 mb-3">
            <div className="h-px w-8 bg-gold" />
            <span className="text-gold font-body text-xs tracking-widest uppercase">Аттестованные специалисты</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl text-white font-bold tracking-wide">СУДЕЙСКИЙ КОРПУС</h1>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="overflow-x-auto mb-10">
            <table className="w-full">
              <thead>
                <tr className="bg-navy text-left">
                  <th className="font-display text-gold text-xs tracking-widest uppercase px-5 py-3.5 font-medium">ФИО</th>
                  <th className="font-display text-gold text-xs tracking-widest uppercase px-5 py-3.5 font-medium">Категория</th>
                  <th className="font-display text-gold text-xs tracking-widest uppercase px-5 py-3.5 font-medium hidden md:table-cell">Коллегия</th>
                  <th className="font-display text-gold text-xs tracking-widest uppercase px-5 py-3.5 font-medium hidden sm:table-cell">Регион</th>
                  <th className="font-display text-gold text-xs tracking-widest uppercase px-5 py-3.5 font-medium hidden lg:table-cell">С года</th>
                </tr>
              </thead>
              <tbody>
                {JUDGES.map((j, i) => (
                  <tr key={i} className={`border-b border-border hover:bg-secondary/40 transition-colors ${i % 2 === 0 ? "bg-white" : "bg-background/50"}`}>
                    <td className="px-5 py-3.5 font-display text-navy text-sm font-medium tracking-wide">{j.name}</td>
                    <td className="px-5 py-3.5 font-body text-muted-foreground text-sm">{j.category}</td>
                    <td className="px-5 py-3.5 font-body text-muted-foreground text-sm hidden md:table-cell">{j.panel}</td>
                    <td className="px-5 py-3.5 font-body text-muted-foreground text-sm hidden sm:table-cell">{j.region}</td>
                    <td className="px-5 py-3.5 font-body text-muted-foreground text-sm hidden lg:table-cell">{j.since}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-secondary border border-border p-6">
            <div className="flex items-start gap-3">
              <Icon name="Info" size={18} className="text-gold flex-shrink-0 mt-0.5" />
              <div>
                <div className="font-display text-navy text-sm font-semibold tracking-wide mb-1">АТТЕСТАЦИЯ СУДЕЙ</div>
                <p className="font-body text-muted-foreground text-sm leading-relaxed">
                  Аттестация судей проводится ежегодно. Для получения судейской категории необходимо пройти обучение и сдать квалификационный экзамен. Для записи на обучение обратитесь в судейскую коллегию федерации.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
