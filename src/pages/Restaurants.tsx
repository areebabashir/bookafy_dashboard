import { useState } from 'react';
import { useLanguage } from '@/i18n/LanguageContext';
import { DataTable } from '@/components/admin/DataTable';
import { StatusBadge } from '@/components/admin/StatusBadge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Search,
  Plus,
  MoreHorizontal,
  Eye,
  RefreshCw,
  Pause,
  Play,
  History,
  Settings,
  Filter,
} from 'lucide-react';

interface Restaurant {
  id: string;
  name: string;
  city: string;
  plan: 'starter' | 'pro' | 'enterprise';
  minutesUsed: number;
  minutesLimit: number;
  status: 'active' | 'suspended';
  language: 'sv' | 'en';
  lastActivity: string;
}

// Mock data
const mockRestaurants: Restaurant[] = [
  { id: '1', name: 'Restaurang Norden', city: 'Stockholm', plan: 'pro', minutesUsed: 450, minutesLimit: 600, status: 'active', language: 'sv', lastActivity: '2 min sedan' },
  { id: '2', name: 'Café Söder', city: 'Malmö', plan: 'starter', minutesUsed: 89, minutesLimit: 100, status: 'active', language: 'sv', lastActivity: '15 min sedan' },
  { id: '3', name: 'Bistro Väst', city: 'Göteborg', plan: 'enterprise', minutesUsed: 1200, minutesLimit: 2000, status: 'active', language: 'en', lastActivity: '1 timme sedan' },
  { id: '4', name: 'Thai Garden', city: 'Uppsala', plan: 'pro', minutesUsed: 320, minutesLimit: 600, status: 'suspended', language: 'sv', lastActivity: '3 dagar sedan' },
  { id: '5', name: 'Pizzeria Roma', city: 'Örebro', plan: 'starter', minutesUsed: 95, minutesLimit: 100, status: 'active', language: 'sv', lastActivity: '30 min sedan' },
  { id: '6', name: 'Sushi House', city: 'Stockholm', plan: 'enterprise', minutesUsed: 890, minutesLimit: 2000, status: 'active', language: 'en', lastActivity: '5 min sedan' },
  { id: '7', name: 'Le Petit Bistro', city: 'Lund', plan: 'pro', minutesUsed: 580, minutesLimit: 600, status: 'active', language: 'sv', lastActivity: '45 min sedan' },
  { id: '8', name: 'Mexikansk Kök', city: 'Helsingborg', plan: 'starter', minutesUsed: 45, minutesLimit: 100, status: 'active', language: 'sv', lastActivity: '2 timmar sedan' },
];

export default function Restaurants() {
  const { t, language } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [restaurants] = useState<Restaurant[]>(mockRestaurants);

  const filteredRestaurants = restaurants.filter((r) =>
    r.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    r.city.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getPlanLabel = (plan: Restaurant['plan']) => {
    return t.restaurants[plan];
  };

  const getStatusLabel = (status: Restaurant['status']) => {
    return status === 'active' ? t.restaurants.active : t.restaurants.suspended;
  };

  const getUsagePercentage = (used: number, limit: number) => {
    return Math.round((used / limit) * 100);
  };

  const columns = [
    {
      key: 'name',
      header: t.restaurants.name,
      render: (r: Restaurant) => (
        <div>
          <p className="font-medium text-foreground">{r.name}</p>
          <p className="text-xs text-muted-foreground">{r.city}</p>
        </div>
      ),
    },
    {
      key: 'plan',
      header: t.restaurants.plan,
      render: (r: Restaurant) => (
        <StatusBadge status={r.plan} label={getPlanLabel(r.plan)} />
      ),
    },
    {
      key: 'minutes',
      header: t.restaurants.minutesUsed,
      render: (r: Restaurant) => {
        const percentage = getUsagePercentage(r.minutesUsed, r.minutesLimit);
        const isHigh = percentage >= 80;
        return (
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium">{r.minutesUsed}</span>
              <span className="text-xs text-muted-foreground">/ {r.minutesLimit}</span>
            </div>
            <div className="h-1.5 w-24 rounded-full bg-muted">
              <div
                className={`h-full rounded-full transition-all ${isHigh ? 'bg-warning' : 'bg-primary'}`}
                style={{ width: `${Math.min(percentage, 100)}%` }}
              />
            </div>
          </div>
        );
      },
    },
    {
      key: 'status',
      header: t.restaurants.status,
      render: (r: Restaurant) => (
        <StatusBadge
          status={r.status === 'active' ? 'active' : 'suspended'}
          label={getStatusLabel(r.status)}
        />
      ),
    },
    {
      key: 'language',
      header: t.restaurants.language,
      render: (r: Restaurant) => (
        <span className="text-sm uppercase font-medium text-muted-foreground">
          {r.language}
        </span>
      ),
    },
    {
      key: 'lastActivity',
      header: t.restaurants.lastActivity,
      render: (r: Restaurant) => (
        <span className="text-sm text-muted-foreground">{r.lastActivity}</span>
      ),
    },
    {
      key: 'actions',
      header: t.restaurants.actions,
      className: 'text-right',
      render: (r: Restaurant) => (
        <div className="flex justify-end">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              <DropdownMenuItem className="gap-2">
                <Eye className="h-4 w-4" />
                {t.restaurants.viewDashboard}
              </DropdownMenuItem>
              <DropdownMenuItem className="gap-2">
                <Settings className="h-4 w-4" />
                {t.restaurants.changePlan}
              </DropdownMenuItem>
              <DropdownMenuItem className="gap-2">
                <History className="h-4 w-4" />
                {t.restaurants.callHistory}
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="gap-2">
                <RefreshCw className="h-4 w-4" />
                {t.restaurants.resetAI}
              </DropdownMenuItem>
              {r.status === 'active' ? (
                <DropdownMenuItem className="gap-2 text-destructive">
                  <Pause className="h-4 w-4" />
                  {t.restaurants.suspend}
                </DropdownMenuItem>
              ) : (
                <DropdownMenuItem className="gap-2 text-success">
                  <Play className="h-4 w-4" />
                  {t.restaurants.activate}
                </DropdownMenuItem>
              )}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      ),
    },
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-foreground">{t.restaurants.title}</h1>
          <p className="text-sm text-muted-foreground mt-1">
            {filteredRestaurants.length} {language === 'sv' ? 'restauranger' : 'restaurants'}
          </p>
        </div>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          {t.restaurants.addNew}
        </Button>
      </div>

      {/* Filters */}
      <div className="flex items-center gap-4">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            type="search"
            placeholder={t.common.search + '...'}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
        <Button variant="outline" size="sm" className="gap-2">
          <Filter className="h-4 w-4" />
          {t.common.filter}
        </Button>
      </div>

      {/* Table */}
      <DataTable
        columns={columns}
        data={filteredRestaurants}
        keyExtractor={(r) => r.id}
        emptyMessage={language === 'sv' ? 'Inga restauranger hittades' : 'No restaurants found'}
      />
    </div>
  );
}
