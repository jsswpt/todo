import { createEffect, createStore } from 'effector'

import { getInitialTasksReq } from '../api'
import { taskFilters } from '../lib'

export const getInitialTasksFx = createEffect(getInitialTasksReq)

export const $isFetched = createStore(false)

$isFetched.on(getInitialTasksFx.finally, () => true)

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

export const $activeTasksLength = $tasks.map(
  (state) => (state ?? []).filter(taskFilters.active.func).length ?? null
)

$tasks.on(getInitialTasksFx.doneData, (_, value) => {
  if (!value.length) {
    localStorage.setItem('tasks', JSON.stringify(mockTasks))
  }

  return value.length ? value : mockTasks
})
