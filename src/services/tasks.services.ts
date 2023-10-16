import {iTask} from "../interfaces"
import {firebaseApp} from "../server"

import {collection, doc, addDoc, getDocs, updateDoc, deleteDoc, getFirestore} from "firebase/firestore/lite"

const createTaskService = async (taskData: iTask, userId: string, username: string) => {
  try {
    const db = getFirestore(firebaseApp)
    const now = new Date()
    const taskRef = await addDoc(collection(db, "tasks"), {
      ...taskData,
      owner: {
        user_id: userId,
        username: username,
      },
      created_at: now.toISOString(),
    })

    const task = {
      id: taskRef.id,
      ...taskData,
      owner: {
        user_id: userId,
        username: username,
      },
      created_at: now.toISOString(),
    }

    return [task, 201]
  } catch (error) {
    return [{message: error}, 400]
  }
}

const listTasksService = async () => {
  try {
    const db = getFirestore(firebaseApp)
    const taskCollection = collection(db, "tasks")
    const taskSnapshot = await getDocs(taskCollection)
    const tasks = taskSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }))
    return [tasks, 200]
  } catch (error) {
    return [{message: error}, 400]
  }
}

const updateTaskService = async (id: string, taskData: any) => {
  try {
    const db = getFirestore(firebaseApp)
    const taskRef = doc(db, "tasks", id)
    await updateDoc(taskRef, taskData)
    const updatedTask = { id, ...taskData }
    return [updatedTask, 200]
  } catch (error) {
    return [{message: error}, 400]
  }
}

const deleteTaskService = async (id: string) => {
  const db = getFirestore(firebaseApp)

  try {
    const taskRef = doc(db, "tasks", id)
    await deleteDoc(taskRef)
    return [{message: "Tarefa excluída com sucesso!"}, 204]
  } catch (_error) {
    return [{message: "Erro ao excluir a tarefa!"}, 400]
  }
}

export {createTaskService, listTasksService, updateTaskService, deleteTaskService}