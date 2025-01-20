import { Box, Stack, Typography } from '@mui/material'
import { MUIProvider } from './providers'
import { pxToRem } from '@/shared/lib'

export const App = MUIProvider(() => (
  <Stack
    component="main"
    minHeight="100vh"
    alignItems="center"
    justifyContent="center"
    gap={pxToRem(16)}
  >
    <Typography variant="h1" color="textDisabled">
      todos
    </Typography>
    <Box>// content</Box>
  </Stack>
))
