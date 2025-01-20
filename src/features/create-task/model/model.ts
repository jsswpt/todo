import { createEvent } from 'effector'

import { task } from '@/entities'

type SubmitValue = {
  title: string
}

export const handleSubmit = createEvent<SubmitValue>()

task.$tasks.on(handleSubmit, (state, { title }) => {
  const newTask: task.Task = {
    title,
    isDone: false,
    id: Date.now(),
  }

  return state ? [...state, newTask] : [newTask]
})
