import { Typography } from '@mui/material'
import React from 'react'

type TemplateProps = {
  children: React.ReactNode
}

export const Template = ({ children }: TemplateProps) => (
  <Typography variant="caption" color="textSecondary">
    {children}
  </Typography>
)
