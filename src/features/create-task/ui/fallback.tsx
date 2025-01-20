import { Skeleton } from '@mui/material'

import { Template } from './template'

export const Fallback = () => <Template textField={<Skeleton width="100%" />} />
