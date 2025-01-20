import { Box, Card, Stack } from '@mui/material'
import React from 'react'

import { pxToRem } from '@/shared/lib'

type TemplateProps = {
  isDoneToggler: React.ReactNode
  taskField: React.ReactNode
}

export const Template = ({ isDoneToggler, taskField }: TemplateProps) => (
  <Card>
    <Stack
      paddingX={pxToRem(8)}
      paddingY={pxToRem(4)}
      flexDirection="row"
      alignItems="center"
      gap={pxToRem(8)}
      width="100%"
    >
      <Box>{isDoneToggler}</Box>
      <Box flex={1} overflow="hidden">
        {taskField}
      </Box>
    </Stack>
  </Card>
)
