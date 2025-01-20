import { createEvent } from 'effector'

import { task } from '@/entities'
import { taskFilters } from '@/entities/task'

export const clearCompletedTasks = createEvent()

task.$tasks.on(clearCompletedTasks, (state) =>
  state!.filter(taskFilters.active.func)
)
