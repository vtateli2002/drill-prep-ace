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
          icon: string | null
          id: string
          name: string
          slug: string
          xp_reward: number
        }
        Insert: {
          created_at?: string
          description?: string | null
          icon?: string | null
          id?: string
          name: string
          slug: string
          xp_reward?: number
        }
        Update: {
          created_at?: string
          description?: string | null
          icon?: string | null
          id?: string
          name?: string
          slug?: string
          xp_reward?: number
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
      [_ in never]: never
    }
    Functions: {
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
