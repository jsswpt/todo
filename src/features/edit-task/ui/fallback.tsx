import { Skeleton } from '@mui/material'

import { sizes } from '@/shared/configs'

import { Template } from './template'

export const Fallback = () => (
  <Template
    textField={<Skeleton width="100%" />}
    deleteButton={
      <Skeleton width={sizes.sm} height={sizes.sm} variant="circular" />
    }
  />
)
