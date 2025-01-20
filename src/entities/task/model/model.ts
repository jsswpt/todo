import { createEvent, createStore } from 'effector'

import { normalizeData } from '@/shared/lib'

export type Task = {
  id: number
  title: string
  isDone: boolean
  creationDate: Date
}

export const getInitialTasks = createEvent()

export const $tasks = createStore<Array<Task> | null>(null)

$tasks.on(
  getInitialTasks,
  () => JSON.parse(localStorage.getItem('tasks') ?? '[]') as Array<Task>
)

export const $normalizedTasks = $tasks.map((state) =>
  normalizeData(state ?? [])
)
