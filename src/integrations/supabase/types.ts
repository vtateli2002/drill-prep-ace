export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instanciate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "12.2.12 (cd3cf9e)"
  }
  public: {
    Tables: {
      admin_users: {
        Row: {
          user_id: string
        }
        Insert: {
          user_id: string
        }
        Update: {
          user_id?: string
        }
        Relationships: []
      }
      attempts: {
        Row: {
          attempt_number: number
          created_at: string
          difficulty: string
          id: string
          is_correct: boolean
          notes: string | null
          question_id: string
          submitted_answer: number | null
          track: string
          user_id: string
          xp_awarded: number
        }
        Insert: {
          attempt_number?: number
          created_at?: string
          difficulty: string
          id?: string
          is_correct?: boolean
          notes?: string | null
          question_id: string
          submitted_answer?: number | null
          track: string
          user_id: string
          xp_awarded?: number
        }
        Update: {
          attempt_number?: number
          created_at?: string
          difficulty?: string
          id?: string
          is_correct?: boolean
          notes?: string | null
          question_id?: string
          submitted_answer?: number | null
          track?: string
          user_id?: string
          xp_awarded?: number
        }
        Relationships: []
      }
      badge_unlocks: {
        Row: {
          badge_id: string
          id: string
          metadata: Json | null
          unlocked_at: string
          user_id: string
        }
        Insert: {
          badge_id: string
          id?: string
          metadata?: Json | null
          unlocked_at?: string
          user_id: string
        }
        Update: {
          badge_id?: string
          id?: string
          metadata?: Json | null
          unlocked_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "badge_unlocks_badge_id_fkey"
            columns: ["badge_id"]
            isOneToOne: false
            referencedRelation: "badges"
            referencedColumns: ["id"]
          },
        ]
      }
      badges: {
        Row: {
          created_at: string
          description: string | null
          hidden_until_unlock: boolean
          icon: string | null
          id: string
          name: string
          slug: string
          tier: number
          xp_reward: number
        }
        Insert: {
          created_at?: string
          description?: string | null
          hidden_until_unlock?: boolean
          icon?: string | null
          id?: string
          name: string
          slug: string
          tier?: number
          xp_reward?: number
        }
        Update: {
          created_at?: string
          description?: string | null
          hidden_until_unlock?: boolean
          icon?: string | null
          id?: string
          name?: string
          slug?: string
          tier?: number
          xp_reward?: number
        }
        Relationships: []
      }
      calculator_events: {
        Row: {
          created_at: string
          id: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          user_id?: string
        }
        Relationships: []
      }
      daily_challenges: {
        Row: {
          challenge_date: string
          completed_questions: string[] | null
          created_at: string
          id: string
          question_ids: string[]
          user_id: string
        }
        Insert: {
          challenge_date?: string
          completed_questions?: string[] | null
          created_at?: string
          id?: string
          question_ids: string[]
          user_id: string
        }
        Update: {
          challenge_date?: string
          completed_questions?: string[] | null
          created_at?: string
          id?: string
          question_ids?: string[]
          user_id?: string
        }
        Relationships: []
      }
      profiles: {
        Row: {
          badges: Json | null
          created_at: string
          current_rank: number | null
          difficulty_xp: Json | null
          id: string
          interview_deadline: string | null
          is_bot: boolean | null
          level: number
          onboarding_plan: Json | null
          onboarding_started_at: string | null
          profile_pic: string | null
          rank: string
          rank_change: number | null
          rival_id: string | null
          rival_xp: number
          streak: number
          track_progress: Json | null
          updated_at: string
          username: string
          xp: number
        }
        Insert: {
          badges?: Json | null
          created_at?: string
          current_rank?: number | null
          difficulty_xp?: Json | null
          id: string
          interview_deadline?: string | null
          is_bot?: boolean | null
          level?: number
          onboarding_plan?: Json | null
          onboarding_started_at?: string | null
          profile_pic?: string | null
          rank?: string
          rank_change?: number | null
          rival_id?: string | null
          rival_xp?: number
          streak?: number
          track_progress?: Json | null
          updated_at?: string
          username: string
          xp?: number
        }
        Update: {
          badges?: Json | null
          created_at?: string
          current_rank?: number | null
          difficulty_xp?: Json | null
          id?: string
          interview_deadline?: string | null
          is_bot?: boolean | null
          level?: number
          onboarding_plan?: Json | null
          onboarding_started_at?: string | null
          profile_pic?: string | null
          rank?: string
          rank_change?: number | null
          rival_id?: string | null
          rival_xp?: number
          streak?: number
          track_progress?: Json | null
          updated_at?: string
          username?: string
          xp?: number
        }
        Relationships: []
      }
      user_notes: {
        Row: {
          created_at: string
          id: string
          question_id: string | null
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          question_id?: string | null
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          question_id?: string | null
          user_id?: string
        }
        Relationships: []
      }
      user_questions: {
        Row: {
          attempt_count: number | null
          difficulty: string
          id: string
          max_attempts_reached: boolean | null
          question_id: string
          solved_at: string
          solved_correctly: boolean
          track: string
          user_id: string
          xp_earned: number
        }
        Insert: {
          attempt_count?: number | null
          difficulty: string
          id?: string
          max_attempts_reached?: boolean | null
          question_id: string
          solved_at?: string
          solved_correctly?: boolean
          track: string
          user_id: string
          xp_earned?: number
        }
        Update: {
          attempt_count?: number | null
          difficulty?: string
          id?: string
          max_attempts_reached?: boolean | null
          question_id?: string
          solved_at?: string
          solved_correctly?: boolean
          track?: string
          user_id?: string
          xp_earned?: number
        }
        Relationships: []
      }
    }
    Views: {
      public_profiles: {
        Row: {
          id: string | null
          is_bot: boolean | null
          level: number | null
          profile_pic: string | null
          rank: string | null
          username: string | null
          xp: number | null
        }
        Insert: {
          id?: string | null
          is_bot?: boolean | null
          level?: number | null
          profile_pic?: string | null
          rank?: string | null
          username?: string | null
          xp?: number | null
        }
        Update: {
          id?: string | null
          is_bot?: boolean | null
          level?: number | null
          profile_pic?: string | null
          rank?: string | null
          username?: string | null
          xp?: number | null
        }
        Relationships: []
      }
      user_correct_days: {
        Row: {
          answered_on: string | null
          user_id: string | null
        }
        Relationships: []
      }
      v_badge_progress: {
        Row: {
          acc_correct: number | null
          clean_first_try: number | null
          days_active_30: number | null
          distinct_tracks: number | null
          hard_clean: number | null
          lbo_correct: number | null
          level_now: number | null
          mna_correct: number | null
          notes_count: number | null
          total_correct: number | null
          user_id: string | null
          val_correct: number | null
          xp_now: number | null
        }
        Insert: {
          acc_correct?: never
          clean_first_try?: never
          days_active_30?: never
          distinct_tracks?: never
          hard_clean?: never
          lbo_correct?: never
          level_now?: never
          mna_correct?: never
          notes_count?: never
          total_correct?: never
          user_id?: string | null
          val_correct?: never
          xp_now?: never
        }
        Update: {
          acc_correct?: never
          clean_first_try?: never
          days_active_30?: never
          distinct_tracks?: never
          hard_clean?: never
          lbo_correct?: never
          level_now?: never
          mna_correct?: never
          notes_count?: never
          total_correct?: never
          user_id?: string | null
          val_correct?: never
          xp_now?: never
        }
        Relationships: []
      }
    }
    Functions: {
      _award_badge_if_missing: {
        Args: { p_user: string; p_slug: string }
        Returns: undefined
      }
      _normalized_track: {
        Args: { p: string }
        Returns: string
      }
      _upsert_badge: {
        Args: {
          p_slug: string
          p_name: string
          p_description: string
          p_tier: number
          p_icon: string
        }
        Returns: string
      }
      award_tier1_streaks_daily: {
        Args: Record<PropertyKey, never>
        Returns: undefined
      }
      award_xp: {
        Args: { p_user: string; p_amount: number; p_reason: string }
        Returns: undefined
      }
      calculate_level_from_xp: {
        Args: { total_xp: number }
        Returns: number
      }
      calculate_title_from_rank: {
        Args: { user_rank: number; total_users: number }
        Returns: string
      }
      calculate_xp_for_level: {
        Args: { level_num: number }
        Returns: number
      }
      check_and_award_tier1: {
        Args: { p_user: string }
        Returns: undefined
      }
      check_and_award_tier2: {
        Args: { p_user: string }
        Returns: undefined
      }
      check_and_award_tier3: {
        Args: { p_user: string }
        Returns: undefined
      }
      check_and_award_tier4: {
        Args: { p_user: string }
        Returns: undefined
      }
      get_badge_progress_for_user: {
        Args: { p_user: string }
        Returns: {
          user_id: string
          total_correct: number
          days_active_30: number
          clean_first_try: number
          hard_clean: number
          acc_correct: number
          val_correct: number
          mna_correct: number
          lbo_correct: number
          distinct_tracks: number
          level_now: number
          xp_now: number
          notes_count: number
          streak_current: number
          catalog_total_active: number
          catalog_user_solved: number
          best_track_solved: number
          best_track_total: number
        }[]
      }
      get_current_streak: {
        Args: { p_tz?: string } | { p_user: string; p_tz?: string }
        Returns: number
      }
      jsonb_int: {
        Args: { js: Json; key: string; default_val: number }
        Returns: number
      }
      standardize_difficulty_xp: {
        Args: Record<PropertyKey, never>
        Returns: undefined
      }
      update_ai_users_daily: {
        Args: Record<PropertyKey, never>
        Returns: undefined
      }
      update_rival_xp_daily: {
        Args: Record<PropertyKey, never>
        Returns: undefined
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
