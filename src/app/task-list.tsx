import { Box, List, ListItem, Typography } from '@mui/material'
import { useUnit } from 'effector-react'

import { TaskCard } from '@/widgets'

import { task } from '@/entities'

export const TaskList = () => {
  const tasks = useUnit(task.$tasks)

  if (!tasks || !tasks.length) {
    return (
      <Box>
        <Typography>Empty</Typography>
      </Box>
    )
  }

  return (
    <List sx={{ width: '100%' }}>
      {tasks.map((item) => (
        <ListItem key={item.id}>
          <TaskCard {...item} />
        </ListItem>
      ))}
    </List>
  )
}
