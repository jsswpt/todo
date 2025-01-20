import { Checkbox, Typography } from '@mui/material'

import { Template } from './template'

type ComponentProps = {
  id: number
}

export const Component = ({ id }: ComponentProps) => (
  <Template
    isDoneToggler={<Checkbox size="small" />}
    taskField={<Typography variant="body1">{id}</Typography>}
  />
)
