import { List } from '@material-ui/core'
import React from 'react'
import useTodos from '../hooks/useTodos'
import TodoItem from './TodoItem'

function TodoList() {
  const { todos } = useTodos()

  return (
    <List>
      {todos.map(todo => (
        <TodoItem todo={todo} key={todo.id} />
      ))}
    </List>
  )
}

export default TodoList
