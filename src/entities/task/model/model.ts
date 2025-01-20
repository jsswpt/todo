import { createEffect, createStore } from 'effector'

import { normalizeData } from '@/shared/lib'

import { getInitialTasksReq } from '../api'

export const getInitialTasksFx = createEffect(getInitialTasksReq)

export type Task = {
  id: number
  title: string
  isDone: boolean
}

const mockTasks: Array<Task> = [
  { id: 1, isDone: true, title: 'Open app' },
  { id: 2, isDone: false, title: 'Create new task' },
]

export const $tasks = createStore<Array<Task> | null>(null)

$tasks.on(getInitialTasksFx.doneData, (_, value) => {
  if (!value.length) {
    localStorage.setItem('tasks', JSON.stringify(mockTasks))
  }

  return value.length ? value : mockTasks
})

export const $normalizedTasks = $tasks.map((state) =>
  normalizeData(state ?? [])
)
