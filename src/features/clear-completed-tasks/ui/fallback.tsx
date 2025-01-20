import { Skeleton } from '@mui/material'

import { sizes } from '@/shared/configs'
import { pxToRem } from '@/shared/lib'

export const Fallback = () => (
  <Skeleton
    variant="rounded"
    height={sizes.sm}
    width={pxToRem(128)}
    sx={{ borderRadius: ({ shape }) => shape.borderRadius }}
  />
)
