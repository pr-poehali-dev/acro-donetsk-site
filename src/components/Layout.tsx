import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Icon from "@/components/ui/icon";

const NAV_ITEMS = [
  { path: "/about", label: "О федерации" },
  { path: "/calendar", label: "Календарь" },
  { path: "/achievements", label: "Достижения" },
  { path: "/participants", label: "Участники" },
  { path: "/clubs", label: "Клубы" },
  { path: "/coaches", label: "Тренеры" },
  { path: "/judges", label: "Судьи" },
  { path: "/news", label: "Новости" },
  { path: "/articles", label: "Статьи" },
  { path: "/documents", label: "Документы" },
  { path: "/register", label: "Регистрация" },
  { path: "/contacts", label: "Контакты" },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="min-h-screen bg-background font-body flex flex-col">
      {/* HEADER */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-navy shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gold flex items-center justify-center flex-shrink-0">
                <span className="font-display text-navy font-bold text-sm leading-none">ФАРР</span>
              </div>
              <div className="hidden sm:block">
                <div className="font-display text-white text-sm font-semibold leading-tight tracking-wide">
                  ФЕДЕРАЦИЯ
                </div>
                <div className="font-body text-gold text-xs leading-tight tracking-wider uppercase">
                  Акробатический рок-н-ролл
                </div>
              </div>
            </Link>

            <nav className="hidden xl:flex items-center gap-5">
              {NAV_ITEMS.slice(0, 8).map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`nav-link font-body text-xs tracking-wide uppercase transition-colors ${
                    location.pathname === item.path ? "text-gold" : "text-white/80 hover:text-gold"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <Link
                to="/register"
                className="hidden sm:flex items-center gap-2 bg-gold text-navy font-display font-semibold text-xs px-4 py-2 tracking-wider uppercase hover:bg-gold/90 transition-colors"
              >
                <Icon name="UserPlus" size={14} />
                Регистрация
              </Link>
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="xl:hidden text-white p-1"
              >
                <Icon name={menuOpen ? "X" : "Menu"} size={22} />
              </button>
            </div>
          </div>
        </div>

        {menuOpen && (
          <div className="xl:hidden bg-navy border-t border-white/10">
            <div className="max-w-7xl mx-auto px-4 py-3 grid grid-cols-2 gap-1">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMenuOpen(false)}
                  className={`text-left text-sm py-2 px-2 transition-colors font-body ${
                    location.pathname === item.path ? "text-gold" : "text-white/80 hover:text-gold"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* PAGE CONTENT */}
      <main className="flex-1 pt-16">
        {children}
      </main>

      {/* FOOTER */}
      <footer className="bg-navy border-t border-white/10 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gold flex items-center justify-center">
                <span className="font-display text-navy font-bold text-xs">ФАРР</span>
              </div>
              <span className="font-body text-white/50 text-xs">
                © 2026 Федерация акробатического рок-н-ролла России
              </span>
            </div>
            <div className="flex flex-wrap justify-center gap-5">
              {NAV_ITEMS.slice(0, 6).map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="font-body text-white/40 hover:text-gold text-xs uppercase tracking-wide transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
