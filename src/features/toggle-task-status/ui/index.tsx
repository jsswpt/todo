import { lazy, Suspense } from 'react'

import { task } from '@/entities'

import { Fallback } from './fallback'

const Component = lazy(() =>
  import('./component').then((m) => ({ default: m.Component }))
)

type Props = Pick<task.Task, 'id' | 'isDone'>

type ToggleTaskStatusProps =
  | {
      isFallback: true
    }
  | ({
      isFallback?: false
    } & Props)

export const ToggleTaskStatus = ({
  isFallback,
  ...rest
}: ToggleTaskStatusProps) =>
  isFallback ? (
    <Fallback />
  ) : (
    <Suspense fallback={<Fallback />}>
      <Component {...(rest as Props)} />
    </Suspense>
  )
