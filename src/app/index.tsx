import { Box, Container, Stack, Typography } from '@mui/material'

import { CreateTask } from '@/features'

import { pxToRem } from '@/shared/lib'

import { MUIProvider } from './providers'
import { TaskList } from './task-list'

export const App = MUIProvider(() => (
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
          <CreateTask />
          <TaskList />
          <Box>// content</Box>
        </Stack>
      </Stack>
    </Container>
  </Box>
))
