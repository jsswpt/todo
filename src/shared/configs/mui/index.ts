import { createTheme } from '@mui/material'

import { pxToRem } from '@/shared/lib'

export const sizes = {
  sm: pxToRem(32),
  md: pxToRem(44),
  lg: pxToRem(56),
} as const

export const theme = createTheme({
  typography: {
    allVariants: {
      lineHeight: '125%',
    },
    h1: {
      fontSize: pxToRem(64),
    },
  },
  spacing: pxToRem,
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          padding: `0 ${pxToRem(16)}`,
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        sizeSmall: {
          height: sizes.sm,
        },
        sizeMedium: {
          height: sizes.md,
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        sizeSmall: {
          width: sizes.sm,
          height: sizes.sm,
        },
        sizeMedium: {
          width: sizes.md,
          height: sizes.md,
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        sizeSmall: {
          width: sizes.sm,
          height: sizes.sm,
        },
        sizeMedium: {
          width: sizes.md,
          height: sizes.md,
        },
        sizeLarge: {
          width: sizes.lg,
          height: sizes.lg,
        },
      },
    },
  },
})
