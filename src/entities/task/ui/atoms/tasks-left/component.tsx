import { useUnit } from 'effector-react'

import { task } from '@/entities'

import { Fallback } from './fallback'
import { Template } from './template'

export const Component = () => {
  const [tasksLeft, isLoading, isFetched] = useUnit([
    task.$activeTasksLength,
    task.getInitialTasksFx.pending,
    task.$isFetched,
  ])

  if (isLoading || !isFetched) {
    return <Fallback />
  }

  return (
    <Template>
      {!tasksLeft || tasksLeft === 0 ? 'No' : tasksLeft} item
      {(tasksLeft ?? 0) > 1 || !tasksLeft ? 's' : ''} left
    </Template>
  )
}
