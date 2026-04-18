import Layout from "@/components/Layout";
import Icon from "@/components/ui/icon";

export default function About() {
  return (
    <Layout>
      {/* PAGE HERO */}
      <div className="bg-navy py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-3 mb-3">
            <div className="h-px w-8 bg-gold" />
            <span className="text-gold font-body text-xs tracking-widest uppercase">О нас</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl text-white font-bold tracking-wide">О ФЕДЕРАЦИИ</h1>
        </div>
      </div>

      {/* MAIN */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="font-display text-2xl text-navy font-bold tracking-wide mb-5">ИСТОРИЯ И МИССИЯ</h2>
              <p className="font-body text-muted-foreground leading-relaxed mb-4">
                Федерация акробатического рок-н-ролла России (ФАРР) — общественная организация, объединяющая спортивные клубы, тренеров и спортсменов по всей стране. Мы развиваем акробатический рок-н-ролл как вид спорта с 1991 года.
              </p>
              <p className="font-body text-muted-foreground leading-relaxed mb-4">
                Наша миссия — повышение уровня российского спорта на мировой арене, создание условий для подготовки спортсменов высшего мастерства и популяризация акробатического рок-н-ролла в регионах России.
              </p>
              <p className="font-body text-muted-foreground leading-relaxed mb-8">
                Федерация является членом Всемирной федерации рок-н-ролла (WRRC) и аккредитована Министерством спорта Российской Федерации. Мы работаем в 35 регионах страны, объединяя более 18 спортивных клубов.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: "Award", text: "Член WRRC" },
                  { icon: "Shield", text: "Аккредитация Минспорта РФ" },
                  { icon: "Users", text: "35 регионов России" },
                  { icon: "Trophy", text: "С 1991 года" },
                  { icon: "Building2", text: "18 клубов" },
                  { icon: "Star", text: "250+ спортсменов" },
                ].map((item) => (
                  <div key={item.text} className="flex items-center gap-2.5 text-sm text-foreground font-body">
                    <Icon name={item.icon} size={16} className="text-gold flex-shrink-0" />
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="font-display text-2xl text-navy font-bold tracking-wide mb-5">НАПРАВЛЕНИЯ РАБОТЫ</h2>
              {[
                { icon: "Target", title: "Спорт высших достижений", text: "Подготовка спортсменов сборной России для участия в международных соревнованиях, чемпионатах Европы и мира." },
                { icon: "Star", title: "Массовый спорт", text: "Развитие акробатического рок-н-ролла по всей стране, открытие новых секций и привлечение молодёжи." },
                { icon: "BookOpen", title: "Методическая работа", text: "Разработка учебных программ, проведение семинаров и повышение квалификации тренерского состава." },
                { icon: "Globe", title: "Международные связи", text: "Сотрудничество с WRRC, участие в международных проектах и обмен опытом с зарубежными федерациями." },
              ].map((card) => (
                <div key={card.title} className="border border-border p-5 flex gap-4">
                  <div className="w-10 h-10 bg-navy flex items-center justify-center flex-shrink-0">
                    <Icon name={card.icon} size={18} className="text-gold" />
                  </div>
                  <div>
                    <div className="font-display text-sm text-navy font-semibold mb-1 tracking-wide">{card.title}</div>
                    <div className="font-body text-sm text-muted-foreground leading-relaxed">{card.text}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* LEADERSHIP */}
      <section className="py-16 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-3xl text-navy font-bold tracking-wide mb-8">РУКОВОДСТВО</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { name: "Андрей Васильев", role: "Президент федерации", since: "с 2018 года" },
              { name: "Татьяна Климова", role: "Вице-президент", since: "с 2020 года" },
              { name: "Михаил Рябов", role: "Исполнительный директор", since: "с 2019 года" },
              { name: "Светлана Носова", role: "Главный тренер сборной", since: "с 2021 года" },
              { name: "Алексей Громов", role: "Председатель судейской коллегии", since: "с 2017 года" },
              { name: "Юлия Ковалёва", role: "Секретарь федерации", since: "с 2022 года" },
            ].map((p, i) => (
              <div key={i} className="bg-white border border-border p-5 flex items-start gap-3">
                <div className="w-10 h-10 bg-navy flex items-center justify-center flex-shrink-0">
                  <Icon name="User" size={16} className="text-gold" />
                </div>
                <div>
                  <div className="font-display text-navy text-sm font-semibold tracking-wide">{p.name}</div>
                  <div className="font-body text-muted-foreground text-xs mt-0.5">{p.role}</div>
                  <div className="font-body text-gold text-xs mt-1">{p.since}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
