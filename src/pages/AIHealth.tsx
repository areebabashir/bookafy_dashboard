import { useLanguage } from '@/i18n/LanguageContext';

export default function AIHealth() {
  const { t } = useLanguage();

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-2xl font-semibold text-foreground">{t.aiHealth.title}</h1>
        <p className="text-sm text-muted-foreground mt-1">
          {t.aiHealth.successRate}: 98.5%
        </p>
      </div>

      <div className="admin-card p-12 text-center">
        <p className="text-muted-foreground">AI Health dashboard coming soon...</p>
      </div>
    </div>
  );
}
