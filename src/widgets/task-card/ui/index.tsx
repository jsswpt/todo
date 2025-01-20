import { lazy, Suspense } from 'react'

import { Fallback } from './fallback'

const Component = lazy(() =>
  import('./component').then((m) => ({ default: m.Component }))
)

type Props = { id: number }

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
