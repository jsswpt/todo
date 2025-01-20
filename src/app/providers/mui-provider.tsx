import { CssBaseline, ThemeProvider } from '@mui/material'
import React from 'react'

import { theme } from '@/shared/configs'

export const MUIProvider = (children: () => React.ReactNode) => () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    {children()}
  </ThemeProvider>
)
