import { useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../modules'
import { onSnapshot } from '../api/todos'
import { setTodos, setLoading } from '../modules/todos'
import { AppDispatch } from '..'

export default function useTodos() {
  const dispatch = useDispatch<AppDispatch>()
  const todos = useSelector((state: RootState) => state.todos)
  const isLoaded = useRef(false)

  useEffect(() => {
    dispatch(setLoading(true))
    const unsubscribe = onSnapshot(todos => {
      dispatch(setTodos(todos))
      if (!isLoaded.current) {
        isLoaded.current = true
        dispatch(setLoading(false))
      }
    })
    return unsubscribe
  }, [dispatch])

  return todos
}
