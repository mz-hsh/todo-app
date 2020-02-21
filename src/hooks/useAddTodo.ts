import { addTodo } from '../modules/todos'
import { useCallback } from 'react'
import { AppDispatch } from '..'
import { useDispatch } from 'react-redux'

export default function useAddTodo() {
  const dispatch = useDispatch<AppDispatch>()
  return useCallback(
    (text: string) => {
      console.log(text)
      dispatch(addTodo({ text, done: false }))
    },
    [dispatch],
  )
}
