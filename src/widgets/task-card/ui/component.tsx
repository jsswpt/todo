import { EditTask, ToggleTaskStatus } from '@/features'

import { task } from '@/entities'

import { Template } from './template'

type ComponentProps = task.Task

export const Component = ({ id, isDone, title }: ComponentProps) => (
  <Template
    isDoneToggler={<ToggleTaskStatus id={id} isDone={isDone} />}
    taskField={<EditTask id={id} title={title} />}
  />
)
