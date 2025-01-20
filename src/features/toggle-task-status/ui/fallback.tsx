import { Skeleton } from '@mui/material'

import { sizes } from '@/shared/configs'

export const Fallback = () => (
  <Skeleton variant="circular" width={sizes.sm} height={sizes.sm} />
)
