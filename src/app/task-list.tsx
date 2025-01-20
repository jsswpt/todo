import { Box, Stack } from '@mui/material'
import { useUnit } from 'effector-react'
import React, { useCallback } from 'react'

import { TaskCard } from '@/widgets'

import { task } from '@/entities'

type TemplateProps = {
  children: React.ReactNode
}

const Template = ({ children }: TemplateProps) => (
  <Stack component="ul" padding={0} margin={0} gap={0} width="100%">
    {children}
  </Stack>
)

type ComponentProps = {
  filterKey?: task.FilterKey
}

const Component = ({ filterKey }: ComponentProps) => {
  const [isLoading, isFetched] = useUnit([
    task.getInitialTasksFx.pending,
    task.$isFetched,
  ])

  const render = useCallback(
    (item: task.Task) => (
      <Box key={item.id}>
        <TaskCard {...item} />
      </Box>
    ),
    []
  )

  if (isLoading || !isFetched) {
    return <Fallback />
  }

  return (
    <Template>
      <task.TaskList render={render} filterKey={filterKey} />
    </Template>
  )
}

export const Fallback = () => (
  <Template>
    <Box>
      <TaskCard isFallback />
    </Box>
    <Box>
      <TaskCard isFallback />
    </Box>
    <Box>
      <TaskCard isFallback />
    </Box>
    <Box>
      <TaskCard isFallback />
    </Box>
    <Box>
      <TaskCard isFallback />
    </Box>
  </Template>
)

type Props = {
  filterKey?: task.FilterKey
}

type TaskListProps =
  | {
      isFallback: true
    }
  | ({
      isFallback?: false
    } & Props)

export const TaskList = ({ isFallback, ...rest }: TaskListProps) =>
  isFallback ? <Fallback /> : <Component {...(rest as Props)} />
