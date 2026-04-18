import Layout from "@/components/Layout";
import Icon from "@/components/ui/icon";

const CLUBS = [
  { name: "Динамика", city: "Москва", region: "Москва и МО", founded: 1998, athletes: 120, coaches: 5, achievements: "Чемпионы России 2024, 2025" },
  { name: "Северная звезда", city: "Санкт-Петербург", region: "СЗФО", founded: 2001, athletes: 85, coaches: 4, achievements: "Призёры ЧЕ 2024" },
  { name: "Академия рок-н-ролла", city: "Казань", region: "Поволжье", founded: 2005, athletes: 67, coaches: 3, achievements: "Кубок России 2025" },
  { name: "Ритм", city: "Екатеринбург", region: "УФО", founded: 2003, athletes: 94, coaches: 4, achievements: "Первенство УФО 2025" },
  { name: "Экспресс", city: "Нижний Новгород", region: "Поволжье", founded: 2007, athletes: 52, coaches: 2, achievements: "Первенство ПФО 2025" },
  { name: "Виктория", city: "Краснодар", region: "ЮФО", founded: 2010, athletes: 43, coaches: 2, achievements: "Кубок ЮФО 2025" },
  { name: "Атлант", city: "Новосибирск", region: "СФО", founded: 2008, athletes: 38, coaches: 2, achievements: "Первенство СФО 2025" },
  { name: "Каскад", city: "Ростов-на-Дону", region: "ЮФО", founded: 2012, athletes: 31, coaches: 2, achievements: "Открытый турнир ЮГА 2025" },
];

export default function Clubs() {
  return (
    <Layout>
      <div className="bg-navy py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-3 mb-3">
            <div className="h-px w-8 bg-gold" />
            <span className="text-gold font-body text-xs tracking-widest uppercase">По всей России</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl text-white font-bold tracking-wide">КЛУБЫ</h1>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {CLUBS.map((club, i) => (
              <div key={i} className="border border-border p-6 card-hover group cursor-pointer hover:border-gold/40 transition-all">
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 bg-navy group-hover:bg-gold transition-colors flex items-center justify-center">
                    <Icon name="Building2" size={20} className="text-gold group-hover:text-navy transition-colors" />
                  </div>
                  <span className="font-body text-xs text-muted-foreground">с {club.founded} г.</span>
                </div>
                <div className="font-display text-navy text-lg font-semibold tracking-wide mb-1">{club.name}</div>
                <div className="flex items-center gap-1.5 text-muted-foreground text-sm mb-1 font-body">
                  <Icon name="MapPin" size={12} className="text-gold" />
                  {club.city}
                </div>
                <div className="font-body text-muted-foreground text-xs mb-4">{club.region}</div>

                <div className="grid grid-cols-2 gap-3 mb-4 pt-4 border-t border-border">
                  <div>
                    <div className="font-display text-navy text-xl font-bold">{club.athletes}</div>
                    <div className="font-body text-muted-foreground text-xs">спортсменов</div>
                  </div>
                  <div>
                    <div className="font-display text-navy text-xl font-bold">{club.coaches}</div>
                    <div className="font-body text-muted-foreground text-xs">тренера</div>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 text-xs font-body text-gold">
                  <Icon name="Trophy" size={11} />
                  <span>{club.achievements}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
