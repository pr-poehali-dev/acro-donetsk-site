import Layout from "@/components/Layout";
import Icon from "@/components/ui/icon";

const COACHES = [
  { name: "Александра Воронова", title: "Заслуженный тренер России", club: "Динамика", experience: "28 лет", city: "Москва", specialization: "Пары, взрослые", pupils: "8 МС, 2 МСМК" },
  { name: "Игорь Семёнов", title: "Тренер высшей категории", club: "Северная звезда", experience: "19 лет", city: "Санкт-Петербург", specialization: "Юниоры, пары", pupils: "12 КМС, 5 МС" },
  { name: "Наталья Кириллова", title: "Мастер спорта, тренер", club: "Академия рок-н-ролла", experience: "15 лет", city: "Казань", specialization: "Детско-юношеский спорт", pupils: "20 разрядников" },
  { name: "Дмитрий Орлов", title: "Заслуженный тренер России", club: "Ритм", experience: "24 года", city: "Екатеринбург", specialization: "Пары, одиночники", pupils: "6 МС, 1 МСМК" },
  { name: "Ольга Новикова", title: "Тренер первой категории", club: "Виктория", experience: "11 лет", city: "Краснодар", specialization: "Юниоры", pupils: "8 КМС, 2 МС" },
  { name: "Владимир Захаров", title: "Тренер высшей категории", club: "Экспресс", experience: "17 лет", city: "Нижний Новгород", specialization: "Пары, взрослые", pupils: "5 МС, 1 ЗМС" },
];

export default function Coaches() {
  return (
    <Layout>
      <div className="bg-navy py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-3 mb-3">
            <div className="h-px w-8 bg-gold" />
            <span className="text-gold font-body text-xs tracking-widest uppercase">Профессионалы</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl text-white font-bold tracking-wide">ТРЕНЕРЫ</h1>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid sm:grid-cols-2 gap-5">
            {COACHES.map((c, i) => (
              <div key={i} className="border border-border p-6 card-hover group hover:border-gold/40 transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-navy flex items-center justify-center flex-shrink-0">
                    <Icon name="User" size={24} className="text-gold" />
                  </div>
                  <div className="flex-1">
                    <div className="font-display text-navy text-base font-semibold tracking-wide">{c.name}</div>
                    <div className="font-body text-gold text-sm mt-0.5">{c.title}</div>
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-2">
                      <span className="font-body text-muted-foreground text-xs flex items-center gap-1">
                        <Icon name="Building2" size={11} />
                        {c.club}
                      </span>
                      <span className="font-body text-muted-foreground text-xs flex items-center gap-1">
                        <Icon name="MapPin" size={11} />
                        {c.city}
                      </span>
                      <span className="font-body text-muted-foreground text-xs flex items-center gap-1">
                        <Icon name="Clock" size={11} />
                        {c.experience}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-border grid grid-cols-2 gap-4">
                  <div>
                    <div className="font-body text-muted-foreground text-xs mb-0.5 uppercase tracking-wide">Специализация</div>
                    <div className="font-body text-navy text-sm">{c.specialization}</div>
                  </div>
                  <div>
                    <div className="font-body text-muted-foreground text-xs mb-0.5 uppercase tracking-wide">Воспитанники</div>
                    <div className="font-body text-gold text-sm font-medium">{c.pupils}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
