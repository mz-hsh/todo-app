import {
  AppBar,
  Backdrop,
  CircularProgress,
  Container,
  CssBaseline,
  Toolbar,
  Typography,
  makeStyles,
} from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'
import { RootState } from './modules'

const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  content: {
    // backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
}))

function App() {
  const classes = useStyles()
  const { isLoading } = useSelector((state: RootState) => state.todos)

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Todo</Typography>
        </Toolbar>
      </AppBar>
      <main className={classes.content}>
        <Container maxWidth="xs">
          <CssBaseline />
          <TodoInput></TodoInput>
          <TodoList></TodoList>
          <Backdrop open={isLoading} invisible={true}>
            <CircularProgress />
          </Backdrop>
        </Container>
      </main>
    </>
  )
}

export default App
