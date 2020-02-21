import React, { useState, FormEvent, ChangeEvent, useRef } from 'react'
import useAddTodo from '../hooks/useAddTodo'

function TodoInput() {
  const [value, setValue] = useState('')
  const addTodo = useAddTodo()
  const ref = useRef<HTMLInputElement>(null)

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!value) {
      alert('할일 입력')
    } else {
      addTodo(value)
      setValue('')
    }

    if (ref.current) {
      ref.current.focus()
    }
  }

  return (
    <form onSubmit={onSubmit}>
      <input placeholder="Input" value={value} onChange={onChange} ref={ref} />
      <button type="submit">등록</button>
    </form>
  )
}

export default TodoInput
