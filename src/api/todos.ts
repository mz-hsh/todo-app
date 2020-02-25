import firebase from '../firebase'

const collectionPath = 'todos'
const db = firebase.firestore()

export interface Todo {
  id: string
  data: TodoData
}

export interface TodoData {
  text: string
  done: boolean
  createdAt?: number
}

export const onSnapshot = (
  onNext: (todos: Todo[]) => void,
  onError?: (error: Error) => void,
) => {
  return db
    .collection(collectionPath)
    .orderBy('createdAt')
    .onSnapshot(querySnapshot => {
      const todos = querySnapshot.docs.map(
        (doc): Todo => {
          const data = doc.data()
          return {
            id: doc.id,
            data: {
              text: data.text,
              done: data.done,
              createdAt: data.createdAt && data.createdAt.toMillis(),
            },
          }
        },
      )
      onNext(todos)
    }, onError)
}

export const addTodo = async (data: TodoData): Promise<string> => {
  const { id } = await db.collection(collectionPath).add({
    ...data,
    createdAt: firebase.firestore.FieldValue.serverTimestamp(),
  })
  return id
}

export const updateTodo = async (id: string, data: TodoData): Promise<void> => {
  return db.doc(`${collectionPath}/${id}`).update(data)
}

export const deleteTodo = async (id: string): Promise<void> => {
  return db.doc(`${collectionPath}/${id}`).delete()
}

export default {
  addTodo,
  updateTodo,
  deleteTodo,
}
