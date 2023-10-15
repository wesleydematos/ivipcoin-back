import {iTask} from "../interfaces"
import {firebaseApp} from "../server"

import {collection, addDoc, getFirestore} from 'firebase/firestore/lite'

const createTaskService = async (taskData: iTask, userId: string, username: string) => {
    const db = getFirestore(firebaseApp)

    try {
      const now = new Date()

      const taskRef = await addDoc(collection(db, 'tasks'), {
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
  };

  export {createTaskService}