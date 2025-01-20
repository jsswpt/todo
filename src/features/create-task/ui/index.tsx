import { lazy, Suspense } from 'react'

import { Fallback } from './fallback'

const Component = lazy(() =>
  import('./component').then((m) => ({ default: m.Component }))
)

type CreateTaskProps =
  | {
      isFallback: true
    }
  | {
      isFallback?: false
    }

export const CreateTask = ({ isFallback }: CreateTaskProps) =>
  isFallback ? (
    <Fallback />
  ) : (
    <Suspense fallback={<Fallback />}>
      <Component />
    </Suspense>
  )
