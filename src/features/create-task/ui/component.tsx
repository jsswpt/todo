import { AddOutlined } from '@mui/icons-material'
import { Button, InputBase } from '@mui/material'
import { useState } from 'react'

import { sizes } from '@/shared/configs'

import { handleSubmit } from '../model'
import { Template } from './template'

export const Component = () => {
  const [title, setTitle] = useState('')

  const onSubmit = () => {
    handleSubmit({ title })
    setTitle('')
  }

  const buttons = title.trim().length
    ? {
        submitButton: (
          <Button
            variant="contained"
            onClick={() => onSubmit()}
            sx={{ width: sizes.md, height: sizes.md, minWidth: 0, padding: 0 }}
          >
            <AddOutlined />
          </Button>
        ),
      }
    : {}

  return (
    <Template
      textField={
        <InputBase
          fullWidth
          type="text"
          placeholder="What needs to be done?"
          value={title}
          onChange={(e) => setTitle(e.currentTarget.value)}
          sx={{
            height: sizes.md,
            '&>input::placeholder': { fontStyle: 'italic' },
          }}
        />
      }
      {...buttons}
    />
  )
}
