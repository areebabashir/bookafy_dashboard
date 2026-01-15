import { cn } from '@/lib/utils';

type Status = 'active' | 'suspended' | 'warning' | 'info' | 'starter' | 'pro' | 'enterprise';

interface StatusBadgeProps {
  status: Status;
  label: string;
}

const statusStyles: Record<Status, string> = {
  active: 'badge-active',
  suspended: 'badge-suspended',
  warning: 'badge-warning',
  info: 'badge-info',
  starter: 'bg-muted text-muted-foreground border border-border',
  pro: 'bg-primary/10 text-primary border border-primary/20',
  enterprise: 'bg-accent/10 text-accent border border-accent/20',
};

export function StatusBadge({ status, label }: StatusBadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium',
        statusStyles[status]
      )}
    >
      {label}
    </span>
  );
}
