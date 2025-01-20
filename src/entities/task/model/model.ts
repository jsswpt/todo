import { createEvent, createStore } from 'effector'

import { normalizeData } from '@/shared/lib'

export type Task = {
  id: number
  title: string
  isDone: boolean
}

export const getInitialTasks = createEvent()

export const $tasks = createStore<Array<Task> | null>([
  {
    id: 1,
    isDone: false,
    title: 'First task',
  },
])

$tasks.watch(console.log)

$tasks.on(
  getInitialTasks,
  () => JSON.parse(localStorage.getItem('tasks') ?? '[]') as Array<Task>
)

export const $normalizedTasks = $tasks.map((state) =>
  normalizeData(state ?? [])
)
