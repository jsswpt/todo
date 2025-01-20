import { lazy, Suspense } from 'react'

import { task } from '@/entities'

import { Fallback } from './fallback'

const Component = lazy(() =>
  import('./component').then((m) => ({ default: m.Component }))
)

type Props = task.Task

type TaskCardProps =
  | {
      isFallback: true
    }
  | ({
      isFallback?: false
    } & Props)

export const TaskCard = ({ isFallback, ...rest }: TaskCardProps) =>
  isFallback ? (
    <Fallback />
  ) : (
    <Suspense fallback={<Fallback />}>
      <Component {...(rest as Props)} />
    </Suspense>
  )
