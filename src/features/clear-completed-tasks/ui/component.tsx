import { Chip } from '@mui/material'
import { useUnit } from 'effector-react'

import { task } from '@/entities'

import { clearCompletedTasks } from '../model'
import { Fallback } from './fallback'

export const Component = () => {
  const [completedTasksLength, isLoading, isFetched] = useUnit([
    task.$completedTasksLength,
    task.getInitialTasksFx.pending,
    task.$isFetched,
  ])

  if (isLoading || !isFetched) {
    return <Fallback />
  }

  return (
    <Chip
      onClick={() => clearCompletedTasks()}
      size="small"
      color="warning"
      label="Clear completed"
      variant="outlined"
      disabled={completedTasksLength === 0}
    />
  )
}
