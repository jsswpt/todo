import { Checkbox } from '@mui/material'

import { EditTask } from '@/features'

import { task } from '@/entities'

import { Template } from './template'

type ComponentProps = task.Task

export const Component = ({ id, isDone, title }: ComponentProps) => (
  <Template
    isDoneToggler={<Checkbox size="small" checked={isDone} />}
    taskField={<EditTask id={id} title={title} />}
  />
)
