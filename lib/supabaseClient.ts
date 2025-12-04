import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(
    process.env.NEXT_PUBLIC_BASE_URI!,
    process.env.NEXT_PUBLIC_ANON_KEY!
)
