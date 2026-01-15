import { useLanguage } from '@/i18n/LanguageContext';

export default function Security() {
  const { t } = useLanguage();

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-2xl font-semibold text-foreground">{t.security.title}</h1>
      </div>

      <div className="admin-card p-12 text-center">
        <p className="text-muted-foreground">Security dashboard coming soon...</p>
      </div>
    </div>
  );
}
