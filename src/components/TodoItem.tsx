import React from 'react'
import { Todo } from '../api/todos'
import useToggleTodo from '../hooks/useToggleTodo'

type TodoItemProps = {
  todo: Todo
}

function TodoItem({ todo }: TodoItemProps) {
  const toggleTodo = useToggleTodo(todo.id)
  const { data } = todo

  return (
    <li onClick={toggleTodo}>
      {data.text} / {data.done ? <span>O</span> : <span>X</span>} /{' '}
      {data.createdAt}
    </li>
  )
}

export default TodoItem
