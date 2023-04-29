export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      logo: {
        Row: {
          a2: number
          a5: number
          h1: number
          i3: number
          id: number
          l4: number
        }
        Insert: {
          a2?: number
          a5?: number
          h1?: number
          i3?: number
          id?: number
          l4?: number
        }
        Update: {
          a2?: number
          a5?: number
          h1?: number
          i3?: number
          id?: number
          l4?: number
        }
      }
      logo2: {
        Row: {
          count: number
          id: number
        }
        Insert: {
          count: number
          id?: number
        }
        Update: {
          count?: number
          id?: number
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
