import { Skeleton } from '@mui/material'

import { pxToRem } from '@/shared/lib'

import { Template } from './template'

export const Fallback = () => (
  <Template>
    <Skeleton width={pxToRem(64)} />
  </Template>
)
