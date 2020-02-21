import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Todo, TodoData, add, update } from '../api/todos'
import { AppThunk } from '..'

interface TodosState {
  todos: Todo[]
  isLoading: boolean
  todo?: Todo
  error?: Error
}

const initialState: TodosState = {
  todos: [],
  isLoading: false,
  todo: undefined,
  error: undefined,
}

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload
    },
    setTodos: (state, action: PayloadAction<Todo[]>) => {
      state.todos = action.payload
    },
    setError: (state, action: PayloadAction<Error>) => {
      state.error = action.payload
    },
  },
})

export const addTodo = (data: TodoData): AppThunk => async dispatch => {
  try {
    dispatch(setLoading(true))
    await add(data)
  } catch (error) {
    dispatch(setError(error))
  } finally {
    dispatch(setLoading(false))
  }
}

export const toggleTodo = (id: string): AppThunk => async (
  dispatch,
  getState,
) => {
  const todos = getState().todos.todos
  const todo = todos.find(todo => todo.id === id)
  if (todo) {
    try {
      dispatch(setLoading(true))
      const data = todo.data
      await update(id, { text: data.text, done: !data.done })
    } catch (error) {
      dispatch(setError(error))
    } finally {
      dispatch(setLoading(false))
    }
  }
  // await add(data)
}

// export const { addTodo, toggleTodo, setTodos } = todosSlice.actions
export const { setTodos, setLoading, setError } = todosSlice.actions

export default todosSlice.reducer
