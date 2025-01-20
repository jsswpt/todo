import {
  CheckOutlined,
  CloseOutlined,
  DeleteOutlined,
} from '@mui/icons-material'
import { IconButton, InputBase } from '@mui/material'
import { useState } from 'react'

import { task } from '@/entities'

import { handleDelete, handleSubmit } from '../model/model'
import { Template } from './template'

type ComponentProps = Omit<task.Task, 'isDone'>

export const Component = ({ id, title }: ComponentProps) => {
  const [localValue, setLocalValue] = useState(title)

  const isEqual = localValue === title

  const buttons = !isEqual
    ? {
        applyButton: (
          <IconButton
            size="small"
            color="primary"
            onClick={() => handleSubmit({ id, title: localValue })}
          >
            <CheckOutlined />
          </IconButton>
        ),
        cancelButton: (
          <IconButton
            size="small"
            color="warning"
            onClick={() => setLocalValue(title)}
          >
            <CloseOutlined />
          </IconButton>
        ),
      }
    : {
        deleteButton: (
          <IconButton
            size="small"
            color="error"
            onClick={() => handleDelete({ id })}
          >
            <DeleteOutlined />
          </IconButton>
        ),
      }

  return (
    <Template
      textField={
        <InputBase
          type="text"
          value={localValue}
          onChange={(e) => setLocalValue(e.currentTarget.value)}
          fullWidth
        />
      }
      {...buttons}
    />
  )
}
