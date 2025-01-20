import { Skeleton, Typography } from '@mui/material'

import { pxToRem } from '@/shared/lib'

import { Template } from './template'

export const Fallback = () => (
  <Template
    isDoneToggler={<Skeleton width={pxToRem(16)} />}
    taskField={
      <Typography variant="body1">
        <Skeleton width="100%" />
      </Typography>
    }
  />
)
