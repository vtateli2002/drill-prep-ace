import { LeaderboardUser } from '@/types/leaderboard';

const RAW_LEADERBOARD_DATA = [
  {
    "username": "sablelock",
    "xp": 5000,
    "level": 50,
    "daily_movement": "⬆1"
  },
  {
    "username": "mossbyte",
    "xp": 4910,
    "level": 49,
    "daily_movement": "⬇1"
  },
  {
    "username": "driftpeak",
    "xp": 4900,
    "level": 49,
    "daily_movement": "⬆2"
  },
  {
    "username": "quartzrun",
    "xp": 4900,
    "level": 49,
    "daily_movement": "⬇1"
  },
  {
    "username": "ironshade",
    "xp": 4880,
    "level": 48,
    "daily_movement": "⬆1"
  },
  {
    "username": "lowtide",
    "xp": 4820,
    "level": 48,
    "daily_movement": "–"
  },
  {
    "username": "steelloop",
    "xp": 4800,
    "level": 48,
    "daily_movement": "⬇2"
  },
  {
    "username": "embertrace",
    "xp": 4730,
    "level": 47,
    "daily_movement": "⬇2"
  },
  {
    "username": "bronzefire",
    "xp": 4670,
    "level": 46,
    "daily_movement": "⬆1"
  },
  {
    "username": "fogbranch",
    "xp": 4510,
    "level": 45,
    "daily_movement": "–"
  },
  {
    "username": "slatechip",
    "xp": 4500,
    "level": 45,
    "daily_movement": "–"
  },
  {
    "username": "pinecoil",
    "xp": 4420,
    "level": 44,
    "daily_movement": "–"
  },
  {
    "username": "cobaltwing",
    "xp": 4390,
    "level": 43,
    "daily_movement": "⬆1"
  },
  {
    "username": "dusttrail",
    "xp": 4300,
    "level": 43,
    "daily_movement": "⬆2"
  },
  {
    "username": "nightstem",
    "xp": 4300,
    "level": 43,
    "daily_movement": "⬇1"
  },
  {
    "username": "stormglen",
    "xp": 4280,
    "level": 42,
    "daily_movement": "–"
  },
  {
    "username": "ashvalley",
    "xp": 4140,
    "level": 41,
    "daily_movement": "⬇1"
  },
  {
    "username": "bloomline",
    "xp": 4130,
    "level": 41,
    "daily_movement": "⬆1"
  },
  {
    "username": "fernflint",
    "xp": 4060,
    "level": 40,
    "daily_movement": "⬇1"
  },
  {
    "username": "cloudgleam",
    "xp": 4010,
    "level": 40,
    "daily_movement": "⬇1"
  },
  {
    "username": "goldrift",
    "xp": 4010,
    "level": 40,
    "daily_movement": "–"
  },
  {
    "username": "shadevine",
    "xp": 3960,
    "level": 39,
    "daily_movement": "–"
  },
  {
    "username": "windhatch",
    "xp": 3930,
    "level": 39,
    "daily_movement": "⬆2"
  },
  {
    "username": "peaknotch",
    "xp": 3870,
    "level": 38,
    "daily_movement": "⬆1"
  },
  {
    "username": "craterflux",
    "xp": 3760,
    "level": 37,
    "daily_movement": "⬇2"
  },
  {
    "username": "shalegrid",
    "xp": 3710,
    "level": 37,
    "daily_movement": "–"
  },
  {
    "username": "mudstone",
    "xp": 3710,
    "level": 37,
    "daily_movement": "⬇1"
  },
  {
    "username": "latchspur",
    "xp": 3670,
    "level": 36,
    "daily_movement": "⬆2"
  },
  {
    "username": "gritfog",
    "xp": 3670,
    "level": 36,
    "daily_movement": "⬆1"
  },
  {
    "username": "loamreach",
    "xp": 3660,
    "level": 36,
    "daily_movement": "⬆1"
  },
  {
    "username": "gleambeam",
    "xp": 3650,
    "level": 36,
    "daily_movement": "⬆2"
  },
  {
    "username": "frostpike",
    "xp": 3570,
    "level": 35,
    "daily_movement": "⬆1"
  },
  {
    "username": "tidevale",
    "xp": 3550,
    "level": 35,
    "daily_movement": "–"
  },
  {
    "username": "thunderfletch",
    "xp": 3490,
    "level": 34,
    "daily_movement": "–"
  },
  {
    "username": "voidbloom",
    "xp": 3370,
    "level": 33,
    "daily_movement": "⬇1"
  },
  {
    "username": "sandthrum",
    "xp": 3150,
    "level": 31,
    "daily_movement": "⬇2"
  },
  {
    "username": "trekpath",
    "xp": 3090,
    "level": 30,
    "daily_movement": "⬆2"
  },
  {
    "username": "dunecrest",
    "xp": 2960,
    "level": 29,
    "daily_movement": "⬇1"
  },
  {
    "username": "crisphex",
    "xp": 2920,
    "level": 29,
    "daily_movement": "⬇1"
  },
  {
    "username": "gloomtrail",
    "xp": 2910,
    "level": 29,
    "daily_movement": "⬇2"
  },
  {
    "username": "rootbind",
    "xp": 2900,
    "level": 29,
    "daily_movement": "⬇2"
  },
  {
    "username": "flamefall",
    "xp": 2740,
    "level": 27,
    "daily_movement": "–"
  },
  {
    "username": "waveknoll",
    "xp": 2710,
    "level": 27,
    "daily_movement": "⬆1"
  },
  {
    "username": "riftline",
    "xp": 2680,
    "level": 26,
    "daily_movement": "⬇1"
  },
  {
    "username": "barkhollow",
    "xp": 2670,
    "level": 26,
    "daily_movement": "⬆1"
  },
  {
    "username": "bluffshade",
    "xp": 2670,
    "level": 26,
    "daily_movement": "⬆2"
  },
  {
    "username": "baskcore",
    "xp": 2610,
    "level": 26,
    "daily_movement": "⬆1"
  },
  {
    "username": "warpbranch",
    "xp": 2610,
    "level": 26,
    "daily_movement": "⬇2"
  },
  {
    "username": "chillforge",
    "xp": 2590,
    "level": 25,
    "daily_movement": "⬇1"
  },
  {
    "username": "craglock",
    "xp": 2550,
    "level": 25,
    "daily_movement": "⬇1"
  },
  {
    "username": "knellridge",
    "xp": 2540,
    "level": 25,
    "daily_movement": "–"
  },
  {
    "username": "tundraspire",
    "xp": 2510,
    "level": 25,
    "daily_movement": "⬆1"
  },
  {
    "username": "mirefold",
    "xp": 2500,
    "level": 25,
    "daily_movement": "–"
  },
  {
    "username": "hushbend",
    "xp": 2490,
    "level": 24,
    "daily_movement": "–"
  },
  {
    "username": "ridgehowl",
    "xp": 2430,
    "level": 24,
    "daily_movement": "⬆2"
  },
  {
    "username": "flickerglen",
    "xp": 2410,
    "level": 24,
    "daily_movement": "⬆2"
  },
  {
    "username": "quiverleaf",
    "xp": 2320,
    "level": 23,
    "daily_movement": "⬆2"
  },
  {
    "username": "bouldertrail",
    "xp": 2280,
    "level": 22,
    "daily_movement": "⬇2"
  },
  {
    "username": "sleetvine",
    "xp": 2240,
    "level": 22,
    "daily_movement": "⬇2"
  },
  {
    "username": "scorchfog",
    "xp": 2170,
    "level": 21,
    "daily_movement": "⬇1"
  },
  {
    "username": "forgewell",
    "xp": 2130,
    "level": 21,
    "daily_movement": "⬇1"
  },
  {
    "username": "nestshade",
    "xp": 2040,
    "level": 20,
    "daily_movement": "⬇1"
  },
  {
    "username": "veilcreek",
    "xp": 2030,
    "level": 20,
    "daily_movement": "⬇1"
  },
  {
    "username": "shardmist",
    "xp": 2000,
    "level": 20,
    "daily_movement": "⬆2"
  },
  {
    "username": "siltenvow",
    "xp": 1970,
    "level": 19,
    "daily_movement": "⬇1"
  },
  {
    "username": "blinkgrit",
    "xp": 1960,
    "level": 19,
    "daily_movement": "⬇1"
  },
  {
    "username": "traceglen",
    "xp": 1930,
    "level": 19,
    "daily_movement": "⬆1"
  },
  {
    "username": "hoarfleck",
    "xp": 1920,
    "level": 19,
    "daily_movement": "⬇2"
  },
  {
    "username": "splintervale",
    "xp": 1910,
    "level": 19,
    "daily_movement": "⬆2"
  },
  {
    "username": "duskspire",
    "xp": 1770,
    "level": 17,
    "daily_movement": "⬆1"
  },
  {
    "username": "bristlebeam",
    "xp": 1740,
    "level": 17,
    "daily_movement": "⬆2"
  },
  {
    "username": "tarnflow",
    "xp": 1660,
    "level": 16,
    "daily_movement": "⬇2"
  },
  {
    "username": "smeltpine",
    "xp": 1650,
    "level": 16,
    "daily_movement": "⬆1"
  },
  {
    "username": "dimmire",
    "xp": 1590,
    "level": 15,
    "daily_movement": "–"
  },
  {
    "username": "shardhatch",
    "xp": 1580,
    "level": 15,
    "daily_movement": "⬆2"
  },
  {
    "username": "peakloam",
    "xp": 1570,
    "level": 15,
    "daily_movement": "–"
  },
  {
    "username": "glintsward",
    "xp": 1570,
    "level": 15,
    "daily_movement": "⬇1"
  },
  {
    "username": "scarhollow",
    "xp": 1450,
    "level": 14,
    "daily_movement": "⬇1"
  },
  {
    "username": "brimshard",
    "xp": 1440,
    "level": 14,
    "daily_movement": "⬆1"
  },
  {
    "username": "smoketwine",
    "xp": 1360,
    "level": 13,
    "daily_movement": "⬆1"
  },
  {
    "username": "shiverglade",
    "xp": 1330,
    "level": 13,
    "daily_movement": "–"
  },
  {
    "username": "misttrack",
    "xp": 1330,
    "level": 13,
    "daily_movement": "⬇2"
  },
  {
    "username": "vexfrost",
    "xp": 1330,
    "level": 13,
    "daily_movement": "–"
  },
  {
    "username": "graspfletch",
    "xp": 1130,
    "level": 11,
    "daily_movement": "⬆2"
  },
  {
    "username": "gleambark",
    "xp": 1040,
    "level": 10,
    "daily_movement": "⬆2"
  },
  {
    "username": "tillerbeam",
    "xp": 980,
    "level": 9,
    "daily_movement": "–"
  },
  {
    "username": "twineknell",
    "xp": 810,
    "level": 8,
    "daily_movement": "⬆2"
  },
  {
    "username": "dusktrace",
    "xp": 810,
    "level": 8,
    "daily_movement": "⬇2"
  },
  {
    "username": "spiresoot",
    "xp": 770,
    "level": 7,
    "daily_movement": "⬇1"
  },
  {
    "username": "claspfrost",
    "xp": 720,
    "level": 7,
    "daily_movement": "⬇1"
  },
  {
    "username": "smudgestem",
    "xp": 700,
    "level": 7,
    "daily_movement": "⬇2"
  },
  {
    "username": "gleanglint",
    "xp": 700,
    "level": 7,
    "daily_movement": "⬆2"
  },
  {
    "username": "shufflestorm",
    "xp": 620,
    "level": 6,
    "daily_movement": "⬆2"
  },
  {
    "username": "stonegleam",
    "xp": 610,
    "level": 6,
    "daily_movement": "–"
  },
  {
    "username": "tinebranch",
    "xp": 610,
    "level": 6,
    "daily_movement": "⬆2"
  },
  {
    "username": "mottlegleam",
    "xp": 600,
    "level": 6,
    "daily_movement": "–"
  },
  {
    "username": "bramblecoast",
    "xp": 590,
    "level": 5,
    "daily_movement": "⬆2"
  },
  {
    "username": "spurglint",
    "xp": 570,
    "level": 5,
    "daily_movement": "–"
  },
  {
    "username": "murkrise",
    "xp": 570,
    "level": 5,
    "daily_movement": "–"
  },
  {
    "username": "trailgrove",
    "xp": 510,
    "level": 5,
    "daily_movement": "⬇1"
  }
];

export const LEADERBOARD_DATA: LeaderboardUser[] = RAW_LEADERBOARD_DATA.map((user, index) => ({
  ...user,
  rank: index + 1,
  title: getRankTitle(index + 1, RAW_LEADERBOARD_DATA.length)
}));

function getRankTitle(rank: number, totalUsers: number): string {
  // Special titles for top 3
  if (rank === 1) return 'CEO';
  if (rank === 2) return 'CFO';
  if (rank === 3) return 'CIO';
  
  // Calculate percentile (higher rank = lower percentile)
  const percentile = (1.0 - (rank - 1.0) / totalUsers) * 100;
  
  // Assign titles based on percentile
  if (percentile >= 99.9) return 'Partner';
  if (percentile >= 99) return 'Managing Director';
  if (percentile >= 95) return 'Vice President';
  if (percentile >= 90) return 'Associate';
  if (percentile >= 80) return 'Analyst';
  return 'Intern';
}