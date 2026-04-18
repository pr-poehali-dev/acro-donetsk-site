import { useState } from "react";
import Layout from "@/components/Layout";
import Icon from "@/components/ui/icon";

const TOURNAMENTS = [
  "Чемпионат России 2026",
  "Кубок Федерации — Весна 2026",
  "Открытый турнир Москвы",
  "Первенство СЗФО 2026",
  "Межрегиональные соревнования",
  "Кубок России — Осень 2026",
];

export default function Register() {
  const [form, setForm] = useState({
    name: "", club: "", category: "", tournament: "", contacts: "", comment: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <Layout>
      <div className="bg-navy py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-3 mb-3">
            <div className="h-px w-8 bg-gold" />
            <span className="text-gold font-body text-xs tracking-widest uppercase">Участие</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl text-white font-bold tracking-wide">РЕГИСТРАЦИЯ НА СОРЕВНОВАНИЯ</h1>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="font-display text-2xl text-navy font-bold tracking-wide mb-5">КАК ПОДАТЬ ЗАЯВКУ</h2>
              <p className="font-body text-muted-foreground leading-relaxed mb-6">
                Заполните форму для подачи заявки на участие в соревнованиях. После получения заявки с вами свяжется организационный комитет для подтверждения участия.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  { icon: "FileText", num: "01", title: "Заполните форму", text: "Укажите данные спортсмена или пары, клуб, категорию и выберите соревнование." },
                  { icon: "Mail", num: "02", title: "Получите подтверждение", text: "В течение 3 рабочих дней с вами свяжется организационный комитет." },
                  { icon: "CreditCard", num: "03", title: "Оплатите взнос", text: "После подтверждения заявки произведите оплату стартового взноса." },
                  { icon: "CheckCircle", num: "04", title: "Участвуйте", text: "Вы включены в список участников. Удачи на соревнованиях!" },
                ].map((step) => (
                  <div key={step.num} className="flex items-start gap-4 p-4 border border-border">
                    <div className="w-10 h-10 bg-navy flex items-center justify-center flex-shrink-0">
                      <span className="font-display text-gold text-xs font-bold">{step.num}</span>
                    </div>
                    <div>
                      <div className="font-display text-navy text-sm font-semibold tracking-wide mb-0.5">{step.title}</div>
                      <div className="font-body text-muted-foreground text-sm">{step.text}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-secondary border border-border p-5">
                <div className="flex items-start gap-3">
                  <Icon name="Info" size={16} className="text-gold flex-shrink-0 mt-0.5" />
                  <div className="font-body text-muted-foreground text-sm leading-relaxed">
                    По вопросам регистрации обращайтесь: <span className="text-navy font-medium">info@farr.ru</span> или <span className="text-navy font-medium">+7 (495) 123-45-67</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-secondary p-6 sm:p-8 border border-border">
              {submitted ? (
                <div className="text-center py-10">
                  <div className="w-16 h-16 bg-navy flex items-center justify-center mx-auto mb-4">
                    <Icon name="CheckCircle" size={28} className="text-gold" />
                  </div>
                  <h3 className="font-display text-navy text-xl font-bold tracking-wide mb-2">ЗАЯВКА ОТПРАВЛЕНА</h3>
                  <p className="font-body text-muted-foreground text-sm mb-1">Мы свяжемся с вами в течение 3 рабочих дней</p>
                  <p className="font-body text-muted-foreground text-sm">{form.tournament && `Соревнование: ${form.tournament}`}</p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: "", club: "", category: "", tournament: "", contacts: "", comment: "" }); }}
                    className="mt-6 font-body text-xs text-navy/50 hover:text-navy underline"
                  >
                    Подать ещё одну заявку
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="font-display text-navy text-lg font-bold tracking-wide mb-5">ФОРМА ЗАЯВКИ</h3>
                  <div>
                    <label className="font-display text-navy text-xs tracking-widest uppercase block mb-1.5">
                      ФИО спортсмена / пары *
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={e => setForm({ ...form, name: e.target.value })}
                      placeholder="Иванов Иван Иванович"
                      className="w-full border border-border bg-white px-4 py-2.5 font-body text-sm text-navy placeholder:text-muted-foreground/60 focus:outline-none focus:border-navy transition-colors"
                    />
                  </div>
                  <div>
                    <label className="font-display text-navy text-xs tracking-widest uppercase block mb-1.5">
                      Клуб *
                    </label>
                    <input
                      type="text"
                      required
                      value={form.club}
                      onChange={e => setForm({ ...form, club: e.target.value })}
                      placeholder="Название клуба"
                      className="w-full border border-border bg-white px-4 py-2.5 font-body text-sm text-navy placeholder:text-muted-foreground/60 focus:outline-none focus:border-navy transition-colors"
                    />
                  </div>
                  <div>
                    <label className="font-display text-navy text-xs tracking-widest uppercase block mb-1.5">
                      Категория *
                    </label>
                    <select
                      required
                      value={form.category}
                      onChange={e => setForm({ ...form, category: e.target.value })}
                      className="w-full border border-border bg-white px-4 py-2.5 font-body text-sm text-navy focus:outline-none focus:border-navy transition-colors"
                    >
                      <option value="">Выберите категорию</option>
                      <option>Взрослые — Класс A</option>
                      <option>Взрослые — Класс B</option>
                      <option>Юниоры</option>
                      <option>Дети</option>
                      <option>Мастера</option>
                    </select>
                  </div>
                  <div>
                    <label className="font-display text-navy text-xs tracking-widest uppercase block mb-1.5">
                      Соревнование *
                    </label>
                    <select
                      required
                      value={form.tournament}
                      onChange={e => setForm({ ...form, tournament: e.target.value })}
                      className="w-full border border-border bg-white px-4 py-2.5 font-body text-sm text-navy focus:outline-none focus:border-navy transition-colors"
                    >
                      <option value="">Выберите соревнование</option>
                      {TOURNAMENTS.map((t) => (
                        <option key={t}>{t}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="font-display text-navy text-xs tracking-widest uppercase block mb-1.5">
                      Телефон или Email *
                    </label>
                    <input
                      type="text"
                      required
                      value={form.contacts}
                      onChange={e => setForm({ ...form, contacts: e.target.value })}
                      placeholder="+7 (___) ___-__-__"
                      className="w-full border border-border bg-white px-4 py-2.5 font-body text-sm text-navy placeholder:text-muted-foreground/60 focus:outline-none focus:border-navy transition-colors"
                    />
                  </div>
                  <div>
                    <label className="font-display text-navy text-xs tracking-widest uppercase block mb-1.5">
                      Комментарий
                    </label>
                    <textarea
                      value={form.comment}
                      onChange={e => setForm({ ...form, comment: e.target.value })}
                      placeholder="Дополнительная информация"
                      rows={3}
                      className="w-full border border-border bg-white px-4 py-2.5 font-body text-sm text-navy placeholder:text-muted-foreground/60 focus:outline-none focus:border-navy transition-colors resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-navy text-gold font-display text-sm tracking-widest uppercase py-3.5 hover:bg-navy/80 transition-colors"
                  >
                    Подать заявку
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
