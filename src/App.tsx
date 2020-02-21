import React from 'react'
import TodoList from './components/TodoList'
import TodoInput from './components/TodoInput'
import { RootState } from './modules'
import { useSelector } from 'react-redux'

function App() {
  const { isLoading } = useSelector((state: RootState) => state.todos)

  return (
    <>
      <TodoInput></TodoInput>
      {isLoading && <div>loading...</div>}
      <TodoList></TodoList>
    </>
  )
}

export default App
