import { Box, Container, Stack, Typography } from '@mui/material'
import { sample } from 'effector'
import { createGate, useGate } from 'effector-react'

import { task } from '@/entities'

import { pxToRem } from '@/shared/lib'

import { MUIProvider } from './providers'
import { TasksCard } from './tasks-card'

const appGate = createGate()

sample({
  clock: appGate.open,
  target: task.getInitialTasksFx,
})

export const App = MUIProvider(() => {
  useGate(appGate)

  return (
    <Box component="main">
      <Container maxWidth="md">
        <Stack minHeight="100vh" alignItems="center" justifyContent="center">
          <Stack
            alignItems="center"
            justifyContent="center"
            gap={pxToRem(16)}
            width="100%"
          >
            <Typography variant="h1" color="textDisabled">
              todos
            </Typography>
            <TasksCard />
          </Stack>
        </Stack>
      </Container>
    </Box>
  )
})
