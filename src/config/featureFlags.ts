// Centralized feature flags with runtime overrides (localStorage + query param)
// Usage: import { featureFlags } from '@/config/featureFlags'
// - localStorage key: appFeatureFlags (JSON string)
// - URL param: ?ff=modals,off;globalRealtime,on;pageSize,200

export type FeatureFlags = {
  ENABLE_GLOBAL_REALTIME: boolean;
  ENABLE_RIVAL_UPDATES_REALTIME: boolean;
  ENABLE_LEADERBOARD_REALTIME: boolean;

  ENABLE_DAILY_CHALLENGE_POLLING: boolean;
  ENABLE_CHARTS_ON_DASHBOARD: boolean;

  ENABLE_PROBLEMS_VIRTUALIZATION: boolean;
  ENABLE_PREFETCHING: boolean;

  ENABLE_TITLE_UPDATES_ON_MOUNT: boolean; // keep off during dev
  ENABLE_BADGE_CHECKS_ON_NAV: boolean;
  ENABLE_AUTOSAVE_ANSWERS: boolean;

  ENABLE_ANIMATIONS: boolean;
  ENABLE_MODALS: boolean;

  ENABLE_DEBUG_LOGS: boolean;
  ENABLE_TOASTS: boolean;
  ENABLE_EDGE_SECRET_HEADER: boolean;

  ENABLE_QUESTION_TOOLS_DRAWING: boolean;
  ENABLE_QUESTION_TOOLS_EXCEL: boolean;
  ENABLE_QUESTION_TOOLS_NOTES: boolean;

  PROBLEMS_PAGE_PAGE_SIZE: number;
};

const defaultFlags: FeatureFlags = {
  ENABLE_GLOBAL_REALTIME: true,
  ENABLE_RIVAL_UPDATES_REALTIME: true,
  ENABLE_LEADERBOARD_REALTIME: true,

  ENABLE_DAILY_CHALLENGE_POLLING: true,
  ENABLE_CHARTS_ON_DASHBOARD: true,

  ENABLE_PROBLEMS_VIRTUALIZATION: true,
  ENABLE_PREFETCHING: true,

  ENABLE_TITLE_UPDATES_ON_MOUNT: false, // stay off during dev
  ENABLE_BADGE_CHECKS_ON_NAV: true,
  ENABLE_AUTOSAVE_ANSWERS: true,

  ENABLE_ANIMATIONS: true,
  ENABLE_MODALS: true,

  ENABLE_DEBUG_LOGS: true,
  ENABLE_TOASTS: true,
  ENABLE_EDGE_SECRET_HEADER: false,

  ENABLE_QUESTION_TOOLS_DRAWING: false,
  ENABLE_QUESTION_TOOLS_EXCEL: false,
  ENABLE_QUESTION_TOOLS_NOTES: false,

  PROBLEMS_PAGE_PAGE_SIZE: 100,
};

// Shorthand aliases supported in the ff= query param
const aliasMap: Record<string, keyof FeatureFlags> = {
  globalrealtime: 'ENABLE_GLOBAL_REALTIME',
  realtime: 'ENABLE_GLOBAL_REALTIME',
  leaderboardrealtime: 'ENABLE_LEADERBOARD_REALTIME',
  rivalrealtime: 'ENABLE_RIVAL_UPDATES_REALTIME',

  dailychallenge: 'ENABLE_DAILY_CHALLENGE_POLLING',
  charts: 'ENABLE_CHARTS_ON_DASHBOARD',

  problemsvirtualization: 'ENABLE_PROBLEMS_VIRTUALIZATION',
  virtualization: 'ENABLE_PROBLEMS_VIRTUALIZATION',
  prefetching: 'ENABLE_PREFETCHING',

  titlesonmount: 'ENABLE_TITLE_UPDATES_ON_MOUNT',
  badges: 'ENABLE_BADGE_CHECKS_ON_NAV',
  autosave: 'ENABLE_AUTOSAVE_ANSWERS',

  animations: 'ENABLE_ANIMATIONS',
  modals: 'ENABLE_MODALS',

  debug: 'ENABLE_DEBUG_LOGS',
  toasts: 'ENABLE_TOASTS',

  tools_drawing: 'ENABLE_QUESTION_TOOLS_DRAWING',
  tools_excel: 'ENABLE_QUESTION_TOOLS_EXCEL',
  tools_notes: 'ENABLE_QUESTION_TOOLS_NOTES',

  edgesecret: 'ENABLE_EDGE_SECRET_HEADER',
  edge_secret: 'ENABLE_EDGE_SECRET_HEADER',

  pagesize: 'PROBLEMS_PAGE_PAGE_SIZE',
  problems_page_page_size: 'PROBLEMS_PAGE_PAGE_SIZE',
};

function parseBool(val: string): boolean | undefined {
  const v = val.trim().toLowerCase();
  if (['on', 'true', '1', 'yes'].includes(v)) return true;
  if (['off', 'false', '0', 'no'].includes(v)) return false;
  return undefined;
}

function parseQueryOverrides(): Partial<FeatureFlags> {
  if (typeof window === 'undefined') return {};
  const params = new URLSearchParams(window.location.search);
  const ff = params.get('ff');
  if (!ff) return {};

  const overrides: Partial<FeatureFlags> = {};

  ff.split(';').forEach((pair) => {
    const part = pair.trim();
    if (!part) return;

    // Accept key,value OR key=value
    let key: string | undefined;
    let rawVal: string | undefined;

    if (part.includes(',')) {
      const [k, v] = part.split(',');
      key = k?.trim();
      rawVal = v?.trim();
    } else if (part.includes('=')) {
      const [k, v] = part.split('=');
      key = k?.trim();
      rawVal = v?.trim();
    }

    if (!key || rawVal === undefined) return;

    const normalized = key.toLowerCase();
    const mapped = aliasMap[normalized] ?? (key as keyof FeatureFlags);

    if (!mapped) return;

    if (mapped === 'PROBLEMS_PAGE_PAGE_SIZE') {
      const num = parseInt(rawVal, 10);
      if (!Number.isNaN(num) && num > 0) {
        (overrides as any)[mapped] = num;
      }
      return;
    }

    const boolVal = parseBool(rawVal);
    if (typeof boolVal === 'boolean') {
      (overrides as any)[mapped] = boolVal;
    }
  });

  return overrides;
}

function parseLocalStorageOverrides(): Partial<FeatureFlags> {
  if (typeof window === 'undefined') return {};
  try {
    const raw = window.localStorage.getItem('appFeatureFlags');
    if (!raw) return {};
    const parsed = JSON.parse(raw);
    if (typeof parsed !== 'object' || parsed === null) return {};

    const overrides: Partial<FeatureFlags> = {};
    for (const [k, v] of Object.entries(parsed)) {
      const key = k as keyof FeatureFlags;
      if (!(key in defaultFlags)) continue;
      if (key === 'PROBLEMS_PAGE_PAGE_SIZE') {
        const num = Number(v);
        if (!Number.isNaN(num) && num > 0) (overrides as any)[key] = num;
      } else if (typeof v === 'boolean') {
        (overrides as any)[key] = v;
      }
    }
    return overrides;
  } catch {
    return {};
  }
}

function mergeFlags(): FeatureFlags {
  const local = parseLocalStorageOverrides();
  const query = parseQueryOverrides();
  return {
    ...defaultFlags,
    ...local,
    ...query, // query has highest precedence
  };
}

export const featureFlags: FeatureFlags = mergeFlags();

// Optional helper for devs to quickly set a flag in localStorage
export function setLocalFeatureFlag<K extends keyof FeatureFlags>(key: K, value: FeatureFlags[K]) {
  if (typeof window === 'undefined') return;
  try {
    const current = parseLocalStorageOverrides();
    const next = { ...current, [key]: value } as Partial<FeatureFlags>;
    window.localStorage.setItem('appFeatureFlags', JSON.stringify(next));
    // Inform: reload to apply at boot
    // eslint-disable-next-line no-console
    console.info('[featureFlags] Updated appFeatureFlags in localStorage. Reload to apply.');
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error('[featureFlags] Failed to set local flag', e);
  }
}
