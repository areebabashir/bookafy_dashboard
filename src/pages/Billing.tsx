import { useLanguage } from '@/i18n/LanguageContext';
import { Button } from '@/components/ui/button';
import { Download, FileText } from 'lucide-react';

export default function Billing() {
  const { t } = useLanguage();

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-foreground">{t.billing.title}</h1>
          <p className="text-sm text-muted-foreground mt-1">
            {t.billing.monthlyUsage}
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="gap-2">
            <Download className="h-4 w-4" />
            {t.billing.exportCSV}
          </Button>
          <Button className="gap-2">
            <FileText className="h-4 w-4" />
            {t.billing.generateInvoice}
          </Button>
        </div>
      </div>

      <div className="admin-card p-12 text-center">
        <p className="text-muted-foreground">Billing dashboard coming soon...</p>
      </div>
    </div>
  );
}
