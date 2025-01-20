import { Checkbox } from '@mui/material'

import { task } from '@/entities'

import { toggleTaskStatus } from '../model'

type ComponentProps = Pick<task.Task, 'id' | 'isDone'>

export const Component = ({ id, isDone }: ComponentProps) => (
  <Checkbox
    size="small"
    checked={isDone}
    onChange={() => toggleTaskStatus({ id })}
  />
)
