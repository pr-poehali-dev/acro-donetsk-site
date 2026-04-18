import Layout from "@/components/Layout";
import Icon from "@/components/ui/icon";

export default function Contacts() {
  return (
    <Layout>
      <div className="bg-navy py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-3 mb-3">
            <div className="h-px w-8 bg-gold" />
            <span className="text-gold font-body text-xs tracking-widest uppercase">Связаться с нами</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl text-white font-bold tracking-wide">КОНТАКТЫ</h1>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
            {[
              { icon: "MapPin", title: "Адрес", lines: ["125009, г. Москва,", "ул. Тверская, д. 1"] },
              { icon: "Phone", title: "Телефон", lines: ["+7 (495) 123-45-67", "+7 (495) 765-43-21"] },
              { icon: "Mail", title: "Email", lines: ["info@farr.ru", "president@farr.ru"] },
              { icon: "Clock", title: "Режим работы", lines: ["Пн–Пт: 10:00–18:00", "Сб–Вс: выходной"] },
            ].map((c) => (
              <div key={c.title} className="border border-border p-5">
                <div className="w-10 h-10 bg-navy flex items-center justify-center mb-4">
                  <Icon name={c.icon} size={16} className="text-gold" />
                </div>
                <div className="font-display text-navy text-xs font-semibold tracking-widest uppercase mb-2">{c.title}</div>
                {c.lines.map((line, i) => (
                  <div key={i} className="font-body text-muted-foreground text-sm">{line}</div>
                ))}
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              <h2 className="font-display text-2xl text-navy font-bold tracking-wide mb-6">КОНТАКТЫ ОТДЕЛОВ</h2>
              <div className="space-y-4">
                {[
                  { dept: "Президент федерации", name: "Андрей Васильев", email: "president@farr.ru", phone: "+7 (495) 123-45-67" },
                  { dept: "Организационный отдел", name: "Юлия Ковалёва", email: "org@farr.ru", phone: "+7 (495) 123-45-68" },
                  { dept: "Судейская коллегия", name: "Валентина Морозова", email: "judges@farr.ru", phone: "+7 (495) 123-45-69" },
                  { dept: "Пресс-служба", name: "Редакция ФАРР", email: "press@farr.ru", phone: "+7 (495) 123-45-70" },
                ].map((d, i) => (
                  <div key={i} className="border border-border p-4">
                    <div className="font-display text-navy text-xs font-semibold tracking-widest uppercase mb-2">{d.dept}</div>
                    <div className="font-body text-muted-foreground text-sm mb-1">{d.name}</div>
                    <div className="flex flex-wrap gap-4">
                      <a href={`mailto:${d.email}`} className="font-body text-xs text-navy hover:text-gold transition-colors flex items-center gap-1">
                        <Icon name="Mail" size={11} />
                        {d.email}
                      </a>
                      <a href={`tel:${d.phone}`} className="font-body text-xs text-navy hover:text-gold transition-colors flex items-center gap-1">
                        <Icon name="Phone" size={11} />
                        {d.phone}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="font-display text-2xl text-navy font-bold tracking-wide mb-6">НАПИСАТЬ НАМ</h2>
              <form className="space-y-4">
                <div>
                  <label className="font-display text-navy text-xs tracking-widest uppercase block mb-1.5">Имя *</label>
                  <input
                    type="text"
                    required
                    placeholder="Ваше имя"
                    className="w-full border border-border px-4 py-2.5 font-body text-sm text-navy placeholder:text-muted-foreground/60 focus:outline-none focus:border-navy transition-colors"
                  />
                </div>
                <div>
                  <label className="font-display text-navy text-xs tracking-widest uppercase block mb-1.5">Email *</label>
                  <input
                    type="email"
                    required
                    placeholder="email@example.com"
                    className="w-full border border-border px-4 py-2.5 font-body text-sm text-navy placeholder:text-muted-foreground/60 focus:outline-none focus:border-navy transition-colors"
                  />
                </div>
                <div>
                  <label className="font-display text-navy text-xs tracking-widest uppercase block mb-1.5">Сообщение *</label>
                  <textarea
                    required
                    placeholder="Ваш вопрос или сообщение"
                    rows={4}
                    className="w-full border border-border px-4 py-2.5 font-body text-sm text-navy placeholder:text-muted-foreground/60 focus:outline-none focus:border-navy transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-navy text-gold font-display text-sm tracking-widest uppercase py-3 hover:bg-navy/80 transition-colors"
                >
                  Отправить
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
