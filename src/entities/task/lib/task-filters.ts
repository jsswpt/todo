import { Task } from '../model'

type TaskFilter = { title: string; func: (value: Task) => boolean }

export const FilterKeys = ['active', 'completed'] as const

export type FilterKey = (typeof FilterKeys)[number]

export const taskFilters: Record<FilterKey, TaskFilter> = {
  active: {
    title: 'Active',
    func: (value) => !value.isDone,
  },
  completed: {
    title: 'Completed',
    func: (value) => value.isDone,
  },
} as const
