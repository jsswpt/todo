import { Skeleton } from '@mui/material'

import { EditTask } from '@/features'

import { sizes } from '@/shared/configs'

import { Template } from './template'

export const Fallback = () => (
  <Template
    isDoneToggler={
      <Skeleton width={sizes.sm} height={sizes.sm} variant="circular" />
    }
    taskField={<EditTask isFallback />}
  />
)
