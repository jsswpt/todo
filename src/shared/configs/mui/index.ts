import { pxToRem } from '@/shared/lib'
import { createTheme } from '@mui/material'

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
