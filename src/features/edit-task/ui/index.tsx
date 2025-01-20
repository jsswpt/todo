import { lazy, Suspense } from 'react'

import { task } from '@/entities'

import { Fallback } from './fallback'

const Component = lazy(() =>
  import('./component').then((m) => ({ default: m.Component }))
)

type Props = Omit<task.Task, 'isDone'>

type EditTaskProps =
  | {
      isFallback: true
    }
  | ({
      isFallback?: false
    } & Props)

export const EditTask = ({ isFallback, ...rest }: EditTaskProps) =>
  isFallback ? (
    <Fallback />
  ) : (
    <Suspense fallback={<Fallback />}>
      <Component {...(rest as Props)} />
    </Suspense>
  )
