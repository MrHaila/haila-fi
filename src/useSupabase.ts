import { createClient } from '@supabase/supabase-js'
import { Database } from './database.types'
import { computed, onMounted, onUnmounted, ref } from 'vue'

export const supabase = createClient<Database>('https://rdalzkyfdsjwdxmhsbdk.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJkYWx6a3lmZHNqd2R4bWhzYmRrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODIwMDcxMjUsImV4cCI6MTk5NzU4MzEyNX0.SR-FXMDGrmGfywlnEqXojJS8JDTfKJ0iUthSslqLOek')

supabase
  .channel('any')
  .on('postgres_changes', { event: '*', schema: '*' }, payload => {
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
  const { data, error } = await supabase.from('logo').select('*')
  if (error || !data) throw error || new Error('No data returned')
  h1.value = data[0].h1
  a2.value = data[0].a2
  i3.value = data[0].i3
  l4.value = data[0].l4
  a5.value = data[0].a5
})

export function useSupabase () {
  return {
    supabase,
    h1,
    a2,
    i3,
    l4,
    a5,
    totalClicks
  }
}
