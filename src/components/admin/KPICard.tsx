import { ReactNode } from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';

interface KPICardProps {
  label: string;
  value: string | number;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  icon: ReactNode;
  tooltip?: string;
  variant?: 'default' | 'warning' | 'success' | 'danger';
}

export function KPICard({ label, value, trend, icon, tooltip, variant = 'default' }: KPICardProps) {
  const variantStyles = {
    default: 'border-border',
    warning: 'border-warning/30 bg-warning/5',
    success: 'border-success/30 bg-success/5',
    danger: 'border-destructive/30 bg-destructive/5',
  };

  const iconBgStyles = {
    default: 'bg-primary/10 text-primary',
    warning: 'bg-warning/10 text-warning',
    success: 'bg-success/10 text-success',
    danger: 'bg-destructive/10 text-destructive',
  };

  const content = (
    <div className={`kpi-card ${variantStyles[variant]}`}>
      <div className="flex items-start justify-between">
        <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${iconBgStyles[variant]}`}>
          {icon}
        </div>
        {trend && (
          <div className={trend.isPositive ? 'kpi-trend-up' : 'kpi-trend-down'}>
            <span className="flex items-center gap-1">
              {trend.isPositive ? (
                <TrendingUp className="h-3 w-3" />
              ) : (
                <TrendingDown className="h-3 w-3" />
              )}
              {trend.value}%
            </span>
          </div>
        )}
      </div>
      <div className="mt-4">
        <p className="kpi-value">{value}</p>
        <p className="kpi-label mt-1">{label}</p>
      </div>
    </div>
  );

  if (tooltip) {
    return (
      <Tooltip>
        <TooltipTrigger asChild>
          {content}
        </TooltipTrigger>
        <TooltipContent>
          <p>{tooltip}</p>
        </TooltipContent>
      </Tooltip>
    );
  }

  return content;
}
