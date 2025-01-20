import { createTheme } from '@mui/material'

import { pxToRem } from '@/shared/lib'

export const theme = createTheme({
  typography: {
    allVariants: {
      lineHeight: '125%',
    },
    h1: {
      fontSize: pxToRem(64),
    },
  },
})
