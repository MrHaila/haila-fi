import { computed, ref } from 'vue'

import { createClient } from '@supabase/supabase-js'

import type { Database } from './supabase'

const supabase = createClient<Database>(
  // Public URL
  'https://rdalzkyfdsjwdxmhsbdk.supabase.co',
  // Public anon key
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJkYWx6a3lmZHNqd2R4bWhzYmRrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODIwMDcxMjUsImV4cCI6MTk5NzU4MzEyNX0.SR-FXMDGrmGfywlnEqXojJS8JDTfKJ0iUthSslqLOek'
)

// Setup a realtime subscription to the logo_stats table.
supabase
  .channel('logo-stats-update-channel')
  .on('postgres_changes', { event: 'UPDATE', schema: 'public', table: 'logo_stats' }, (payload) => {
    if (payload.new.id === 1) h1.value = payload.new.count
    if (payload.new.id === 2) a2.value = payload.new.count
    if (payload.new.id === 3) i3.value = payload.new.count
    if (payload.new.id === 4) l4.value = payload.new.count
    if (payload.new.id === 5) a5.value = payload.new.count
  })
  .subscribe()

// Local reactive variables.
const h1 = ref(0)
const a2 = ref(0)
const i3 = ref(0)
const l4 = ref(0)
const a5 = ref(0)

const totalClicks = computed(() => {
  return h1.value + a2.value + i3.value + l4.value + a5.value
})

// Fetch the initial data.
const { data, error } = await supabase.from('logo_stats').select()

if (error) console.error(error)
else if (data) {
  for (const row of data) {
    if (row.id === 1) h1.value = row.count
    if (row.id === 2) a2.value = row.count
    if (row.id === 3) i3.value = row.count
    if (row.id === 4) l4.value = row.count
    if (row.id === 5) a5.value = row.count
  }
}

/**
 * Call this to increment the click count of a target in Supabase.
 */
async function incrementClick(target: 'h1' | 'a2' | 'i3' | 'l4' | 'a5'): Promise<void> {
  let targetId: number

  if (target === 'h1') targetId = 1
  else if (target === 'a2') targetId = 2
  else if (target === 'i3') targetId = 3
  else if (target === 'l4') targetId = 4
  else if (target === 'a5') targetId = 5
  else throw new Error('Invalid target')

  const { data, error } = await supabase.rpc('increment_logo_stats', {
    target_id: targetId,
  })

  if (error) console.error(error)
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function useSupabase() {
  return {
    h1,
    a2,
    i3,
    l4,
    a5,
    totalClicks,
    incrementClick,
  }
}
