import { EditTask, ToggleTaskStatus } from '@/features'

import { Template } from './template'

export const Fallback = () => (
  <Template
    isDoneToggler={<ToggleTaskStatus isFallback />}
    taskField={<EditTask isFallback />}
  />
)
