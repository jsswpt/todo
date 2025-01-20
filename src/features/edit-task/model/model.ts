import { createEvent } from 'effector'

import { task } from '@/entities'

export type SubmitValue = {
  id: number
  title: string
}

export const handleSubmit = createEvent<SubmitValue>()

task.$tasks.on(handleSubmit, (state, { id, title }) =>
  state!.map((item) => (item.id === id ? { ...item, title } : item))
)

type DeleteValue = { id: number }

export const handleDelete = createEvent<DeleteValue>()

task.$tasks.on(handleDelete, (state, { id }) =>
  state?.filter((item) => item.id !== id)
)
