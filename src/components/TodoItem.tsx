import React from 'react'
import { Todo } from '../api/todos'
import useToggleTodo from '../hooks/useToggleTodo'
import useDeleteTodo from '../hooks/useDeleteTodo'
import {
  ListItem,
  ListItemText,
  Checkbox,
  ListItemIcon,
  ListItemSecondaryAction,
  IconButton,
} from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'

type TodoItemProps = {
  todo: Todo
}

function TodoItem({ todo }: TodoItemProps) {
  const toggleTodo = useToggleTodo(todo.id)
  const deleteTodo = useDeleteTodo(todo.id)
  const { data } = todo

  return (
    <ListItem onClick={toggleTodo} button>
      <ListItemIcon>
        <Checkbox checked={data.done}></Checkbox>
      </ListItemIcon>
      <ListItemText primary={data.text}></ListItemText>
      <ListItemSecondaryAction>
        <IconButton onClick={deleteTodo}>
          <DeleteIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  )
}

export default TodoItem
