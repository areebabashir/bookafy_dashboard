import { useLanguage } from '@/i18n/LanguageContext';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';

export default function Plans() {
  const { t } = useLanguage();

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-foreground">{t.plans.title}</h1>
        </div>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          {t.plans.createPlan}
        </Button>
      </div>

      <div className="admin-card p-12 text-center">
        <p className="text-muted-foreground">Plans management coming soon...</p>
      </div>
    </div>
  );
}
