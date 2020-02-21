import { useDispatch } from 'react-redux'
import { useCallback } from 'react'
import { AppDispatch } from '..'
import { toggleTodo } from '../modules/todos'

export default function useToggleTodo(id: string) {
  const dispatch = useDispatch<AppDispatch>()
  return useCallback(() => dispatch(toggleTodo(id)), [dispatch, id])
}
