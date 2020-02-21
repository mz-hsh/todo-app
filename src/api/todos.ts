import firebase from '../firebase'

const db = firebase.firestore()
const collectionPath = 'todos'

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
      console.log(querySnapshot)
      // if (querySnapshot.metadata.hasPendingWrites) return
      const todos = querySnapshot.docs.map(
        (doc): Todo => {
          const data = doc.data()
          console.log(data)
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

export const add = async (data: TodoData): Promise<string> => {
  const { id } = await db.collection(collectionPath).add({
    ...data,
    createdAt: firebase.firestore.FieldValue.serverTimestamp(),
  })
  return id
}

export const update = async (id: string, data: TodoData): Promise<void> => {
  return db.doc(`${collectionPath}/${id}`).update(data)
}
