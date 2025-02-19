import { Box, Stack } from '@mui/material'
import React from 'react'

import { sizes } from '@/shared/configs'
import { pxToRem } from '@/shared/lib'

type TemplateProps = {
  textField: React.ReactNode
  submitButton?: React.ReactNode
}

export const Template = ({ submitButton, textField }: TemplateProps) => (
  <Stack
    flexDirection="row"
    height={sizes.md}
    alignItems="center"
    gap={pxToRem(8)}
    width="100%"
  >
    <Box flex={1}>{textField}</Box>
    {submitButton && <Box>{submitButton}</Box>}
  </Stack>
)
