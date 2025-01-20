import { createEvent } from 'effector'

import { task } from '@/entities'

type ToggleValue = {
  id: number
}

export const toggleTaskStatus = createEvent<ToggleValue>()

task.$tasks.on(toggleTaskStatus, (state, { id }) =>
  state?.map((item) =>
    item.id === id ? { ...item, isDone: !item.isDone } : item
  )
)
