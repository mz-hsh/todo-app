import { useDispatch } from 'react-redux'
import { useCallback } from 'react'
import { AppDispatch } from '..'
import { deleteTodo } from '../modules/todos'

export default function useDeleteTodo(id: string) {
  const dispatch = useDispatch<AppDispatch>()
  return useCallback(() => dispatch(deleteTodo(id)), [dispatch, id])
}
