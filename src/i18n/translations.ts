export type Language = 'sv' | 'en';

export const translations = {
  sv: {
    // Navigation
    nav: {
      dashboard: 'Översikt',
      restaurants: 'Restauranger',
      billing: 'Användning & Fakturering',
      aiHealth: 'AI Hälsa',
      support: 'Support & Debug',
      plans: 'Planer & Priser',
      security: 'Konto & Säkerhet',
      settings: 'Systeminställningar',
    },
    // Top bar
    topBar: {
      search: 'Sök restauranger eller telefonnummer...',
      systemOnline: 'System Online',
      systemOffline: 'System Offline',
      profile: 'Profil',
      logout: 'Logga ut',
    },
    // Dashboard
    dashboard: {
      title: 'Översikt',
      totalRestaurants: 'Totalt Restauranger',
      activeCalls: 'Aktiva Samtal Idag',
      totalMinutes: 'Minuter Använda',
      revenue: 'Intäkter (SEK)',
      failedCalls: 'Misslyckade Samtal',
      callsPerDay: 'Samtal per Dag',
      minutesTrend: 'Minutanvändning',
      planDistribution: 'Planfördelning',
      recentActivity: 'Senaste Aktivitet',
      viewAll: 'Visa alla',
    },
    // Restaurants
    restaurants: {
      title: 'Restauranger',
      addNew: 'Lägg till Restaurang',
      name: 'Restaurangnamn',
      city: 'Stad',
      plan: 'Plan',
      minutesUsed: 'Minuter Använda',
      status: 'Status',
      language: 'Språk',
      lastActivity: 'Senaste Aktivitet',
      actions: 'Åtgärder',
      active: 'Aktiv',
      suspended: 'Avstängd',
      viewDashboard: 'Visa Dashboard',
      changePlan: 'Ändra Plan',
      suspend: 'Stäng av',
      activate: 'Aktivera',
      resetAI: 'Återställ AI',
      callHistory: 'Samtalshistorik',
      starter: 'Starter',
      pro: 'Pro',
      enterprise: 'Enterprise',
    },
    // Billing
    billing: {
      title: 'Användning & Fakturering',
      monthlyUsage: 'Månadsanvändning',
      overage: 'Överskriden Kvot',
      exportCSV: 'Exportera CSV',
      generateInvoice: 'Generera Faktura',
    },
    // AI Health
    aiHealth: {
      title: 'AI Hälsa & Röstövervakning',
      successRate: 'Framgångsfrekvens',
      responseTime: 'Svarstid',
      failedCalls: 'Misslyckade Samtal',
      languageAccuracy: 'Språkdetektering',
      replayTranscript: 'Spela upp Transkript',
      flagConversation: 'Flagga Konversation',
      restartAgent: 'Starta om Agent',
    },
    // Support
    support: {
      title: 'Support & Debugverktyg',
      searchPhone: 'Sök på telefonnummer',
      transcripts: 'Samtalsutskrifter',
      whatsappStatus: 'WhatsApp Status',
      bookingConflicts: 'Bokningskonflikter',
      manualOverride: 'Manuell Åsidosättning',
      internalNotes: 'Interna Anteckningar',
    },
    // Plans
    plans: {
      title: 'Planer & Priser',
      createPlan: 'Skapa Plan',
      editPlan: 'Redigera Plan',
      enterprisePricing: 'Enterprise Prissättning',
      freeTrial: 'Gratis Provperiod',
      discountRules: 'Rabattregler',
    },
    // Security
    security: {
      title: 'Konto & Säkerhet',
      adminUsers: 'Administratörer',
      roles: 'Roller & Behörigheter',
      loginActivity: 'Inloggningsaktivitet',
      twoFactor: 'Tvåfaktorsautentisering',
      sessions: 'Sessionshantering',
    },
    // Settings
    settings: {
      title: 'Systeminställningar',
      defaultLanguage: 'Standardspråk',
      callRouting: 'Samtalsdirigering',
      whatsappAPI: 'WhatsApp API Status',
      n8nHealth: 'n8n Hälsostatus',
      emergencyRouting: 'Nöddirigering',
    },
    // Common
    common: {
      loading: 'Laddar...',
      error: 'Ett fel uppstod',
      save: 'Spara',
      cancel: 'Avbryt',
      confirm: 'Bekräfta',
      delete: 'Radera',
      edit: 'Redigera',
      view: 'Visa',
      search: 'Sök',
      filter: 'Filtrera',
      export: 'Exportera',
      refresh: 'Uppdatera',
      today: 'Idag',
      yesterday: 'Igår',
      thisWeek: 'Denna Vecka',
      thisMonth: 'Denna Månad',
      minutes: 'minuter',
      hours: 'timmar',
      days: 'dagar',
    },
  },
  en: {
    // Navigation
    nav: {
      dashboard: 'Dashboard',
      restaurants: 'Restaurants',
      billing: 'Usage & Billing',
      aiHealth: 'AI Health',
      support: 'Support & Debug',
      plans: 'Plans & Pricing',
      security: 'Account & Security',
      settings: 'System Settings',
    },
    // Top bar
    topBar: {
      search: 'Search restaurants or phone numbers...',
      systemOnline: 'System Online',
      systemOffline: 'System Offline',
      profile: 'Profile',
      logout: 'Log out',
    },
    // Dashboard
    dashboard: {
      title: 'Dashboard',
      totalRestaurants: 'Total Restaurants',
      activeCalls: 'Active Calls Today',
      totalMinutes: 'Minutes Used',
      revenue: 'Revenue (SEK)',
      failedCalls: 'Failed Calls',
      callsPerDay: 'Calls per Day',
      minutesTrend: 'Minutes Usage',
      planDistribution: 'Plan Distribution',
      recentActivity: 'Recent Activity',
      viewAll: 'View all',
    },
    // Restaurants
    restaurants: {
      title: 'Restaurants',
      addNew: 'Add Restaurant',
      name: 'Restaurant Name',
      city: 'City',
      plan: 'Plan',
      minutesUsed: 'Minutes Used',
      status: 'Status',
      language: 'Language',
      lastActivity: 'Last Activity',
      actions: 'Actions',
      active: 'Active',
      suspended: 'Suspended',
      viewDashboard: 'View Dashboard',
      changePlan: 'Change Plan',
      suspend: 'Suspend',
      activate: 'Activate',
      resetAI: 'Reset AI',
      callHistory: 'Call History',
      starter: 'Starter',
      pro: 'Pro',
      enterprise: 'Enterprise',
    },
    // Billing
    billing: {
      title: 'Usage & Billing',
      monthlyUsage: 'Monthly Usage',
      overage: 'Overage',
      exportCSV: 'Export CSV',
      generateInvoice: 'Generate Invoice',
    },
    // AI Health
    aiHealth: {
      title: 'AI Health & Voice Monitoring',
      successRate: 'Success Rate',
      responseTime: 'Response Time',
      failedCalls: 'Failed Calls',
      languageAccuracy: 'Language Detection',
      replayTranscript: 'Replay Transcript',
      flagConversation: 'Flag Conversation',
      restartAgent: 'Restart Agent',
    },
    // Support
    support: {
      title: 'Support & Debug Tools',
      searchPhone: 'Search by phone number',
      transcripts: 'Call Transcripts',
      whatsappStatus: 'WhatsApp Status',
      bookingConflicts: 'Booking Conflicts',
      manualOverride: 'Manual Override',
      internalNotes: 'Internal Notes',
    },
    // Plans
    plans: {
      title: 'Plans & Pricing',
      createPlan: 'Create Plan',
      editPlan: 'Edit Plan',
      enterprisePricing: 'Enterprise Pricing',
      freeTrial: 'Free Trial',
      discountRules: 'Discount Rules',
    },
    // Security
    security: {
      title: 'Account & Security',
      adminUsers: 'Admin Users',
      roles: 'Roles & Permissions',
      loginActivity: 'Login Activity',
      twoFactor: 'Two-Factor Authentication',
      sessions: 'Session Management',
    },
    // Settings
    settings: {
      title: 'System Settings',
      defaultLanguage: 'Default Language',
      callRouting: 'Call Routing',
      whatsappAPI: 'WhatsApp API Status',
      n8nHealth: 'n8n Health Status',
      emergencyRouting: 'Emergency Routing',
    },
    // Common
    common: {
      loading: 'Loading...',
      error: 'An error occurred',
      save: 'Save',
      cancel: 'Cancel',
      confirm: 'Confirm',
      delete: 'Delete',
      edit: 'Edit',
      view: 'View',
      search: 'Search',
      filter: 'Filter',
      export: 'Export',
      refresh: 'Refresh',
      today: 'Today',
      yesterday: 'Yesterday',
      thisWeek: 'This Week',
      thisMonth: 'This Month',
      minutes: 'minutes',
      hours: 'hours',
      days: 'days',
    },
  },
} as const;

// Create a generic type that works for both languages
export type TranslationKeys = {
  nav: {
    dashboard: string;
    restaurants: string;
    billing: string;
    aiHealth: string;
    support: string;
    plans: string;
    security: string;
    settings: string;
  };
  topBar: {
    search: string;
    systemOnline: string;
    systemOffline: string;
    profile: string;
    logout: string;
  };
  dashboard: {
    title: string;
    totalRestaurants: string;
    activeCalls: string;
    totalMinutes: string;
    revenue: string;
    failedCalls: string;
    callsPerDay: string;
    minutesTrend: string;
    planDistribution: string;
    recentActivity: string;
    viewAll: string;
  };
  restaurants: {
    title: string;
    addNew: string;
    name: string;
    city: string;
    plan: string;
    minutesUsed: string;
    status: string;
    language: string;
    lastActivity: string;
    actions: string;
    active: string;
    suspended: string;
    viewDashboard: string;
    changePlan: string;
    suspend: string;
    activate: string;
    resetAI: string;
    callHistory: string;
    starter: string;
    pro: string;
    enterprise: string;
  };
  billing: {
    title: string;
    monthlyUsage: string;
    overage: string;
    exportCSV: string;
    generateInvoice: string;
  };
  aiHealth: {
    title: string;
    successRate: string;
    responseTime: string;
    failedCalls: string;
    languageAccuracy: string;
    replayTranscript: string;
    flagConversation: string;
    restartAgent: string;
  };
  support: {
    title: string;
    searchPhone: string;
    transcripts: string;
    whatsappStatus: string;
    bookingConflicts: string;
    manualOverride: string;
    internalNotes: string;
  };
  plans: {
    title: string;
    createPlan: string;
    editPlan: string;
    enterprisePricing: string;
    freeTrial: string;
    discountRules: string;
  };
  security: {
    title: string;
    adminUsers: string;
    roles: string;
    loginActivity: string;
    twoFactor: string;
    sessions: string;
  };
  settings: {
    title: string;
    defaultLanguage: string;
    callRouting: string;
    whatsappAPI: string;
    n8nHealth: string;
    emergencyRouting: string;
  };
  common: {
    loading: string;
    error: string;
    save: string;
    cancel: string;
    confirm: string;
    delete: string;
    edit: string;
    view: string;
    search: string;
    filter: string;
    export: string;
    refresh: string;
    today: string;
    yesterday: string;
    thisWeek: string;
    thisMonth: string;
    minutes: string;
    hours: string;
    days: string;
  };
};
