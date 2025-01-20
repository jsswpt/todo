import { Box, Stack } from '@mui/material'
import React from 'react'

import { pxToRem } from '@/shared/lib'

type TemplateProps = {
  textField: React.ReactNode
  applyButton?: React.ReactNode
  cancelButton?: React.ReactNode
  deleteButton?: React.ReactNode
}

export const Template = ({
  applyButton,
  cancelButton,
  deleteButton,
  textField,
}: TemplateProps) => (
  <Stack flexDirection="row" alignItems="center" gap={pxToRem(16)}>
    <Box flex={1}>{textField}</Box>
    {Boolean(applyButton) && Boolean(cancelButton) && (
      <Box>
        {applyButton}
        {cancelButton}
      </Box>
    )}
    {Boolean(deleteButton) && <Box>{deleteButton}</Box>}
  </Stack>
)
