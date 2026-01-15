import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '@/i18n/LanguageContext';
import {
  LayoutDashboard,
  Store,
  CreditCard,
  Activity,
  HeadphonesIcon,
  Tag,
  Shield,
  Settings,
  Phone,
} from 'lucide-react';

const navItems = [
  { key: 'dashboard', path: '/', icon: LayoutDashboard },
  { key: 'restaurants', path: '/restaurants', icon: Store },
  { key: 'billing', path: '/billing', icon: CreditCard },
  { key: 'aiHealth', path: '/ai-health', icon: Activity },
  { key: 'support', path: '/support', icon: HeadphonesIcon },
  { key: 'plans', path: '/plans', icon: Tag },
  { key: 'security', path: '/security', icon: Shield },
  { key: 'settings', path: '/settings', icon: Settings },
] as const;

export function AdminSidebar() {
  const location = useLocation();
  const { t } = useLanguage();

  return (
    <aside className="fixed left-0 top-0 z-40 h-screen w-64 bg-sidebar border-r border-sidebar-border">
      {/* Logo */}
      <div className="flex h-16 items-center gap-3 border-b border-sidebar-border px-6">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-sidebar-primary">
          <Phone className="h-5 w-5 text-sidebar-primary-foreground" />
        </div>
        <div>
          <h1 className="text-lg font-semibold text-sidebar-foreground">Bokafy</h1>
          <p className="text-xs text-sidebar-muted-foreground">Super Admin</p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex flex-col gap-1 p-4">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          
          return (
            <Link
              key={item.key}
              to={item.path}
              className={`nav-item ${isActive ? 'active' : ''}`}
            >
              <Icon className="h-4 w-4" />
              <span>{t.nav[item.key as keyof typeof t.nav]}</span>
            </Link>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="absolute bottom-0 left-0 right-0 border-t border-sidebar-border p-4">
        <div className="flex items-center gap-3 rounded-md bg-sidebar-accent/50 px-3 py-2">
          <div className="h-2 w-2 rounded-full bg-success animate-pulse-subtle" />
          <span className="text-xs text-sidebar-muted-foreground">
            v1.0.0 • {t.topBar.systemOnline}
          </span>
        </div>
      </div>
    </aside>
  );
}
