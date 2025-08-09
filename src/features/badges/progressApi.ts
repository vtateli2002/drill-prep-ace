import { supabase } from '@/integrations/supabase/client';

export type BadgeProgress = {
  user_id: string;
  total_correct: number;
  days_active_30: number;
  clean_first_try: number;
  hard_clean: number;
  acc_correct: number;
  val_correct: number;
  mna_correct: number;
  lbo_correct: number;
  distinct_tracks: number;
  level_now: number;
  xp_now: number;
  notes_count: number;
  streak_current: number;
  catalog_total_active: number;
  catalog_user_solved: number;
  best_track_solved: number;
  best_track_total: number;
};

export async function getProgress(userId: string) {
  const { data, error } = await (supabase as any).rpc('get_badge_progress_for_user', { p_user: userId });
  if (error) throw error;
  const row = Array.isArray(data) ? data[0] : data;
  return (row as BadgeProgress) ?? null;
}

export async function recompute(userId: string) {
  const { error } = await (supabase as any).rpc('recompute_all_badges_for_user', { p_user: userId });
  if (error) throw error;
}
