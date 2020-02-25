import React, { ChangeEvent, MouseEvent, useRef, useState } from 'react'
import useAddTodo from '../hooks/useAddTodo'
import { Grid, TextField, Button } from '@material-ui/core'

function TodoInput() {
  const [value, setValue] = useState('')
  const addTodo = useAddTodo()
  const ref = useRef<HTMLInputElement>(null)

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  const onSubmit = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()

    if (!value) {
      alert('Input todo')
    } else {
      addTodo(value)
      setValue('')
    }

    if (ref.current) {
      ref.current.focus()
    }
  }

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <TextField
          label="Input"
          fullWidth
          onChange={onChange}
          value={value}
          inputRef={ref}
        />
      </Grid>
      <Grid item xs={12}>
        <Button
          fullWidth
          color="primary"
          variant="contained"
          onClick={onSubmit}
        >
          Add
        </Button>
      </Grid>
    </Grid>
  )
}

export default TodoInput
