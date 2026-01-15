import { useLanguage } from '@/i18n/LanguageContext';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

export default function Support() {
  const { t } = useLanguage();

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-2xl font-semibold text-foreground">{t.support.title}</h1>
      </div>

      <div className="relative max-w-md">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          type="search"
          placeholder={t.support.searchPhone}
          className="pl-10"
        />
      </div>

      <div className="admin-card p-12 text-center">
        <p className="text-muted-foreground">Support dashboard coming soon...</p>
      </div>
    </div>
  );
}
