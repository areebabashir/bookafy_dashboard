import { useLanguage } from '@/i18n/LanguageContext';
import { KPICard } from '@/components/admin/KPICard';
import { MiniChart } from '@/components/admin/MiniChart';
import { StatusBadge } from '@/components/admin/StatusBadge';
import {
  Store,
  Phone,
  Clock,
  Banknote,
  AlertTriangle,
  ArrowRight,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from 'recharts';

// Mock data
const callsData = [
  { name: 'Mån', value: 145 },
  { name: 'Tis', value: 232 },
  { name: 'Ons', value: 189 },
  { name: 'Tor', value: 278 },
  { name: 'Fre', value: 390 },
  { name: 'Lör', value: 456 },
  { name: 'Sön', value: 312 },
];

const minutesData = [
  { name: 'V1', value: 2340 },
  { name: 'V2', value: 2890 },
  { name: 'V3', value: 3120 },
  { name: 'V4', value: 3560 },
];

const planDistribution = [
  { name: 'Starter', value: 45, color: 'hsl(var(--muted-foreground))' },
  { name: 'Pro', value: 38, color: 'hsl(var(--primary))' },
  { name: 'Enterprise', value: 17, color: 'hsl(var(--accent))' },
];

const recentActivity = [
  { id: '1', restaurant: 'Restaurang Norden', action: 'Nytt samtal avslutat', time: '2 min sedan', status: 'success' as const },
  { id: '2', restaurant: 'Café Söder', action: 'Bokning skapad via AI', time: '5 min sedan', status: 'success' as const },
  { id: '3', restaurant: 'Bistro Väst', action: 'Misslyckat samtal', time: '12 min sedan', status: 'warning' as const },
  { id: '4', restaurant: 'Thai Garden', action: 'Plan uppgraderad till Pro', time: '1 timme sedan', status: 'info' as const },
  { id: '5', restaurant: 'Pizzeria Roma', action: 'WhatsApp bekräftelse skickad', time: '2 timmar sedan', status: 'success' as const },
];

export default function Dashboard() {
  const { t, language } = useLanguage();

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-foreground">{t.dashboard.title}</h1>
          <p className="text-sm text-muted-foreground mt-1">
            {language === 'sv' ? 'Senast uppdaterad: just nu' : 'Last updated: just now'}
          </p>
        </div>
        <Button variant="outline" size="sm">
          {t.common.refresh}
        </Button>
      </div>

      {/* KPI Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
        <KPICard
          label={t.dashboard.totalRestaurants}
          value="248"
          trend={{ value: 12, isPositive: true }}
          icon={<Store className="h-5 w-5" />}
          tooltip={language === 'sv' ? 'Aktiva restauranger på plattformen' : 'Active restaurants on the platform'}
        />
        <KPICard
          label={t.dashboard.activeCalls}
          value="1,847"
          trend={{ value: 8, isPositive: true }}
          icon={<Phone className="h-5 w-5" />}
          variant="success"
        />
        <KPICard
          label={t.dashboard.totalMinutes}
          value="12,456"
          trend={{ value: 15, isPositive: true }}
          icon={<Clock className="h-5 w-5" />}
        />
        <KPICard
          label={t.dashboard.revenue}
          value="847,230 kr"
          trend={{ value: 23, isPositive: true }}
          icon={<Banknote className="h-5 w-5" />}
          variant="success"
        />
        <KPICard
          label={t.dashboard.failedCalls}
          value="23"
          trend={{ value: 5, isPositive: false }}
          icon={<AlertTriangle className="h-5 w-5" />}
          variant="danger"
          tooltip={language === 'sv' ? 'Samtal som inte kunde slutföras' : 'Calls that could not be completed'}
        />
      </div>

      {/* Charts Row */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Calls per Day Chart */}
        <div className="admin-card p-6 lg:col-span-2">
          <div className="flex items-center justify-between mb-4">
            <h3 className="admin-section-title mb-0">{t.dashboard.callsPerDay}</h3>
            <div className="flex gap-2">
              <Button variant="ghost" size="sm" className="text-xs">
                {t.common.thisWeek}
              </Button>
              <Button variant="outline" size="sm" className="text-xs">
                {t.common.thisMonth}
              </Button>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={280}>
            <AreaChart data={callsData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="callsGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis 
                dataKey="name" 
                stroke="hsl(var(--muted-foreground))" 
                fontSize={12}
                tickLine={false}
                axisLine={false}
              />
              <YAxis 
                stroke="hsl(var(--muted-foreground))" 
                fontSize={12}
                tickLine={false}
                axisLine={false}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: 'hsl(var(--card))',
                  border: '1px solid hsl(var(--border))',
                  borderRadius: '8px',
                  fontSize: '12px',
                }}
              />
              <Area
                type="monotone"
                dataKey="value"
                stroke="hsl(var(--primary))"
                strokeWidth={2}
                fill="url(#callsGradient)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Plan Distribution */}
        <div className="admin-card p-6">
          <h3 className="admin-section-title">{t.dashboard.planDistribution}</h3>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie
                data={planDistribution}
                cx="50%"
                cy="50%"
                innerRadius={50}
                outerRadius={80}
                paddingAngle={2}
                dataKey="value"
              >
                {planDistribution.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  backgroundColor: 'hsl(var(--card))',
                  border: '1px solid hsl(var(--border))',
                  borderRadius: '8px',
                  fontSize: '12px',
                }}
              />
            </PieChart>
          </ResponsiveContainer>
          <div className="mt-4 space-y-2">
            {planDistribution.map((plan) => (
              <div key={plan.name} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div 
                    className="h-3 w-3 rounded-full" 
                    style={{ backgroundColor: plan.color }}
                  />
                  <span className="text-sm text-foreground">{plan.name}</span>
                </div>
                <span className="text-sm font-medium text-foreground">{plan.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Minutes Trend & Recent Activity */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Minutes Trend */}
        <div className="admin-card p-6">
          <h3 className="admin-section-title">{t.dashboard.minutesTrend}</h3>
          <ResponsiveContainer width="100%" height={200}>
            <AreaChart data={minutesData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="minutesGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(var(--accent))" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="hsl(var(--accent))" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis 
                dataKey="name" 
                stroke="hsl(var(--muted-foreground))" 
                fontSize={12}
                tickLine={false}
                axisLine={false}
              />
              <YAxis 
                stroke="hsl(var(--muted-foreground))" 
                fontSize={12}
                tickLine={false}
                axisLine={false}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: 'hsl(var(--card))',
                  border: '1px solid hsl(var(--border))',
                  borderRadius: '8px',
                  fontSize: '12px',
                }}
              />
              <Area
                type="monotone"
                dataKey="value"
                stroke="hsl(var(--accent))"
                strokeWidth={2}
                fill="url(#minutesGradient)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Recent Activity */}
        <div className="admin-card p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="admin-section-title mb-0">{t.dashboard.recentActivity}</h3>
            <Button variant="ghost" size="sm" className="text-xs gap-1">
              {t.dashboard.viewAll}
              <ArrowRight className="h-3 w-3" />
            </Button>
          </div>
          <div className="space-y-3">
            {recentActivity.map((activity) => (
              <div 
                key={activity.id} 
                className="flex items-center justify-between py-2 border-b border-border last:border-0"
              >
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-foreground truncate">
                    {activity.restaurant}
                  </p>
                  <p className="text-xs text-muted-foreground">{activity.action}</p>
                </div>
                <div className="flex items-center gap-3 ml-4">
                  <span className="text-xs text-muted-foreground whitespace-nowrap">
                    {activity.time}
                  </span>
                  <StatusBadge 
                    status={activity.status === 'success' ? 'active' : activity.status === 'warning' ? 'warning' : 'info'} 
                    label={activity.status === 'success' ? '✓' : activity.status === 'warning' ? '!' : 'i'} 
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
