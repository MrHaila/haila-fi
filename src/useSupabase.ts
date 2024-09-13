import { computed, onMounted, onUnmounted, ref } from 'vue'

import { createClient } from '@supabase/supabase-js'

import { Database } from './database-types'

export const supabase = createClient<Database>(
  'https://rdalzkyfdsjwdxmhsbdk.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJkYWx6a3lmZHNqd2R4bWhzYmRrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODIwMDcxMjUsImV4cCI6MTk5NzU4MzEyNX0.SR-FXMDGrmGfywlnEqXojJS8JDTfKJ0iUthSslqLOek'
)

supabase
  .channel('any')
  .on('postgres_changes', { event: '*', schema: '*' }, (payload) => {
    console.log('Change received!', payload)
  })
  .subscribe()

const h1 = ref(0)
const a2 = ref(0)
const i3 = ref(0)
const l4 = ref(0)
const a5 = ref(0)

const totalClicks = computed(() => {
  return h1.value + a2.value + i3.value + l4.value + a5.value
})

onMounted(async () => {
  const { data, error } = await supabase.from('logo2').select()
  if (error || !data) throw error || new Error('No data returned')
  for (const row of data) {
    if (row.id === 1) h1.value = row.count
    if (row.id === 2) a2.value = row.count
    if (row.id === 3) i3.value = row.count
    if (row.id === 4) l4.value = row.count
    if (row.id === 5) a5.value = row.count
  }
})

async function incrementClick(target: 'h1' | 'a2' | 'i3' | 'l4' | 'a5') {
  let newValue = 0
  if (target === 'h1') newValue = h1.value
  if (target === 'a2') newValue = a2.value
  if (target === 'i3') newValue = i3.value
  if (target === 'l4') newValue = l4.value
  if (target === 'a5') newValue = a5.value
  newValue++

  const res = await supabase.from('logo2').update({ count: newValue }).eq('id', parseInt(target[1]))

  if (res.error) throw res.error

  if (target === 'h1') h1.value = newValue
  if (target === 'a2') a2.value = newValue
  if (target === 'i3') i3.value = newValue
  if (target === 'l4') l4.value = newValue
  if (target === 'a5') a5.value = newValue
}

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
