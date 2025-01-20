import { Box, Typography } from '@mui/material'
import { useUnit } from 'effector-react'
import React, { useMemo } from 'react'

import { FilterKey, taskFilters } from '@/entities/task/lib'
import { $tasks, Task } from '@/entities/task/model'

import { pxToRem } from '@/shared/lib'

export type TaskListProps = {
  filterKey?: FilterKey
  render: (item: Task, idx: number, array: Array<Task>) => React.ReactNode
}

export const TaskList = ({ filterKey, render }: TaskListProps) => {
  const tasks = useUnit($tasks)

  const list = useMemo(() => {
    if (tasks) {
      if (filterKey) {
        return tasks!.filter(taskFilters[filterKey].func)
      } else {
        return tasks
      }
    } else {
      return null
    }
  }, [tasks, filterKey])

  if (list === null || (!list.length && !filterKey)) {
    return (
      <Box padding={pxToRem(12)}>
        <Typography variant="body2" textAlign="center" color="textDisabled">
          List is empty
        </Typography>
      </Box>
    )
  }

  if (!list.length && filterKey) {
    return (
      <Box padding={pxToRem(12)}>
        <Typography variant="body2" textAlign="center" color="textDisabled">
          No results
        </Typography>
      </Box>
    )
  }

  return list.map(render)
}
