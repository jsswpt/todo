import { ChevronRight } from '@mui/icons-material'
import {
  Box,
  Card,
  Chip,
  Divider,
  IconButton,
  Stack,
  Typography,
} from '@mui/material'
import { useUnit } from 'effector-react'
import { useState } from 'react'

import { CreateTask } from '@/features'

import { task } from '@/entities'

import { pxToRem } from '@/shared/lib'

import { TaskList } from './task-list'

const TasksLeft = () => {
  const tasksLeft = useUnit(task.$activeTasksLength)

  return (
    <Typography variant="caption">
      {!tasksLeft || tasksLeft === 0 ? 'No' : tasksLeft} item
      {(tasksLeft ?? 0) > 1 || !tasksLeft ? 's' : ''} left
    </Typography>
  )
}

export const TasksCard = () => {
  const [filterKey, setFilterKey] = useState<task.FilterKey | null>(null)
  const [isUncovered, setIsUncovered] = useState(true)

  return (
    <Card sx={{ width: '100%' }}>
      <Stack
        flexDirection="row"
        alignItems="center"
        gap={pxToRem(8)}
        paddingX={pxToRem(8)}
        marginRight={pxToRem(-8)}
      >
        <Box
          sx={{
            transition: ({ transitions }) =>
              transitions.duration.shortest + 'ms',
            transform: `rotate(${isUncovered ? '90deg' : '0'})`,
          }}
        >
          <IconButton size="small" onClick={() => setIsUncovered((v) => !v)}>
            <ChevronRight />
          </IconButton>
        </Box>
        <CreateTask />
      </Stack>
      <Divider />
      <Box
        sx={{
          display: 'grid',
          gridTemplateRows: isUncovered ? '1fr' : '0fr',
          minHeight: 0,
          overflow: 'hidden',
          transition: ({ transitions }) =>
            transitions.duration.leavingScreen + 'ms',
        }}
      >
        <Box
          minHeight={0}
          maxHeight="55svh"
          sx={{
            opacity: isUncovered ? 1 : 0,
            transition: ({ transitions }) =>
              transitions.duration.shortest + 'ms',
            overflowY: isUncovered ? 'auto' : 'hidden',
            overflowX: 'hidden',
            '&::-webkit-scrollbar': {
              background: ({ palette }) => palette.grey[100],
              width: pxToRem(8),
            },
            '&::-webkit-scrollbar-thumb': {
              background: ({ palette }) => palette.grey[300],
              borderRadius: pxToRem(8),
            },
          }}
        >
          <TaskList filterKey={filterKey ?? undefined} />
        </Box>
      </Box>
      <Divider />
      <Stack
        paddingX={pxToRem(8)}
        paddingY={pxToRem(4)}
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
        width="100%"
      >
        <TasksLeft />
        <Stack flexDirection="row" gap={pxToRem(12)}>
          <Chip
            label="All"
            variant={!filterKey ? 'filled' : 'outlined'}
            onClick={() => setFilterKey(null)}
            size="small"
          />
          {task.FilterKeys.map((item) => (
            <Chip
              size="small"
              label={task.taskFilters[item].title}
              variant={filterKey === item ? 'filled' : 'outlined'}
              onClick={() => setFilterKey(item)}
              key={item}
            />
          ))}
        </Stack>
      </Stack>
    </Card>
  )
}
